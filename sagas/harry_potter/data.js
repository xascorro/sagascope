// Harry Potter Data
(() => {
    // Helper function is now global in script.js (window.repeat)

    const TEXTS = {
        en: {
            base: `Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.

The boy who lived. That was what they called him. Harry lay in his dark cupboard under the stairs, listening to the sound of Dudley thundering down the steps. Dust fell from the ceiling. Today was Dudley's birthday, and that meant misery for Harry. He pushed off his thin blanket and found his glasses. The tape holding the bridge together was peeling again. He sighed. Maybe today wouldn't be so bad. Maybe they would just ignore him. But he knew better. Uncle Vernon would shout, Aunt Petunia would screech, and Dudley would hit him. It was the rhythm of his life. But sometimes, when he closed his eyes, he saw flashes of green light and heard a high, cold laugh. He didn't know what it meant, but it scared him.

The Great Hall was a sea of pointed black hats. Thousands of candles floated in midair over four long tables, where the rest of the students were sitting. The tables were laid with glittering golden plates and goblets. At the top of the hall was another long table where the teachers sat. Professor McGonagall led the first years up here, so that they came to a halt in a line facing the other students, with the teachers behind them. The hundreds of faces staring at them looked like pale lanterns in the flickering candlelight. Dotted here and there among the students, the ghosts shone misty silver.

Harry looked upward and saw a velvety black ceiling dotted with stars. He heard Hermione whisper, "It's bewitched to look like the sky outside. I read about it in Hogwarts, A History." It was hard to believe there was a ceiling there at all, and that the Great Hall didn't simply open on to the heavens. Harry quickly looked down again as Professor McGonagall silently placed a four-legged stool in front of the first years. On top of the stool she put a pointed wizard's hat. This hat was patched and frayed and extremely dirty. Aunt Petunia wouldn't have let it in the house.

There were many things that Harry had to learn. Potions with Snape, who hurried into the dungeon class like a giant bat. Transfiguration with McGonagall, who could turn into a cat. Charms with tiny Professor Flitwick. And of course, Defense Against the Dark Arts. But the most exciting of all was Quidditch. Wood took Harry out to the pitch and explained the rules. Three Chasers, two Beaters, one Keeper, and one Seeker. The Snitch was the most important ball of all. It was tiny, about the size of a walnut, bright gold and with little fluttering silver wings. If you caught it, your team got one hundred and fifty points. "You catch this, Potter, and we win," Wood said.`
        },
        es: {
            base: `El señor y la señora Dursley, que vivían en el número 4 de Privet Drive, estaban orgullosos de decir que eran muy normales, afortunadamente. Eran las últimas personas que se esperaría encontrar relacionadas con algo extraño o misterioso, porque no estaban para tales tonterías. El señor Dursley era el director de una empresa llamada Grunnings, que fabricaba taladros. Era un hombre corpulento y rollizo, casi sin cuello, aunque con un bigote inmenso. La señora Dursley era delgada, rubia y tenía un cuello casi el doble de largo de lo habitual, lo que le resultaba muy útil, ya que pasaba la mayor parte del tiempo estirándolo por encima de la valla de los jardines para espiar a sus vecinos.

El niño que vivió. Así lo llamaban. Harry yacía en su oscuro armario debajo de las escaleras, escuchando el sonido de Dudley bajando los escalones como un trueno. Polvo caía del techo. Hoy era el cumpleaños de Dudley, y eso significaba miseria para Harry. Se quitó la delgada manta y encontró sus gafas. La cinta que sostenía el puente se estaba pelando de nuevo. Suspiró. Tal vez hoy no sería tan malo. Tal vez simplemente lo ignorarían. Pero él sabía que no sería así. Tío Vernon gritaría, Tía Petunia chillaría y Dudley lo golpearía. Era el ritmo de su vida. Pero a veces, cuando cerraba los ojos, veía destellos de luz verde y escuchaba una risa aguda y fría. No sabía qué significaba, pero le asustaba.

El Gran Comedor era un mar de sombreros negros puntiagudos. Miles de velas flotaban en el aire sobre cuatro largas mesas, donde estaban sentados los demás estudiantes. Las mesas estaban puestas con platos y copas de oro resplandeciente. En la parte superior del comedor había otra mesa larga donde se sentaban los profesores. La profesora McGonagall llevó a los de primer año hasta allí, de modo que se detuvieron en una fila frente a los otros estudiantes, con los profesores detrás de ellos. Los cientos de rostros que los miraban parecían faroles pálidos a la luz parpadeante de las velas. Dispersos aquí y allá entre los estudiantes, los fantasmas brillaban con una neblina plateada.

Harry miró hacia arriba y vio un techo negro aterciopelado salpicado de estrellas. Oyó a Hermione susurrar: "Está hechizado para que parezca el cielo de fuera. Lo leí en La Historia de Hogwarts". Era difícil creer que hubiera un techo allí, y que el Gran Comedor no se abriera simplemente a los cielos. Harry volvió a mirar rápidamente hacia abajo cuando la profesora McGonagall colocó en silencio un taburete de cuatro patas frente a los de primer año. Encima del taburete puso un sombrero de mago puntiagudo. Este sombrero estaba remendado, raído y extremadamente sucio. Tía Petunia no lo habría dejado entrar en casa.

Había muchas cosas que Harry tenía que aprender. Pociones con Snape, que entraba apresuradamente en la clase de la mazmorra como un murciélago gigante. Transformaciones con McGonagall, que podía convertirse en gato. Encantamientos con el diminuto profesor Flitwick. Y, por supuesto, Defensa contra las Artes Oscuras. Pero lo más emocionante de todo era el Quidditch. Wood llevó a Harry al campo y le explicó las reglas. Tres Cazadores, dos Golpeadores, un Guardián y un Buscador. La Snitch era la bola más importante de todas. Era diminuta, más o menos del tamaño de una nuez, de oro brillante y con pequeñas alas de plata que aleteaban. Si la atrapabas, tu equipo obtenía ciento cincuenta puntos. "Atrapa esto, Potter, y ganamos", dijo Wood.`
        }
    };

    window.SagaContent = {
        id: 'harry_potter',
        name: {
            es: 'Mundo Mágico',
            en: 'Wizarding World',
            zh: '魔法世界',
            hi: 'जादूई दुनिया',
            fr: 'Monde des Sorciers',
            ar: 'عالم السحرة',
            bn: 'জাদু জগত',
            ru: 'Волшебный мир',
            pt: 'Mundo Bruxo',
            ur: 'جادوئی दुनिया'
        },
        books: [
            { title: { es: "La Piedra Filosofal", en: "Philosopher's Stone" }, words: 76944 },
            { title: { es: "La Cámara Secreta", en: "Chamber of Secrets" }, words: 85141 },
            { title: { es: "El Prisionero de Azkaban", en: "Prisoner of Azkaban" }, words: 107253 },
            { title: { es: "El Cáliz de Fuego", en: "Goblet of Fire" }, words: 190637 },
            { title: { es: "La Orden del Fénix", en: "Order of the Phoenix" }, words: 257045 },
            { title: { es: "El Misterio del Príncipe", en: "Half-Blood Prince" }, words: 168923 },
            { title: { es: "Las Reliquias de la Muerte", en: "Deathly Hallows" }, words: 198227 }
        ],
        fragments: {
            en: {
                short: window.repeat(TEXTS.en.base, 1).slice(0, 1800), // ~300 words
                medium: window.repeat(TEXTS.en.base, 2).slice(0, 3000), // ~500 words
                long: window.repeat(TEXTS.en.base, 3) // ~1000 words
            },
            es: {
                short: window.repeat(TEXTS.es.base, 1).slice(0, 2000),
                medium: window.repeat(TEXTS.es.base, 2).slice(0, 3500),
                long: window.repeat(TEXTS.es.base, 3)
            }
        }
    };

    // Fill others with EN fallback for now (User primarily checks ES/EN)
    const extraLangs = ['zh', 'hi', 'fr', 'ar', 'bn', 'ru', 'pt', 'ur'];
    extraLangs.forEach(lang => {
        window.SagaContent.fragments[lang] = window.SagaContent.fragments.en;
    });

})();
