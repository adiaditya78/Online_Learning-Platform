import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <footer className='w-full bg-slate-50 py-8 border-t border-gray-200 mt-auto'>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex gap-6'>
                    <a href="http://github.com/" target="_blank" rel="noopener noreferrer" aria-label='GitHub' className='text-gray-500 text-2xl hover:text-green-500 hover:-translate-y-1 transition-all duration-300'><FaGithub/></a>

                    
                    <a href="http://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label='Linkedin' className='text-gray-500 text-2xl hover:text-blue-500 hover:-translate-y-1 transition-all duration-300'><FaLinkedin/></a>

                    <a href="mailto:" aria-label='Email' className='text-gray-500 text-2xl hover:text-yellow-500 hover:-translate-y-1 transition-all duration-300'><FaEnvelope/></a>
                </div>
                <p className='text-gray-500 text-sm m-0 font-medium tracking-wide'>&copy;{new Date().getFullYear()} Smart Learn. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer