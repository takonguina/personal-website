import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tommy Akonguina",
  description:
    "Tommy is a web and mobile developer specializing in creating responsive, efficient, and user-centered applications. Passionate about building mobile applications with React Native and Expo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
