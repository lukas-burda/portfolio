import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CustomTitle from "../CustomTitle/CustomTitle";

interface ContactLinksViewProps {
  linkedinHref: string;
  githubHref: string;
  emailHref: string;
  showTitle?: boolean;
}

export const ContactLinksView: React.FC<ContactLinksViewProps> = ({
  showTitle,
  linkedinHref,
  githubHref,
  emailHref
}) => {
  return (
    <div className="w-full">
      {showTitle && (
        <CustomTitle
          text="Contatos"
          as="h2"
          className="text-2xl text-center font-bold mb-4"
        />
      )}
      <div className="flex justify-center space-x-6 text-3xl">
        <a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={emailHref}
          className="hover:text-cyan-400 transition-colors duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};