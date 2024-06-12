import React from "react";
import { Feedback } from "../types";

interface FeedbackItemProps {
  feedback: Feedback;
}

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ feedback }) => {
  return (
    <div className="border rounded p-4 shadow-md mt-4">
      <div className=" overflow-auto">
        <b className=" capitalize">{feedback.name}</b>: {feedback.feedback}
      </div>
    </div>
  );
};
