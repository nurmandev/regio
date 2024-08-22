import React from "react";

const TextInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  iconComponent: IconComponent,
  ...props
}) => {
  return (
    <div className="mb-1 relative">
      {label && <label className="text-sm text-gray-500 block ">{label}</label>}
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-3 border-b bg-transparent ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:border-primary ${
            IconComponent ? "pr-10" : ""
          }`}
          {...props}
        />
        <div className="absolute right-3 top-2 text-gray-400">
          {IconComponent}
        </div>
        {error && <div className="text-red-500 text-xs">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
