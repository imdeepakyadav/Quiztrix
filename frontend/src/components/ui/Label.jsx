import React from "react";

export function Label({ children, className, ...props }) {
  return (
    <label {...props} className={`block mb-2 ${className}`}>
      {children}
    </label>
  );
}
