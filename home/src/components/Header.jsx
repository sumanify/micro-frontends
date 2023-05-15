import React from "react";

export default function Header({ app }) {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">
          Fidget Spinner World | {app.name}
        </h1>
      </div>
    </header>
  );
}
