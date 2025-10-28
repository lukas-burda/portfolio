import React from 'react';

interface CustomTitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const CustomTitle: React.FC<CustomTitleProps> = ({
  text,
  as: Component = 'h2',
  className = '',
}) => {
  return (
    <Component className={className}>
      {text}
    </Component>
  );
};

export default CustomTitle;

