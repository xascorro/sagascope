// Reina Roja Data
(() => {
    // Helper function is now global in script.js (window.repeat)
    const TEXTS = {
        en: {
            base: `Antonia Scott is not a cop. She doesn't carry a weapon. She doesn't wear a badge. But she has solved dozens of crimes. She is, quite simply, the smartest person in the world. Her intelligence is a gift, but it is also a curse. It has cost her everything. Now, she lives in her attic in Lavapiés, refusing to come out. She has given up. Until Jon Gutiérrez knocks on her door. Jon is a police officer in disgrace. He's been suspended, accused of planting evidence. He's a good man, but he's made mistakes. He needs Antonia's help to clear his name. And she needs him, although she doesn't know it yet.

The Mentor spoke from the shadows. "She is the Queen. The Red Queen. You are the Squire. Your job is to protect her. To keep her grounded. She sees things others miss. But her mind... it is a dangerous place. It runs too fast. It overheats. You must be her anchor." Jon nodded, feeling foolish in his cheap suit. He was a cop, not a babysitter. But he had no choice. The case was impossible. A billionaire's daughter murdered. A ritualistic killing. And the killer was just getting started.

Antonia looked at the crime scene. It was a masterpiece of macabre theater. The body was drained of blood. There were symbols, clues hidden in plain sight. Her mind raced, connecting dots that weren't even there for anyone else. Pills. She needed her pills. The red monkeys were screaming in her head. "Focus, Scott," Jon said, his voice surprisingly gentle. "Tell me what you see." She took a breath. "Everything," she whispered. "I see everything."

Ezequiel watched them from the monitors. He was playing a game with them. A game of cat and mouse. He was smarter than the police. Smarter than everyone. Except, perhaps, her. The Red Queen. He wanted to test her. To break her. He had a plan. A grand finale that would shake the foundations of Spain. "Come and find me, Antonia," he murmured. "If you dare." The clock was ticking. The next victim was already chosen.`
        },
        es: {
            base: `Antonia Scott no es policía. No lleva arma. No lleva placa. Pero ha resuelto decenas de crímenes. Es, sencillamente, la persona más inteligente del mundo. Su inteligencia es un don, pero también es una maldición. Le ha costado todo. Ahora, vive en su ático de Lavapiés, negándose a salir. Se ha rendido. Hasta que Jon Gutiérrez llama a su puerta. Jon es un policía en desgracia. Ha sido suspendido, acusado de plantar pruebas. Es un buen hombre, pero ha cometido errores. Necesita la ayuda de Antonia para limpiar su nombre. Y ella lo necesita a él, aunque aún no lo sabe.

El Mentor habló desde las sombras. "Ella es la Reina. La Reina Roja. Tú eres el Escudero. Tu trabajo es protegerla. Mantenerla con los pies en la tierra. Ella ve cosas que otros pasan por alto. Pero su mente... es un lugar peligroso. Corre demasiado rápido. Se sobrecalienta. Debes ser su ancla". Jon asintió, sintiéndose tonto con su traje barato. Era policía, no niñera. Pero no tenía opción. El caso era imposible. La hija de un multimillonario asesinada. Un asesinato ritual. Y el asesino acababa de empezar.

Antonia miró la escena del crimen. Era una obra maestra de teatro macabro. El cuerpo estaba drenado de sangre. Había símbolos, pistas ocultas a plena vista. Su mente corrió, conectando puntos que ni siquiera estaban allí para nadie más. Pastillas. Necesitaba sus pastillas. Los monos rojos gritaban en su cabeza. "Concéntrate, Scott", dijo Jon, con voz sorprendentemente suave. "Dime qué ves". Ella respiró hondo. "Todo", susurró. "Veo todo".

Ezequiel los observaba desde los monitores. Estaba jugando un juego con ellos. Un juego del gato y el ratón. Era más inteligente que la policía. Más inteligente que todos. Excepto, tal vez, ella. La Reina Roja. Quería ponerla a prueba. Romperla. Tenía un plan. Un gran final que sacudiría los cimientos de España. "Ven a buscarme, Antonia", murmuró. "Si te atreves". El reloj corría. La próxima víctima ya estaba elegida.`
        }
    };

    window.SagaContent = {
        id: 'reina_roja',
        name: {
            es: 'Reina Roja',
            en: 'Red Queen',
            zh: '红皇后',
            hi: 'लाल रानी',
            fr: 'Reine Rouge',
            ar: 'الملكة الحمراء',
            bn: 'লাল রানী',
            ru: 'Красная королева',
            pt: 'Rainha Vermelha',
            ur: 'سرخ ملکہ'
        },
        books: [
            { title: { es: "Reina Roja", en: "Red Queen" }, words: 125000 },
            { title: { es: "Loba Negra", en: "Black Wolf" }, words: 130000 },
            { title: { es: "Rey Blanco", en: "White King" }, words: 140000 }
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
