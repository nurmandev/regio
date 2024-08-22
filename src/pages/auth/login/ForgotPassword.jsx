import React, { useState } from "react";
import DrawerModal from "../../../components/Modals/DrawerModal";
import { GiShoppingCart } from "react-icons/gi";
import TextInput from "../../../components/TextInput";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { TbReload } from "react-icons/tb";
import useAuth from "../../../hooks/auth";

function ForgotPassword() {
  const navigate = useNavigate();
  const { requestResetEmail } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    code: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <DrawerModal isRounded={true}>
      <div className="min-h-screen flex flex-col items-center md:justify-start justify-center">
        <div className=" w-full ">
          <div className="flex w-full gap-5 mb-6">
            <TbReload
              className="bg-white rounded-full p-2 border"
              size={40}
              onClick={() => navigate(-1)}
            />
            <button
              className={`flex items-center bg-primary text-white px-4 py-2 rounded-full focus:outline-none`}
            >
              <GiShoppingCart className="mr-2" />
              Passwort vergessen
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="E-Mail eingeben"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              iconComponent={
                <Button
                  className="p-1 rounded-full"
                  onClick={() => requestResetEmail({ email: formData.email })}
                  disabled={!formData.email}
                >
                  Code anfordern
                </Button>
              }
            />
            <TextInput
              label="Code eingeben"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
            <div className="flex items-center space-x-2">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                checked={formData.termsAccepted}
                name="termsAccepted"
                class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleChange}
              />

              <label className="text-sm">Passwort zurucksetzen</label>
            </div>
            <Button
              disabled={formData.code.length < 6}
              type="submit"
              className="w-full rounded-lg"
            >
              Code anmeldung
            </Button>
          </form>
        </div>
        <Link to="#" className="text-primary mt-4">
          Ich brauche Hilfe
        </Link>
        {/* <FaLocationDot className="text-primary z-20 absolute bottom-5 text-xl" /> */}
      </div>
    </DrawerModal>
  );
}

export default ForgotPassword;
