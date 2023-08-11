function Chessboard(size) {
    for (let i = 1; i <= size; i++) {
        let row = "";
        for (let j = 1; j <= size; j++) {
            if ((i + j) % 2 === 0) {
                row += "\u2588\u2588"; // Ký tự cho ô màu đen
            } else {
                row += "   "; // Ký tự cho ô màu trắng
            }
        }
        console.log(row);
    }
}

const boardSize = 8;
Chessboard(boardSize);
