import { assets } from "../assets/assets.js";

const SkillItem = ({ skill, style }) => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-[10px] w-[85px] rounded-[4px]">
      <skill.photo className="w-[35px] h-[35px] mb-1" />
      <strong className="text-[14px]">{skill.name}</strong>
    </div>
  );
};

export default SkillItem;
