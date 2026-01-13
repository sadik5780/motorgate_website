import "./globals.css";
import { Archivo } from "next/font/google";
import Header from "../components/Header/Header";

export const metadata = {
  title: "MotorGate",
  description: "Your car service is easier, smarter, and more honest",
};
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-white text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
