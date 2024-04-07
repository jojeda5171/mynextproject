import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "@/app/globals.css"

export const metadata={
  title: "Mi Tienda con Next JS",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce",
}

const roboto=Roboto({
  weight:["300", "400", "500"],
  styles:["italic", "normal"],
  subsets:["latin"],
})
export default function RootLayout({ children }) {
  return (
    <html>
      
      <body className={roboto}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
