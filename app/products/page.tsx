import { Metadata } from "next";

export const dynamic = "force-static"; // not necessary but forces static generation

export const metadata: Metadata = {
  title: "Changed Products Page",
  description: "Products Page",
};

export default function Account() {
  return (
    <main>
      <h1 className="text-xl">Products Page</h1>
      <p className="text-sm">
        Changed Products ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
    </main>
  );
}
