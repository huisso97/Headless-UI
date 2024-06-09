import { HTMLAttributes, ReactNode, useContext } from "react";
import { DisclosureContext, DisclosureStates } from "./DisclosureContext";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DisclosurePanel = ({ children, ...props }: PanelProps) => {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error("DisclosurePanel must be used within a Disclosure");
  }

  const { state } = context;

  return (
    <div
      ref={state.panelRef}
      hidden={state.disclosureState !== DisclosureStates.Open}
      {...props}
    >
      {children}
    </div>
  );
};

export default DisclosurePanel;
