var advertisement_screen = document.querySelector('.advertisement-screen');
var myVideo= document.getElementById('myVideo');
var count_button = document.querySelector('.count-button');
var count = document.getElementById('count');
var skipbutton = document.querySelector('.skipbutton');
var count_num=5;
var timer;
var showAd=true;

document.addEventListener('DOMContentLoaded',function(){
    
    //make video element click event 

    myVideo.addEventListener('timeupdate', function(){

     
        if(myVideo.currentTime >=10 && showAd){
            // console.log(myVideo.currentTime)
            myVideo.pause();
            advertisement_screen.style.display = 'block';
            startCount();
        }
    })

    function startCount(){

        timer=setInterval(function(){
            count_num--
            count.textContent = count_num;
            if(count_num <=0){
                count_button.style.display='none'
                skipbutton.style.display='flex'
                clearInterval(timer)
            }
        
        },1000)
    }
    skipbutton.addEventListener('click',()=>{
        advertisement_screen.style.display = 'none';
        myVideo.play();
        clearInterval(timer)
        showAd=false;
    })
   
})