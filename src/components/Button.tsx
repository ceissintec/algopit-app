import React from 'react';

interface ButtonProps {
  bg: string;
  name: string;
}

const Button: React.FC<ButtonProps> = ({ bg, name }) => <button style={{ backgroundColor: bg }}>{name}</button>;

export default Button;
