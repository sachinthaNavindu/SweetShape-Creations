import { useState } from "react";
import SignInForm from "../../components/specific/SigninForm";
import SignUpForm from "../../components/specific/SignupForm";
import ForgotPasswordForm from "../../components/specific/ForgotPasswordForm";
import SocialAuth from "../../components/specific/SocialAuth";

type AuthView = "signin" | "signup" | "forgot-password";

const Auth = () => {
  const [currentView, setCurrentView] = useState<AuthView>("signin");

  const getHeaderContent = () => {
    switch (currentView) {
      case "signin":
        return {
          title: "Welcome back",
          subtitle: "Please enter your details to sign in"
        };
      case "signup":
        return {
          title: "Create an account",
          subtitle: "Join us and start your baking journey"
        };
      case "forgot-password":
        return {
          title: "Reset password",
          subtitle: "We'll send you a link to reset your password"
        };
    }
  };

  const header = getHeaderContent();

  return (
    <div className="min-h-screen bg-linear-to-tr from-slate-50 via-white to-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,transparent,black)] opacity-40"></div>

      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-linear-to-tr from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200">
                <span className="text-3xl font-bold text-white">SC</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {header.title}
            </h2>
            <p className="text-gray-500">
              {header.subtitle}
            </p>
          </div>

          {currentView === "signin" && (
            <SignInForm
              onForgotPassword={() => setCurrentView("forgot-password")}
              onSignUp={() => setCurrentView("signup")}
            />
          )}

          {currentView === "signup" && (
            <SignUpForm onSignIn={() => setCurrentView("signin")} />
          )}

          {currentView === "forgot-password" && (
            <ForgotPasswordForm onBackToSignIn={() => setCurrentView("signin")} />
          )}

          {currentView !== "forgot-password" && <SocialAuth />}

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Protected by reCAPTCHA and subject to the SweetShape Creations
              <a href="#" className="text-gray-500 hover:text-gray-700 mx-1">
                Privacy Policy
              </a>
              and
              <a href="#" className="text-gray-500 hover:text-gray-700 ml-1">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Auth;