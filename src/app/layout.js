import "./styles/styles.css";
import "./styles/navbar.css";
import "./styles/shapka.css";
import "./styles/footer.css";
import "./styles/layout.css";
import "./styles/main.css";
import Script from "next/script";

export const metadata = {
  title: "Погода Узбекистан",
  description: "Актуальная погода по всем городам Узбекистана.",
  keywords: [
    "погода Узбекистан", "погода сегодня", "прогноз погоды", "Ташкент погода",
    "погода Бухара", "погода Самарканд", "погода по городам", "погода на неделю", "погода"
  ],
  applicationName: "Pogodka",
  creator: "Akbar Soft",
  publisher: "Pogodka.uz",
  authors: [{ name: "Pogodka Team", url: "https://pogodka.uz" }],
  metadataBase: new URL("https://pogodka.uz"),
  openGraph: {
    title: "Pogodka — Погода по городам Узбекистана",
    description: "Узнай точный прогноз погоды по всем регионам Узбекистана.",
    url: "https://pogodka.uz",
    siteName: "Pogodka.uz",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pogodka — Точная погода в Узбекистане",
    description: "Прогноз на сегодня и 7 дней по городам: Ташкент, Бухара, Самарканд и другие."
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/logo.PNG" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9N3NM42RZP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9N3NM42RZP');
        `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};