function matchWords(text) {
    console.log(text.split(/\W+/).filter(w => w!="").join("|"));
}
matchWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !')