import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

interface ForgotPasswordFormProps {
  onBackToSignIn: () => void;
}

const ForgotPasswordForm = ({ onBackToSignIn }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Password reset requested for:", email);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">Check your email</h3>
        <p className="text-gray-500">
          We've sent a password reset link to <br />
          <span className="font-medium text-gray-700">{email}</span>
        </p>
        <button
          onClick={onBackToSignIn}
          className="text-rose-600 hover:text-rose-700 font-medium hover:underline transition-all inline-flex items-center gap-1 mt-4"
        >
          Back to sign in
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-6">
        <p className="text-gray-500 text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <div>
        <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email address
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-rose-500 transition-colors" />
          </div>
          <input
            id="reset-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white/50"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-linear-to-r from-rose-500 to-rose-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-rose-600 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send reset link</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        <button
          type="button"
          onClick={onBackToSignIn}
          className="text-rose-600 hover:text-rose-700 font-medium hover:underline transition-all"
        >
          Back to sign in
        </button>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;