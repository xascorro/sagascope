// GOT Data
(() => {
    // Helper function is now global in script.js (window.repeat)
    const TEXTS = {
        en: {
            base: `The morning had dawned clear and cold, with a crispness that hinted at the end of summer. They set forth at daybreak to see a man beheaded, twenty in all, and Bran rode among them, nervous with excitement. This was the first time he had been deemed old enough to go with his lord father and his brothers to see the king's justice done. It was the ninth year of summer, and the seventh of Bran's life. The man had been a deserter from the Night's Watch. No one was more dangerous. The deserter knew his life was forfeit if he was taken, so he would not hesitate to commit any crime, no matter how foul.

Daenerys Targaryen stood on the balcony, looking out over the free city of Pentos. Her brother Viserys paced the room behind her, ranting about his crown, his throne, his birthright. Damp strands of silver-gold hair stuck to his pale forehead. "They will kill us, sweet sister," he whispered, clutching her arm. "The Usurper's knives are everywhere." Dany pulled away gently. She was frightened, yes, but also weary. Weary of running, weary of begging. She looked at the sunset, a bleeding wound in the sky. Somewhere across that water was Westeros. Home, Viserys called it. But it was no home to her.

Tyrion Lannister sat by the fire, reading a book on the history of dragons. The firelight danced on the pages, illuminating sketches of Balerion the Black Dread. His legs ached, a constant reminder of his deformity, but his mind was sharp, soaring high above physical limitations. "A mind needs books as a sword needs a whetstone, if it is to keep its edge," he had told Jon Snow. He turned the page. Knowledge was power, and in a world where strength was measured in steel and blood, Tyrion knew his true weapon was his intellect.

Jon Snow climbed the Wall. It was a massive structure of ice, weeping in the sunlight. He was a bastard, a stain on his father's honor, but here, on the Wall, he could be something more. He could be a ranger. A watcher on the walls. Ghost, his direwolf, trotted silently beside him. The wind howled, carrying the scent of snow and pine and something else. Something old and cold. Winter was coming. And with it, the White Walkers. Jon gripped his sword, Longclaw. He would be ready.`
        },
        es: {
            base: `La mañana había amanecido clara y fría, con una frescura que insinuaba el final del verano. Salieron al amanecer para ver a un hombre ser decapitado, veinte en total, y Bran cabalgaba entre ellos, nervioso por la emoción. Era la primera vez que se le consideraba lo suficientemente mayor para ir con su señor padre y sus hermanos a ver cómo se hacía la justicia del rey. Era el noveno año del verano y el séptimo de la vida de Bran. El hombre había sido un desertor de la Guardia de la Noche. Nadie era más peligroso. El desertor sabía que su vida estaba perdida si lo atrapaban.

Daenerys Targaryen estaba de pie en el balcón, mirando hacia la ciudad libre de Pentos. Su hermano Viserys se paseaba por la habitación detrás de ella, despotricando sobre su corona, su trono, su derecho de nacimiento. Mechones húmedos de cabello rubio plateado se pegaban a su frente pálida. "Nos matarán, dulce hermana", susurró, agarrándola del brazo. "Los cuchillos del Usurpador están en todas partes". Dany se apartó suavemente. Tenía miedo, sí, pero también estaba cansada. Cansada de correr, cansada de mendigar.

Tyrion Lannister estaba sentado junto al fuego, leyendo un libro sobre la historia de los dragones. La luz del fuego bailaba en las páginas, iluminando bocetos de Balerion el Terror Negro. Le dolían las piernas, un recordatorio constante de su deformidad, pero su mente era aguda, elevándose muy por encima de las limitaciones físicas. "Una mente necesita libros como una espada necesita una piedra de afilar, si quiere mantener su filo", le había dicho a Jon Snow. Pasó la página. El conocimiento era poder.

Jon Nieve escaló el Muro. Era una estructura masiva de hielo, llorando a la luz del sol. Era un bastardo, una mancha en el honor de su padre, pero aquí, en el Muro, podía ser algo más. Podía ser un explorador. Un vigilante en las murallas. Fantasma, su lobo huargo, trotaba silenciosamente a su lado. El viento aullaba, trayendo el olor a nieve y pino y algo más. Algo viejo y frío. Se acercaba el invierno. Y con él, los Caminantes Blancos. Jon agarró su espada, Garra. Estaría listo.`
        }
    };

    window.SagaContent = {
        id: 'got',
        name: { es: 'Juego de Tronos', en: 'Game of Thrones' },
        books: [
            { title: { es: "Juego de Tronos", en: "A Game of Thrones" }, words: 298000 },
            { title: { es: "Choque de Reyes", en: "A Clash of Kings" }, words: 326000 },
            { title: { es: "Tormenta de Espadas", en: "A Storm of Swords" }, words: 424000 },
            { title: { es: "Festín de Cuervos", en: "A Feast for Crows" }, words: 300000 },
            { title: { es: "Danza de Dragones", en: "A Dance with Dragons" }, words: 422000 }
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
