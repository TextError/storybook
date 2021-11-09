import React from "react";

import './center.css';

const Center: React.FC<IProps> = ({ children }) => <div className='center'>{ children }</div>;

interface IProps {
  children: React.ReactNode
};

export default Center;