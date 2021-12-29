function openApp () {
    var appWindow = window.open("spartial://");
    setTimeout( function () {if (appWindow) {
        appWindow.location ="https://google.com";
            }
            },1000);
}