import Joi from "joi";
// import tldjs from "tldjs";
import Button from "../../components/button";
import useApp from "../../hooks/useApp";
import "./style.css";
import { useState } from "react";

function YourInfo() {
  const { handleNext, formData, handleChange } = useApp();

  const schema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "The field is required",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.empty": "The field is required",
      }),
    number: Joi.string()
      .pattern(new RegExp(/^\d{10}$/))
      .required()
      .messages({
        "string.pattern.base": "Invalid phone number format",
        "string.empty": "The field is required",
      }),
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const result = schema.validate(formData, { abortEarly: false });
    if (!result.error) return null;

    const newErrors = {};
    for (let item of result.error.details) {
      newErrors[item.path[0]] = item.message;
    }
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors || {});
    if (newErrors) return;
    alert(formData);
    handleNext();
  }
  return (
    <form className="info-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Personal Info</h2>
      <p className="form-text">
        Please provide your name, email address and phone number
      </p>
      <div className="form-section">
        <div className="label-wrap">
          <label>Name</label>
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="e.g Stephen King"
        />
      </div>

      <div className="form-section">
        <div className="label-wrap">
          <label>Email</label>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="text"
          placeholder="e.g stephenking@lorem.com"
        />
      </div>

      <div className="form-section">
        <div className="label-wrap">
          <label>Phone Number</label>
          {errors.number && <div className="error">{errors.number}</div>}
        </div>
        <input
          type="text"
          name="number"
          placeholder="e.g +1234 5678"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <Button />
    </form>
  );
}

export default YourInfo;
