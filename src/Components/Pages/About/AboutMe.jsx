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
            I am Degisew, A Full-stack developer with over 3 years of experience developing
            efficient software applications in a global market.
            Writes clean, and well-designed code that adheres to best practices and standards.
          </p>
          <br />
          <p>
            In my previous role as a Back-end developer at The-Hot-Platform startup,
            I was responsible for the development and maintenance of a large-scale web application.
            I worked closely with a team of developers to design, implement,
            and test the application. I also worked with the QA team
            to ensure that the application met all of the requirements.
          </p>
          {' '}
          <br />
          <p>
            I am a highly motivated and results-oriented individual. I am also a team player and
            I am always willing to help others. In my spare time, I enjoy reading, and spending
            time with my family and friends. I am eager to learn new things and
            I am always looking for new challenges.
            I am confident that I can make a significant contribution to your company.
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
