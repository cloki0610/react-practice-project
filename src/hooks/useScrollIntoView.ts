import { useRef, useEffect } from "react";

export const useScrollIntoView = (idName: string) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current && location.hash.includes(`#${idName}`)) {
      pageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [idName]);

  return pageRef;
};
