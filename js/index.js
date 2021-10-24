//--> asigna tag html video const $video = document.querySelector('video');
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward =document.querySelector('#backward')
const $fordward =document.querySelector('#fordward')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBackward)
$fordward.addEventListener('click',handleFordward)

function handlePlay(){

    $video.play()
    $play.hidden=true
    $pause.hidden=false
    $video.muted =false
    

}

function handlePause(){

$video.pause()
$pause.hidden=true
$play.hidden=false

}

function handleBackward(){

    $video.currentTime -=  10

}

function handleFordward(){

    $video.currentTime +=  10

}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata',handleLoader)
$video.addEventListener('timeupdate',handleTimeUpdate)


function handleLoader(){
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value=$video.currentTime
  
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}