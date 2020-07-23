$('.next').click(function(){
    nextImg();
});


$('.prev').click(function(){
    prevImg();
});

$('.nav i').click(function(){
    var dotInUse = $(this).index();                  
    var activeImg = $('.images img').eq(dotInUse);


    $('.nav i.active').removeClass('active');      
    $(this).addClass('active');                               
    $('.images img.active').removeClass('active');          
    activeImg.addClass('active');                           
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
        $('.nav i.last').addClass('active');   /*qui*/
    } else {
        currentImg.prev().addClass('active');
        currentDot.prev().addClass('active');

    }

}

