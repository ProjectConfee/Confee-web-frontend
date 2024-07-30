import { message } from 'antd';
import React from 'react';

interface LoginFormValues {
    email: string;
    password: string;
}

const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginData: LoginFormValues = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        const data = await response.json();
        if (data.statusCode === 200 ) {

            message.success('Login successful!');

            if(data.role === "PARTICIPANT"){
                window.location.href = '/event';
            }else if(data.role === "ADMIN"){
                window.location.href = '/announcement_admin';
            }

            console.log('Login response:', data);
            // Handle successful login, e.g., redirect to another page
        } else {
            message.error('Failed to login. Please check your credentials.');
        }
    } catch (error) {
        message.error('An error occurred. Please try again.');
        console.error('Login error:', error);
    }
};

const Login: React.FC = () => {
    return (
        <div className='w-full h-screen flex item-start'>
            <div className='relative w-1/2 h-full flex flex-col bg-[#050C9B]'>
                {/* <img src={COVER_IMAGE} className='bg-cover w-1/2 h-1/2' /> */}
            </div>
            <div className='w-1/2 h-screen flex bg-[#f5f5f5] flex-col p-20 justify-center pl-10 pr-[10%] mt-[-50px] mb-8'>
                <h1 className='text-4xl text-[#060606] font-semibold mt-[10%] text-center'>ICTer Conference 2024</h1>
                <div className='w-full flex flex-col'>
                    <p className='text-sm mb-4 text-center'>Welcome Back! Please enter your details.</p>
                    <h3 className='text-2xl font-semibold mb-4 text-center'>Login</h3>
                </div>
                <form onSubmit={handleLogin} className='w-full flex flex-col mb-8'>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className='w-full text-black py-4 bg-transparent border-b outline-black focus:outline-none'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className='w-full text-black py-4 bg-transparent border-b outline-black focus:outline-none'
                    />
                    <div className='w-full flex items-center justify-between mt-4'>
                        <div className='w-full flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mr-2' id="rememberMe" name="rememberMe" />
                            <label htmlFor="rememberMe" className='text-sm'>Remember me</label>
                        </div>
                        <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password</p>
                    </div>
                    <div className='w-full flex flex-col mb-[5%] mt-[5%]'>
                        <button type="submit" className='w-full text-white bg-[#060606] rounded-md p-4 font-semibold text-center flex items-center justify-center mt-[5%]'>Login</button>
                    </div>
                </form>
                <div className='w-full flex flex-col items-center'>
                    <button className='w-full text-[#060606] bg-white border border-black font-semibold rounded-md p-4 text-center flex items-center justify-center'>Register</button>
                    <div className='w-full flex items-center justify-center mt-[5%]'>
                        <p className='text-sm font-normal text-black'>Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
