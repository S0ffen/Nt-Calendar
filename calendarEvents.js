var calendarevents = [
  {
    id: "up_SP",
    name: "Upanie SP",
    badge: "19/11/2024 - 22/11/2024",
    date: ["January/19/2024", "January/22/2024"], // Date range
    description:
      "Zafunduj ulepszenie kartom specjalisty: przez krótki czas masz 50% więcej szansy na sukces!", // Event description (optional)
    type: "event",
    color: "#F75647", // Event custom color (optional)
  },
  // {
  //   id: "event1", // Event's ID (required)
  //   name: "New Year", // Event name (required)
  //   date: "January/3/2024", // Event date (required)
  //   type: "holiday", // Event type (required)
  //   everyYear: true, // Same event every year (optional)
  // },
  {
    id: "Double_Gold",
    name: "Double Gold",
    badge: "12/01/2024 - 15/01/2024", // Event badge (optional)
    date: ["January/12/2024", "January/15/2024"], // Date range
    description: "Double gold od 11 w Piątek do 11 w Poniedziałek", // Event description (optional)
    type: "event",
    color: "#F0DD55", // Event custom color (optional)
  },
  {
    id: "Ticket_SPP",
    name: "Event na bilety",
    badge: "05/01/2024 - 08/01/2024", // Event badge (optional)
    date: ["January/5/2024", "January/8/2024"], // Date range
    description:
      "Od 05.01. (11:00 CET) do 08.01. (11:00 CET) otrzymasz +50% szansy na osiągniecie wyższych poziomów podczas ulepszania umiejętności specjalisty partnera!", // Event description (optional)
    type: "event",
    color: "#EF6F0D", // Event custom color (optional)
  },
  {
    id: "Double_Drop",
    name: "Double Drop",
    badge: "22/12/2023 - 25/12/2023",
    date: ["December/22/2023", "December/25/2023"], // Date range
    description:
      "Podwójne dropy przedmiotów (pokonaj potwory - tym razem masz podwójną szansę na zdobycie przedmiotów)", // Event description (optional)
    type: "holiday",
    color: "#FF4FAA", // Event custom color (optional)
  },
  {
    id: "Double_EXP",
    name: "Double EXP",
    badge: "22/12/2023 - 28/12/2023",
    date: ["December/22/2023", "December/28/2023"], // Date range
    description:
      "Niezależnie od tego, czy pokonujesz potwory, czy też kończysz misje - za jedno i drugie od 22.12. (godz. 0:00 CET) do 28.12. (godz. 23:59 CET) otrzymasz podwójną liczbę punktów doświadczenia.", // Event description (optional)
    type: "event",
    color: "#E5351D", // Event custom color (optional)
  },
  {
    id: "Fusion_SPP",
    name: "Fuzja SPP",
    badge: "15/12/2023 - 18/12/2023",
    date: ["December/15/2023", "December/18/2023"], // Date range
    description:
      "Podkręć tempo i korzystaj z 50% więcej punktów doświadczenia podczas fuzji specjalisty partnera! Event trwa od 15.12. o godz. 11:00 do 18.12. o godz. 11:00 (CET).", // Event description (optional)
    type: "event",
    color: "#41EFEB", // Event custom color (optional)
  },
  {
    id: "Double_IC",
    name: "Double BB",
    badge: "08/12/2023 - 11/12/2023",
    date: ["December/08/2023", "December/11/2023"], // Date range
    description:
      "O każdej pełnej godzinie rozpoczyna się Błyskawiczna Bitwa na kanałach 1, 2 i 3 Błyskawiczna Bitwa Azgobasa rozpoczyna się na kanałach 4, 5 i 6 o następujących godzinach: 11:30, 12:30, 16:30, 17:30, 20:30, 21:30, 22:30 oraz 23:30.", // Event description (optional)
    type: "event",
    color: "#668A2A", // Event custom color (optional)
  },
  {
    id: "Hazard",
    name: "Hazardowanie",
    badge: "01/12/2023 - 04/12/2023",
    date: ["December/01/2023", "December/04/2023"], // Date range
    description:
      "O 50% większe szanse na pomyślne zmiennie poziomu unikalności.", // Event description (optional)
    type: "event",
    color: "#ABFA61", // Event custom color (optional)
  },
  {
    id: "up_EQ",
    name: "Upanie EQ",
    badge: "28/11/2023 - 01/12/2023",
    date: ["November/28/2023", "December/01/2023"], // Date range
    description:
      "50% większe szanse na pomyślne ulepszenie broni i wyposażenia (od poziomu +1 do +10). Dzięki temu spada ryzyko, że przedmiot zostanie zniszczony podczas ulepszenia.", // Event description (optional)
    type: "holiday",
    color: "#AB7B61", // Event custom color (optional)
  },
  {
    id: "Double_Box",
    name: "Double boxy",
    badge: "24/11/2023 - 27/11/2023",
    date: ["November/24/2023", "November/27/2023"], // Date range
    description:
      "Od 24.11. (11:00 CET) do 27.11. (11:00 CET) masz większą o 75% szansę na zgarnięcie, nie jednego, lecz dwóch pudełek rajdu - taką szansę masz we wszystkich rajdach w NosTale!", // Event description (optional)
    type: "event",
    color: "#7EC8EB", // Event custom color (optional)
  },
  {
    id: "up_SP",
    name: "Upanie SP",
    badge: "17/11/2023 - 20/11/2023",
    date: ["November/17/2023", "November/20/2023"], // Date range
    description:
      "Zafunduj ulepszenie kartom specjalisty: przez krótki czas masz 50% więcej szansy na sukces!", // Event description (optional)
    type: "event",
    color: "#F75647", // Event custom color (optional)
  },
  {
    id: "Double_IC",
    name: "Double BB",
    badge: "15/11/2023 - 17/11/2023",
    date: ["November/15/2023", "November/17/2023"], // Date range
    description:
      "O każdej pełnej godzinie rozpoczyna się Błyskawiczna Bitwa na kanałach 1 i 2.<br><br>  Błyskawiczna Bitwa Azgobasa rozpoczyna się na kanałach 3 i 4 o następujących godzinach: 11:30, 12:30, 16:30, 17:30, 20:30, 21:30, 22:30 oraz 23:30.", // Event description (optional)
    type: "holiday",
    color: "#7D119B", // Event custom color (optional)
  },
  {
    id: "Double_Drop&Gold",
    name: "Double Drop&Gold",
    badge: "10/11/2023 - 13/11/2023",
    date: ["November/10/2023", "November/13/2023"], // Date range
    description: "Podwójna Szansa na Drop Złota<br>Podwójny Drop Przedmiotów", // Event description (optional)
    type: "event",
    color: "#FF4FAA", // Event custom color (optional)
  },
  {
    id: "up_Tatu",
    name: "Tatuaże",
    badge: "03/11/2023 - 06/11/2023",
    date: ["November/03/2023", "November/06/2023"], // Date range
    description:
      "Podczas eventu szansa na ulepszenie tatuaży zwiększy się o 30% (poziom +1 do maksymalnie poziomu 9).<br> Jednocześnie zmniejsza się niebezpieczeństwo, że ulepszenie się nie powiedzie.", // Event description (optional)
    type: "event",
    color: "#60F0B4", // Event custom color (optional)
  },
  {
    id: "Reputation&PDR",
    name: "Tatuaże",
    badge: "27/10/2023 - 30/10/2023",
    date: ["October/27/2023", "October/30/2023"], // Date range
    description:
      "Teraz możesz obłowić się podwójnie i poczwórnie: od 27.10. o godz. 11:00 CEST do 30.10. o godz. 11:00 CET korzystasz ze 100% dopalacza dla PDR oraz 400% dopalacza dla punktów reputacji!", // Event description (optional)
    type: "event",
    color: "#FDD7CF", // Event custom color (optional)
  },
  {
    id: "Ticket_SPP",
    name: "Event na bilety",
    badge: "20/10/2023 - 23/10/2023",
    date: ["October/20/2023", "October/23/2023"],
    datediff: "10/20/2023",
    description:
      "Od 20.10. (11:00 CEST) do 23.10. (11:00 CEST) otrzymasz +50% szansy na osiągniecie wyższych poziomów podczas ulepszania umiejętności specjalisty partnera!<br><br>Za każdym razem, gdy ulepszasz umiejętność specjalisty partnera, możesz osiągnąć bardzo wysoki poziom umiejętności lub bardzo niski poziom. Poziomy są podzielone na S (najlepszy poziom), A, B, C, D, E oraz F (najniższy poziom). Wprawdzie ulepszenia z pewności się powiodą, ale oczywiście chcesz osiągnąć maksymalny wynik. Ten event oferuje Ci możliwość zwiększenia szansy na osiągnięcie poziomu S, A i B!", // Event description (optional)
    type: "event",
    color: "#EF6F0D", // Event custom color (optional)
  },
  {
    id: "Double_EXP",
    name: "Double EXP",
    badge: "13/10/2023 - 17/10/2023",
    date: ["October/13/2023", "October/17/2023"], // Date range
    type: "event",
    color: "#E5351D", // Event custom color (optional)
  },
  {
    id: "Perfection",
    name: "Event PP",
    badge: "06/10/2023 - 09/10/2023",
    date: ["October/06/2023", "October/09/2023"],
    description:
      "Podczas eventu perfekcji od 06.10. (11:00) do 09.10. (11:00 CEST) macie większą szansę na udoskonalenie do perfekcji kart specjalisty używając do tego klejnotów (do +100), co sprawi, że Wasze karty staną się o wiele potężniejsze.", // Date range
    type: "event",
    color: "#E50099", // Event custom color (optional)
  },
  {
    id: "Double_IC",
    name: "Double BB",
    badge: "29/09/2023 - 02/10/2023",
    date: ["September/29/2023", "October/02/2023"],
    description:
      "O każdej pełnej godzinie rozpoczyna się Błyskawiczna Bitwa na kanałach 1 i 2.<br><br>  Błyskawiczna Bitwa Azgobasa rozpoczyna się na kanałach 3 i 4 o następujących godzinach: 11:30, 12:30, 16:30, 17:30, 20:30, 21:30, 22:30 oraz 23:30.", // Event description (optional)
    type: "event",
    color: "#7D119B", // Event custom color (optional)
  },
  {
    id: "up_RUNES",
    name: "Grawerowanie Run",
    badge: "22/09/2023 - 25/09/2023",
    date: ["September/22/2023", "September/25/2023"],
    description:
      "Podczas grawerowania lub wzmacniania run masz 50% więcej szansy na sukces! Swoimi runami możesz zająć się w Wiosce Olorun u Martasa. Aby to zrobić, musisz co najmniej osiągnąć poziom bohatera 10.", // Event description (optional)
    type: "event",
    color: "#8036EA", // Event custom color (optional)
  },
  {
    id: "Fusion_SPP",
    name: "Fuzja SPP",
    badge: "15/09/2023 - 18/09/2023",
    date: ["September/15/2023", "September/18/2023"],
    description:
      "Podkręć tempo i korzystaj z 50% więcej punktów doświadczenia podczas fuzji specjalisty partnera! <br><br>Event trwa od 15.09. o godz. 11:00<br> do 18.09. o godz. 11:00 (CEST).", // Event description (optional)
    type: "event",
    color: "#41EFEB", // Event custom color (optional)
  },
  {
    id: "Hazard",
    name: "Hazardowanie",
    badge: "08/09/2023 - 11/09/2023",
    date: ["September/08/2023", "September/11/2023"],
    description:
      "50% większe szanse na pomyślne zmiennie poziomu unikalności. Zwiększa szanse na zmianę poziomu unikalności broni lub wyposażenia do maks. poziomu 7 (lub poziomu 8 przy wyposażeniu bohatera). Dzięki temu spada ryzyko, że przedmiot zostanie zniszczony podczas zmiany.", // Event description (optional)
    type: "event",
    color: "#ABFA61", // Event custom color (optional)
  },
  {
    id: "Double_Box",
    name: "Double Boxy",
    badge: "01/09/2023 - 04/09/2023",
    date: ["September/01/2023", "September/04/2023"],
    description:
      "od 01.09. (11:00 CEST) <br>do 04.09. (11:00 CEST) <br>masz większą o 50% szansę na zgarnięcie, nie jednego, lecz dwóch pudełek rajdu - taką szansę masz we wszystkich rajdach w NosTale", // Event description (optional)
    type: "event",
    color: "#7EC8EB", // Event custom color (optional)
  },
  {
    id: "up_EQ",
    name: "Upanie EQ",
    badge: "25/08/2023 - 28/08/2023",
    date: ["August/25/2023", "August/28/2023"],
    description:
      "50% większe szanse na pomyślne ulepszenie broni i wyposażenia (od poziomu +1 do +10).Dzięki temu spada ryzyko, że przedmiot zostanie zniszczony podczas ulepszenia.", // Event description (optional)
    type: "event",
    color: "#AB7B61", // Event custom color (optional)
  },
  {
    id: "RTK_EXP",
    name: "RTK EXP",
    badge: "18/08/2023 - 21/08/2023",
    date: ["August/18/2023", "August/21/2023"],
    description:
      "Przy tym za każdą złowioną rybę otrzymacie 50% więcej doświadczenia.<br>Jako kucharz otrzymacie podczas tego eventu 50% więcej doświadczenia za każdą udaną próbę gotowania!<br>W przypadku każdej pomyślnej próby ekstrahowania esencji zwierzaków i oswajania zwierzaków Wasze zebrane doświadczenie jest zwiększone o 50%!", // Event description (optional)
    type: "event",
    color: "#D5B9FF", // Event custom color (optional)
  },
  {
    id: "up_SP",
    name: "Upanie SP",
    badge: "11/08/2023 - 14/08/2023",
    date: ["August/11/2023", "August/14/2023"],
    description:
      "Zafunduj ulepszenie kartom specjalisty: przez krótki czas masz 50% więcej szansy na sukces!", // Event description (optional)
    type: "event",
    color: "#F75647", // Event custom color (optional)
  },
  {
    id: "Double_Drop&Gold",
    name: "Double Drop&Gold",
    badge: "04/08/2023 - 07/08/2023",
    date: ["August/04/2023", "August/07/2023"],
    description: "Podwójna Szansa na Drop Złota<br>Podwójny Drop Przedmiotów", // Event description (optional)
    type: "event",
    color: "#FF4FAA", // Event custom color (optional)
  },
  {
    id: "Ticket_SPP",
    name: "Event na bilety",
    badge: "28/07/2023 - 31/07/2023",
    date: ["July/28/2023", "July/31/2023"],
    description:
      "Od 28.07. (11:00 CEST) do 31.07. (11:00 CEST) otrzymasz +50% szansy na osiągniecie wyższych poziomów podczas ulepszania umiejętności specjalisty partnera!", // Event description (optional)
    type: "event",
    color: "#EF6F0D", // Event custom color (optional)
  },
  {
    id: "Double_IC",
    name: "Double BB",
    badge: "21/07/2023 - 24/07/2023",
    date: ["July/21/2023", "July/24/2023"],
    description:
      "O każdej pełnej godzinie rozpoczyna się Błyskawiczna Bitwa na kanałach 1 i 2.<br><br>  Błyskawiczna Bitwa Azgobasa rozpoczyna się na kanałach 3 i 4 o następujących godzinach: 11:30, 12:30, 16:30, 17:30, 20:30, 21:30, 22:30 oraz 23:30.", // Event description (optional)
    type: "event",
    color: "#7D119B", // Event custom color (optional)
  },
  {
    id: "up_Tatu",
    name: "Tatuaże",
    badge: "14/07/2023 - 17/07/2023",
    date: ["July/14/2023", "July/17/2023"],
    description:
      "Podczas eventu szansa na ulepszenie tatuaży zwiększy się o 30% (poziom +1 do maksymalnie poziomu 9). Jednocześnie zmniejsza się niebezpieczeństwo, że ulepszenie się nie powiedzie", // Event description (optional)
    type: "event",
    color: "#60F0B4", // Event custom color (optional)
  },
  {
    id: "Fusion_SPP",
    name: "Fuzja SPP",
    badge: "07/07/2023 - 10/07/2023",
    date: ["July/7/2023", "July/10/2023"],
    description:
      "Podkręć tempo i korzystaj z 50% więcej punktów doświadczenia podczas fuzji specjalisty partnera! Event trwa od 07.07. o godz. 11:00 do 10.07. o godz. 11:00 (CEST).", // Event description (optional)
    type: "event",
    color: "#41EFEB", // Event custom color (optional)
  },
  {
    id: "up_RUNES",
    name: "Grawerowanie run",
    badge: "30/06/2023 - 3/07/2023",
    date: ["June/30/2023", "July/3/2023"],
    description:
      "Podkręć tempo i korzystaj z 50% więcej punktów doświadczenia podczas fuzji specjalisty partnera! Event trwa od 07.07. o godz. 11:00 do 10.07. o godz. 11:00 (CEST).", // Event description (optional)
    type: "event",
    color: "#8036EA", // Event custom color (optional)
  },
  {
    id: "Double_Box",
    name: "Double Boxy",
    badge: "23/06/2023 - 26/06/2023",
    date: ["June/23/2023", "June/26/2023"],
    description:
      "Od 23.06. (11:00 CEST) do 26.06. (11:00 CEST) masz większą o 50% szansę na zgarnięcie, nie jednego, lecz dwóch pudełek rajdu - taką szansę masz we wszystkich rajdach w NosTale!", // Event description (optional)
    type: "event",
    color: "#7EC8EB", // Event custom color (optional)
  },
  {
    id: "Hazard",
    name: "Hazardowanie",
    badge: "16/06/2023 - 19/06/2023",
    date: ["June/16/2023", "June/19/2023"],
    description:
      "50% większe szanse na pomyślne zmiennie poziomu unikalności. Zwiększa szanse na zmianę poziomu unikalności broni lub wyposażenia do maks. poziomu 7 (lub poziomu 8 przy wyposażeniu bohatera). Dzięki temu spada ryzyko, że przedmiot zostanie zniszczony podczas zmiany.", // Event description (optional)
    type: "event",
    color: "#ABFA61", // Event custom color (optional)
  },
];
