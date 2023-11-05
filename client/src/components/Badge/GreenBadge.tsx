import React from "react";

const GreenBadge = ({ label }: { label: string | number }) => {
  return (
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
      {label}
    </span>
  );
};

export default GreenBadge;
