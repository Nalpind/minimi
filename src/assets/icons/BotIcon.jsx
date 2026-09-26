import * as React from "react";

function BotIcon(props) {
  return (
    <svg width={200} height={200} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M148.133 29.5H51.867a2 2 0 00-1.995 1.863l-9.742 141.75a2 2 0 001.747 2.122l36.246 4.53a2 2 0 002.215-1.626l17.694-97.316c.398-2.19 3.538-2.19 3.936 0l17.694 97.316a1.998 1.998 0 002.215 1.626l36.246-4.53a2 2 0 001.747-2.122l-9.742-141.75a2 2 0 00-1.995-1.863z"
        stroke="#000"
        strokeWidth={5}
      />
    </svg>
  );
}

export default BotIcon;
