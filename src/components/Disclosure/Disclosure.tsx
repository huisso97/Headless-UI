import { ReactNode, useReducer, useRef } from "react";
import {
  DisclosureContext,
  DisclosureStates,
  stateReducer,
} from "./DisclosureContext";

interface DisclosureProps {
  defaultOpen?: boolean;
  children: ReactNode;
}

const Disclosure = ({ defaultOpen = false, children }: DisclosureProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(stateReducer, {
    disclosureState: defaultOpen
      ? DisclosureStates.Open
      : DisclosureStates.Closed,
    buttonRef,
    panelRef,
  });

  return (
    <DisclosureContext.Provider value={{ state, dispatch }}>
      {children}
    </DisclosureContext.Provider>
  );
};

export default Disclosure;
