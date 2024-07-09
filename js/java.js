let sideBarWidth =$('.options').outerWidth();

$('#open').click(function(){
    if(sideBarWidth == 0){
        $('.options').css({left:`-${sideBarWidth}px`,transition:'left 1s'})
        
    }
    else{
        $('.options').css({left:`0px`,transition:'left 1s'})
        $('#open').css({left:`${sideBarWidth + 15 }px`,transition:'left 1s'})

    }
})

$('.close').click(function(){
    $('.options').css({left:`-${sideBarWidth}px`,transition:'left 1s'})
    $('#open').css({left:`15px`,transition:'left 1s'})

})

$('.link').click(function(e){
    let secId =$(this).attr('href')
    console.log(secId)
    let secTop = $(secId).offset().top;
    // console.log(secTop)
    $('html,body').animate({
        scrollDown:secId
    },6000)
})



let countDownDate = new Date("04/7/2027").getTime()
console.log(countDownDate/1000/60/60/24)
let counter = setInterval(()=>{

    let dateNow= new Date()
    let timeBetween = (countDownDate - dateNow) 
    
    let d = Math.floor(timeBetween/1000/60/60/24)
    let h= Math.floor(timeBetween/1000/60/60)%24;
    let m=Math.floor(timeBetween/1000/60)%60;
    let s=Math.floor(timeBetween/1000)%60;

    console.log("days ="+ d)
    console.log("hours ="+ h)
    console.log("min="+ m)
    console.log("sec="+ s)
    document.getElementById('days').innerHTML="-"+ d;
    document.getElementById('hours').innerHTML=h;
    document.getElementById('mins').innerHTML=m;
    document.getElementById('secs').innerHTML=s;

})


$('.one').click(function(){
    slideDown('500')
    $('.one').click(function(){
        $('.fourD').slidUp('500')
        $('.twoD').slidUp('500')
        $('.threeD').slidUp('500')
    })
})






