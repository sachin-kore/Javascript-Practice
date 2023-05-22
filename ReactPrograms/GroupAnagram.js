function groupAnagram(arr) {
    const group = {};
    for (let i = 0; i < arr.length; i++) {
        let sortedSubarray = arr[i].split("").sort().join("");
        if (group[sortedSubarray]) {
            group[sortedSubarray].push(arr[i]);
        } else {
            group[sortedSubarray] = [arr[i]];
        }
    }
    return Object.values(group);
}

console.log(groupAnagram(["eat", "tea", "ate", "tan", "nat", "bat"]));