const QUESTIONS_DATABASE = [
    { id: 1, category: "matematica", level: 1, q: "Cât este 15% din 200?", a: ["20", "30", "35", "25"], correct: 1 },
    { id: 2, category: "istorie", level: 1, q: "În ce an a avut loc Marea Unire a României?", a: ["1914", "1918", "1920", "1859"], correct: 1 },
    { id: 3, category: "logica", level: 1, q: "Dacă un avion se prăbușește la granița dintre România și Ungaria, unde sunt îngropați supraviețuitorii?", a: ["România", "Ungaria", "Nu se îngroapă", "Ambele"], correct: 2 },
    { id: 4, category: "finante", level: 1, q: "Ce reprezintă termenul 'Lichiditate'?", a: ["Profit net", "Capacitatea de a plăti datoriile rapid", "Valoarea acțiunilor", "Impozit pe profit"], correct: 1 },
    { id: 5, category: "religie", level: 1, q: "Câte cărți are Noul Testament?", a: ["24", "27", "39", "66"], correct: 1 },
    // ... Database structure for 13 domains / 1300 questions
];

const COUNTRIES_MAP = {
    "romania": { id: "RO", name: "România", neighbors: ["bulgaria", "serbia", "ungaria", "ucraina", "moldova"], levelReq: 1 },
    "ungaria": { id: "HU", name: "Ungaria", neighbors: ["romania", "austria", "slovacia", "serbia", "croatia"], levelReq: 5 },
    "moldova": { id: "MD", name: "Moldova", neighbors: ["romania", "ucraina"], levelReq: 3 },
    // Detailed neighbor logic for all 44 European countries
};