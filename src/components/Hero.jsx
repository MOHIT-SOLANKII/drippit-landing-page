import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import Header from "./Header";

const DrippitLanding = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setEmail('');
      setMessage({ text: 'Successfully subscribed!', type: 'success' });
      
    } catch (error) {
      console.error('Error:', error);
      setMessage({ text: error.message || 'Failed to subscribe. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="snap-start h-screen w-full px-2 py-1">
        <Header />
        
        {/* Main Container */}
        <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12">
           {/* Image Container */}
           <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] mx-auto lg:mx-0 lg:w-1/2 flex justify-center items-center lg:order-2">
            <div className="lg:scale-125">
              <img
                src="/Black.svg"
                alt="App Mockup"
                className="block lg:hidden lg:max-w-xl"
              />
              <img
                src="/BlackBig-cropped.svg"
                alt="App Mockup Large"
                className="hidden lg:block w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Section */}
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

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md mb-4 lg:mb-8">
              <div className="flex flex-row w-full gap-2">
                <input
                  type="email"
                  placeholder="Enter your email ❤️"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center disabled:bg-gray-400 whitespace-nowrap text-sm"
                >
                  {isLoading ? "..." : "Sign Me Up 🚀"}
                </button>
              </div>
              {message.text && (
                <p className={`mt-2 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {message.text}
                </p>
              )}
            </form>

            {/* Waitlist Section */}
            <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
              <div className="flex -space-x-4">
                {waitlistUsers.map((user) => (
                  <img
                    key={user.id}
                    className="w-12 h-12 rounded-full border-2 border-white"
                    src={user.avatar}
                    alt={user.name}
                  />
                ))}
              </div>
              <p className="text-sm whitespace-nowrap">
                <span className="font-semibold text-gray-900 mr-2">299+ Drippers</span>
                <span className="text-gray-700">On Waitlist</span>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DrippitLanding;