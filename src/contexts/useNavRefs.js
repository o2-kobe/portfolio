import { useContext } from "react";
import { RefsContext } from "./RefContexts";

function useNavRefs() {
  const context = useContext(RefsContext);
  if (!context) throw new Error("RefsProvider was used outside");

  return context;
}

export { useNavRefs };
