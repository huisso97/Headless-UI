import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import {
  ActionTypes,
  DisclosureContext,
  DisclosureStates,
} from "./DisclosureContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DisclosureButton = ({ children, ...props }: ButtonProps) => {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("DisclosureButton must be used within a Disclosure");
  }

  const { state, dispatch } = context;

  return (
    <button
      onClick={() => dispatch({ type: ActionTypes.ToggleDisclosure })}
      aria-expanded={state.disclosureState === DisclosureStates.Open}
      {...props}
    >
      {children}
    </button>
  );
};

export default DisclosureButton;
