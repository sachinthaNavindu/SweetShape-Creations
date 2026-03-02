const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
        />
        
        <button className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;