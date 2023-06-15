import { cn } from "@utils/helpers";
import Image from "next/image";
import { useState, type ComponentProps } from "react";

function AppImage({
  src,
  alt,
  className,
  ...props
}: ComponentProps<typeof Image>) {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder='blur'
      {...props}
      className={cn(
        className,
        loading ? "grayscale blur-2xl" : "grayscale-0 blur-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default AppImage;
