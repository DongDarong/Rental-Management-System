import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Assuming you use React Router

// Import Modals
import LoadingModal from "../components/modals/LoadingModal";
import SuccessModal from "../components/modals/SuccessModal";
import ErrorModal from "../components/modals/ErrorModal";

function Login() {
  const navigate = useNavigate();

  // --- STATE ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Modal States
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // --- HANDLERS ---

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Basic Validation
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      setShowError(true);
      return;
    }

    setIsLoading(true);

    // 2. Simulate API Call / Authentication
    setTimeout(() => {
      setIsLoading(false);

      // Hardcoded check for demonstration
      if (email === "admin@mgmt.com" && password === "password123") {
        setShowSuccess(true);
        // Navigate after a brief success message
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to Dashboard
        }, 1500);
      } else {
        setErrorMessage("Invalid email or password. Try 'admin@mgmt.com' / 'password123'");
        setShowError(true);
      }
    }, 1500);
  };

  // Icons (No library needed)
  const EyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EyeSlashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      {/* --- LEFT SIDE: IMAGE & BRANDING (Hidden on mobile) --- */}
      <div className="hidden lg:flex w-1/2 bg-blue-900 relative items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Building"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        {/* Content */}
        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="mb-8">
            <span className="bg-blue-500 bg-opacity-20 border border-blue-400 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Admin Portal
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Manage your properties with ease.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Streamline tenant management, track payments, and generate financial reports all in one secure dashboard.
          </p>
          <div className="mt-8 flex gap-2">
            <div className="h-1 w-8 bg-white rounded-full"></div>
            <div className="h-1 w-8 bg-blue-500 rounded-full bg-opacity-50"></div>
            <div className="h-1 w-8 bg-blue-500 rounded-full bg-opacity-50"></div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl lg:shadow-none">
          
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
               </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-2">Please enter your details to sign in.</p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                   {showPassword ? EyeSlashIcon : EyeIcon}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-500/30 transition-all active:scale-95"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      <LoadingModal 
        isOpen={isLoading} 
        message="Authenticating..." 
      />
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Login Successful"
        message="Redirecting to your dashboard..."
      />
      
      <ErrorModal 
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Login Failed"
        message={errorMessage}
      />

    </div>
  );
}

export default Login;