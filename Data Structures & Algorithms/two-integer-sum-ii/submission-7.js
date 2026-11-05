class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;

        while (left<right){
            // numbers[left]+numbers[right]>target ? right-- : left++
            const sum = numbers[left] + numbers[right]
            if( sum === target){
                break
            }
            if(sum>target) right--
            if(sum<target) left++
            // left++;
            // right--;

        }
        return [left+1,right+1]
    }
}
