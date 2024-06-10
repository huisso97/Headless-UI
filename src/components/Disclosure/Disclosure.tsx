import { ReactNode, useEffect, useReducer, useRef } from "react";
import {
  DisclosureContext,
  DisclosureStates,
  stateReducer,
} from "./DisclosureContext";

interface DisclosureProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  children: ReactNode;
}

const Disclosure = ({ isOpen, onToggle, children }: DisclosureProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(stateReducer, {
    disclosureState: isOpen ? DisclosureStates.Open : DisclosureStates.Closed,
    buttonRef,
    panelRef,
  });

  useEffect(() => {
    if (onToggle) {
      onToggle(state.disclosureState === DisclosureStates.Open);
    }
  }, [state.disclosureState, onToggle]);

  return (
    <DisclosureContext.Provider value={{ state, dispatch }}>
      {children}
    </DisclosureContext.Provider>
  );
};

export default Disclosure;
