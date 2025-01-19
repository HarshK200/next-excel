import { useState } from "react";

export default function Cell(/*{id: string, value: string, editCell idstring, activeCell idstring}*/) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  if (isEditing) {
    return (
      <input
        className="text-sm h-[26px] w-[96px] outline outline-blue-200 border-[2px] border-blue-600"
        autoFocus
      />
    );
  }

  return (
    <div
      className={`flex h-[26px] w-[96px] ${isActive ? "border-[2px] border-blue-600" : "border-[1px] border-neutral-300"}`}
      onDoubleClick={() => {
        setIsEditing(true);
      }}
      onClick={() => {
        setIsActive(true);
      }}
    ></div>
  );
}
