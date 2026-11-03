class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const newSet = new Set(nums)
        return nums.length > new Set(nums).size
    }
}
