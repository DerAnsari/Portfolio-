export default function Navigation(){
    return(
<div className="h-17 bg-[#003844] flex items-center justify-center gap-4 md:justify-end md:gap-x-8 p-[2rem]">
    <div className="flex flex-col items-center group">
        <a
        href="#Home"
        className="text-[1.5rem] md:text-2xl text-[#BCD8C1] hover:text-white transition-colors duration-300"
        >
        Home
        </a>
        <span className="opacity-0 group-hover:opacity-100 w-[4rem] bg-[#BCD8C1] text-white py-0.5 transition-opacity duration-300"></span>
    </div>
    <div className="flex flex-col items-center group">
        <a
        href="#About"
        className="text-[1.5rem] md:text-2xl text-[#BCD8C1] hover:text-white transition-colors duration-300"
        >
        About
        </a>
        <span className="opacity-0 group-hover:opacity-100 w-[4rem] bg-[#BCD8C1] text-white py-0.5 transition-opacity duration-300"></span>
    </div>
    <div className="flex flex-col items-center group">
        <a
        href="#Project"
        className="text-[1.5rem] md:text-2xl text-[#BCD8C1] hover:text-white transition-colors duration-300"
        >
        Projects
        </a>
        <span className="opacity-0 group-hover:opacity-100 w-[5.4rem] bg-[#BCD8C1] text-white py-0.5 transition-opacity duration-300"></span>
    </div>
    <div className="flex flex-col items-center group">
        <a
        href="#Contact"
        className="text-[1.5rem] md:text-2xl text-[#BCD8C1] hover:text-white transition-colors duration-300"
        >
        Contact
        </a>
        <span className="opacity-0 group-hover:opacity-100 w-[5.4rem] bg-[#BCD8C1] text-white py-0.5 transition-opacity duration-300"></span>
    </div>
    </div>

    );
};