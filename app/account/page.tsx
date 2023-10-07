import { Metadata } from "next";

export const dynamic = "force-static"; // not necessary but forces static generation

export const metadata: Metadata = {
  title: "This is new account page",
  description: "Account Page",
};

export default function Account() {
  return (
    <main>
      <h1 className="text-xl">Account Page</h1>
      <p className="text-sm">
        Dur dur dur lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
    </main>
  );
}
