import React, { forwardRef } from "react";
import clx from "classnames";
const Button = forwardRef<
  any,
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clx(
        "bg-abWhite active:opacity-80 dark:bg-abBlue-100 py-3 px-10  rounded-md shadow-md",
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export default Button;
