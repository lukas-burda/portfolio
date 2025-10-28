import { FaBrain } from "react-icons/fa";
import CustomTitle from "../../components/CustomTitle/CustomTitle";
import SkillListCard from "../../components/SkillListView/SkillListView";
import { CustomSection } from "../../components/CustomSection/CustomSection";

export const Skills: React.FC = () => {
  const mySoftSkills: string[] = [
    "Liderança técnica",
    "Comunicação clara",
    "Resolução de problemas",
    "Visão estratégica",
    "Proatividade",
    "Organização",
    "Gestão de tempo",
    "Foco em resultados",
    "Pensamento crítico",
    "Curiosidade técnica",
    "Capacidade analítica",
    "Tomada de decisão",
    "Escuta ativa",
  ];

  const myHardSkills: string[] = [
    "Desenvolvimento: C# (.NET Core), Python, Java, TypeScript, React, Next.js, React Native, SQL, NoSQL (Cosmos DB, PostgreSQL)",
    "Infraestrutura: Azure, AWS, Docker, Kubernetes, VMware ESXi, Windows Server, Debian Server, NAS (OMV), Mikrotik, Ubiquiti, GPON, WMAN",
    "Integrações: APIs REST/SOAP, Swagger/OpenAPI, Postman, Webhooks, Microservices, TMS, APIs de logística e pagamento",
    "Varejo & E-commerce: Omnicanalidade, ERPs, TMS, Marketplaces, Integrações com sistemas legados",
    "Plataformas: VTEX, Shopify, Tray, Nuvemshop, Loja Integrada, Bling, Linx ERP/OMS, Totvs Moda, Sankhya, eMillennium, Microvix, DataSystem, Cigam, Presence",
    "Cloud & DevOps: GitHub Actions, CI/CD, Monitoramento, Otimização de custos e performance, Arquitetura escalável",
    "Gestão & Metodologias: Scrum, Kanban, Agile, Gestão de backlog e releases, Atlassian Suite (Jira, Confluence), Product Ownership técnico",
    "Documentação & Suporte: Documentação técnica (interna e pública), Suporte a times e parceiros (APIs/integradores), Experiência do desenvolvedor (DX)",
  ];
  return (
    <CustomSection id="skills" className="max-w-6xl mx-auto">
      <div className="flex justify-center items-center gap-4 mb-12">
        <FaBrain className="text-4xl md:text-5xl text-cyan-400" />
        <CustomTitle
          text="Habilidades"
          as="h2"
          className="text-4xl md:text-5xl font-bold"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillListCard skillList={mySoftSkills} title="Soft Skills" />
        <SkillListCard skillList={myHardSkills} title="Hard Skills" />
      </div>
    </CustomSection>
  );
};
