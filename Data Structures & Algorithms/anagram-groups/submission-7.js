class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const prevMap = new Map();
        for(let i =0; i<=strs.length-1; i++){
            let sorted = strs[i].split("").sort().join("");
            !prevMap.has(sorted) && prevMap.set(sorted,[])

            prevMap.get(sorted).push(strs[i])
        }
        return Array.from(prevMap.values());
    }
}
