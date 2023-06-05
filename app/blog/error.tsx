"use client";

export default async function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h1>Oops! {error.message}</h1>
    </div>
  );
}
