import React from "react";
import {
  FaExternalLinkAlt,
  FaAward,
  FaCalendarAlt,
  FaCodeBranch,
} from "react-icons/fa"; // Ícones para melhor visualização
import type { Certificate } from "../../interfaces/competences/Certificate";
import CustomTitle from "../CustomTitle/CustomTitle";

interface CertificateCardViewProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardViewProps> = ({
  certificate,
}) => {
  const { title, issuer, issueDate, credentialUrl, skills } = certificate;

  return (
    <li className="bg-neutral-800 rounded-lg shadow-md p-6 md:p-8 mb-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4 mb-4">
        <FaAward className="text-3xl text-cyan-400 flex-shrink-0" />
        <CustomTitle
          text={title}
          as="h4"
          className="text-xl md:text-2xl font-bold text-cyan-400"
        />
      </div>

      <div className="space-y-2 mb-4">
        <p className="flex items-center gap-2 text-lg font-semibold text-neutral-200">
          <span>{issuer}</span>
        </p>

        <div className="flex items-center gap-2 text-neutral-300">
          <FaCalendarAlt />
          <span>Emitido em {issueDate}</span>
        </div>
      </div>

      {skills && (
        <div className="mb-4 text-neutral-300">
          <div className="flex items-start gap-2">
            <FaCodeBranch className="mt-1 text-cyan-400" />
            <div>
              <span className="font-semibold text-cyan-400">Competências: </span>
              <span className="text-sm">{skills}</span>
            </div>
          </div>
        </div>
      )}

      {credentialUrl && (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900 hover:bg-cyan-400 text-white rounded-md transition-colors duration-200 font-medium"
          aria-label={`Ver credencial de ${title}`}
        >
          <FaExternalLinkAlt size={18} />
          <span>Ver Certificado</span>
        </a>
      )}
    </li>
  );
};

export default CertificateCard;
