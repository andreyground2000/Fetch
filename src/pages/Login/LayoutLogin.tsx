import { ReactElement } from "react";

interface LayoutLoginProps {
  children: ReactElement;
}

export const LayoutLogin = ({ children }: LayoutLoginProps) => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      {children}
    </section>
  );
};
