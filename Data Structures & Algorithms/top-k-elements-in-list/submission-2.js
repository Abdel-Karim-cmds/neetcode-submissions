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
        const entries = Array.from(map.entries())
        entries.sort((a,b)=> b[1]-a[1])

        let result = []
        for (let i =0; i<k;i++){
            result.push(entries[i][0])
        }

        return result
    }
}
