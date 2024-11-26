const App = () => (
    <div
        className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('src/assets/icter_banner.jpg')" }}
    >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Container for content */}
        <div className="relative z-10 flex flex-col h-full items-center justify-center px-8 text-center text-white">
            {/* Logo Section */}
            <div className="mb-4">
                <img
                    src="src/assets/icter2024-noBg.png"
                    alt="ICter Logo"
                    className="h-24 w-auto mx-auto"
                />
            </div>

            {/* Conference Title */}
            <h1 className="text-3xl font-bold mb-2">24th ICter International Conference</h1>

            {/* Location and Date */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-lg mt-2">
                <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                    <span className="text-orange-400 mr-2">📍</span>
                    <span>Marino Beach Hotel, Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center">
                    <span className="text-orange-400 mr-2">📅</span>
                    <span>05th to 08th November, 2024</span>
                </div>
            </div>
        </div>
    </div>
);

export default App;
