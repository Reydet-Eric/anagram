
const anagram = (str1, str2) => {
    // Your code here  
// Comparez la longueur des deux chaînes.
// Si la longueur des deux chaînes n'est pas la même, cela signifie qu'elles ne peuvent pas être des anagrammes l'une de l'autre. Renvoyez donc false.

anagram2(str1,str2);

// Si la longueur des deux chaînes est la même, continuez.

// Trie les deux chaînes.
const string1=str1.split("");
const array1=string1.sort();
const string2=str2.split("");
const array2=string2.sort();
// Comparez les deux chaînes triées.
const string11 = array1.toString()
const string21 = array2.toString()
if (string11 === string21){
    console.log("true");
} else{console.log("false")}

// Si les deux chaînes triées sont les mêmes, cela signifie qu'elles sont des anagrammes l'une de l'autre. Renvoyez donc true.

// Si les deux chaînes triées sont différentes, cela signifie qu'elles ne sont pas des anagrammes l'une de l'autre. Ainsi, renvoie false.

};

function anagram2(str1,str2){

    if ((str1.length) === (str2.length)){
       return true;
}
}
anagram("laurent fabius","natural abusif")
// module.exports = anagram;
