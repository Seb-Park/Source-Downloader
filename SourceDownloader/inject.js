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
    printAllFiles();
    // alert('inserted script!');
})();

printAllFiles();

function printAllFiles() {
    const testFolder = './';
    const fs = require('fs');
    // getBBundle().pipe(
    // console.log("start");

    fs.readdirSync(testFolder).forEach(file => {
        console.log(file);
    })

    // fs.readFile('./index.html', 'utf-8', function(err, data) {
    //     console.log("silly!");
    //     console.log(data);
    // });

    // );
}

// function getBBundle() {
//     var browserify = require('browserify');
//     var fs = require('fs');

//     var b = browserify('./inject.js');
//     b.transform('brfs');

//     return b.bundle();
// }

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