import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
};

const Card = <C extends ElementType = "div">({
  as,
  children,
  ...props
}: CardProps<C> & ComponentPropsWithoutRef<C>) => {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
};

export default Card;
export type { CardProps };
