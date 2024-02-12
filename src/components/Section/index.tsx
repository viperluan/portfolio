import "./styles.scss";
import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return <div className="section">{children}</div>;
};

export { Section };
