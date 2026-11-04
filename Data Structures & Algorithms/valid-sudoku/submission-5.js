class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") continue;

                const boxKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                if (!boxes.has(boxKey)) boxes.set(boxKey, new Set());

                if (
                    rows[r].has(val) ||
                    cols[c].has(val) ||
                    boxes.get(boxKey).has(val)
                ) {
                    return false;
                }

                rows[r].add(val);
                cols[c].add(val);
                boxes.get(boxKey).add(val);
            }
        }

        return true;
    }
}
