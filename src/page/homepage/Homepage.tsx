import profileImageFile from "../../assets/lukas-burda-logo-profile.jpg";
import { ContactLinksView } from "../../components/ContactLinksView/ContactLinksView";
import { CustomSection } from "../../components/CustomSection/CustomSection";
import { ProfileImageView } from "../../components/ProfileImageView/ProfileImageView";
export const HomePage: React.FC = () => {
  return (
    <CustomSection id="home" className="flex justify-center items-center">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-center md:text-left">
          <ProfileImageView src={profileImageFile} alt="Perfil de Lukas Burda" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            👋 Olá, eu sou o <span className="text-cyan-400">Lukas Burda</span>!
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-4xl text-center leading-relaxed text-neutral-300">
          Atuo como Coordenador Técnico de Produto e Desenvolvimento, com atividades
          que envolvem gestão de backlog, definição de requisitos, coordenação
          de sprints, qualidade de entregas e implementação outras soluções e parceiros. Desenvolvedor com experiência em diversas
          tecnologias e linguagens de programação.
        </p>

        <ContactLinksView
          showTitle={true}
          emailHref="mailto:lukasburdaferreira@gmail.com"
          linkedinHref="https://linkedin.com/in/lukasburdalongo"
          githubHref="https://github.com/lukas-burda"
        />

        <div className="mt-8">
          <a 
            href="#about" 
            className="inline-block px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-800 rounded-lg transition-all duration-300 font-medium"
          >
            Saiba mais sobre mim
          </a>
        </div>
      </div>
    </CustomSection>
  );
};
