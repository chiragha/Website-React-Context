import { useState } from "react";
import React from "react";

export default function Accordion({ title }) {

  const [open, setOpen] = useState(false);

  return (

    <div className="border-t py-3">

      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span>{open ? "-" : "+"}</span>
      </div>

      {open && (
        <p className="text-sm text-gray-600 mt-2">
          This is sample content for {title}.
        </p>
      )}

    </div>

  );
}