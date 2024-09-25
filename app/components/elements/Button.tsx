import React from "react"

interface ButtonCustomProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({ children, className }) => {
  return (
    <button className={`text-white bg-black p-2 rounded ${className}`}>
      {children}
    </button>
  )
}
