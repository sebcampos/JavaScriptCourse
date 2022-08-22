/**
* this method turns the
* music on or off
*/
function music_switch() {
    let myMusic = document.getElementById("music");
    if (myMusic.playing == true)
    {
        myMusic.playing = false;
        myMusic.pause();
        return;
    }
    myMusic.playing = true;
    myMusic.play();
    return;
}