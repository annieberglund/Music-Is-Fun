function ItunesController() {
  console.log(2)
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    console.log(4);
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function drawSongs(songList) {
    var template = '';
    var songElem = document.getElementById('song-list');
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i];
      console.log(8);
      template += `
      <div class="col-xs-12 col-sm-6 col-lg-4"> 
        <div class="song-card">
      	<div class="song-inner text-center">
            <img src="${song.albumArt}" alt="album art" height="100" width="100"><br />
            <h3 class="card-title">${song.title}</h3>
            <p class="card-text">Artist: ${song.artist}</p>
            <p>Price: ${song.price}</p>
            <audio class="cont-audio"controls="controls"><source src="${song.preview}"></audio>
        </div>    
        </div>
      </div> 
      `
    }
    songElem.innerHTML = template
  }
   document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

  this.getMusicByArtist = function () {
    service.getMusicByArtist(drawSongs);
    console.log(9)
  }





}