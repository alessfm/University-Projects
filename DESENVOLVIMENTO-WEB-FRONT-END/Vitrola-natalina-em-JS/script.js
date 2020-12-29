// Script aux
const $ = (selector) => {
    let result = document.querySelectorAll(selector)
    if (result) {
        return (result.length > 1) ? Array.from(result) : result[0]
    }
    return null
}

// Main
let musicas = [
    {nome: "Baby Please Come Home", artista: "Darlene Love", capaDoAlbum: "imagens/darlene_love.jpg", file: "musicas/baby_please_come_home.mp3"},
    {nome: "Jingle Bell Rock", artista: "Bobby Helms", capaDoAlbum: "imagens/bobby_helms.jpg", file: "musicas/jingle_bell_rock.mp3"},
    {nome: "Rockin Around The Christmas Tree", artista: "Brenda Lee", capaDoAlbum: "imagens/brenda_lee.jpg", file: "musicas/rockin_around_the_christmas_tree.mp3"},
    {nome: "Santa Claus is Back in Town", artista: "Elvis Presley", capaDoAlbum: "imagens/elvis-presley.jpg", file: "musicas/santa_claus_is_back_in_town.mp3"},
    {nome: "Winter Wonderland", artista: "The Andrew Sisters", capaDoAlbum: "imagens/andrew_sisters.jpg", file: "musicas/winter_wonderland_the_andrews_sisters.mp3"},
]

let state = 0

$(".power").onclick = function () {
    $(".stick").classList.toggle("play")
    if(state === 0){
        setTimeout(function(){ // Turn on and play
            $(".record").style.animationPlayState = "running"
            let rand = musicas[(Math.random() * musicas.length) | 0]
            $(".mysong").src = rand.file
            $(".picture").src = rand.capaDoAlbum
            $(".artist_name").innerHTML = rand.artista
            $(".song_name").innerHTML = rand.nome
            $(".mysong").play()
        },1000)
        state=1
        
    }else{ // Turn off and pause
        $(".record").style.animationPlayState = "paused"
        $(".mysong").pause();
        state=0
    }}

// change volume 
$("body").addEventListener("keydown", function(e){
    let tecla = e.keyCode;
    let valueNumber = parseFloat($(".slider").value) // value is a string
    if(tecla == 38){
        valueNumber += 0.1
        $(".slider").value = valueNumber
        $(".mysong").volume = $(".slider").value ; // arrow up
    }else if(tecla == 40){
        valueNumber -= 0.1
        $(".slider").value = valueNumber
        $(".mysong").volume = $(".slider").value ; // arrow down    
    }    
})

$(".slider").onchange = function(){ // with mouse
    $(".mysong").volume = this.value;
}
