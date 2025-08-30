import React from "react";

function TailwindTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Tailwind CSS Test
          </h1>
          <p className="text-gray-600">
            If you can see this styled component, Tailwind CSS is working! 🎉
          </p>
        </div>

        <div className="space-y-4">
          {/* Color Test */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-500 text-white p-4 rounded-lg text-center">
              Red
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg text-center">
              Green
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
              Blue
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg text-center">
              Yellow
            </div>
          </div>

          {/* Typography Test */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Typography</h2>
            <p className="text-sm text-gray-600">Small text</p>
            <p className="text-base text-gray-700">Base text</p>
            <p className="text-lg text-gray-800">Large text</p>
          </div>

          {/* Spacing Test */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Spacing</h2>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
              <div className="w-8 h-8 bg-purple-500 rounded"></div>
              <div className="w-10 h-10 bg-purple-500 rounded"></div>
            </div>
          </div>

          {/* Button Test */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Buttons</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                Primary
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                Secondary
              </button>
            </div>
          </div>

          {/* Responsive Test */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">Responsive</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm md:text-base lg:text-lg">
                This text changes size on different screen sizes
              </p>
            </div>
          </div>

          {/* Custom Color Test */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Custom Color
            </h2>
            <div className="bg-[#6661fd] text-white p-4 rounded-lg text-center">
              Custom Color #6661FD
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            All these styles are applied using Tailwind CSS classes
          </p>
        </div>
      </div>
    </div>
  );
}

export default TailwindTest;
