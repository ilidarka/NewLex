$("#iframeFeedback").on("load", () => {

});

let iframeHead = $("#iframeFeedback").contents();
console.log(iframeHead);
/*let iframeCSS = "<style>.badge {max-width: unset;}</style>";
$(iframeHead).append(iframeCSS);*/