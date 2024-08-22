import React, { useState } from "react";
import DrawerModal from "../../../components/Modals/DrawerModal";
import { GiShoppingCart } from "react-icons/gi";
import TextInput from "../../../components/TextInput";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { IoMdArrowBack } from "react-icons/io";
import useAuth from "../../../hooks/auth";

function Seller() {
  const navigate = useNavigate();
  const { registerSeller } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      setLoading(true);
      await registerSeller(formData);
    } catch (error) {
      setError("Enter valid information");
    } finally {
      setLoading(false);
    }
  };
  return (
    <DrawerModal isRounded={true}>
      <div className="min-h-screen flex flex-col items-center md:justify-start justify-center">
        <div className=" w-full ">
          <div className="flex w-full gap-5 mb-6">
            <IoMdArrowBack
              className="bg-white rounded-full p-2 border"
              size={40}
              onClick={() => navigate(-1)}
            />
            <button
              className={`flex items-center bg-primary text-white px-4 py-2 rounded-full focus:outline-none`}
            >
              <GiShoppingCart className="mr-2" />
              Verkauferkonto
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <TextInput
                label="Vorname"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextInput
                label="Nachname"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <TextInput
                label="Firmenname"
                name="comanyName"
                value={formData.comanyName}
                onChange={handleChange}
              />
              <TextInput
                label="Geschaftsfuhrer"
                name="business"
                value={formData.business}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <TextInput
                label="Strabe"
                name="street"
                value={formData.street}
                onChange={handleChange}
              />
              <TextInput
                label="Hausnummer"
                name="houseNumbet"
                value={formData.houseNumbet}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <TextInput
                label="Postleitzahi"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
              <TextInput
                label="Ort"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <TextInput
                label="Land"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              <TextInput
                label="Umsatzsteuer Id."
                name="tax"
                value={formData.tax}
                onChange={handleChange}
              />
            </div>
            <div className="flex space-x-4">
              <TextInput
                label="Vorname"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <TextInput
                label="Nachname"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <TextInput
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextInput
              label="Passwort erstellen"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              iconComponent={
                showPassword ? (
                  <IoEyeOffOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              }
            />
            <TextInput
              label="Passwort wiederholen"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              iconComponent={
                showConfirmPassword ? (
                  <IoEyeOffOutline
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  />
                ) : (
                  <IoEyeOutline
                    onClick={() => setShowConfirmPassword(!showPassword)}
                  />
                )
              }
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

              <label className="text-sm">
                Ich akzeptiere die{" "}
                <Link to="#" className="underline font-medium">
                  AGB
                </Link>
              </label>
            </div>
            <Button
              isLoading={loading}
              disabled={loading}
              type="submit"
              className="w-full rounded-lg"
            >
              Registrieren
            </Button>
            {error && <div className="text-red-500 text-xs">{error}</div>}
          </form>
        </div>
        <Link to="#" className="text-primary mt-4">
          Preisgestaltung
        </Link>
        {/* <FaLocationDot className="text-primary z-20 absolute bottom-5 text-xl" /> */}
      </div>
    </DrawerModal>
  );
}

export default Seller;
