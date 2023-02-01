const strs = ["flowers", "flow", "floy"];


function LongestCommenPrifix(strs) {
    for (let i = 0; i <= strs[0].length; i++) {
        if (!strs.every((string) => string[i] === strs[0][i])) {
            return strs[0].slice(0, i)
        }
    }
    return strs[0]
}
console.log(LongestCommenPrifix(strs));