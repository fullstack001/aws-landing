import React, { useState, useEffect, useRef } from "react";

import { Link as Lnk } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";

import logo_icon from "../../../assets/icons/logo.svg";
// import ForgotPasswordModal from "./ForgotPasswordModal";

const apiPort = process.env.REACT_APP_API_PORT;
const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Login = () => {
  const from = new URLSearchParams(window.location.search).get("from");

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [captchaToken, setCaptchaToken] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showFogotPasswordModal, setShowFogotPasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load stored credentials if "Remember Me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedEmail && savedPassword) {
      setFormData({ email: savedEmail, password: savedPassword });
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle "Remember Me" checkbox
  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token || "");
  };
  console.log(rememberMe);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return; // Prevent multiple submissions
    setLoading(true);

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      const response = await axios.post(`${apiPort}/api/auth/login`, {
        ...formData,
        captchaToken,
      });

      const { token, user, subscription } = response.data;
      let role = user.role;
      // Save token to localStorage (or cookie)
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", user.email);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("paidUser", user.isActive);
      localStorage.setItem("ayrshareRefId", user.ayrshareRefId);

      // Store credentials if "Remember Me" is checked, otherwise remove them
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", formData.email);
        localStorage.setItem("rememberedPassword", formData.password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      if (role === "superAdmin" || role === "admin" || role === "editor") {
        navigate("/creator");
      } else if (role === "user") {
        navigate("/profile");
      }
    } catch (error) {
      toast.error(
        <div className="custom-toast flex">
         
          <div className="mt-4">{"Login failed. Please try again."}</div>
        </div>,
        {
          className: "error-toast",
          autoClose: 3000,
          hideProgressBar: true,
        }
      );
      setCaptchaToken("");
      recaptchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  const successResetRequest = () => {
    console.log("SUCCESS!!!!!!");
    toast.success(
      <div className="custom-toast flex">
        
        <div className="mt-4">
          Reset password request sent successfully. Please check your email.
        </div>
      </div>,
      {
        autoClose: 3000,
        hideProgressBar: true,
      }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 ">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo_icon} alt="Logo" className="mx-auto h-20 w-auto" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-400">Login into your account</p>
        </div>

        {/* <div className="flex justify-center space-x-4">
          <button className="w-1/2 py-2 px-4 bg-white text-gray-900 rounded-md flex items-center justify-center space-x-2">
            <FcGoogle className="text-2xl" />
            <span>Google</span>
          </button>
          <button className="w-1/2 py-2 px-4 bg-white text-gray-900 rounded-md flex items-center justify-center space-x-2">
            <FaFacebook className="rounded-full text-blue-500 text-2xl" />
            <span>Facebook</span>
          </button>
        </div> */}

        <div className="flex items-center justify-between">
          <hr className="w-20 border-gray-600" />
          <span className="mx-4 text-gray-400">Or continue with</span>
          <hr className="w-20 border-gray-600" />
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md w-full px-3 py-2 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md w-full px-3 py-2 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span className="ml-2">Remember me</span>
            </label>
            <div
              onClick={() => setShowFogotPasswordModal(true)}
              className="text-sm text-red-500 hover:underline cursor-pointer"
            >
              Recover Password
            </div>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY || ""}
            onChange={handleCaptchaChange}
          />

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "Logging ..." : "Log In"}
            </button>
          </div>
        </form>

        {/* <div className="text-center text-gray-400">
          <p>
            Don't have an account?{" "}
            <Lnk to="/signup" className="text-blue-500 hover:underline">
              Sign up!
            </Lnk>
          </p>
        </div> */}
      </div>
      {/* {showFogotPasswordModal && (
        <ForgotPasswordModal
          handleSuccessSend={successResetRequest}
          show={showFogotPasswordModal}
          handleClose={() => setShowFogotPasswordModal(false)}
        />
      )} */}
    </div>
  );
};

export default Login;
