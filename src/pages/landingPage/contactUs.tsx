const ContactUs = () => {
    return (
        <div className="relative flex justify-start items-center bg-[url('src/assets/icter.jpg')] bg-cover bg-center min-h-screen p-1">
            {/* Card */}
            <div className="ml-12 bg-white bg-opacity-90 shadow-lg rounded-lg p-8 max-w-md w-full relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>

                {/* Address Section */}
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                        University of Colombo School of Computing<br />
                        UCSC Building Complex,<br />
                        35, Reid Avenue,<br />
                        Colombo 7,<br />
                        Sri Lanka
                    </p>
                </div>

                {/* Email Section */}
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                    <a
                        href="mailto:secretary.icter@ucsc.cmb.ac.lk"
                        className="text-blue-500 hover:underline"
                    >
                        secretary.icter@ucsc.cmb.ac.lk
                    </a>
                </div>

                {/* Phone Section */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">+94-11-2581245-7</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
