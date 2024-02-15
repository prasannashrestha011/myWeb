const audio_1=new Audio('../assets/audio/audio1.mp3')
const audio_2=new Audio('../assets/audio/audio2.mp3')
const audio_3=new Audio('../assets/audio/audio3.mp3')
const audio_4=new Audio('../assets/audio/audio4.mp3')
const audio_display=document.querySelector('.audio-header')

const img=new Image()
const imgPaths=['../assets/musicPG/ss.jpg','../assets/musicPG/audio2.jpg','../assets/musicPG/audio3.jpg','../assets/musicPG/audio4.jpg']
//buttons
const buttons=document.querySelectorAll('.audio_btn')
const header_1=document.querySelector('#header_1')
const header_2=document.querySelector('#header_2')
const header_3=document.querySelector('#header_3')
const header_4=document.querySelector('#header_4')
const h_images = [
    document.querySelector('#h-imgd'),
    document.querySelector('#h-img1'),
    document.querySelector('#h-img2'),
    document.querySelector('#h-img3'),
    document.querySelector('#h-img4')
  ];
const body=document.querySelector('.struct')
const bg_d='../assets/musicPG/bgd.jpg'
const bg_1='../assets/musicPG/bg1.jpg'
const bg_2='../assets/musicPG/bg2.jpg'
const bg_3='../assets/musicPG/bg3.jpg'
const bg_4='../assets/musicPG/bg4.jpg'
const audio_play=(audio)=>{
 
 
    if(audio==audio_1){
        audio.play()
       
        void audio_display.offsetWidth;
        body.style.backgroundImage=`url(${bg_1})`
        header_1.innerHTML='<marquee>Kate Bush-running up that hill</marquee>'
        h_images.forEach((img)=>{
            img.style.opacity=0;
        })
        h_images[1].style.opacity=1;
        audio_pause(audio_2)
        audio_pause(audio_3)
        audio_pause(audio_4)
    }
    else if(audio==audio_2){
        audio.play()
        header_2.innerHTML='<marquee>Every breathe you take</marquee>'
        body.style.backgroundImage=`url(${bg_2})`
        h_images.forEach((img)=>{
            img.style.opacity=0;
        })
        h_images[2].style.opacity=1;
        audio_pause(audio_1)
        audio_pause(audio_3)
        audio_pause(audio_4)
    }
    else if(audio==audio_3){
        audio.play()
        header_3.innerHTML='<marquee>Everybody  wants to rule the world</marquee>'
        body.style.backgroundImage=`url(${bg_3})`
        h_images.forEach((img)=>{
            img.style.opacity=0;
        })
        h_images[3].style.opacity=1;
        audio_pause(audio_1)
        audio_pause(audio_2)
        audio_pause(audio_4)
     
    }
    else if(audio==audio_4){
        audio.play()
        header_4.innerHTML='<marquee>Ghost-mary on cross</marquee>'
        body.style.backgroundImage=`url(${bg_4})`
        h_images.forEach((img)=>{
            img.style.opacity=0;
        })
        h_images[4].style.opacity=1;
        audio_pause(audio_1)
        audio_pause(audio_2)
        audio_pause(audio_3)
    
    }
 
}
const audio_pause=(audio)=>{
    audio.pause()
   if(audio==audio_1)
   {
    header_1.innerHTML='Kate Bush-running up that hill'
   }
   else if(audio==audio_2)
   {
    header_2.innerHTML='Every breathe you take'
   }
   else if(audio==audio_3)
   {
    header_3.innerHTML='Everybody  wants to rule the world'
   }
   else if(audio==audio_4)
   {
    header_4.innerHTML='Ghost-mary on cross'
   }
   
}
const audio_reset=(audio)=>{
    if(audio==audio_1)
   {
        audio.currentTime = 0;
        audio.pause();
        header_1.innerHTML='Kate Bush-running up that hill'
        body.style.backgroundImage=`url(${bg_d})`
   }
   else if(audio==audio_2)
   {
    audio.currentTime = 0;
    audio.pause();
    header_2.innerHTML='Every breathe you take'
    body.style.backgroundImage=`url(${bg_d})`
   }
   else if(audio==audio_3)
   {
    audio.currentTime = 0;
    audio.pause();
    header_3.innerHTML='Everybody  wants to rule the world'
    body.style.backgroundImage=`url(${bg_d})`
   }
   else if(audio==audio_4)
   {
    audio.currentTime = 0;
    audio.pause();
    header_4.innerHTML='Ghost-mary on cross'
    body.style.backgroundImage=`url(${bg_d})`
   }
}
