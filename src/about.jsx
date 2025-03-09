import styles from "./about.module.css";
import DivSlider from './slider';


export default function About() {
  return (
    <div className="mb-50 font-mono ">
        <div id="About" className={`${styles["clip-oval"]} flex  justify-center items-end  h-28 md:h-70 bg-[#006C67]`}>
            <p className="text-[#E6E1C5] p-5 text-2xl md:text-6xl md:p-10">About Me</p>
        </div>
        <div className="bg-[#006C67] p-10  md:text-4xl text-[#E6E1C5]  ">
            <h1 className="m-10 md:pb-15 md:text-5xl text-center">
                "The best solutions come from those who challenge convention."
            </h1>
            <p>
                As a self-taught developer, I’ve embraced the challenge of balancing coding with my academic pursuits, finding the journey both demanding and deeply fulfilling. My expertise lies in frontend development, where I specialize in HTML, CSS, JavaScript, React.js, and TailwindCSS to design and build dynamic, responsive user interfaces. Currently, I’m expanding my skill set by diving into backend development with Python and Flask, aiming to create seamless, full-stack applications.
            </p>
            <br />
            <p>
                Looking ahead, my long-term vision is to transition into the fields of Machine Learning or Quantitative Finance. To achieve this, I’m focused on mastering C++ and advanced algorithms, equipping myself to develop sophisticated, data-driven solutions that push the boundaries of what’s possible.
            </p>
            <br />
            <DivSlider/>
            
        </div>
    </div>
  );
}