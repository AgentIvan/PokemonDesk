import React from 'react';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeaderNum = 1 | 2 | 3 | 4 | 5 | 6;
interface IProps {
  type: HeaderType | HeaderNum;
  children: React.ReactNode | undefined;
}

const Heading: React.FC<IProps> = ({ type, children }: IProps) => {
  const Tag = `h${type}`.replace('hh', 'h') as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

export default Heading;
