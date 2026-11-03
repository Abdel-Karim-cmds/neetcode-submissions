class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        let map = new Map()
        for(let i=0;i<=nums.length-1;i++){
            if(map.has(nums[i])){
                result.push(map.get(nums[i]))
                continue
            }
            const newNum = nums.filter((_,idx) => idx !== i)
            const product = newNum.reduce((acc,curr) => acc*curr,1)
            result.push(product)
            map.set(nums[i],product)
        }
        return result;
    }
}
