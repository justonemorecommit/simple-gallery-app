import React from "react";

type TextInputProps = {
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput(props: TextInputProps) {
  return (
    <input
      className="block w-full px-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      {...props}
    />
  );
}
