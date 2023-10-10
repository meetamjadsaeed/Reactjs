import React, { useState } from "react";

import { Button, Col, Input, Row } from "antd";
import { Content } from "antd/es/layout/layout";

import FieldError from "../ReUse/errorsUI/FieldError";
import LoaderForButton from "../ReUse/LoaderForButton";
import ReUse from "../../services/helpers/reUse";
import GlobalButton from "../ReUse/Components/button";

const LayoutBody = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [allErrors, setAllErrors] = useState({
    Celo: "",
    cUSD: "",
  });

  const [fieldsData, setFieldsData] = useState({
    Celo: "435.32001",
    cUSD: "",
  });

  const handleChange = async (e) => {
    const resetErrors = ReUse.resetErrors({ fields: allErrors });
    setAllErrors(resetErrors);
    await ReUse.getInputFieldsData({
      e: e,
      setFieldsData: setFieldsData,
      fieldsData: fieldsData,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { Celo, cUSD } = fieldsData;

      const fields = {
        Celo,
        cUSD,
      };
      const allErrors = ReUse.validateRequired({ fields });

      // Check if there are any errors
      if (Object.keys(allErrors).length > 0) {
        setAllErrors(allErrors);
        setLoading(false);
        return;
      }

      // Check if inputs are numbers and not negative numbers
      for (const [key, value] of Object.entries(fields)) {
        if (isNaN(value) || value < 0) {
          allErrors[key] = `${key} must be a non-negative number`;
          setLoading(false);
          setAllErrors(allErrors);
          return;
        }
      }

      setStatusMessage("success");
      setTimeout(() => {
        setStatusMessage("Navigating...");
        setTimeout(() => {
          setStatusMessage("");
        }, 1000);
      }, 4000);

      ReUse.resetErrors({ fields: allErrors });
      ReUse.resetForm({ fields: fieldsData });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setStatusMessage("");
    }
  };

  return (
    <Content style={{ marginTop: "10px" }}>
      <Row gutter={80}>
        <Col xs={24} sm={12} className="left-column">
          <h1 className="main__heading">
            The Most User-Friendly{" "}
            <span className="sub__heading">Token Swap App </span>is Here
          </h1>
          <p className="content">
            Do you find yourself constantly navigating through a labyrinth of
            complicated token exchanges and sluggish trade speeds? Say goodbye
            to the hassle and hello to a better trading experience with
            swiftswap.
          </p>
        </Col>
        <Col xs={24} sm={12} className="right-column">
          <div className="form-container">
            <form>
              <div className="swap__group">
                <Row justify="space-between" align="middle">
                  <Col>
                    <p className="swap__field__label">Celo</p>
                  </Col>
                  <Col>
                    <GlobalButton
                      width="80px"
                      padding="7.65px 9.56px 7.65px 9.56px"
                      height="36px"
                      borderRadius="23.91px"
                      fontSize="9.56px"
                    >
                      Change
                    </GlobalButton>
                  </Col>
                </Row>
                <Input
                  className="swap__field"
                  placeholder=""
                  name="Celo"
                  onChange={handleChange}
                  value={fieldsData?.Celo}
                />
                <FieldError fieldName={allErrors?.Celo} />
              </div>
              <div className="swap__group">
                <Row justify="space-between" align="middle">
                  <Col>
                    <p className="swap__field__label">cUSD</p>
                  </Col>
                  <Col>
                    <GlobalButton
                      width="80px"
                      padding="7.65px 9.56px 7.65px 9.56px"
                      height="36px"
                      borderRadius="23.91px"
                      fontSize="9.56px"
                      bgColor="#FFFFFF"
                      color="#12141D"
                      margin="0 20px 0px 0px"
                    >
                      Gas Price
                    </GlobalButton>
                    <GlobalButton
                      width="80px"
                      padding="7.65px 9.56px 7.65px 9.56px"
                      height="36px"
                      borderRadius="23.91px"
                      fontSize="9.56px"
                    >
                      Change
                    </GlobalButton>
                  </Col>
                </Row>
                <Input
                  className="swap__field"
                  placeholder=""
                  name="cUSD"
                  onChange={handleChange}
                  value={fieldsData?.cUSD}
                />
                <FieldError fieldName={allErrors?.cUSD} />
              </div>
              <p className="swap__fee">Estimated Gas fee: 0.20$</p>

              <GlobalButton
                width="-webkit-fill-available"
                padding="6px, 20px, 16px, 20px"
                loading={loading}
                onClick={onSubmitHandler}
                statusMessage={statusMessage}
              >
                Swap
              </GlobalButton>
            </form>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default LayoutBody;
