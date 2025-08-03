import { useState } from "react";

export default function Login({ onClose }) {
  const [mobile, setMobile] = useState("");

  return (
    <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white flex w-[800px] max-w-full rounded-lg overflow-hidden shadow-xl">
       
        <div className="w-1/2 hidden md:block">
          <img
            src="https://assets.gokwik.co/uploads/1744369662054_Frame%201321315212.png"
            alt="Login Visual"
            className="h-[400px] w-full object-cover"
          />
        </div>

       
        <div className="w-full md:w-1/2 mt-10 p-8 relative">
    
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>

         
          <h2 className="text-xl font-semibold mb-4 text-center">LET'S GET RARE!</h2>

          
          <div className="flex items-center border rounded px-3 py-2 mb-4">
            <span className="text-gray-600 pr-2">+91</span>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              
              className="w-full outline-none no-spinner"
            />
          </div>

          
          <div className="flex items-center mb-4">
            <input type="checkbox" id="notify" className="mr-2" />
            <label htmlFor="notify" className="text-sm text-gray-600">
              Notify me for Updates and Offers
            </label>
          </div>

          
          <button onClick = {onClose} className="bg-black text-white w-full py-2 rounded hover:bg-gray-900">
            Submit
          </button>

        
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
