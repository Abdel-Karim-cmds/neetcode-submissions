class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let gridMap = new Map();
        let colMap = new Map();
        for (let i = 0; i <= 8; i++) {
            let seenInRow = [];
            for (let j = 0; j <= 8; j++) {
                if (board[i][j] === ".") continue;
                // console.log(`row ${i+1}, col ${j+1}`)
                // console.log("value " + board[i][j])
                // let seenInCol = [];
                if(seenInRow.includes(board[i][j])){
                    return false
                }
                else{
                    seenInRow.push(board[i][j])
                    // console.log("row")
                    // console.log(seenInRow)

                }
                !colMap.has(`col ${j+1}`) && colMap.set(`col ${j+1}`,[])
                if(colMap.get(`col ${j+1}`).includes(board[i][j])){
                    return false
                } 
                else{
                    colMap.set(`col ${j+1}`, [...colMap.get(`col ${j+1}`),board[i][j]])
                    // console.log("*****")
                    // console.log(colMap)
                    // console.log("*****")
                }
                // if()
                // if(seenInCol.includes(board[i][j])){
                //     return false
                // }
                // else{
                //     seenInCol.push(board[i][j])
                //     console.log("col")
                //     console.log(seenInCol)
                // }
                // seenInRow.includes(board[i][j]) ? return false : return true
                if (checkInSmallGrid(getPosition(i, j), board[i][j])) {
                    return false;
                }
                // seenInCol.includes(board[i][j]) ? return false : return true
            }
        }

        function getPosition(r, c) {
            return `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
        }

        function checkInSmallGrid(gridPos, val) {
            !gridMap.has(gridPos) && gridMap.set(gridPos, []);
            if (gridMap.get(gridPos).includes(val)) {
                return true;
            } else {
                gridMap.set(gridPos, [...gridMap.get(gridPos), val]);
                return false;
            }
        }

        return true;
    }
}
