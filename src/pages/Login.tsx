import { Link } from 'react-router-dom';
import LOGIN from '../assets/icter2024.jpeg';

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white p-30">
      <div className="w-full max-w-4xl h-auto flex bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={LOGIN}
            alt="Login Background"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-1/2 p-8 flex flex-col justify-center bg-[#f5f5f5]">
          <h1 className="text-4xl text-[#050C9B] font-bold text-center mb-6">
            Welcome to ICTer Conference 2024
          </h1>
          <div className="w-full flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-8 text-center">Login</h3>
            <p className="text-lg mb-6 text-center text-gray-700">Please enter your email and password</p>
          </div>
          <div className="w-full flex flex-col items-center mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-3/4 text-black py-3 px-4 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#060606] transition duration-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-3/4 text-black py-3 px-4 mb-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#060606] transition duration-200"
            />
          </div>
          <div className="w-full flex items-center justify-between px-10 mb-6">
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium text-blue-500 cursor-pointer underline">
              Forgot Password
            </p>
          </div>
          <div className="w-full flex flex-col items-center mb-6">
            <button className="w-40 text-white bg-[#3572EF] rounded-md py-3 font-semibold transition duration-200 hover:bg-gray-800">
              Login
            </button>
          </div>
          <div className="w-full flex items-center justify-center mt-6">
            <p className="text-sm text-gray-700">
              Don't have an account?{' '}
              <Link to="/signup">
                <span className="font-semibold text-blue-500 cursor-pointer underline">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
