"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ type }) {
  const { pending } = useFormStatus();
  return (
    <button type={type} disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
