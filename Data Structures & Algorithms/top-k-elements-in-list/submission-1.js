class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (const n of nums) {
            if (map.has(n)) {
                map.set(n, map.get(n) + 1);
            } else {
                map.set(n, 1);
            }
        }
        console.log(map);
        const entries = Array.from(map.entries())
        console.log(entries)
        entries.sort((a,b)=> b[1]-a[1])
        console.log(entries)

        let result = []
        for (let i =0; i<k;i++){
            result.push(entries[i][0])
        }

        return result
    }
}
