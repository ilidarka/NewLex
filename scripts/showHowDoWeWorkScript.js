var isClick=false;
$('.howDoWeWork li').click(function(){
    isClick=!isClick;
    if(isClick){
        $(this).find('.show-howDoWeWorkItem').css('transform', 'rotate(180deg)');
        return $(this).next().css('display', 'block');
    }
    $(this).find('.show-howDoWeWorkItem').css('transform', 'rotate(0deg)');
    return $(this).next().css('display', 'none'); 
})