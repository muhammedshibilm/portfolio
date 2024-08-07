import photo from '../assets/profile.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <main id='home' className="md:h-screen container mx-auto flex flex-col justify-center items-center md:flex-row md:space-x-6 space-y-2  px-4">
            <div className="p-20">
                <div className="flex justify-center items-center rounded-full bg-gray-200 w-60 h-60 md:w-96 md:h-96 overflow-hidden">
                    <img src={photo} alt="" className="h-full w-full object-cover" />
                </div>
            </div>
            <div>
                <div className='flex flex-col justify-center items-center space-y-4 text-center md:text-left'>
                    <h4 className='font-semibold'>Hello, Im</h4>
                    <h1 className='font-bold text-4xl'>Muhammed Shibil M</h1>
                    <h2 className='text-2xl font-semibold'>Full Stack Web Developer</h2>
                    <div className='space-x-3'>
                        <button className='rounded-full border-4 border-black py-2 px-5 font-semibold md:m-4 '>Download CV</button>
                        <a href="#contact"><button className='rounded-full border-4 border-black bg-black text-white py-2 px-5 font-semibold '>Contact Info</button></a>
                    </div>
                    <div className='flex space-x-2'>
                        <a href="https://www.linkedin.com/in/muhammedshibilm"><FaLinkedin size={30} /></a>
                        <a href="https://github.com/muhammedshibilm"><FaGithub size={30} /></a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
