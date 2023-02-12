import "./about.css";
import Header from "../Header/Header";
const About = () => {
  return (
    <div className="section">
      <Header />
      <div className='about-item'>
          <div className="about-child">
          <h2>
          This is 
          <span style={{ fontWeight: "bold",marginLeft:"5px"}}>Me</span>
        </h2>
        <h3 style={{color:"red"}}>Creative Director</h3>
          <p>Mohammed Elsayed front end Developer </p>
          <p>GitHub is where over 94 million developers 
            shape the future of software, </p>
          
          </div>

      </div>
    </div>
  );
};

export default About;
