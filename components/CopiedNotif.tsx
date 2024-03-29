import React, { useState } from "react";
import useTimeout from "@utils/hooks/useTimeout";
import classnames from "classnames";

interface CopiedNotifProps {
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const CopiedNotif = (props: CopiedNotifProps) => {
  const { copied, setCopied } = props;

  const closeCallback = () => {
    if (!copied) return;
    setCopied(false);
  };

  useTimeout(closeCallback, 3000, copied);

  const copyAlertClass = classnames("copy-alert", {
    "translate-y-0 opacity-1": copied,
    "translate-y-6 opacity-0": !copied,
  });
  return <div className={copyAlertClass}>Link copied!</div>;
};

export default CopiedNotif;
