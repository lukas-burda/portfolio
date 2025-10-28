interface CustomSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const CustomSection: React.FC<CustomSectionProps> = ({ 
  id, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`min-h-screen py-16 ${className}`} id={id}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};
