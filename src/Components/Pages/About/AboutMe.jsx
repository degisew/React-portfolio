import SharedSelectors from '../SharedStyles.module.css';
import selectors from './AboutMe.module.css';
import photo from '../../../assets/images/Dag.jpg';

const AboutMe = () => (
  <section id="about">
    <div className={selectors.mainDiv}>
      <div className={SharedSelectors.title}>
        <h1>ABOUT ME</h1>
      </div>
      <div className={selectors.photoDetailDiv}>
        <div className={selectors.myDetail}>
          <p>
            I’m Degisew, a backend developer based in Ethiopia. I work mostly
            with Python, Django, and FastAPI — building, testing, and
            documenting APIs, and systems that are meant to last. I enjoy
            solving real problems, keeping things simple, and writing code that
            other people can actually understand and build on. I like thinking
            through how a system should behave, spotting edge cases, and making
            sure nothing breaks quietly in the background. I love working
            remotely, enjoy async communication, and collaboration when there’s
            a tough problem to crack. I learn every day, getting better, staying
            clear-headed, and building things the right way.
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
