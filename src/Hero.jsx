export default function Hero(){
    const handleClick = () => {
        window.location.hash = "#Contact"; 
      };
    const otherClick = () =>{
        window.location.hash = "Project"
    }
    return(
        <div className="md:h-140 md:m-20 mt-10 m-5 p-3.5 flex gap-9 flex-col md:flex-row ">
            <div className=" md:w-[65vh] md:h-[65vh] flex justify-center items-center">
                <div className="bg-gray-400 h-[30vh] w-[30vh] md:h-[50vh] md:w-[50vh] rounded-full mb-7 overflow-hidden border-6 border-[#EDAFB8]">
                    <img src="./Assets/otherpotrait.jpeg" alt="" className="w-full h-full object-cover"/>
                </div>
                </div>
            <div className="font-mono text-[#003844]">
                <h3 className="md:m-5 md:p-5 text-[20px] mb-2 md:mb-0 md:text-4xl">Welcome, I'm Sarmad Ansari</h3>
                <ul className="md:text-2xl text-sm md:m-5 md:p-5 space-y-6.5">
                    <li class="flex items-center">
                        <span class="mr-4 w-3 h-1.5 mb-2 bg-[#003844] mt-2"></span> 
                        <span>Upcoming Developer based in Karachi, Pakistan</span>
                    </li>
                    <li class="flex items-center">
                        <span class="mr-4 w-3 h-1.5 mb-2 bg-[#003844] mt-2"></span> 
                        <span>Part Time Comp-Sci Student</span>
                    </li>
                    <li class="flex items-center">
                        <span class="mr-4 w-3 h-1.5 mb-2 bg-[#003844] mt-2"></span> 
                        <span>Currently at Alpha College</span>
                    </li>
                    <li class="flex items-center ">
                        <span class="mr-4 w-3 h-1.5 mb-2 bg-[#003844] mt-2"></span> 
                        <span>Looking Forward To Working with you</span>
                    </li>
                </ul>
                <div className="flex flex-row justify-around m-5">
                    <button onClick={otherClick} className="bg-[#1B998B] md:h-[3em] md:w-[9em] p-3.5 md:text-2xl text-[#BCD8C1] rounded-2xl hover:bg-[#BCD8C1] hover:text-[#1B998B] transition-colors duration-300 ">Resume</button>
                    <button onClick={handleClick} className="bg-[#1B998B] md:h-[3em] md:w-[9em] p-3.5 md:text-2xl text-[#BCD8C1] rounded-2xl hover:bg-[#BCD8C1] hover:text-[#1B998B] transition-colors duration-300 ">Contact</button>
                </div>
            </div>

        </div>
    )
}