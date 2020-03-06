/*
 * @Description: This is a js file
 * @Author: JeanneWu
 * @Date: 2020-03-06 09:56:05
 * 
 * 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
 * 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
 * 
 * 示例 1：
 * 输入：target = 9
 * 输出：[[2,3,4],[4,5]]
 * 
 * 示例 2：
 * 输入：target = 15
 * 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
 * 
 */

var findContinuousSequence = function(target) {

    
    let arr = [];
    return interation(1, target);
    
    function interation(i, target){
        let init = 0;
        let startV = i;
        let temArr = [];
        for (i; i<target; i++){
            temArr.push(i);
            init += i;

            if(+init === target){
                arr.push(temArr);
                interation(startV+1, target);
                return arr;
            }


            if(init >= target){
                interation(startV+1, target);
                return arr;
            }
        }
        return arr;
    }

};

findContinuousSequence(9);