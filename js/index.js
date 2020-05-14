
// Se conecta con la base de datos de Firebase
var db = firebase.database();


const save = document.getElementById('save');

save.addEventListener('click', onClickInsert);



function insertTask(name,artist,url,cover,theme,genre) {
// Se envía los valores de cada input
    db.ref('music/').push({
        name: name,
        artist: artist,
        url: url,
        cover: cover,
        theme: theme,
        genre: genre,
        date: moment().startOf('day').fromNow()
    });
 }

 function onClickInsert(){
    // Se asigna a una variable cada elemento input con su ID
    var name = document.getElementById('name').value;
    var artist = document.getElementById('artist').value;
    var url = document.getElementById('url').value;
    var cover = document.getElementById('cover').value;
    var theme = document.getElementById('theme').value;
    var genre = document.getElementById('genre').value;
    if(name.length==0 || artist.length==0 || url.length==0 || cover.length==0 || theme.length==0 || genre.length==0)
    {
        alert("Empty Fiels!")
    }
    else
    {
        insertTask(name,artist,url,cover,theme,genre); 
        name = document.getElementById('name').value= "";
        artist = document.getElementById('artist').value= "";
        url = document.getElementById('url').value= "";
        cover = document.getElementById('cover').value="";
        theme = document.getElementById('theme').value="";
        genre = document.getElementById('genre').value="";
        alert("saved successfully");
    }

}

