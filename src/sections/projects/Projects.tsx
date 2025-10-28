import { FaCode } from "react-icons/fa";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import { SiteEmbedCard } from "../../components/SiteEmbedCard/SiteEmbedCard";
import { CustomSection } from "../../components/CustomSection/CustomSection";

export const Projects: React.FC = () => {
  return (
    <CustomSection id="projects">
      <div className="flex justify-center items-center gap-4 mb-12">
        <FaCode className="text-4xl md:text-5xl text-cyan-400" />
        <CustomTitle
          text="Projetos mais recentes"
          as="h3"
          className="text-3xl md:text-5xl font-bold"
        />
      </div>

      <SiteEmbedCard
        title="Museu Virtual Romano Cigano"
        description="Projeto histórico e cultural sobre a imigração cigana no Brasil. Desenvolvido e publicado em WordPress com Elementor."
        siteUrl="https://museuromanocuritiba.com/"
      />
    </CustomSection>
  );
};
