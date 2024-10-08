import { useState, useEffect } from "react";

export function useDelayUnmount(isMounted, delayTime) {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
    }

    return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv]);

  return showDiv;
}
