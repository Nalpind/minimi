import * as React from "react";

function EyesIcon(props) {
  return (
    <svg width={200} height={200} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={100} cy={100} r={78.5} stroke="#000" strokeWidth={5} />
      <path
        d="M81 147.28c18.165 9.338 44.037 4.944 60-14.28M90 119c8.615 6.806 15.974 3.63 21 0M114 62c13.128-5.104 24.342-2.722 32 0M55 64c13.128 5.104 24.342 2.722 32 0"
        stroke="#000"
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <path d="M55 85.128c16.552 7.04 17.434-1.233 32 0" stroke="#000" strokeWidth={10} strokeLinecap="round" />
      <path
        d="M115.044 85.135c1.236-19.446 28.25-18.137 29.879-.31.09.98-.641 1.826-1.616 1.967-13.962 2.015-23.047 1.113-26.981.14-.81-.2-1.335-.963-1.282-1.797z"
        stroke="#000"
        strokeWidth={6}
        strokeLinecap="round"
      />
      <path d="M139 81.563c0 5.28-4.253 8.437-9.5 8.437s-9.5-3.156-9.5-8.438c0-5.28 4.253-9.562 9.5-9.562s9.5 4.281 9.5 9.563z" fill="#000" />
    </svg>
  );
}

export default EyesIcon;
