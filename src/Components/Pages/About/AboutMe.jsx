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
            I am Degisew, an Experienced Software engineer with three years of expertise
            in developing and maintaining high-performance web applications globally.
            Proficient in Python, Django, JavaScript, and databases like
            PostgreSQL, MySQL, Neo4j, and MongoDB. Specializes in architecting
            scalable and secure server-side solutions. Committed to
            continuous learning, possessing a strong work ethic, and
            excelling in communication, collaboration, and problem-solving.
            Confident in making a substantial contribution to the team,
            working collectively to achieve project goals
            and deliver high-quality Back-end solutions.
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
