import React from "react";

const LeetCodeIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* Orange curve */}
      <path
        d="M15.5 4.5C19 8 19 16 15.5 19.5"
        stroke="#FFA116"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* White bracket */}
      <path
        d="M11 2.5L5 12L11 21.5"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Grey middle line */}
      <line
        x1="10"
        y1="12"
        x2="18.5"
        y2="12"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LeetCodeIcon;