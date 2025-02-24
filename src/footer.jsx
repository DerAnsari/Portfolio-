import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        
    <div id='Contact' className='md:h-[20em] mt-1 bg-[#003844]'>    
        <div className=" flex pt-[1.5em] items-center text-[#BCD8C1]  flex-col">
            <div>
                <p className="md:text-4xl text-[1.5rem]">Lets Get In Touch</p>
            </div>
            
            <div className="md:text-3xl text-[1.3rem] m-[2rem]">
                <p><a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRzBzDMmmVWMlgJdXZdqXFtsNkXCXgRBRHJSWLVHBmhrLzTfZWGMZLdqGPxNbtxhSHnGPLCW">ansarisarmad426@gmail.com</a></p>
            </div>
            
            <div className="flex flex-row md:gap-25 md:m-[1.5em] pb-3 md:pb-0 gap-3 md:text-2xl">
                <a href="https://www.linkedin.com/in/sarmad-ansari-ab57862b9/" className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <p>LinkedIn</p>
                </a>
                <a href="https://github.com/DerAnsari" className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    <p>GitHub</p>
                </a>
                <a href="https://www.instagram.com/der_ansari/" className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <p>Instagram</p>
                </a>
            </div>
        </div>
        <hr className='text-[#BCD8C1]' />
        <div className=' text-[#BCD8C1] p-1 flex justify-center '>
            <p>&copy; 2025 Sarmad Ansari. All rights reserved.</p>
        </div>
    </div>
    );
};