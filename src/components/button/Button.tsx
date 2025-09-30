import React from 'react';
import './styles.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="button">{children}</button>;
};

export default Button;
