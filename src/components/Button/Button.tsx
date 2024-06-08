import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

const Button = <C extends ElementType = "button">({
  as,
  children,
  ...props
}: ButtonProps<C>) => {
  const Component = as || "button";
  return <Component {...props}>{children}</Component>;
};

export default Button;
export type { ButtonProps };
