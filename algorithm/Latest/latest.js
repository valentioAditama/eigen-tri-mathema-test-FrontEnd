function longest(sentence) {
    var seacrhMax = sentence.split(" ", 50);
    var searchChar = seacrhMax.sort(function (a, b) { return b.length - a.length; })[0];
    var calculate = seacrhMax.map(function (seacrhMax) { return seacrhMax.length; });
    console.log(searchChar + ": " + Math.max.apply(Math, calculate) + " Character");
}
longest("Saya sangat senang mengerjakan soal algoritma");
