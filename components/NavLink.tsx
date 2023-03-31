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

  const linkClasses = cn(
    "font-medium text-brand-gray100 hover:text-brand-primary dark:hover:text-brand-primary dark:text-brand-coolnavy300",
    {
      "text-brand-primary dark:text-brand-primary": isActive,
    }
  );

  return <Link className={linkClasses} {...props} />;
}

export default NavLink;
