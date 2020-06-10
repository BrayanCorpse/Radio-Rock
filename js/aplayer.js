const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    audio: [

        {
            name: 'Creep',
            artist: 'Radiohead',
            url: './music/radiohead-creep.mp3',
            cover: './img/R-creep.jpg',
            lrc: 'lrc1.lrc',
            theme: '#2E083D'
        },
        {
            name: 'Stan - Eminem ft. Dido',
            artist: 'Emminem',
            url: './music/eminem-stan-long-version-ft-dido.mp3',
            cover: './img/Stan.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Seeman',
            artist: 'Rammstein',
            url: './music/rammstein-seemann.mp3',
            cover: './img/seeman.jpg',
            lrc: 'lrc1.lrc',
            theme: '#0E6E77 '
        },
        {
            name: 'Gangsta´s Paradise (feat. L.V.)',
            artist: 'Coolio',
            url: './music/coolio-gangstas-paradise-feat-lv.mp3',
            cover: './img/Coolio.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'One Day',
            artist: 'Die L Trevoh84',
            url: './music/die.mp3',
            cover: './img/die.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'Sing-for-the-moment',
            artist: 'Emminem',
            url: './music/eminem-sing-for-the-moment.mp3',
            cover: './img/sing.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'White Flag',
            artist: 'Dido',
            url: './music/dido-white-flag.mp3',
            cover: './img/dido.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        },
        {
            name: 'All the things she said',
            artist: 'Tatu',
            url: './music/tatu-all-the-things-she-said.mp3',
            cover: './img/tatu.jpg',
            lrc: 'lrc2.lrc',
            theme: '#E74C3C'
        },
        {
            name: 'You Don´t Know',
            artist: 'Eminem, 50 Cent',
            url: './music/eminem-ft-50-cent-cashis-lloyd-banks-you-dont-know-official-video.mp3',
            cover: './img/emi-50.jpg',
            lrc: 'lrc2.lrc',
            theme: '#1A5276 '
        },
        {
            name: 'Feel Good',
            artist: 'Gorillaz',
            url: './music/gorillaz-feel-good.mp3',
            cover: './img/gor.jpg',
            lrc: 'lrc2.lrc',
            theme: '#A569BD '
        }      
    ]
});