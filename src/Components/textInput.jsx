import React, { forwardRef } from "react";

const TextInput = forwardRef(({ id, label, value, onChange, placeholder }, ref) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-4 sm:space-y-0">
      <label
        htmlFor={id}
        className="text-xl sm:text-2xl font-semibold text-white mt-6"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        ref={ref} // Ahora sí funciona
        onChange={onChange}
        className="p-2 w-40 sm:w-48 text-center rounded-lg bg-white text-black placeholder-black mt-6"
        placeholder={placeholder}
      />
    </div>
  );
});

export default TextInput;
