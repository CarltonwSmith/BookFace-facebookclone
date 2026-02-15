export default function Login() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
      {/* Left side: Logo + tagline */}
      <div className="max-w-[400px] mr-10 hidden md:block">
        <h1 className="text-5xl font-bold text-[#1877f2]">facebook</h1>
        <p className="text-xl mt-3 text-gray-700">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>

      {/* Right side: Login card */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full h-12 px-4 mb-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 px-4 mb-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
        />

        <button className="w-full h-12 bg-[#1877f2] text-white rounded-lg font-semibold hover:bg-blue-600">
          Log In
        </button>

        <p className="text-center text-blue-600 text-sm mt-3 hover:underline cursor-pointer">
          Forgotten password?
        </p>

        <div className="border-b my-4"></div>

        <button className="w-full h-12 bg-[#42b72a] text-white rounded-lg font-semibold hover:bg-green-600">
          Create new account
        </button>
      </div>
    </div>
  );
}
