import React, { ReactNode } from "react";

type Props = {
  name: string;
  label: string;
  children: ReactNode;
  error?: any | null;
};

export default function FormField({ label, children, name, error }: Props) {
  return (
    <div className="mt-[1rem] w-full px-2 py-4 bg-white rounded-[6px] shadow-sm border border-gray-100">
      <div className="field-control">
        {children}
        {error && (
          <p className="pt-4 text-red-300 text-[.9rem]">{error.message}</p>
        )}
      </div>
    </div>
  );
}