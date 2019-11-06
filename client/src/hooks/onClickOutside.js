import { useEffect } from 'react';

/*Given a handler function, apply when mouse click outside of given ref
How to use: 
    const ref = useRef();
    useOnClickOutside(ref, useCallback(() => setIsVisible(false)));
    <div ref={ref}> //this ref will be effected
*/
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
