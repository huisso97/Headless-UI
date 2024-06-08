import { ComponentPropsWithoutRef, ElementType } from "react";

type FormControlProps<C extends ElementType> = {
  as?: C;
  name: string;
};

const FormControl = <C extends ElementType = "input">({
  as,
  name,
  ...props
}: FormControlProps<C> & ComponentPropsWithoutRef<C>) => {
  const Component = as || "input";
  return <Component name={name} {...props} />;
};

export default FormControl;
export type { FormControlProps };
