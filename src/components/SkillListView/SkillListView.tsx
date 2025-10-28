import React from "react";
import { MdGroups } from "react-icons/md";

// Definindo as props para o componente SkillsList
interface SkillsProps {
  title?: string; // Título é opcional, por isso o '?'
  skillList: string[]; // Skills é um array de strings e é obrigatório
}

const SkillListCard: React.FC<SkillsProps> = ({
  title = "Soft Skills", // Adicionado um valor padrão para o título
  skillList,
}) => {
  return (
    <div className="mx-4 my-4 px-6 py-8 bg-neutral-800 rounded-lg shadow-lg">
      <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 flex justify-center items-center gap-3">
        <MdGroups className="text-3xl sm:text-4xl" />
        <span>{title}</span>
      </h3>
      <ul className="list-none space-y-3 text-neutral-100 sm:text-lg">
        {skillList.map((skill, i) => (
          <li key={i} className="leading-relaxed text-center">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillListCard;