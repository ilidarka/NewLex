var $head = $("iframe").contents().find("head");       
console.log($head);         
$head.append($("", 
    { rel: "stylesheet", href: "file://css/style.css", type: "text/css" }));