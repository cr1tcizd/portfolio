import { assets, skills } from "../assets/assets.js";
import htmlSvg from "../assets/html5.svg";
import SkillItem from "./SkillItem.jsx";

const Skills = () => {
  return (
    <section className="py-20 bg-black bg-opacity-5" id="skills">
      <div className="container flex flex-col w-[70%]">
        <h2 className="mx-auto mb-[80px] text-2xl">Мои навыки</h2>
        <div className="flex justify-center items-center gap-[18px] flex-wrap w-[50%] mx-auto">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
