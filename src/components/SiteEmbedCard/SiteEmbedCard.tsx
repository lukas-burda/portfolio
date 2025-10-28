import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";

interface SiteEmbedCardProps {
  title: string;
  description: string;
  siteUrl: string;
}

export const SiteEmbedCard: React.FC<SiteEmbedCardProps> = ({
  title,
  description,
  siteUrl,
}) => {
  return (
    <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto mb-8 p-6 md:p-8">
      <CustomTitle
        text={title}
        as="h3"
        className="text-2xl font-bold text-cyan-400 mb-4"
      />
      <p className="text-neutral-300 mb-6">{description}</p>
      <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-cyan-400/30">
        <iframe
          src={siteUrl}
          title={title}
          loading="lazy"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};