import { FaGraduationCap } from "react-icons/fa";

import CustomTitle from "../../components/CustomTitle/CustomTittle";
import type { Certificate } from "../../interfaces/competences/Certificate";
import CertificatesListView from "../../components/CertificatesListView/CertificateListView";


export const Competences = () => {
  const certificatesData: Certificate[] = [
    {
      id: "0",
      title: "Bacharelado em Sistemas de Informação (Presencial)",
      issuer: "Universidade Positivo",
      issueDate: "2019 a 2022",
      credentialUrl: undefined,
      credentialCode: "",
      skills: "Lógica de programação, POO",
    },
    {
      id: "1",
      title: "Expressões Regulares - Avançado",
      issuer: "Alura",
      issueDate: "nov de 2023",
      credentialCode: "ba75cd70-5bcd-48a4-b88b-dc924047e452",
      credentialUrl:
        "https://cursos.alura.com.br/certificate/ba75cd70-5bcd-48a4-b88b-dc924047e452",
      skills: "Regex, Produtividade",
    },
    {
      id: "2",
      title: "Certificado de Participação - CTI SUMMIT 2021",
      issuer: "Even3",
      issueDate: "dez de 2021",
      credentialCode: "1490170.8538853.6.8.586246391339173",
      credentialUrl: "https://www.even3.com.br/validar-certificado/",
      skills: "POO, Comunicação",
    },
    {
      id: "3",
      title: "LEI GERAL DE PROTEÇÃO DE DADOS (LGPD)",
      issuer: "Senai São Paulo",
      issueDate: "mar de 2021",
      credentialCode: "0009464/6367053",
      credentialUrl: undefined,
      skills: "Leis, Comunicação",
    },
    {
      id: "4",
      title: "Scrum Foundation Professional Certificate",
      issuer: "Certiprof",
      issueDate: "out de 2020",
      credentialCode: "48802766",
      credentialUrl: undefined,
      skills: "Metodologias Ágeis",
    },
    {
      id: "5",
      title: "Montagem e manutenção de Computadores ",
      issuer: "Fundação de Ação Social - FAS",
      issueDate: "mai de 2018",
      credentialCode: "931495afb5cf0bf7d8",
      credentialUrl: undefined,
      skills:
        "Suporte Técnico TI (Hardware e Software),  Comunicação,  Segurança, Redes de Computadores",
    },
    {
      id: "6",
      title: "Gestão de Redes de Computadores",
      issuer: "Fundação de Ação Social - FAS",
      issueDate: "jul de 2018",
      credentialCode: "931495afb5cf0bf7d8",
      credentialUrl: undefined,
      skills:
        "Suporte Técnico TI (Hardware e Software),  Comunicação,  Segurança, Redes de Computadores",
    },
  ];

  return (
    <section
      id="competences"
      className="px-10 my-10 py-10 text-white rounded-xl"
    >
      <div className="text-5xl flex justify-center gap-4">
        <FaGraduationCap />
        <CustomTitle
          text="Formações & Certificados"
          as="h3"
          className="font-bold text-gray-300 mb-8"
        />
      </div>
      {/* Formação Acadêmica */}
      {/* Certificados */}
      <CertificatesListView certificates={certificatesData} />
    </section>
  );
};