var INPUT = ['xc', 'dz', 'bbb', 'dz'];
var QUERY = ['bbb', 'ac', 'dz'];
var countWords = function (input, query) {
    var wordCounts = {};
    input.forEach(function (word) {
        if (wordCounts[word]) {
            wordCounts[word]++;
        }
        else {
            wordCounts[word] = 1;
        }
    });
    console.log(wordCounts);
    return query.map(function (word) { return wordCounts[word] || 0; });
};
var output = countWords(INPUT, QUERY);
console.log(output);
