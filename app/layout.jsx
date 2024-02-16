import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";


export const metadata = {
  title: "Photo Library",
  description: "A photo sharing application",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body >
        <Provider>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
