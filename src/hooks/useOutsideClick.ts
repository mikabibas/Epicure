import { useEffect, RefObject, MouseEvent, useCallback } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = useCallback(
    (event: MouseEvent<Document>) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick as any);

    return () => {
      document.removeEventListener("click", handleClick as any);
    };
  }, [handleClick]);
};

export default useOutsideClick;
