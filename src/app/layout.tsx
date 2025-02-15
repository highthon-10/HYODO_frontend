import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYODO",
  description: "효도하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
