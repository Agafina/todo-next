
import Navbar from "../components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Todo Next app",
  description: "Created by Agafina"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
       <div>{children}</div>
      </body>
    </html>
  );
}
