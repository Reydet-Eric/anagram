
const anagram = (str1, str2) => {
    // Your code here  
// On compare les longueurs des deux chaines de caractères dans une fonction. Si les longueurs sont identiques, on continue.
anagram2(str1,str2);

// On découpe les chaines en array puis on les classes par ordre alphabétique
const string1=str1.split("");
const array1=string1.sort();
const string2=str2.split("");
const array2=string2.sort();
// On remets les array en string et on compare si elles sont pareils
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
