import React from "react";
// import bootstrap from 'bootstrap'

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
  alertVisible: boolean;
}
const Button = ({ children, onClick, alertVisible,color = "primary" }: Props) => {


  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children} {alertVisible.toString()}
      </button>
    </div>
  );
};

export default Button;
