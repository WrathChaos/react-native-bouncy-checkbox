import {
  useRef,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
} from "react";

type Callback<T> = (value: T) => void;
type DispatchWithCallback<T> = (
  value: SetStateAction<T>,
  callback?: Callback<T>,
) => void;

function useStateWithCallback<T>(
  initialState: T | (() => T),
): [T, DispatchWithCallback<T>] {
  const [state, setStateInternal] = useState<T>(initialState);

  const callbackRef = useRef<Callback<T> | undefined>(undefined);
  const isFirstCallbackCall = useRef<boolean>(true);

  const setState = useCallback<DispatchWithCallback<T>>(
    (setStateAction, callback) => {
      callbackRef.current = callback;
      setStateInternal(setStateAction);
    },
    [],
  );

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    callbackRef.current?.(state);
    callbackRef.current = undefined;
  }, [state]);

  return [state, setState];
}

export default useStateWithCallback;
