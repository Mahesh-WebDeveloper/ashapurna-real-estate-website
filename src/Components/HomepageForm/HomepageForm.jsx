import React from 'react';

const HomepageForm = () => {
  return (
    <div className="w-full  border-t-2 border-gray-200 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-8 mt-8">
      <form className="flex flex-wrap gap-4 items-center  ">
        {/* Name Input */}
        <div className="flex-1 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-5 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B68C5A] outline-2 outline-black border-black border-1 focus:border-transparent"
          />
        </div>

        {/* Email Input */}
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-5 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B68C5A] outline-2 outline-black border-black border-1 focus:border-transparent"
          />
        </div>

        {/* Phone Input */}
        <div className="flex-1">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-5 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B68C5A] outline-2 outline-black border-black border-1 focus:border-transparent"
          />
        </div>

        {/* Property Select */}
        <div className="flex-1">
          <select
            className="w-full px-4 py-5 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B68C5A] outline-2 outline-black border-black border-1 focus:border-transparent appearance-none bg-white"
          >
            <option value="">Select Property</option>
            <option value="property1">Property 1</option>
            <option value="property2">Property 2</option>
            <option value="property3">Property 3</option>
          </select>
        </div>

        {/* Query Input */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Explain Your Query"
            className="w-full px-4 py-5 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B68C5A] outline-2 outline-black border-black border-1 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-8 py-5 bg-[#B68C5A] text-white rounded-lg hover:bg-[#9c7849] transition-all duration-300 font-medium"
          >
            Submit
          </button>
        </div>
      </form>
      <hr className='mt-8' style={{ height: '5px', backgroundColor: '#be8553', border: 'none' }} />

    </div>
  );
};

export default HomepageForm;
