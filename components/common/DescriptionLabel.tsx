import React from "react";

interface DescriptionLabelProps {
  title: string;
}

const DescriptionLabel = ({ title }: DescriptionLabelProps) => {
  return (
    <p className="px-6 py-2 border-lightgray border rounded-full font-bold ">
      {title}
    </p>
  );
};

export default DescriptionLabel;
