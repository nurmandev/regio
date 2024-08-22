import React, { useState } from "react";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import DrawerModal from "../../../components/Modals/DrawerModal";
import Button from "../../../components/Button";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useAuth from "../../../hooks/auth";

const Register = () => {
  const { register, login } = useAuth();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    language: "ENG",
    currency: "EUR",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: "",
    error: "",
  });
  const [tab, setTab] = useState("register");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setError({
      ...error,
      [name]: "",
    });
  };
  console.log(error);
  const validateForm = () => {
    let valid = true;
    const newError = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: "",
    };

    if (tab === "register") {
      if (!formData.firstname.trim()) {
        newError.firstname = "Vorname ist erforderlich";
        valid = false;
      }

      if (!formData.lastname.trim()) {
        newError.lastname = "Nachname ist erforderlich";
        valid = false;
      }

      if (!formData.confirmPassword) {
        newError.confirmPassword = "Passwortbestätigung ist erforderlich";
        valid = false;
      } else if (formData.confirmPassword !== formData.password) {
        newError.confirmPassword = "Passwörter stimmen nicht überein";
        valid = false;
      }
    }

    if (!formData.email.trim()) {
      newError.email = "E-Mail ist erforderlich";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "E-Mail ist ungültig";
      valid = false;
    }

    if (!formData.password) {
      newError.password = "Passwort ist erforderlich";
      valid = false;
    } else if (formData.password.length < 6) {
      newError.password = "Passwort muss mindestens 6 Zeichen lang sein";
      valid = false;
    }

    if (!formData.termsAccepted) {
      newError.termsAccepted = "AGB müssen akzeptiert werden";
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        if (tab === "register") {
          await register(formData);
          setTab("verification");
        } else {
          await login(formData);
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        setError((prev) => ({
          ...prev,
          error: error?.response?.data?.message?.error[0] || error.message,
        }));
        // Handle error response here
      } finally {
        setLoading(false);
      }
    }
  };

  const renderForm = () => {
    switch (tab) {
      case "register":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <TextInput
                label="Vorname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                error={error.firstname}
              />
              <TextInput
                label="Nachname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                error={error.lastname}
              />
            </div>
            <TextInput
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={error.email}
            />
            <TextInput
              label="Passwort erstellen"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={error.password}
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
              error={error.confirmPassword}
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
              {error.termsAccepted && (
                <div className="text-red-500 text-xs">
                  {error.termsAccepted}
                </div>
              )}
            </div>

            <Button
              isLoading={loading}
              type="submit"
              className="w-full rounded-lg"
              disabled={loading}
            >
              Registrieren
            </Button>
          </form>
        );
      case "login":
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="E-Mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={error.email}
            />
            <TextInput
              label="Passwort erstellen"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={error.password}
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
            <div className="flex items-center justify-between">
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

                <label htmlFor="default-checkbox" className="text-sm">
                  Angemeldet bleiben
                </label>

                {error.termsAccepted && (
                  <div className="text-red-500 text-xs">
                    {error.termsAccepted}
                  </div>
                )}
              </div>
              <Link to="/auth/forgot-password" className="text-primary">
                Passwort vergessen
              </Link>
            </div>
            <Button
              isLoading={loading}
              disabled={loading}
              type="submit"
              className="w-full rounded-lg"
            >
              Anmelden
            </Button>
          </form>
        );
      case "verification":
        return (
          <div className="flex flex-col justify-center items-center h-full space-y-4">
            <h2 className="text-xl font-semibold">
              Bestätigungs-E-Mail Gesendet
            </h2>
            <p className="text-center text-gray-600">
              Wir haben eine Bestätigungs-E-Mail an Ihre registrierte
              E-Mail-Adresse gesendet. Bitte überprüfen Sie Ihr Postfach und
              klicken Sie auf den Bestätigungslink, um Ihr Konto zu aktivieren.
            </p>
            <button
              className="text-primary font-medium hover:underline"
              onClick={() => setTab("login")}
            >
              Weiter zum Login
            </button>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <DrawerModal isRounded={true}>
      <div className="min-h-screen flex flex-col items-center md:justify-start justify-center">
        <div className=" w-full ">
          <div className="flex justify-around mb-6">
            <button
              onClick={() => setTab("register")}
              className={`flex items-center ${
                tab === "register"
                  ? "bg-primary text-white "
                  : "border border-gray-300 "
              }px-4 py-2 rounded-full focus:outline-none`}
            >
              <FaUserPlus className="mr-2" />
              Regestrieren
            </button>
            <button
              onClick={() => setTab("login")}
              className={`flex items-center px-4 py-2 rounded-full focus:outline-none ${
                tab === "login"
                  ? "bg-primary text-white "
                  : "border border-gray-300 "
              }`}
            >
              <FaSignInAlt className="mr-2" />
              Anmelden
            </button>
          </div>
          {renderForm()}
          {error.error && (
            <div className="text-red-500 text-xs">{error.error}</div>
          )}
        </div>
        <Link to="/auth/register-seller" className="text-primary mt-4">
          Als Verkaufer regestieren
        </Link>
        <FaLocationDot className="text-primary z-20 absolute bottom-5 text-xl" />
      </div>
    </DrawerModal>
  );
};

export default Register;
