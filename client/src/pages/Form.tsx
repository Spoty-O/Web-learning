import React, { useState } from "react";
import "../styles/Form.css";
import User from "../components/User";
import { CreationUserAttributes } from "../types/UserTypes";
import { API } from "../services/APIService";

const Form = () => {
  const [createUser] = API.useCreateUserMutation();
  const [formData, setFormData] = useState<CreationUserAttributes>({
    email: "",
    login: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUser(formData);
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handler}>
            <input
              name="email"
              type="text"
              placeholder="email"
              onChange={handleChange}
            />
            <input
              name="login"
              type="text"
              placeholder="login"
              onChange={handleChange}
            />
            <input
              name="password"
              type="text"
              placeholder="password"
              onChange={handleChange}
            />
            <input type="submit" className="button" value="Надіслати" />
            <input type="reset" className="button" value="Сбросити" />
          </form>
        </div>
      </div>
      <User />
    </div>
  );
};

export default Form;
