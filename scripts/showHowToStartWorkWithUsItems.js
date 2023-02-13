var isClick=false;
$('.button-show-howToStartWorlWithUsItems').click(function(){
    isClick=!isClick;
    if(isClick){
        $(this).text('Скрыть');
        return $('.howToStartWorkWithUs .howToStartWorkWithUsItem').css('display', 'flex');
    }
    $(this).text('Показать еще');
    return $('.howToStartWorkWithUs .howToStartWorkWithUsItem:not(:first-child)').css('display', 'none');
})