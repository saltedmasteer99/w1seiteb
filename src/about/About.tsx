import './About.scss';
import projectJson from "./projects.json";
import Card from '../card/Card';
function About() {
  const display: JSX.Element[] = []
    projectJson.projects.forEach((project) => {
      const curr = <Card key={project.index} index={project.index} title={project.title} description={project.description} img={project.img}/>
      display[project.index] = curr
    })
  return (
    <>
      <div className='about-container bg-about text-white'>
        <h1 className=''>YOU CAN ADD HERE WHAT EVER YOU WANT.</h1>
        <h2><a href="#projects" className='projects-link'>ALSO HERE</a></h2>
        <div className="custom-shape-divider-bottom-1678909779">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div id='projects' className='about-container bg-projects fd-row'>{display}</div>
    </>
  )
}

export default About
