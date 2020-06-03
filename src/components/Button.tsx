import React, {FunctionComponent} from "react";
import { Button as AntButton } from "antd-mobile";

type ButtonProps = {
  children: JSX.Element[] | JSX.Element|String
}
const Button: FunctionComponent<ButtonProps> = ({children, ...props}) => <AntButton {...props}>{children}</AntButton>


export default Button
