$("#iframeFeedback").on("load", () => {
    let iframeHead = $("#iframeFeedback").contents().find("head");
    let iframeCSS = "<style>.iframe-css{color: #e91905}</style>";
    $(iframeHead).append(iframeCSS);
});