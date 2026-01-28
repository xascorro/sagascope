// Dune Data
(() => {
    // Helper function is now global in script.js (window.repeat)
    const TEXTS = {
        en: {
            base: `A beginning is a very delicate time. Know then that it is the year 10,191. The Known Universe is ruled by the Padishah Emperor Shaddam IV, my father. In this time, the most precious substance in the universe is the spice Melange. The spice extends life. The spice expands consciousness. The spice is vital to space travel. The Spacing Guild and its navigators, who the spice has mutated over 4,000 years, use the orange spice gas, which gives them the ability to fold space. That is, travel to any part of the universe without moving. Oh, yes. I forgot to tell you. The spice exists on only one planet in the entire universe. A desolate, dry planet with vast deserts. Hidden away within the rocks of these deserts are a people known as the Fremen, who have long held a prophecy that a man would come, a messiah who would lead them to true freedom. The planet is Arrakis, also known as Dune.

Paul Atreides stood on the landing field at Caladan, feeling the cool sea breeze for the last time. He was leaving his home, his water-rich world, for a hell of sand and heat. The Duke Leto, his father, had been ordered to take control of Arrakis. It was a trap, Paul knew. The Harkonnens, their mortal enemies, were giving up the richest planet in the galaxy too easily. But House Atreides did not run. They would go to Dune. They would rule.

The Baron Vladimir Harkonnen floated in his suspensor chair, his massive bulk defying gravity. "The trap is set," he rumbled, his voice like grinding stones. "The Duke will fall. And I will have Arrakis back. The spice must flow." Piter De Vries, his twisted Mentat, smiled, his lips stained red with sapho juice. "It is as you say, Baron. The Emperor is with us. The Atreides will be extinguished."

Paul walked into the open desert. The stillsuit clung to his body, recycling his moisture. The sun beat down like a hammer. He was Muad'Dib now. The One Who Points the Way. He had drunk the Water of Life and seen the Golden Path. The Fremen followed him. They were his army. His fedaykin. "Long live the fighters!" he shouted, raising his crysknife. The shout echoed across the dunes, a thunderclap of rebellion. The Shai-Hulud, the great sandworms, rumbled deep beneath the sand. They were coming.`,
        },
        es: {
            base: `Un comienzo es un momento muy delicado. Sépase entonces que es el año 10.191. El Universo Conocido está gobernado por el Emperador Padishah Shaddam IV, mi padre. En este tiempo, la sustancia más preciosa del universo es la especia Melange. La especia extiende la vida. La especia expande la conciencia. La especia es vital para los viajes espaciales. La Cofradía Espacial y sus navegantes, a quienes la especia ha mutado durante 4.000 años, utilizan el gas de especia naranja, que les da la capacidad de plegar el espacio. Es decir, viajar a cualquier parte del universo sin moverse. Ah, sí. Olvidé decírtelo. La especia existe en un solo planeta en todo el universo. Un planeta desolado y seco con vastos desiertos. Escondidos entre las rocas de estos desiertos hay un pueblo conocido como los Fremen, que mantienen desde hace mucho tiempo una profecía de que vendría un hombre, un mesías que los llevaría a la verdadera libertad. El planeta es Arrakis, también conocido como Dune.

Paul Atreides estaba en el campo de aterrizaje de Caladan, sintiendo la brisa fresca del mar por última vez. Dejaba su hogar, su mundo rico en agua, por un infierno de arena y calor. Al Duque Leto, su padre, se le había ordenado tomar el control de Arrakis. Era una trampa, Paul lo sabía. Los Harkonnen, sus enemigos mortales, estaban renunciando al planeta más rico de la galaxia con demasiada facilidad. Pero la Casa Atreides no huía. Irían a Dune. Gobernarían.

El Barón Vladimir Harkonnen flotaba en su silla suspensoria, su masa masiva desafiando la gravedad. "La trampa está tendida", retumbó, su voz como piedras moliéndose. "El Duque caerá. Y tendré Arrakis de vuelta. La especia debe fluir." Piter De Vries, su Mentat retorcido, sonrió, con los labios manchados de rojo con jugo de sapho. "Es como dices, Barón. El Emperador está con nosotros. Los Atreides serán extinguidos."

Paul caminó hacia el desierto abierto. El destiltraje se aferraba a su cuerpo, reciclando su humedad. El sol golpeaba como un martillo. Ahora era Muad'Dib. El Que Indica el Camino. Había bebido el Agua de la Vida y visto el Camino Dorado. Los Fremen lo seguían. Eran su ejército. Sus fedaykin. "¡Larga vida a los luchadores!", gritó, levantando su cuchillo de cristal. El grito resonó a través de las dunas, un trueno de rebelión. Los Shai-Hulud, los grandes gusanos de arena, retumbaron en las profundidades bajo la arena. Venían.`
        }
    };

    window.SagaContent = {
        id: 'dune',
        names: {
            es: 'Dune',
            en: 'Dune',
            zh: '沙丘 (Dune)',
            hi: 'ड्यून (Dune)',
            fr: 'Dune',
            ar: 'كثيب (Dune)',
            bn: 'ডিউন (Dune)',
            ru: 'Дюна',
            pt: 'Duna',
            ur: 'ڈیून (Dune)'
        },
        books: [
            { title: { es: "Dune", en: "Dune" }, words: 188000 },
            { title: { es: "El Mesías de Dune", en: "Dune Messiah" }, words: 60000 },
            { title: { es: "Hijos de Dune", en: "Children of Dune" }, words: 148000 },
            { title: { es: "Dios Emperador de Dune", en: "God Emperor of Dune" }, words: 138000 },
            { title: { es: "Herejes de Dune", en: "Heretics of Dune" }, words: 162000 },
            { title: { es: "Casa Capitular Dune", en: "Chapterhouse: Dune" }, words: 144000 }
        ],
        fragments: {
            en: {
                short: window.repeat(TEXTS.en.base, 1).slice(0, 1800),
                medium: window.repeat(TEXTS.en.base, 2).slice(0, 3000),
                long: window.repeat(TEXTS.en.base, 3)
            },
            es: {
                short: window.repeat(TEXTS.es.base, 1).slice(0, 2000),
                medium: window.repeat(TEXTS.es.base, 2).slice(0, 3500),
                long: window.repeat(TEXTS.es.base, 3)
            }
        }
    };

    const extraLangs = ['zh', 'hi', 'fr', 'ar', 'bn', 'ru', 'pt', 'ur'];
    extraLangs.forEach(lang => {
        window.SagaContent.fragments[lang] = window.SagaContent.fragments.en;
    });

})();
