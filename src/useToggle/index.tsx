import { useCallback, useContext, useEffect, useRef, useState } from "react";


/**
 * 
 * @param initialState default false
 * @returns 
 */
const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState(state => !state), []);
  return [state, toggle];
}

export default useToggle;