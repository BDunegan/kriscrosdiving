import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeProviderWrapper from "../components/ui/ThemeProviderWrapper";
import StyledComponentsRegistry from "../components/ui/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "KrisCros Diving | Professional Scuba Tours & Training",
  description: "Cozumel's premier diving experience. Cavern, reef, and group tours. PADI training. Safety-focused, professional, and fun!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Header />
              <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{children}</main>
              <Footer />
            </div>
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
