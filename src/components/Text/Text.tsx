import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
};

const Text = <C extends ElementType = "span">({
  as,
  children,
  ...props
}: TextProps<C> & ComponentPropsWithoutRef<C>) => {
  const Component = as || "span";
  return <Component {...props}>{children}</Component>;
};

export default Text;
export type { TextProps };
