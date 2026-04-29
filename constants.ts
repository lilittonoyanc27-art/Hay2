export interface Question {
  id: string;
  sentence: string;
  options: string[];
  correctIndex: number;
  translation: string;
  explanation: string;
}

export interface TheoryPoint {
  title: string;
  description: string;
  example: string;
}

export const OBLIGATION_THEORY: TheoryPoint[] = [
  {
    title: "Hay que + Infinitivo",
    description: "Օգտագործվում է ընդհանուր պարտավորություն կամ անհրաժեշտություն արտահայտելու համար (առանց կոնկրետ անձ նշելու): Նշանակում է «պետք է», «հարկավոր է»:",
    example: "Hay que estudiar para aprobar. (Պետք է սովորել անցնելու համար — բոլորին է վերաբերում:)"
  },
  {
    title: "Tener que + Infinitivo",
    description: "Օգտագործվում է կոնկրետ անձի պարտավորությունը նշելու համար: 'Tener' բայը խոնարհվում է ըստ դեմքի (tengo, tienes, tiene...):",
    example: "Yo tengo que estudiar hoy. (Ես պետք է սովորեմ այսօր — կոնկրետ իմ պարտականությունն է:)"
  },
  {
    title: "Տարբերությունը",
    description: "Hay que-ն անդեմ է (միշտ նույն ձևն է), իսկ Tener que-ն՝ անձնական (փոփոխվում է):",
    example: "Hay que comer bien. (Պետք է լավ սնվել:) VS Tengo que comer algo. (Ես պետք է ինչ-որ բան ուտեմ:)"
  }
];

export const OBLIGATION_QUESTIONS: Question[] = [
  {
    id: "1",
    sentence: "Para aprender español _______ practicar mucho.",
    options: ["hay que", "tengo que", "tienes que"],
    correctIndex: 0,
    translation: "Իսպաներեն սովորելու համար պետք է շատ պրակտիկա անել:",
    explanation: "Սա ընդհանուր խորհուրդ/պարտավորություն է բոլոր սովորողների համար:"
  },
  {
    id: "2",
    sentence: "Mañana yo _______ ir al médico a las 10.",
    options: ["hay que", "tengo que", "tenemos que"],
    correctIndex: 1,
    translation: "Վաղը ես պետք է գնամ բժշկի ժամը 10-ին:",
    explanation: "Խոսքը կոնկրետ անձի (yo) մասին է, ուստի օգտագործում ենք 'tengo que':"
  },
  {
    id: "3",
    sentence: "En la biblioteca _______ estar en silencio.",
    options: ["tengo que", "hay que", "tienes que"],
    correctIndex: 1,
    translation: "Գրադարանում պետք է լռություն պահպանել:",
    explanation: "Ընդհանուր կանոն է բոլորի համար:"
  },
  {
    id: "4",
    sentence: "¿Tú _______ trabajar este fin de semana?",
    options: ["hay que", "tengo que", "tienes que"],
    correctIndex: 2,
    translation: "Դու պե՞տք է աշխատես այս հանգստյան օրերին:",
    explanation: "Հարցը ուղղված է կոնկրետ անձի (tú):"
  },
  {
    id: "5",
    sentence: "Si quieres viajar, _______ tener pasaporte.",
    options: ["hay que", "tenemos que", "tiene que"],
    correctIndex: 0,
    translation: "Եթե ուզում ես ճանապարհորդել, պետք է անձնագիր ունենալ:",
    explanation: "Ընդհանուր պայման/անհրաժեշտություն է:"
  },
  {
    id: "6",
    sentence: "Nosotros _______ hacer las maletas ahora.",
    options: ["hay que", "tenemos que", "tengo que"],
    correctIndex: 1,
    translation: "Մենք պետք է պատրաստենք ճամպրուկները հիմա:",
    explanation: "Խոսքը 'մենք' (nosotros) խմբի մասին է:"
  },
  {
    id: "7",
    sentence: "_______ ser amables con los demás.",
    options: ["Hay que", "Tiene que", "Tengo que"],
    correctIndex: 0,
    translation: "Պետք է բարի լինել ուրիշների հանդեպ:",
    explanation: "Բարոյական ընդհանուր նորմ է:"
  },
  {
    id: "8",
    sentence: "María _______ comprar comida para la cena.",
    options: ["hay que", "tengo que", "tiene que"],
    correctIndex: 2,
    translation: "Մարիան պետք է ուտելիք գնի ընթրիքի համար:",
    explanation: "Կոնկրետ անձի (María/ella) պարտավորությունն է:"
  },
  {
    id: "9",
    sentence: "_______ beber mucha agua cuando hace calor.",
    options: ["Hay que", "Tengo que", "Tenes que"],
    correctIndex: 0,
    translation: "Շոգ ժամանակ պետք է շատ ջուր խմել:",
    explanation: "Ընդհանուր առողջապահական խորհուրդ է:"
  },
  {
    id: "10",
    sentence: "Los niños _______ acostarse temprano.",
    options: ["hay que", "tienen que", "tiene que"],
    correctIndex: 1,
    translation: "Երեխաները պետք է շուտ քնեն:",
    explanation: "Հոգնակի թվով կոնկրետ սուբյեկտի (los niños/ellos) մասին է:"
  }
];

export const OBLIGATION_BG = "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop";
