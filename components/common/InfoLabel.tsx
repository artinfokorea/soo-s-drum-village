import React from "react";

interface InfoLabelProps {
  title: string;
}

const InfoLabel = ({ title }: InfoLabelProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-2xl font-bold tracking-wider">{title}</h3>
      <div className="border-lightgray border w-40 md:w-72" />
    </div>
  );
};

export default InfoLabel;
