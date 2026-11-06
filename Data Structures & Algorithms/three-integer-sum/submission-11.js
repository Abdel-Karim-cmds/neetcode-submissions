class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const sorted = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < sorted.length - 2; i++) {
            // Early exit: if the smallest number is positive, three positives can never sum to 0
            if (sorted[i] > 0) break;

            // Skip duplicate values for the first element
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;

            let left = i + 1;
            let right = sorted.length - 1;
            const target = -sorted[i];

            while (left < right) {
                const sum = sorted[left] + sorted[right];

                if (sum === target) {
                    result.push([sorted[i], sorted[left], sorted[right]]);
                    left++;
                    right--;

                    // Skip duplicate values for the second element
                    while (left < right && sorted[left] === sorted[left - 1]) {
                        left++;
                    }

                    // Skip duplicate values for the third element
                    while (left < right && sorted[right] === sorted[right + 1]) {
                        right--;
                    }
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return result;
    }
}