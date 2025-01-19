"use client";

export default function CellRow() {
  return (
    <div className="flex">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}

function Cell() {
  return (
    <div className="flex h-[26px] w-[96px] border-[1px] border-neutral-300 m-[-0.5px]">
    </div>
  );
}
