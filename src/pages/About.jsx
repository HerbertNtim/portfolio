import CTA from "../components/CTA";
import { skills, experiences } from "../constants"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const About = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Hi, I am{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Herbert
        </span>{" "}
         👨‍💻
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-600">
        <p>
          Software Engineer based in Ghana, specializing in technical education through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container h-20 w-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl} 
                  alt="image" 
                  className="w-1/2 h1/2 object-contain"  
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>       
      </div>

      <hr className="border-slate-200"/>

      <CTA />
    </section>
  )
}

export default About