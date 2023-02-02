function longest(sentence: string) {
    const seacrhMax = sentence.split(" ", 50)
    const searchChar = seacrhMax.sort((a, b) => b.length - a.length)[0]
    const calculate = seacrhMax.map(seacrhMax => seacrhMax.length);

    console.log(searchChar + ": " + Math.max(...calculate) + " Character")
}

longest("Saya sangat senang mengerjakan soal algoritma")
