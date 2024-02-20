import { useRef, useEffect, useState, useCallback } from "react";

export default function UseCallbackComp() {
  const [changeFunction, setChangeFunction] = useState(0);
  const [doNotchangeFunction, setdoNotChangeFunction] = useState(0);

  const currentFunction = useCallback(
    () =>
      function () {
        console.log("some function");
      },
    [changeFunction]
  );

  usePrevious(currentFunction);

  return (
    <div className="App">
      changeFunction:{changeFunction}
      <button onClick={() => setChangeFunction((prev) => prev + 1)}>
        change function
      </button>
      donotchangeFunction:{doNotchangeFunction}
      <button onClick={() => setdoNotChangeFunction((prev) => prev + 1)}>
        do not change function
      </button>
    </div>
  );
}

export function usePrevious(fn) {
  const previous = useRef();
  const toReturn = previous.current;
  if (previous.current == fn) console.log("both are same");
  else console.log("both are diffrent");
  previous.current = fn;
  return toReturn;
}