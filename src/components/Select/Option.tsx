import React, { forwardRef } from "react";
import clx from "classnames";
const Option = forwardRef<
  any,
  React.DetailedHTMLProps<
    React.OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >
>(({ className, ...props }, ref) => {
  return <option className={clx(className)} ref={ref} {...props} />;
});

Option.displayName = "Option";

export default Option;
