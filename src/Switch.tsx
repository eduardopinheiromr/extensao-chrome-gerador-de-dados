import React from "react";

type Props = {
  label?: string;
  value: boolean;
  setValue: (value: boolean) => void;
};

export default function Switch({ label, value, setValue }: Props) {
  return (
    <div className="switch-container">
      <span>{label}</span>
      <div className="switch">
        <input
          checked={value}
          onChange={e => setValue(e.target.checked)}
          type="checkbox"
          id="toggleAll"
        />
        <label htmlFor="toggleAll"></label>
      </div>
    </div>
  );
}
