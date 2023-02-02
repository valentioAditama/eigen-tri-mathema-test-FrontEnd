function longest(sentence) {
    var seacrhMax = sentence.split(" ", 50);
    var searchChar = seacrhMax.sort(function (a, b) { return b.length - a.length; })[0];
    var calculate = seacrhMax.map(function (seacrhMax) { return seacrhMax.length; });
    return searchChar + ": " + Math.max.apply(Math, calculate) + " Character";
}
console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
