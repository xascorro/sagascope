// LOTR Data
(() => {
    // Helper function is now global in script.js (window.repeat)

    const TEXTS = {
        en: {
            base: `When Mr. Bilbo Baggins of Bag End announced that he would shortly be celebrating his eleventy-first birthday with a party of special magnificence, there was much talk and excitement in Hobbiton. Bilbo was very rich and very peculiar, and he had been the wonder of the Shire for sixty years, ever since his remarkable disappearance and unexpected return. The riches he had brought back from his travels had now become a local legend, and it was popularly believed, whatever the old folk might say, that the Hill at Bag End was full of tunnels stuffed with treasure. And if that was not enough for fame, there was also his prolonged vigour to marvel at. Time wore on, but it seemed to have little effect on Mr. Baggins. At ninety he was much the same as at fifty. At ninety-nine they began to call him well-preserved; but unchanged would have been nearer the mark.

Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Nine for Mortal Men doomed to die, One for the Dark Lord on his dark throne In the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them In the Land of Mordor where the Shadows lie. The world is changed. I feel it in the water. I feel it in the earth. I smell it in the air. Much that once was is lost, for none now live who remember it. It began with the forging of the Great Rings.

Frodo sat by the open window, smoking his pipe. The evening air was cool and sweet. He watched the stars come out, one by one, above the trees of the Old Forest. He felt a strange reluctance to leave the Shire, a heavy weight in his heart. It was his home. But he knew he could not stay. The Ring was too dangerous. Gandalf had been clear. The Enemy was moving. Sauron's gaze was turning towards the West. Black Riders were already searching for "Baggins". Frodo sighed and tapped out his pipe. Sam was packing the last of their gear in the kitchen. Faithful Sam. Frodo wished he could spare him this journey, but Sam would not hear of it.

Aragorn knelt beside the dying Boromir. The Horn of Gondor lay cloven in two. "They have taken the Little Ones," Boromir gasped, his voice thick with pain. "Frodo... where is Frodo?" "I let him go," Aragorn said gently. "He has crossed the river." Boromir smiled faintly. "Then you did what I could not. I tried to take the Ring from him. I am sorry." "Peace," Aragorn said, gripping his hand. "You have conquered. Few have gained such a victory. Be at peace! Minas Tirith shall not fall!" Boromir died with a smile on his lips. Aragorn stood up, looking across the river. The Fellowship was broken.`
        },
        es: {
            base: `Cuando el señor Bilbo Bolsón de Bolsón Cerrado anunció que muy pronto celebraría su cumpleaños centesimoprimero con una fiesta de especial magnificencia, hubo muchos comentarios y excitación en Hobbiton. Bilbo era muy rico y muy peculiar, y había sido el asombro de la Comarca durante sesenta años, desde su sorprendente desaparición y su inesperado regreso. Las riquezas que había traído de sus viajes se habían convertido en una leyenda local, y se creía popularmente, dijeran lo que dijeran los viejos, que la Colina de Bolsón Cerrado estaba llena de túneles atiborrados de tesoros. Y si eso no fuera suficiente para la fama, también estaba su prolongado vigor para maravillarse. El tiempo pasaba, pero parecía tener poco efecto en el señor Bolsón. A los noventa era casi igual que a los cincuenta.

Tres Anillos para los Reyes Elfos bajo el cielo. Siete para los Señores Enanos en palacios de piedra. Nueve para los Hombres Mortales condenados a morir. Uno para el Señor Oscuro, sobre el trono oscuro en la Tierra de Mordor donde se extienden las Sombras. Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos, un Anillo para atraerlos a todos y atarlos en las tinieblas en la Tierra de Mordor donde se extienden las Sombras. El mundo ha cambiado. Lo siento en el agua. Lo siento en la tierra. Lo huelo en el aire. Mucho de lo que alguna vez fue se ha perdido, porque ya no vive nadie que lo recuerde.

Frodo se sentó junto a la ventana abierta, fumando su pipa. El aire de la tarde era fresco y dulce. Observó cómo salían las estrellas, una a una, sobre los árboles del Bosque Viejo. Sintió una extraña renuencia a abandonar la Comarca, un peso pesado en su corazón. Era su hogar. Pero sabía que no podía quedarse. El Anillo era demasiado peligroso. Gandalf había sido claro. El Enemigo se movía. La mirada de Sauron se volvía hacia el Oeste. Los Jinetes Negros ya buscaban a "Bolsón". Frodo suspiró y vació su pipa. Sam estaba empacando lo último de su equipo en la cocina. El fiel Sam. Frodo deseaba poder ahorrarle este viaje, pero Sam no quería ni oír hablar de ello.

Aragorn se arrodilló junto al moribundo Boromir. El Cuerno de Gondor yacía partido en dos. "Se han llevado a los Pequeños", jadeó Boromir, con la voz espesa por el dolor. "Frodo... ¿dónde está Frodo?" "Lo dejé ir", dijo Aragorn suavemente. "Ha cruzado el río". Boromir sonrió levemente. "Entonces hiciste lo que yo no pude. Traté de quitarle el Anillo. Lo siento". "Paz", dijo Aragorn, apretándole la mano. "Has vencido. Pocos han obtenido tal victoria. ¡Ten paz! ¡Minas Tirith no caerá!" Boromir murió con una sonrisa en los labios.`
        }
    };

    window.SagaContent = {
        id: 'lotr',
        name: {
            es: 'El Señor de los Anillos',
            en: 'The Lord of the Rings',
            zh: '指环王',
            hi: 'अंगूठियों का मालिक',
            fr: 'Le Seigneur des Anneaux',
            ar: 'سيد الخواتم',
            bn: 'লর্ড অফ দ্য রিং',
            ru: 'Властелин колец',
            pt: 'O Senhor dos Anéis',
            ur: 'لارڈ آف دی رِنگز'
        },
        books: [
            { title: { es: "La Comunidad del Anillo", en: "The Fellowship of the Ring" }, words: 187790 },
            { title: { es: "Las Dos Torres", en: "The Two Towers" }, words: 156198 },
            { title: { es: "El Retorno del Rey", en: "The Return of the King" }, words: 137115 },
            { title: { es: "El Hobbit", en: "The Hobbit" }, words: 95356 }
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
