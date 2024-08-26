import React from "react";

interface ReviewCardProps {
  name: string;
  category: string;
  content: string;
}

const ReviewCard = ({ name, category, content }: ReviewCardProps) => {
  return (
    <div className="shadow-xl rounded-lg px-8 py-6">
      <div className="flex gap-2 items-center">
        <h4 className="text-lg font-bold">{name}</h4>
        <span className="text-lightgray font-bold text-sm">| {category}</span>
      </div>
      <p className="my-2 text-sm">{content}</p>
    </div>
  );
};

export default ReviewCard;
