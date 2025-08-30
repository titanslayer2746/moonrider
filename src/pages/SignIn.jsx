import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn, useAuth } from "@clerk/clerk-react";
import {
  Eye,
  EyeOff,
  Github,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, isLoaded } = useSignIn();
  const { isSignedIn } = useAuth();

  // Show loading while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6661fd] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect if already signed in
  if (isSignedIn) {
    navigate("/dashboard");
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    setIsLoading(true);
    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      if (result.status === "complete") {
        await signIn.setActive({ session: result.createdSessionId });
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error signing in:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
      });
    } catch (err) {
      console.error("Error signing in with Google:", err);
    }
  };

  return (
    <div className="w-screen h-screen flex bg-gray-50">
      <div className="flex flex-col md:flex-row w-full h-full bg-white shadow-2xl overflow-hidden">
        {/* Left Panel - Branding */}
        <div className="flex-none w-full md:w-[45%] bg-[#6661fd] relative flex flex-col justify-between p-6 md:p-12 text-white">
          {/* Diagonal border effect - hidden on mobile */}
          <div className="hidden md:block absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-[#6661fd] border-b-[100vh] border-b-transparent z-10"></div>

          <div className="text-center mt-4 md:mt-8 z-20 relative">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mb-6 md:mb-8 backdrop-blur-sm border border-white/30">
              <div className="text-xl md:text-2xl font-bold text-white">M</div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-wider mb-4">
              BASE
            </h1>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 mb-6 md:mb-8 z-20 relative">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <Github size={18} className="md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <Twitter size={18} className="md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <Linkedin size={18} className="md:w-5 md:h-5" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Right Panel - Sign In Form */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-lg">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Sign In
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Sign in to your account
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Social Sign-in Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={!isLoaded || isLoading}
                  className="button google flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  {isLoading ? "Signing in..." : "Sign in with Google"}
                </button>

                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-lg"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Sign in with Apple
                </button>
              </div>

              <div className="relative text-center my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-50 text-gray-500">or</span>
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl text-base bg-white text-gray-900 transition-colors duration-300 focus:outline-none focus:border-[#6661fd] focus:ring-4 focus:ring-[#6661fd]/10"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-xl text-base bg-white text-gray-900 transition-colors duration-300 focus:outline-none focus:border-[#6661fd] focus:ring-4 focus:ring-[#6661fd]/10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-[#6661fd] hover:bg-[#6661fd]/10 rounded-lg transition-all duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <a
                  href="#"
                  className="text-sm font-medium text-[#6661fd] hover:text-[#5a52e0] hover:underline transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={!isLoaded || isLoading}
                className="w-full py-4 bg-[#6661fd] text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#5a52e0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="text-center mt-10">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <a
                  href="/sign-up"
                  className="font-semibold text-[#6661fd] hover:text-[#5a52e0] hover:underline transition-colors duration-200"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
