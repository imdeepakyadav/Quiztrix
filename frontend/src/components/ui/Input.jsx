import React from "react";

export function Input({ className, ...props }) {
  return (
    <input {...props} className={`px-4 py-2 border rounded ${className}`} />
  );
}
