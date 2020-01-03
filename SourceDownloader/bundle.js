(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    // a.download = fileName;
    a.download = "index";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

// !!!
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
