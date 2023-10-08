import { Metadata } from "next";

export const dynamic = "force-static"; // not necessary but forces static generation

export const metadata: Metadata = {
  title: "This is new account page",
  description: "Account Page",
};

export default function Account() {
  return (
    <main>
      <h1 className="text-xl">WooOooo changing this vs code</h1>
      <p className="text-sm">
        Yoyoyoyoy from vscode lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </p>
    </main>
  );
}
