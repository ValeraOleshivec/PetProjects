import { useEffect } from "react";
export function useKey(keyCode, action) {
  useEffect(
    function () {
      function callBack(e) {
        if (e.code.toLowerCase() === keyCode.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callBack);
      return () => document.removeEventListener("keydown", callBack);
    },
    [action, keyCode]
  );
}
