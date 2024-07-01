import React, { ElementType } from "react";
interface IIconsProps {
  Icon: ElementType;
  className?: string;
  title?: string;
}

export const FormIcon = ({ Icon, className, title }: IIconsProps) => {
  return <Icon className={className} title={{ title }} />;
};
