import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-w-min w-full h-screen bg-gradient-radial-at-center-top to-background-to from-background-from">
      {children}
    </div>
  );
};

export default Background;
