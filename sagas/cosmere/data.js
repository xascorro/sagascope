// Cosmere Data
(() => {
    // Helper function is now global in script.js (window.repeat)

    const TEXTS = {
        en: {
            base: `Ash fell from the sky. It fell like black snow, dusting the streets of Luthadel, coating the spires of Kredik Shaw. Kelsier smiled, watching it. He was a survivor. He had survived the Pits of Hathsin, and he would survive this. The Lord Ruler had reigned for a thousand years, but tonight, the rebellion would begin. Vin crouched in the shadows, her eyes wide. She was just a street urchin, a thief, but Kelsier saw something in her. A spark. Mistborn.

Szeth-son-son-Vallano, Truthless of Shinovar, wore white on the day he was to kill a king. The white clothing was a simple thing, loose and comfortable, but in this land of rock and storm, it stood out like a beacon. He walked across the marble floor, listening to the screams. He did not want to kill, but his Oathstone demanded it. He was a slave to his stone, and tonight, the King of Alethkar would die. He lashed himself to the ceiling, gravity shifting, his perspective changing.

Kaladin Stormblessed sat with his back against the wooden side of the bridge, staring out at the Shattered Plains. The chasms were deep, dark scars in the earth, home to chasmfiends and sudden death. Bridge Four. That was his team. His family. They were expendable, fodder for the Parshendi arrows, but Kaladin had sworn to protect them. The wind spren, Syl, danced around him, a ribbon of light. "They will try to kill you," she whispered. "Let them try," Kaladin muttered, gripping his spear.

Shallan Davar sketched the pattern of the moss on the rock, her charcoal stick moving deftly. She needed to capture it, to understand it. The world was full of secrets, and she intended to find them all. Her brothers relied on her. Her house relied on her. She had come to Kharbranth to become a ward of Jasnah Kholin, the most brilliant scholar in the world. But Jasnah was dangerous, a heretic, and Shallan had a secret of her own. A Soulcaster.

Dalinar Kholin stood on the top of Urithiru, the city of towers. The Highstorm approached, a wall of blackness and lightning. He did not fear it. He welcomed it. The Stormfather spoke to him in the thunder. "Unite them," the voice said. "Unite them, or perish." The Knights Radiant were returning. The Desolation was here. And Dalinar, the Blackthorn, would face it with fire and blood.`
        },
        es: {
            base: `La ceniza caía del cielo. Caía como nieve negra, cubriendo las calles de Luthadel, cubriendo las agujas de Kredik Shaw. Kelsier sonrió, observándola. Era un superviviente. Había sobrevivido a los Pozos de Hathsin, y sobreviviría a esto. El Lord Legislador había reinado durante mil años, pero esta noche comenzaría la rebelión. Vin se agachó en las sombras, con los ojos muy abiertos. No era más que una pilluela de la calle, una ladrona, pero Kelsier vio algo en ella. Una chispa. Nacida de la Bruma.

Szeth-hijo-hijo-Vallano, Sinverdad de Shinovar, vestía de blanco el día que iba a matar a un rey. La ropa blanca era algo sencillo, suelta y cómoda, pero en esta tierra de rocas y tormentas, destacaba como un faro. Caminó por el suelo de mármol, escuchando los gritos. No quería matar, pero su Piedra Juramento lo exigía. Era un esclavo de su piedra, y esta noche, el Rey de Alethkar moriría. Se enlazó al techo, la gravedad cambió, su perspectiva cambió.

Kaladin Bendito por la Tormenta estaba sentado con la espalda contra el costado de madera del puente, mirando hacia las Llanuras Quebradas. Los abismos eran cicatrices profundas y oscuras en la tierra, hogar de los demonios del abismo y de la muerte súbita. El Puente Cuatro. Ese era su equipo. Su familia. Eran prescindibles, carne de cañón para las flechas Parshendi, pero Kaladin había jurado protegerlos. La spren del viento, Syl, bailaba a su alrededor, una cinta de luz. "Intentarán matarte", susurró. "Que lo intenten", murmuró Kaladin, agarrando su lanza.

Shallan Davar dibujó el patrón del musgo en la roca, su carboncillo moviéndose hábilmente. Necesitaba capturarlo, entenderlo. El mundo estaba lleno de secretos, y ella tenía la intención de encontrarlos todos. Sus hermanos dependían de ella. Su casa dependía de ella. Había venido a Kharbranth para convertirse en pupila de Jasnah Kholin, la erudita más brillante del mundo. Pero Jasnah era peligrosa, una hereje, y Shallan tenía un secreto propio. Un Moldeador de Almas.

Dalinar Kholin estaba en la cima de Urithiru, la ciudad de las torres. La Alta Tormenta se acercaba, un muro de negrura y relámpagos. No le temía. Le daba la bienvenida. El Padre Tormenta le habló en el trueno. "Únelos", dijo la voz. "Únelos, o perece." Los Caballeros Radiantes estaban regresando. La Desolación estaba aquí. Y Dalinar, el Espina Negra, la enfrentaría con fuego y sangre.`
        }
    };

    window.SagaContent = {
        id: 'cosmere',
        // ... names ...
        names: {
            es: 'El Cosmere',
            en: 'The Cosmere',
            zh: '三界宙 (Cosmere)',
            hi: 'कॉस्मेर (Cosmere)',
            fr: 'Le Cosmere',
            ar: 'الكون (Cosmere)',
            bn: 'কসমিয়ার (Cosmere)',
            ru: 'Космер',
            pt: 'O Cosmere',
            ur: 'کوسمیر (Cosmere)'
        },
        books: [
            { title: { es: "Nacidos de la Bruma", en: "Mistborn" }, words: 211959 },
            { title: { es: "El Archivo de las Tormentas", en: "Stormlight Archive" }, words: 386470 },
            { title: { es: "El Aliento de los Dioses", en: "Warbreaker" }, words: 204561 },
            { title: { es: "Elantris", en: "Elantris" }, words: 202765 }
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

    // Fill others
    const extraLangs = ['zh', 'hi', 'fr', 'ar', 'bn', 'ru', 'pt', 'ur'];
    extraLangs.forEach(lang => {
        window.SagaContent.fragments[lang] = window.SagaContent.fragments.en;
    });

})();
