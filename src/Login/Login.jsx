import { useState } from "react";

export default function Login({ onClose }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = mobile input, 2 = OTP input

  // Get API URL from environment or use localhost for development
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Send OTP API call
  const sendOtp = async () => {
    if (!mobile || mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91${mobile}` })
      });
      const data = await res.json();
      if (data.success) {
        setStep(2);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      alert("Error sending OTP. Please check your connection.");
    }
  };

  // Verify OTP API call
  const verifyOtp = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91${mobile}`, otp })
      });
      const data = await res.json();
      if (data.success) {
        alert("Login Successful!");
        onClose();
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      alert("Error verifying OTP. Please check your connection.");
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white flex w-[800px] max-w-full rounded-lg overflow-hidden shadow-xl">

        {/* Left Side Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://assets.gokwik.co/uploads/1744369662054_Frame%201321315212.png"
            alt="Login Visual"
            className="h-[400px] w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 mt-10 p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">LET'S GET RARE!</h2>

          {step === 1 && (
            <>
              {/* Mobile Input */}
              <div className="flex items-center border rounded px-3 py-2 mb-4">
                <span className="text-gray-600 pr-2">+91</span>
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full outline-none no-spinner"
                />
              </div>

              <div className="flex items-center mb-4">
                <input type="checkbox" id="notify" className="mr-2" />
                <label htmlFor="notify" className="text-sm text-gray-600">
                  Notify me for Updates and Offers
                </label>
              </div>

              <button
                onClick={sendOtp}
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-900"
              >
                Send OTP
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* OTP Input */}
              <div className="flex items-center border rounded px-3 py-2 mb-4">
                <input
                  type="number"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full outline-none no-spinner"
                />
              </div>

              <button
                onClick={verifyOtp}
                className="bg-black text-white w-full py-2 rounded hover:bg-gray-900"
              >
                Verify OTP
              </button>

              <p
                className="text-sm text-center mt-3 text-blue-500 cursor-pointer"
                onClick={sendOtp}
              >
                Resend OTP
              </p>
            </>
          )}

          <p className="text-xs text-center mt-4 text-gray-500">
            <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">T&Cs</a>
          </p>
          <p className="text-xs text-center mt-1 text-gray-500">
            <a href="#" className="underline">Help Center</a>
          </p>
        </div>
      </div>
    </div>
  );
}
