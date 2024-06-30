import { ReactNode, createContext, useState } from "react";

interface AccordionContextType {
  activeHeader: ReactNode | null;
  toggleHeader: (header: ReactNode) => void;
}

const initialAccordionContext: AccordionContextType = {
  activeHeader: null,
  toggleHeader: () => {},
};

const AccordionContext = createContext<AccordionContextType>(
  initialAccordionContext
);

const AccordionProvider = ({ children }: { children: ReactNode }) => {
  const [activeHeader, setActiveHeader] = useState<ReactNode | null>(null);

  const toggleHeader = (header: ReactNode) => {
    setActiveHeader((prevHeader) => (prevHeader === header ? null : header));
  };

  return (
    <AccordionContext.Provider value={{ activeHeader, toggleHeader }}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;

export { AccordionContext };
export type { AccordionContextType };
