class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // let n = nums.length;

        if(!nums.length) return 0;
        // let longest = []
        // let curr = []
        let maxStreak = 1;
        let currStreak = 1;
        let sortedNums = Array.from(new Set(nums))
        let n = sortedNums.length;
        sortedNums.sort((a,b) => a-b);
        for(let i = 0; i<n-1; i++){
            if(sortedNums[i+1]-sortedNums[i]===1){
                currStreak++;
                maxStreak = Math.max(maxStreak, currStreak);
            }
            else{
                currStreak = 1
            }
            // console.log(sortedNums[i])
        }
        return maxStreak;
    }
}
