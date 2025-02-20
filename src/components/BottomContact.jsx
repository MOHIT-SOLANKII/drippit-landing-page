import { useState } from 'react';

const BottomContact = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
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
    <div className="h-full flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h2 className="Agraham text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-10">
          Don't Miss Out on the Drip 🚀
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Be the first to experience the future of shopping. Early access spots are filling fast!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-grow relative">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email to claim your spot 📧"
              className="w-full px-6 py-4 rounded-full bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent placeholder-gray-400 disabled:bg-gray-100"
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center disabled:bg-gray-400"
          >
            <span>{isLoading ? "Signing up..." : "Sign Me Up 🚀"}</span>
          </button>
        </div>
        {message.text && (
          <div className="mt-4 text-center">
            <p className={`text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {message.text}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BottomContact;