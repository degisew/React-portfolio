import SharedSelectors from '../SharedStyles.module.css';
import selectors from './AboutMe.module.css';
import photo from '../../../assets/images/degisew-photo.jpg';

const AboutMe = () => (
  <section id="about">
    <div className={selectors.mainDiv}>
      <div className={SharedSelectors.title}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={selectors.photoDetailDiv}>
        <div className={selectors.myDetail}>
          <p>
            I am Degisew, an Experienced Software engineer with three years of expertise in developing 
            and maintaining high-performance web applications globally. 
            Proficient in Python, Django, JavaScript, and databases 
            like PostgreSQL, MySQL, and MongoDB. Specialized in architecting 
            scalable and secure server-side solutions. Committed to continuous learning, 
            a dedicated team player with excellent communication, collaboration,
            and problem-solving skills. Confident in contributing significantly
            to project goals and delivering top-notch software solutions.
          </p>
        </div>
        <div className={selectors.photo}>
          <img src={photo} alt="myPhoto" />
        </div>
      </div>
    </div>
  </section>
);
export default AboutMe;
