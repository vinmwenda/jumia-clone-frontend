import React from "react";
import "./account.css";
import { AccountBtn } from "./Login";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="accountContainer">
      <div className="headerText">Create your Jumia account</div>
      <div className="m-4">
        Create your Jumia customer account in just a few clicks! You can
        register either using your e-mail address or through your Facebook
        account.
      </div>
      <Link to="/account/create">
        <AccountBtn
          Icon={LocalPostOfficeIcon}
          text="CREATE AN ACCOUNT VIA E-MAIL"
          bgColor="orange"
        />
      </Link>

      <AccountBtn
        Icon={LocalPostOfficeIcon}
        text="REGISTER WITH FACEBOOK"
        bgColor="blue"
      />
    </div>
  );
};

export default Register;
