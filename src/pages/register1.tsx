import { Link } from 'react-router-dom';
import SIGNUP from '../assets/icter2024.jpeg';

const Signup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white p-30">
      <div className="w-full max-w-4xl h-auto flex bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={SIGNUP}
            alt="Signup Background"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-1/2 p-8 flex flex-col justify-center bg-[#f5f5f5]">
          <h1 className="text-4xl text-[#050C9B] font-bold text-center mb-6">
            Welcome to ICTer Conference 2024
          </h1>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 text-center">Sign Up</h3>
            <p className="text-lg mb-6 text-center text-gray-700">Please enter your email to be a partner for ICTer 2024</p>
          </div>
          <form className="w-full flex flex-col items-center mb-6">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-3/4 text-black py-3 px-4 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#060606] transition duration-200"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-3/4 text-black py-3 px-4 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#060606] transition duration-200"
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-3/4 text-black py-3 px-4 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#060606] transition duration-200"
            />
            <div className="w-full flex flex-col items-center mb-2">
              <button type="submit" className="w-40 text-white bg-[#3572EF] rounded-md py-3 font-semibold transition duration-200 hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </form>
          <div className="w-full flex items-center justify-center ">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <Link to="/login">
                <span className="font-semibold text-blue-500 cursor-pointer underline">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
