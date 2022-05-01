import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HeaderIcons from "./HeaderIcons";

const Information = () => {
  let items = [
    {
      Icon: HelpOutlineOutlinedIcon,
      text1: "HELP CENTER",
      text2: "Guide To Customer Care",
    },
    {
      Icon: SettingsBackupRestoreIcon,
      text1: "EASY RETURN",
      text2: "Quck Refund",
    },
    {
      Icon: SellIcon,
      text1: "SELL ON JUMIA",
      text2: "Millions Of Vistors",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <span key={item.text1}>
          <HeaderIcons Icon={item.Icon} text1={item.text1} text2={item.text2} />
        </span>
      ))}
    </>
  );
};

export default Information;
