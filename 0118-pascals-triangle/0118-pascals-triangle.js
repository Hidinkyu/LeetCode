/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [[1]];
    for (let i = 1; i < numRows; i++){
        const row = [];
        row.unshift(1);
        if(i > 1) {
            const prev = res[i - 1];
            let l = 0;
            let r = 1;
            while (r < prev.length){
                row.push(prev[l++] + prev[r++]);
            }
                
        }
        row.push(1);
        res.push(row)
    }
    return res;
};
