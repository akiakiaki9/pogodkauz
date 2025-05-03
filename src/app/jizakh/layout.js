export const metadata = {
    title: "Погода в Джизаке — Прогноз на сегодня и 7 дней | Узбекистан",
    description: "Узнайте точный прогноз погоды в Джизаке на сегодня, завтра и неделю вперёд. Температура, осадки, ветер, давление и другие погодные данные по всем городам Узбекистана.",
    keywords: ["погода Джиззак", "погода в Узбекистане", "прогноз на неделю", "погода сегодня", "температура воздуха", "осадки", "ветер",
        "Джиззак Узбекистан", "Ob havo", "Pogoda", "Pogoda jizzax", "jizzax ob havo", "jizzax havo", "сколько градусов в Джизаке",
        "Джиззак об хаво", "jizzaxda nechi gradus"
    ].join(", "),
    authors: [{ name: "Pogodka uz", url: "https://pogodka.uz" }],
    creator: "Akbar Soft",
    publisher: "Pogodka uz",
    applicationName: "Прогноз погоды в Узбекистане",

    openGraph: {
        title: "Погода в Джизаке — Прогноз на сегодня и 7 дней",
        description: "Актуальная погода в Джизаке на сегодня и неделю. Температура, ветер, давление и другие данные в реальном времени.",
        url: "https://pogodka.uz/jizakh",
        siteName: "Pogodka uz",
        locale: "ru_RU",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Погода в Джизаке — Прогноз на неделю",
        description: "Подробный прогноз погоды в Джизаке, Узбекистан. Узнайте всё о температуре, ветре и осадках."
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