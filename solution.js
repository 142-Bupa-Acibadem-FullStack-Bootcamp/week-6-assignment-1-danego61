

/**
 * 
 * @param {number[]} nums 
 * @param {number} sum 
 * @returns {number[]} founded index
 */
function findTwoSumIndex(nums, sum) {

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {

            if(nums[i] + nums[j] === sum) {

                return [i, j];

            }

        }

    }

    return [-1, -1]

}

console.log(findTwoSumIndex([2, 7, 11, 15], 9));
console.log(findTwoSumIndex([3, 2, 4], 6));
console.log(findTwoSumIndex([3, 3], 6));