class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const prevMap = new Map();
        // let result = [];
        for(let i =0; i<=strs.length-1; i++){
            let sorted = strs[i].split("").sort().join("");
            !prevMap.has(sorted) && prevMap.set(sorted,[])

            prevMap.get(sorted).push(strs[i])
            // preveMap.set(sorted, )
            // if(prevMap.has(sorted)){

            // }
            // let temp = []
            // // temp.push()
            // let tempArray = prevMap.get(sorted);
            // prevMap.set(sorted,)
        }
        // console.log(prevMap)
        console.log(prevMap.values())
        // for (let i = 0; i <= strs.length - 1; i++) {
        //     let temp = [];
        //     if (prevMap.has(strs[i])) continue;
        //     for (let j = i + 1; j <= strs.length - 1; j++) {
        //         if (isAnagram(strs[i], strs[j])) {
        //             temp.push(strs[j]);
        //             prevMap.set(strs[j], 1);
        //         }
        //     }
        //     temp.push(strs[i]);
        //     prevMap.set(strs[i], 1);
        //     result.push(temp);
        // }
        // for(let i=0; i<=strs.length-1; i++){
        //     let temp = []
        //     for(let j = i+1; j<= strs.length-1; j++){
        //         if(isAnagram(strs[i],strs[j])){
        //             temp.push(strs[j])
        //         }
        //         temp.push(strs[i])
        //     }
        //     result.push(temp)
        //     console.log(result)
        // }
        // function isAnagram(s, t) {
        //     if (s.length !== t.length) {
        //         return false;
        //     }

        //     const count = new Array(26).fill(0);
        //     for (let i = 0; i < s.length; i++) {
        //         count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        //         count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
        //     }
        //     return count.every((val) => val === 0);
        // }

        return Array.from(prevMap.values());
    }
}
