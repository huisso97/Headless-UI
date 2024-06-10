import { ReactNode, useEffect, useReducer } from "react";
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
  const [state, dispatch] = useReducer(stateReducer, {
    disclosureState: isOpen ? DisclosureStates.Open : DisclosureStates.Closed,
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
