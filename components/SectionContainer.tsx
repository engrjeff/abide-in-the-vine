import React, { ReactNode } from "react";
import classnames from "classnames";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <div
      className={classnames(
        "md:container mx-auto px-6 md:px-20",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

export default SectionContainer;
