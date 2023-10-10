import React from "react";
import ReUse from "../../services/helpers/reUse";

import "./style.css";

const ErrorsUi = ({ allErrors = {} }) => {
  /**
   * allErrors is object
   *
   * like
   * allErrors = {
   * category:"message"
   * .....
   * }
   *
   */

  const isValueEmpty = ReUse.isValueEmpty({ object: allErrors });

  const generateId = ReUse.makeId();

  return (
    <>
      {isValueEmpty ? (
        <div className="errors_container">
          <div className="errors_row">
            {Object.entries(allErrors).map(([key, value]) => {
              return value ? (
                <div key={generateId} className={`errors_col animate `}>
                  {value}
                </div>
              ) : null;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ErrorsUi;
