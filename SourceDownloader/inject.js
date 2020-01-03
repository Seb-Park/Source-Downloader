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
    download("/index");
    printAllFiles();
    // alert('inserted script!');
})();

// printAllFiles();

function printAllFiles() {
    const testFolder = './';
    const fs = require('fs');

    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
    });
}

function download(url) {
    var a = document.createElement("a");
    a.href = url;
    fileName = url.split("/").pop();
    // fileName = "index.html";
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

// !!!