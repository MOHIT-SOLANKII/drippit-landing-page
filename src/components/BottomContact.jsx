import { useState } from 'react';

const BottomContact = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };
  
  return (
    <div className="h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl mx-auto text-center mb-8">
        <h1 className="Agraham text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-10">
          Don't Miss Out on the Drip 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-8">
          Be the first to experience the future of shopping. Early access spots are filling fast!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex-grow">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email to claim your spot 📧"
                className="w-full px-6 py-4 rounded-full bg-transparent border border-gray-600 text-white focus:outline-none focus:border-white placeholder-gray-400"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center"
          >
            <span>Sign Me Up 🚀</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BottomContact;