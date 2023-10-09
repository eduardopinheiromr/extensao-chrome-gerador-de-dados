import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

export default function Button({ ...props }: Props) {
  return <button style={baseStyles} {...props} />;
}

const baseStyles = {
  // fontFamily: "",
  fontWeight: "bold",
  minWidth: "200px",
  backgroundColor: "#FF5148",
  border: "none",
  color: "white",
  padding: "12px 16px",
  fontSize: "18px",
  cursor: "pointer",
  borderRadius: "3px",
  margin: "5px",
  outline: "none",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    backgroundColor: "#007bbb",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
