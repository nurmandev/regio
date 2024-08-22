import React from "react";
import DrawerModal2 from "../../../components/Modals/DrawerModal2";

function Settings() {
  return (
    <DrawerModal2
      left={"h-4/5 md:h-full md:left-[43rem] right-0"}
      isRounded={
        "rounded-tl-lg rounded-tr-lg md:rounded-tl-none md:rounded-tr-none"
      }
    >
      <div>Settings</div>
    </DrawerModal2>
  );
}

export default Settings;
