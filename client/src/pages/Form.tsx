import React from "react";
import '../styles/Form.css'

const Form = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" action="test" method="post">
          <input name="first_name" type="text" placeholder="Ім'я" />
          <input name="last_name" type="text" placeholder="Прізвище" />
          <p>
            <b>Виберіть дату народження:</b> <input name="date" type="date" />
          </p>
          <input type="submit" className="button" value="Надіслати" />
          <input type="reset" className="button" value="Сбросити" />
        </form>
      </div>
    </div>
  );
};

export default Form;
