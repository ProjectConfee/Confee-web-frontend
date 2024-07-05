
import LOGO  from '../assets/logo.png'

const Login = ()=>{
    return (
       
        <div className='w-full h-screen flex item-start'>
         <div className='realtive w-1/2 h-full  flex flex-col bg-[#050C9B]'>
             {/* <img src={COVER_IMAGE} className='bg-cover w-1/2 h-1/2  '  /> */}
           
            </div>

            <div className='w-1/2 h-screen flex  bg -[#f5f5f5] flex-col p-20 justify-center  pl-10 pr-[10%] mt-[-50px]  mb-8'>
                <div className='absolute ml-[30%] w-20 mr-[70%] mb-[70%] mt-[30%] ' ><img src={LOGO} className='bg-cover w-full h-full ' /></div>
                <h1 className='text-4xl text-[#060606] font-semibold mt-[10%]  text-center'>ICTer Conference 2024 </h1>
                <div className='w-full flex flex-col '>
                    
                    <p className='text-sm mb-4 text-center'>Wecome Back! Please Enter your details.</p>
                    <h3 className='text-2xl font-semibold mb-4 text-center '>Login</h3>


                </div>
                <div className='w-full flex flex-col mb-8'>
                    <input
                      type="email"
                      placeholder="Email"
                      className='w-full text-black py-4  bg-transparent border-b outline-black focus:outline-none'/>
                       <input
                      type="Password"
                      placeholder="Password"
                      className='w-full text-black py-4  bg-transparent border-b outline-black focus:outline-none'/>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center mt-[-5%]'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p className='text-sm'>Remember me </p>
                    </div>
                    <p className='text-sm  font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 mt-[-5%]'>Forgot Passsword</p>
                </div>
                <div className='w-full flex flex-col mb-[5%] mt-[5%]'>
                    <button className='w-full text-white bg-[#060606] rounded-md p-4  font-semibold text-center flex items-center justify-center mt-[5%] '>Login</button></div><div>
                    <button className='w-full text-[#060606] bg-white border border-black font-semibold rounded-md p-4 text-center flex items-center justify-center'>Register</button>
                </div>
                <div></div>
                
                <div className='w-full flex items-center justify-center mt-[5%]'>
                    <p className='tex-sm font-normal text-black'>Don't have an acccount?<span className='font-semibold underline underline-offset-2 cursor pointer  '>signup for free.</span></p>
                </div>
            </div>

        </div>
    )
}
export default Login;