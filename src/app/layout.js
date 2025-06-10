import "./styles/styles.css";
import "./styles/navbar.css";
import "./styles/shapka.css";
import "./styles/footer.css";
import "./styles/layout.css";
import "./styles/main.css";

export const metadata = {
  title: "Pogodka — Точная погода в Узбекистане на сегодня и неделю",
  description: "Актуальная погода по всем городам Узбекистана: Ташкент, Самарканд, Бухара и другие. Прогноз на сегодня, завтра и 7 дней. Обновляется ежедневно.",
  keywords: [
    "погода Узбекистан", "погода сегодня", "прогноз погоды", "Ташкент погода",
    "погода Бухара", "погода Самарканд", "погода по городам", "погода на неделю"
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
  other: {
    'google-site-verification': 'HgB6pGNzNrKyMSevxhYHevLLadFRmLVKY1YVFDXUJD0',
    'yandex-verification': '645ddea7324c55ca',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/logo.PNG" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};