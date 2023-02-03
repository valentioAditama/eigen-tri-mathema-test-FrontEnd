const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const countWords = (input: string[], query: string[]): number[] => {
    const wordCounts: { [key: string]: number } = {};

    input.forEach((word) => {
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });

    console.log(wordCounts)

    return query.map((word) => wordCounts[word] || 0);
};

const output = countWords(INPUT, QUERY);
console.log(output); 
