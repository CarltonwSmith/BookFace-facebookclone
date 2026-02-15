export default function Signup() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold">Create a new account</h2>
        <p className="text-gray-600 text-sm">It’s quick and easy.</p>
        <div className="border-b my-3"></div>

        {/* Name fields */}
        <div className="grid grid-cols-2 gap-3">
          <input
            className="h-12 px-3 border rounded-lg"
            placeholder="First name"
          />
          <input
            className="h-12 px-3 border rounded-lg"
            placeholder="Surname"
          />
        </div>

        {/* Email + password */}
        <input
          className="w-full h-12 px-3 border rounded-lg mt-3"
          placeholder="Mobile number or email"
        />
        <input
          className="w-full h-12 px-3 border rounded-lg mt-3"
          placeholder="New password"
        />

        {/* Birthday */}
        <p className="text-xs text-gray-600 mt-3">Birthday</p>
        <input type="date" className="w-full h-12 px-3 border rounded-lg" />

        {/* Gender */}
        <p className="text-xs text-gray-600 mt-3">Gender</p>
        <div className="grid grid-cols-3 gap-3">
          <label className="border rounded-lg px-3 py-2 flex items-center justify-between">
            Female <input type="radio" name="gender" />
          </label>
          <label className="border rounded-lg px-3 py-2 flex items-center justify-between">
            Male <input type="radio" name="gender" />
          </label>
          <label className="border rounded-lg px-3 py-2 flex items-center justify-between">
            Custom <input type="radio" name="gender" />
          </label>
        </div>

        {/* Sign Up button */}
        <button className="w-full h-12 bg-[#42b72a] text-white rounded-lg font-semibold mt-4 hover:bg-green-600">
          Sign Up
        </button>
      </div>
    </div>
  );
}
