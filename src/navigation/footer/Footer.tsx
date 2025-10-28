import React from "react";
import { ContactLinksView } from "../../components/ContactLinksView/ContactLinksView";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-around items-center gap-4 py-8 px-4 font-mono text-base sm:text-lg border-t border-neutral-800">
      <p className="text-neutral-300">
        Feito com <span className="text-cyan-400">❤</span> por Lukas Burda
      </p>

      <div>
        <ContactLinksView
          showTitle={false}
          emailHref="mailto:lukasburdaferreira@gmail.com"
          linkedinHref="https://linkedin.com/in/lukasburdalongo"
          githubHref="https://github.com/lukas-burda"
        />
      </div>
    </footer>
  );
};
