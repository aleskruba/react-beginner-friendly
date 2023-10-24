import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  // className: string;
}

const AlertButton = ({ children, onClick }: Props) => {
  return (
    <div>
      <button className="btn btn-primary mt-5" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default AlertButton;
