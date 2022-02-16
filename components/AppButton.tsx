import React, { ReactNode } from "react";

type Size = "small" | "medium" | "large";

interface AppButtonProps {
  children: ReactNode;
  size?: Size;
  onClick?: () => void;
}

const classMap: Record<Size, string> = {
  large: "app-btn large",
  small: "app-btn small",
  medium: "app-btn medium",
};

const AppButton = (props: AppButtonProps) => {
  const { size, onClick, children } = props;
  return (
    <button className={classMap[size ? size : "large"]} onClick={onClick}>
      {children}
    </button>
  );
};

export default AppButton;
