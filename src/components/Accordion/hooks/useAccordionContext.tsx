import { Context, useContext } from "react";
import { AccordionContextType } from "../components/AccordionProvider";

const useAccordionContext = (
  AccordionContext: Context<AccordionContextType>
) => {
  return useContext(AccordionContext);
};

export default useAccordionContext;
