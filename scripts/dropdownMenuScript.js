$(document).on('mouseover','.dropdown',function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).find(".dropdownContent").removeClass("hidenDropdownContent");
}); 

$(document).on('mouseleave','.serviceItem.dropdown',function(e) {
    $(this).find('.dropdownContent').addClass('hidenDropdownContent');
}); 