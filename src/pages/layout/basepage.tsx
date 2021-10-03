import { PropsWithChildren } from "react";
import "./BasePage.scss";

const BasePage = (props: PropsWithChildren<any>): JSX.Element => {
  return (
    <div className="basepage">
      <nav>
        <h1>X-Enterprise</h1>
      </nav>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default BasePage;
