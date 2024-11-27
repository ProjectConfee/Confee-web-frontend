import { Link } from 'react-router-dom';
import SIGNUP from '../assets/icter2024.jpeg';
import { message } from 'antd'; // For notifications

interface SignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const signupData: SignupFormValues = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    };

    if (signupData.password !== signupData.confirmPassword) {
        message.error('Passwords do not match!');
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        });

        const data = await response.json();
        if (data.statusCode === 201) {
            message.success('Account created successfully!');
            window.location.href = '/login'; // Redirect to login page
        } else {
            message.error(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        message.error('An error occurred. Please try again.');
        console.error('Signup error:', error);
    }
};

const SignUp = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-white p-30">
            <div className="w-full max-w-4xl h-auto flex bg-white shadow-xl rounded-lg overflow-hidden">
                {/* Left side: Content */}
                <div className="w-1/2 p-8 flex flex-col justify-center bg-[#f5f5f5]">
                    <h1 className="text-4xl text-[#050C9B] font-bold text-center mb-6">
                        Welcome to ICTer Conference 2024
                    </h1>
                    <div className="w-full flex flex-col items-center">
                        <h3 className="text-3xl font-semibold mb-8 text-center">Sign Up</h3>
                        <p className="text-lg mb-6 text-center text-gray-700">
                            Create your account to get started
                        </p>
                    </div>
                    <form onSubmit={handleSignup} className="w-full flex flex-col items-center mb-6">
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
                        <div className="w-full flex flex-col items-center mb-6">
                            <button
                                type="submit"
                                className="w-40 text-white bg-[#3572EF] rounded-md py-3 font-semibold transition duration-200 hover:bg-gray-800"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-center mt-6">
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

                {/* Right side: Image */}
                <div className="w-1/2 flex justify-center items-center">
                    <img
                        src={SIGNUP}
                        alt="Signup Background"
                        className="object-contain max-h-full max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
