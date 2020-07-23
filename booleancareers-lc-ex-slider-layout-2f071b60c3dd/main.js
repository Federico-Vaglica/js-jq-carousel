$('.next').click(function(){
    nextImg();
});


$('.prev').click(function(){
    prevImg();
});



/*********************/

function nextImg(){

    var currentImg=$('.images img.active');
    var currentDot=$('.nav i.active')


    currentImg.removeClass('active');
    currentDot.removeClass('active');
    
    if (currentImg.hasClass('last')){
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        currentImg.next().addClass('active');
        currentDot.next().addClass('active');
    };
    
};

function prevImg(){
    
    var currentImg=$('.images img.active');
    var currentDot=$('.nav i.active')

    currentImg.removeClass('active');
    currentDot.removeClass('active');

    if(currentImg.hasClass('first')){
        $('.images img.last').addClass('active');
        $('.nav i.first').addClass('active');
    } else {
        currentImg.prev().addClass('active');
        currentDot.prev().addClass('active');

    }

}