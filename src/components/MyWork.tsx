import React from "react";

const MyWork: React.FC = () => {
  return (
    <div id="work" className="flex flex-col lg:flex-row h-screen w-screen bg-black text-white overflow-hidden">
      {/* Sidebar padding for larger screens */}
      <div className="hidden lg:block w-48 lg:w-64 flex-shrink-0"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 py-6 space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Check Out <br /> My Work.
          </h1>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="h-40 w-full bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('/assets/haircut${index + 1}.jpg')`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
