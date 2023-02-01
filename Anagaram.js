const a = "tablechair";
const b = "rhbteciabl"

const res1 = a.split("").sort().join("");
const res2 = b.split("").sort().join("");
console.log(res1);
console.log(res2);

function checkAnagram(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const res1 = str1.split("").sort().join("");
    const res2 = str2.split("").sort().join("");
    if (len1 !== len2) {
        console.log("Invalid Inputs and strings not anagram")
    }
    else if (res1 === res2) {
        console.log("strings are anagram")
    } else {
        console.log(" strings are not anagram")
    }
}

checkAnagram(a, b);