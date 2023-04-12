import React from "react";

const SectionHeading = ({ className, title }) => {
  return (
    <p
      className={`${className} text-center text-2xl md:text-3xl font-bold  text-wrap py-2`}
    >
      {title}
      {/* {colored && <span className="text-indigo-700 font-bold">{colored}</span>} */}
    </p>
  );
};

export default SectionHeading;
