export const metadata = {
    title: "Погода в Андижане — Прогноз на сегодня и 7 дней | Узбекистан",
    description: "Узнайте точный прогноз погоды в Андижане на сегодня, завтра и неделю вперёд. Температура, осадки, ветер, давление и другие погодные данные по всем городам Узбекистана.",
    keywords: ["погода Андижан", "погода в Узбекистане", "прогноз на неделю", "погода сегодня", "температура воздуха", "осадки", "ветер",
        "Андижан Узбекистан", "Ob havo", "Pogoda", "Pogoda andijon", "andijon ob havo", "andijon havo", "сколько градусов в андижане",
        "андижон об хаво", "andijonda nechi gradus", "Andijon"
    ].join(", "),
    authors: [{ name: "Pogodka uz", url: "https://pogodka.uz" }],
    creator: "Akbar Soft",
    publisher: "Pogodka uz",
    applicationName: "Прогноз погоды в Узбекистане",

    openGraph: {
        title: "Погода в Бухаре — Прогноз на сегодня и 7 дней",
        description: "Актуальная погода в Бухаре на сегодня и неделю. Температура, ветер, давление и другие данные в реальном времени.",
        url: "https://pogodka.uz/andijan",
        siteName: "Pogodka uz",
        locale: "ru_RU",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Погода в Андижане — Прогноз на неделю",
        description: "Подробный прогноз погоды в Андижане, Узбекистан. Узнайте всё о температуре, ветре и осадках."
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