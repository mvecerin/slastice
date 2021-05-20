import React from "react";

interface Props {
  name: string;
  marginRight?: string;
  color?: string;
}

export const Icon = ({ name, marginRight, color }: Props) => {
  const margin = `${marginRight ? marginRight : "mr-2"}`;
  const fontColor = `${color && `text-${color}`}`;
  return <i className={`bi-${name} ${margin} ${fontColor}`}></i>;
};
