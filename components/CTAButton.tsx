import React from "react";
import classnames from "classnames";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  cta?: boolean;
  isLink?: boolean;
  href?: string;
  className?: string;
}

const CTAButton = (props: CTAButtonProps) => {
  const { isLink, href, text, className } = props;

  const classes = classnames("btn-cta", className);

  if (isLink && href)
    return (
      <Link href={href}>
        <a className={classes} aria-label={text}>
          {text}
        </a>
      </Link>
    );

  return (
    <button className={classes} aria-label={text}>
      <span>{text}</span>
    </button>
  );
};

export default CTAButton;
