import React from "react";
import { Icon } from "./Icon";

interface Props {
  title: string;
  icon: string;
}

export const Title = ({ title, icon }: Props) => {
  return (
    <div>
      <h2 className="h4">
        <Icon name={icon}></Icon>
        {title}
      </h2>
    </div>
  );
};
