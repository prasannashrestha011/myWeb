const audio_1=new Audio('../assets/audio/audio1.mp3')
const audio_2=new Audio('../assets/audio/audio2.mp3')
const audio_3=new Audio('../assets/audio/audio3.mp3')
const audio_4=new Audio('../assets/audio/audio4.mp3')
const audio_display=document.querySelector('.audio-header')
const img=new Image()
const imgPaths=['../assets/musicPG/ss.jpg','../assets/musicPG/audio2.jpg','../assets/musicPG/audio3.jpg','../assets/musicPG/audio4.jpg']
//buttons
const buttons=document.querySelectorAll('.audio_btn')
const audio_play=(audio)=>{
    audio.play()
    if(audio==audio_1){
        audio_display.style.backgroundImage = `url('${imgPaths[0]}')`;
    }
    else if(audio==audio_2){
        audio_display.style.backgroundImage = `url('${imgPaths[1]}')`;
    }
    else if(audio==audio_3){
        audio_display.style.backgroundImage = `url('${imgPaths[3]}')`;
    }
    else if(audio==audio_4){
        audio_display.style.backgroundImage = `url('${imgPaths[3]}')`;
    }
 
}
const audio_pause=(audio)=>{
    audio.pause()
   
}
