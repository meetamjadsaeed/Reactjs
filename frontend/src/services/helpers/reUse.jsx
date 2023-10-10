class ReUse {
  static resetForm = ({ fields = {} }) => {
    /**
     *  // fields is object
     *
     * Like fields = {
     * name: string
     * .....
     * }
     */

    const reset = Object.entries(fields).forEach(([key, value]) => {
      fields[key] = "";
    });
    return reset;
  };

  static resetErrors = ({ fields = {} }) => {
    /**
     *  // fields is object
     *
     * Like fields = {
     * name: string
     * .....
     * }
     */
    const reset = Object.entries(fields).forEach(([key, value]) => {
      fields[key] = "";
    });
    return reset;
  };

  static validateRequired = ({ fields }) => {
    /**
     *
     * fields is object
     * example
     * 		const fields = {
     * 				email: "",
     * 				password: "",
     * 				// Add more fields as needed
     * 				};
     */

    const errors = {};

    for (const field in fields) {
      if (!fields[field]) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      } else if (field?.toLowerCase() === "email") {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegExp.test(fields[field])) {
          errors[field] = "Please enter a valid email";
        }
      } else if (field?.toLowerCase() === "password") {
        if (fields[field].length < 6) {
          errors[field] = "Password must be at least 6 characters long";
        }
      } else if (
        field?.toLowerCase() === "phone" ||
        field?.toLowerCase() === "cellphone" ||
        field?.toLowerCase() === "cell_phone"
      ) {
        if (fields[field]?.length < 11) {
          errors[field] = "Phone number must be at least 11 digits long";
        }
        const phoneRegExp =
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        // (123) 456-7890
        // (123)456-7890
        // 123-456-7890
        // 123.456.7890
        // 1234567890
        // +31636363634
        // 075-63546725
        if (!phoneRegExp.test(fields[field])) {
          errors[field] = "Please enter a valid number";
        }
      }
    }

    return errors;
  };

  static getInputFieldsData = ({ e, setFieldsData, fieldsData }) => {
    try {
      const { value, name } = e.target;

      if (!name || typeof value === "undefined") {
        setFieldsData({});
      }

      const updatedFieldsData = {
        ...fieldsData,
        [name]: value,
      };

      setFieldsData(updatedFieldsData);
    } catch (error) {
      console.error("Error updating fields data:", error);
      setFieldsData({});
    }
  };
}

export default ReUse;
