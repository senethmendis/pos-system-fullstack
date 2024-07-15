import React from "react";
import Button from "./Button";
import { play } from "../assets/index";

const HeaderBar = () => {
  return (
    <header>
      <h1>POS 24</h1>
      <input type="search" />
      <div>
        <Button
          text="Register Customer"
          icon={play}
          isIcon
          color="bg-primary-light-green"
        />
      </div>
    </header>
  );
};

export default HeaderBar;
