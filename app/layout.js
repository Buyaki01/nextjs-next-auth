import "./globals.css";


export const metadata = {
  title: "Next Auth",
  description: "Created by Ritta Sweta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
