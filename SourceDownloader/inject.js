// // !!!

(function () {

    // just place a div at top right
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = 0;
    div.style.right = 0;
    div.textContent = '\nInjected!!';
    div.id = 'page-footer';
    document.body.appendChild(div);
    download(".");
    getAllScripts();
    getAllImages();
    getAllStyles();
    // printAllFiles();
    // alert('inserted script!');
})();

function download(url) {
    var a = document.createElement("a");
    a.href = url;
    fileName = url.split("/").pop();
    // fileName = "index.html";
    a.download = window.location.pathname.split("/").pop();
    // a.download = fileName;
    // a.download = "index";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function getAllScripts() {
    var pageScripts = document.getElementsByTagName("script");
    // var sources = [];
    for (var i = 0; i < pageScripts.length; i++) {
        // sources.push(pageScripts[i].src);
        // console.log(sources[i]);
        download(pageScripts[i].src);
    }
}

function getAllStyles() {
    var pageStyles = document.getElementsByTagName("link");
    for (var i = 0; i < pageStyles.length; i++) {
        if (pageStyles[i].rel == "stylesheet") {
            download(pageStyles[i].href);
        }
    }
}

function getAllImages() {
    var pageImages = document.getElementsByTagName("img");
    for (var i = 0; i < pageImages.length; i++) {
        download(pageImages[i].src);
        // alert(pageImages[i].src);
    }
}

// !!!