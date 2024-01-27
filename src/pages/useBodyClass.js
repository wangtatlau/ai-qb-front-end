import { useLayoutEffect } from 'react';

const useBodyClass = (className) => {
  useLayoutEffect(() => {
    // Add class to body when component mounts
    document.body.classList.add(className);

    // Remove class from body when component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]); // Only re-run if className changes
};

export default useBodyClass;
