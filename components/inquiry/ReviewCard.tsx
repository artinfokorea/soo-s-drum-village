import React from "react";

interface ReviewCardProps {
  name: string;
  content: string;
}

const ReviewCard = ({ name, content }: ReviewCardProps) => {
  return (
    <div className="shadow-xl rounded-lg px-8 py-6">
      <div className="flex gap-2 items-center">
        <h4 className="text-lg font-bold">{name} 수강생</h4>
      </div>
      <p className="my-2 text-sm">{content}</p>
    </div>
  );
};

export default ReviewCard;
