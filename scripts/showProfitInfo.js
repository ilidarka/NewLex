var isClick=false;
$('.button-show-profitLists-info').click(function(){
    isClick=!isClick;
    if(isClick){
        $(this).text('Скрыть');
        return $('.profit p, .profit .profitsList').css('display', 'block');
    }
    $(this).text('Подробнее');
    return $('.profit p:nth-child(n+5), .profit .profitsList').css('display', 'none');
})