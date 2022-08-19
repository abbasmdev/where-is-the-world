import React, { forwardRef } from "react";
import clx from "classnames";
const Select = forwardRef<
  any,
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
>(({ className, ...props }, ref) => {
  return (
    <select
      className={clx(
        "p-4 px-2 shadow-sm rounded-md dark:bg-abBlue-100",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Select.displayName = "Select";

export default Select;
