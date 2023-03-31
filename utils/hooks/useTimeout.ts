import { useEffect, useLayoutEffect, useRef } from "react";

export default function useTimeout(
  callback: () => void,
  delay: number | null,
  dep: any
) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const timeoutId = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(timeoutId);
  }, [delay, dep]);
}
