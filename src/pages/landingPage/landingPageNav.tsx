const Navbar = () => {
  return (
      <nav className="bg-slate-100 sticky top-0 z-50 px-5 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Text Section */}
            <div className="flex items-center space-x-2">
              <img className="h-12 w-12" src="src/assets/icter_logo.png" alt="Logo" />
              <div className="text-gray-800 text-lg font-bold">ICTER 2024</div>
            </div>
            {/* Navigation and Buttons */}
            <div className="flex items-center space-x-4 ml-auto">
              <div className="hidden md:flex space-x-4">
                <a href="/" className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform group-hover:transform group-hover:scale-x-100 scale-x-0 origin-left"></span>
                </a>
                <a href="https://cmt3.research.microsoft.com/ICTer2024" className="relative text-blue-500 px-2 py-2 rounded-md text-lg font-medium group">
                  Paper Submission
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform group-hover:transform group-hover:scale-x-100 scale-x-0 origin-left"></span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="/login" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Login</a>
                <a href="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
