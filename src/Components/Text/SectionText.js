import React from "react";

const SectionText = ({ className, title, colored }) => {
  return (
    <p className={`${className} text-lg text-gray-400 text-wrap py-2`}>
      {title}
      {colored && <span className="text-indigo-700 font-bold">{colored}</span>}
    </p>
  );
};

export default SectionText;
