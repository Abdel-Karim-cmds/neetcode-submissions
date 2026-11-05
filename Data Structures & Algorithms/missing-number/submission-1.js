class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort((a, b) => a - b);

        let left = 0;
        let right = nums.length; // search space [0, n]

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > mid) {
                // Gap is on the left side (including mid)
                right = mid;
            } else {
                // Left side is intact, gap is on the right
                left = mid + 1;
            }
        }
        return left;
    }
}
