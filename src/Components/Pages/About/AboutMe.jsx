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
            I am Degisew, A seasoned software engineer with three years of experience specializing in Back-end development, focused on creating and maintaining robust, high-performance web applications for the global market. I'm Expert in crafting clean, efficient, well-designed code that strictly adheres to best practices and standards. Proficient in Python, Django, JavaScript, NodeJs, ExpressJs and databases including PostgreSQL, MySQL, Neo4j, and MongoDB, Excel in architecting scalable and secure server-side solutions. I'm Dedicated to continuous learning and possess a strong work ethic. As a dedicated team player, I bring exceptional communication, collaboration, and problem-solving skills to the table. I'm Confident in my ability to make a significant contribution to the team, working collectively to achieve project goals and deliver high-quality back-end solutions.
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
