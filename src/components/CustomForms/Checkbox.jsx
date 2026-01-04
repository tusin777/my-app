import { forwardRef } from "react";

export const Checkbox = forwardRef(({ label, onChange, onBlur, name }, ref) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {label}
    </label>
  </div>
));

Checkbox.displayName = "Checkbox";
