import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
import selectors from './Skills.module.css';
import {
  languages,
  frameworks,
  professional,
  ToolsAndMethods,
} from '../../Data';
import sharedSelectors from '../SharedStyles.module.css';

const Skills = () => (
  <section id="skills">
    <div className={sharedSelectors.title}>
      <h1>SKILLS</h1>
    </div>
    <div className={selectors.mainContainer}>
      <div className={selectors.subTitleSkillContDiv}>
        <h2>Languages</h2>
        <br />
        <ul>
          {languages.map((language) => (
            <div className={selectors.list} key={language}>
              {/* <FaCheckCircle /> */}
              <li className={selectors.skills}>{language}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className={selectors.subTitleSkillContDiv}>
        <h2>Frameworks and Libraries</h2>
        <br />
        <ul>
          {frameworks.map((framework) => (
            <div className={selectors.list} key={framework}>
              {/* <FaCheckCircle /> */}
              <li className={selectors.skills}>{framework}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className={selectors.subTitleSkillContDiv}>
        <h2>Tools & Methods</h2>
        <br />
        <ul className={selectors.toolsAndMethods}>
          {ToolsAndMethods.map((tool) => (
            <div className={selectors.list} key={tool}>
              {/* <FaCheckCircle /> */}
              <li className={selectors.skills}>{tool}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className={selectors.subTitleSkillContDiv}>
        <h2>Professional</h2>
        <br />
        <ul>
          {professional.map((profession) => (
            <div className={selectors.list} key={profession}>
              {/* <FaCheckCircle /> */}
              <li className={selectors.skills}>{profession}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
