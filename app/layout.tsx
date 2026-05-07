import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExpenseAI — AI Categorizes Freelancer Expenses for Taxes",
  description: "Upload receipts and bank statements. AI categorizes your expenses according to tax deduction rules. Built for freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ecefba6-a891-4044-a715-93df5c3f4661"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
