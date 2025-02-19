import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import Header from "./Header";

const DrippitLanding = () => {
  const [email, setEmail] = useState("");

  const waitlistUsers = [
    {
      id: 1,
      name: "Sophie Chen",
      avatar: "/logo1.svg"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      avatar: "/logo2.svg"
    },
    {
      id: 3,
      name: "Aisha Patel",
      avatar: "/logo3.svg"
    },
    {
      id: 4,
      name: "Jordan Smith",
      avatar: "/logo4.svg"
    },
    {
      id: 5,
      name: "Emma Wilson",
      avatar: "/logo5.svg"
    }
  ];
  

  return (
    <>
      <div className="snap-start h-screen w-full px-2 py-1">
        <Header />
        
        {/* Main Container */}
        <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12">
          {/* Image Container - Now first on mobile */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] mx-auto lg:mx-0 lg:w-1/2 flex justify-center items-center lg:order-2">
            <div className="lg:scale-125">
              <img
                src="https://res.cloudinary.com/da1dzhidd/image/upload/v1739975672/Drippit/xs9qtadl2fvszfcuql96.svg"
                alt="App Mockup"
                className="lg:max-w-xl"
              />
            </div>
          </div>

          {/* Content Section - Second on mobile */}
          <main className="flex flex-col items-center lg:items-start lg:w-1/2 lg:justify-center lg:order-1 lg:pl-24">
            <h2 className="text-2xl font-serif mb-2 lg:mb-6 text-gray-700">Find Your Drip</h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="Agraham text-2xl sm:text-4xl mt-4 text-gray-900">Swipe. Match. Slay.</span>
              <Rocket size={24} className="animate-bounce text-gray-900" />
            </div>
            <p className="text-gray-500 text-center lg:text-left mb-8 lg:mt-10 lg:max-w-md lg:text-lg">
              Drippit is where fashion meets swiping. Discover your style, one swipe
              at a time.
            </p>

           {/* Email Input */}
<div className="text-amber-50 w-full max-w-md mb-4 lg:mb-8 flex justify-center lg:justify-start items-center gap-4 lg:gap-0 lg:relative">
  <input
    type="email"
    placeholder="Enter your email ❤️"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-[80%] lg:w-full px-4 py-3 rounded-xl border border-gray-300 lg:pl-4 lg:pr-4 text-gray-900"
  />
  <button className="bg-black w-[20%] p-3 rounded-xl lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2 lg:w-auto lg:px-10 lg:py-2">
    →
  </button>
</div>

            {/* Waitlist Section */}
            <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
              <div className="flex -space-x-4">
                {waitlistUsers.map((index) => (
                  <img
                    key={index}
                    className="w-12 h-12 rounded-full"
                    src={index.avatar}
                  />
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                <span className="font-semibold text-gray-900 mr-2">299+ Drippers</span>
                <span className="text-gray-700"> On Waitlist</span>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DrippitLanding;