
import { Link } from "react-router-dom";
import React, { useState } from "react";


function Body() {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleProceed = () => {
    if (!source || !destination) {
      alert("Please enter both source and destination.");
      return;
    }
    // You can navigate to payment or save route here
    console.log("Proceeding to payment with:", { source, destination });
    // Navigate or emit event to move to next step
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-800">Chalo Pass</h1>
        <p className="text-center text-gray-600">Book your bus ticket!</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleProceed}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
export { Body };
