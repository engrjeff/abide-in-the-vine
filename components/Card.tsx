import { cn } from "@utils/helpers";
import { type ReactNode } from "react";

function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border p-6 lg:p-8", className)}>
      {children}
    </div>
  );
}

export default Card;
