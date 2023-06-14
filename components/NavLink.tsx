import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import type { PropsWithChildren } from "react";

import { cn } from "@utils/helpers";

function NavLink(props: PropsWithChildren<LinkProps>) {
  const router = useRouter();

  const isActive =
    props.href === "/"
      ? router.pathname === props.href
      : router.pathname.includes(props.href.toString());

  const linkClasses = cn("text-sm px-5 py-2 rounded-full inline-flex", {
    "bg-gradient-to-r from-primary to-accent text-white": isActive,
  });

  return <Link className={linkClasses} {...props} />;
}

export default NavLink;
