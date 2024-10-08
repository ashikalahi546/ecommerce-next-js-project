import { Poppins } from "next/font/google";
import "./globals.css";
import TopNavber from "@/components/TopNavber";
import Navber from "@/components/Navber";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
          <TopNavber />
          <div className="">
            <Navber />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
