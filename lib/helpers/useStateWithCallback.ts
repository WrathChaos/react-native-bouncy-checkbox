import {
  useRef,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
} from "react";

type Callback = (value?: any) => void;
type DispatchWithCallback = (value: any, callback?: Callback) => void;

function useStateWithCallback(
  initialState: any | (() => any),
): [any, DispatchWithCallback] {
  const [state, _setState] = useState(initialState);

  const callbackRef = useRef<Callback<any>>();
  const isFirstCallbackCall = useRef<boolean>(true);

  const setState = useCallback(
    (setStateAction: SetStateAction<any>, callback?: Callback<any>): void => {
      callbackRef.current = callback;
      _setState(setStateAction);
    },
    [],
  );

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    callbackRef.current?.(state);
  }, [state]);

  return [state, setState];
}

export default useStateWithCallback;
