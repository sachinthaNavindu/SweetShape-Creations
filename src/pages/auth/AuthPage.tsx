import { useState } from "react";
import SignInForm from "../../components/specific/SigninForm";
import SignUpForm from "../../components/specific/SignupForm";
import ForgotPasswordForm from "../../components/specific/ForgotPasswordForm";

type AuthView = "signin" | "signup" | "forgot";

const AuthPage = () => {
  const [view, setView] = useState<AuthView>("signin");

  return (
    <div className="min-h-screen bg-linear-to-tr from-slate-50 via-white to-rose-50 relative overflow-hidden">
      
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-rose-300 rounded-full blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300 rounded-full blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative flex items-center justify-center px-4 py-20">
        <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100">

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {view === "signin" && "Welcome back"}
              {view === "signup" && "Create account"}
              {view === "forgot" && "Reset password"}
            </h2>

            <p className="text-gray-500">
              {view === "signin" && "Please enter your details to sign in"}
              {view === "signup" && "Create your new account"}
              {view === "forgot" && "Enter your email to reset password"}
            </p>
          </div>

          {view === "signin" && (
            <SignInForm
              onForgotPassword={() => setView("forgot")}
              onSignUp={() => setView("signup")}
            />
          )}

          {view === "signup" && (
            <SignUpForm
              onSignIn={() => setView("signin")}
            />
          )}

          {view === "forgot" && (
            <ForgotPasswordForm
              onBackToSignIn={() => setView("signin")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;