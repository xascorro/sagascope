// Hunger Games Data
(() => {
    // Helper function is now global in script.js (window.repeat)
    const TEXTS = {
        en: {
            base: `When I wake up, the other side of the bed is cold. My fingers stretch out, seeking Prim's warmth but finding only the rough canvas cover of the mattress. She must have had bad dreams and climbed in with our mother. Of course, she did. This is the day of the reaping. I prop myself up on one elbow. There's enough light in the bedroom to see them. My little sister, Prim, curled up on her side, cocooned in my mother's body, their cheeks pressed together. In sleep, my mother looks younger, still worn but not so beaten-down. Prim's face is as fresh as a raindrop, as lovely as the primrose for which she was named. My mother was very beautiful once, too. Or so they tell me.

Katniss Everdeen stood in the square, the mood somber and gray. Effie Trinket, bright as a wig in her pink hair and suit, tapped the microphone. "Happy Hunger Games! And may the odds be ever in your favor!" She reached into the glass ball for the reaping. "Primrose Everdeen." The name hung in the air, a bell tolling doom. Katniss froze. No. Not Prim. "I volunteer!" she gasped, stepping forward. "I volunteer as tribute!" The crowd murmured. The Peacekeepers pushed her forward. She was going to the Arena. She was going to die. But she would not let them take Prim.

Peeta Mellark tossed the burnt bread to the starving girl in the rain. He took a beating for it, but he did it anyway. His eyes met hers, blue and kind. Even now, in the training center, he watched her. "I want to die as myself," he told her on the roof, the city lights below them like a field of artificial stars. "Does that make sense? I don't want them to change me in there. Turn me into some kind of monster that I'm not." Katniss looked at him, really looks at him. He was playing a game, she thought. But maybe, just maybe, he wasn't.

The Arena was a forest, lush and green and deadly. The cannon fired, signaling the end of the bloodbath at the Cornucopia. Katniss climbed a tree, strapping herself in. Rue, the little girl from District 11, pointed to the tracker jacker nest above her head. A weapon. Katniss sawed at the branch, the hallucinogenic venom swarming in her blood. She dropped the nest on the Careers below. Chaos. Screams. And then, death. But this was only the beginning. The Gamemakers had more surprises in store. Fireballs. Muttations. And the rule change: two victors from the same district. Peeta. She had to find Peeta.`,
        },
        es: {
            base: `Cuando me despierto, el otro lado de la cama está frío. Mis dedos se estiran, buscando el calor de Prim pero encontrando solo la áspera funda de lona del colchón. Debe haber tenido pesadillas y se metió con nuestra madre. Por supuesto que lo hizo. Este es el día de la cosecha. Me apoyo en un codo. Hay suficiente luz en el dormitorio para verlas. Mi hermana pequeña, Prim, acurrucada de lado, protegida por el cuerpo de mi madre, con las mejillas pegadas. Dormida, mi madre parece más joven, todavía desgastada pero no tan abatida. La cara de Prim es tan fresca como una gota de lluvia, tan encantadora como la prímula por la que recibió su nombre. Mi madre también fue muy hermosa una vez. O eso me dicen.

Katniss Everdeen estaba en la plaza, el ambiente sombrío y gris. Effie Trinket, brillante como una peluca con su pelo y traje rosas, golpeó el micrófono. "¡Felices Juegos del Hambre! ¡Y que la suerte esté siempre de vuestra parte!" Metió la mano en la bola de cristal para la cosecha. "Primrose Everdeen". El nombre quedó suspendido en el aire, una campana tocando a muerte. Katniss se congeló. No. Prim no. "¡Me presento voluntaria!", jadeó, dando un paso adelante. "¡Me presento voluntaria como tributo!" La multitud murmuró. Los Agentes de la Paz la empujaron hacia adelante. Iba a la Arena. Iba a morir. Pero no dejaría que se llevaran a Prim.

Peeta Mellark arrojó el pan quemado a la chica hambrienta bajo la lluvia. Recibió una paliza por ello, pero lo hizo de todos modos. Sus ojos se encontraron con los de ella, azules y amables. Incluso ahora, en el centro de entrenamiento, la observaba. "Quiero morir siendo yo mismo", le dijo en el tejado, con las luces de la ciudad debajo de ellos como un campo de estrellas artificiales. "¿Tiene sentido? No quiero que me cambien ahí dentro. Que me conviertan en algún tipo de monstruo que no soy". Katniss lo miró, lo miró de verdad. Estaba jugando a un juego, pensó. Pero tal vez, solo tal vez, no lo estaba.

La Arena era un bosque, exuberante, verde y mortal. El cañón disparó, señalando el final del baño de sangre en la Cornucopia. Katniss trepó a un árbol, atándose. Rue, la niña del Distrito 11, señaló el nido de rastrevíspulas sobre su cabeza. Un arma. Katniss serró la rama, el veneno alucinógeno bullendo en su sangre. Dejó caer el nido sobre los Profesionales de abajo. Caos. Gritos. Y luego, la muerte. Pero esto era solo el comienzo. Los Vigilantes tenían más sorpresas preparadas. Bolas de fuego. Mutas. Y el cambio de reglas: dos vencedores del mismo distrito. Peeta. Tenía que encontrar a Peeta.`
        }
    };

    window.SagaContent = {
        id: 'hunger_games',
        name: {
            es: 'Los Juegos del Hambre',
            en: 'The Hunger Games',
            zh: '饥饿游戏',
            hi: 'द हंगर गेम्स',
            fr: 'Hunger Games',
            ar: 'مباريات الجوع',
            bn: 'হাঙ্গার গেমস',
            ru: 'Голодные игры',
            pt: 'Jogos Vorazes',
            ur: 'دی ہنگر گیمز'
        },
        books: [
            { title: { es: "Los Juegos del Hambre", en: "The Hunger Games" }, words: 99750 },
            { title: { es: "En Llamas", en: "Catching Fire" }, words: 101564 },
            { title: { es: "Sinsajo", en: "Mockingjay" }, words: 100269 },
            { title: { es: "Balada de Pájaros Cantores y Serpientes", en: "Ballad of Songbirds and Snakes" }, words: 158000 }
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

    // Fill extra langs
    const extraLangs = ['zh', 'hi', 'fr', 'ar', 'bn', 'ru', 'pt', 'ur'];
    extraLangs.forEach(lang => {
        window.SagaContent.fragments[lang] = window.SagaContent.fragments.en;
    });

})();
