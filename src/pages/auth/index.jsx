import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthImage from "../../assets/auth.jpg";
import Select from "../../components/auth/Select";
import { BsThreeDots } from "react-icons/bs";
import OptionModel from "../../components/Modals/OptionModal";

function Auth() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="flex z-20 items-center justify-between md:justify-end gap-5 absolute top-5 left-5 md:left-auto right-5">
        {/* <BsThreeDots
          className="bg-white rounded-full p-2 border"
          size={42}
          onClick={() => setShowModel(true)}
        /> */}
        <OptionModel
          isOpen={showModel}
          onClose={() => setShowModel(false)}
          button={
            <BsThreeDots
              className="bg-white rounded-full p-2 border"
              size={42}
              onClick={() => setShowModel(true)}
            />
          }
        >
          <div>options</div>
          <div>options</div>
          <div>options</div>
        </OptionModel>
        <div className="flex items-center gap-5 ">
          <Select />
          <Select />
        </div>
      </div>
      <div className="translate-x-1/3 hidden md:block ">
        <div className="text-4xl font-bold text-white">Das ist Regio.</div>
        <div className="text-xl font-bold text-white mb-2">
          Frisch, gesund und gunstig in deiner nahe
        </div>
        <img
          src={AuthImage}
          className="w-full h-full bg-white p-1 rounded-md"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default Auth;
