export const metadata = {
    title: "Погода в Карши — Прогноз на сегодня и 7 дней | Узбекистан",
    description: "Узнайте точный прогноз погоды в Карши на сегодня, завтра и неделю вперёд. Температура, осадки, ветер, давление и другие погодные данные по всем городам Узбекистана.",
    keywords: ["погода Карши", "погода в Узбекистане", "прогноз на неделю", "погода сегодня", "температура воздуха", "осадки", "ветер",
        "Карши Узбекистан", "Ob havo", "Pogoda", "Pogoda karshi", "qarshi ob havo", "qarshi havo", "сколько градусов в Карши",
        "Карши об хаво", "qarshida nechi gradus"
    ].join(", "),
    authors: [{ name: "Pogodka uz", url: "https://pogodka.uz" }],
    creator: "Akbar Soft",
    publisher: "Pogodka uz",
    applicationName: "Прогноз погоды в Узбекистане",

    openGraph: {
        title: "Погода в Карши — Прогноз на сегодня и 7 дней",
        description: "Актуальная погода в Карши на сегодня и неделю. Температура, ветер, давление и другие данные в реальном времени.",
        url: "https://pogodka.uz/karshi",
        siteName: "Pogodka uz",
        locale: "ru_RU",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Погода в Карши — Прогноз на неделю",
        description: "Подробный прогноз погоды в Карши, Узбекистан. Узнайте всё о температуре, ветре и осадках."
    },

    viewport: "width=device-width, initial-scale=1.0",
    robots: "index, follow"
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                {children}
            </body>
        </html>
    );
};