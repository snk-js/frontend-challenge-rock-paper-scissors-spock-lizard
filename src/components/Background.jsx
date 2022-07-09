import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-w-min p-5 w-full min-h-[150vh] bg-gradient-radial-at-center-top to-background-to from-background-from">
      {children}
    </div>
  );
};

export default Background;
