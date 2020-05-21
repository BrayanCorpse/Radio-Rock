const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 90,
    audio: [
        {
            name: 'Stan - Eminem ft. Dido',
            artist: 'Emminem',
            url: './music/eminem-stan-long-version-ft-dido.mp3',
            cover: './img/Stan.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
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
        }   
    ]
});