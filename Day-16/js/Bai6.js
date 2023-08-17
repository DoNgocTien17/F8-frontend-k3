// function Chessboard(size) {
//     for (let i = 1; i <= size; i++) {
//         let row = "";
//         for (let j = 1; j <= size; j++) {
//             if ((i + j) % 2 === 0) {
//                 row += "\u2588\u2588"; // Ký tự cho ô màu đen
//             } else {
//                 row += "   "; // Ký tự cho ô màu trắng
//             }
//         }
//         console.log(row);
//     }
// }

// const boardSize = 8;
// Chessboard(boardSize);

var coulumnHtml = "";

for (var rows = 1; rows <= 8; rows++) {
  coulumnHtml += `<tr>`;
  for (var cols = 1; cols <= 8; cols++) {
    var total = cols + rows;
    coulumnHtml += `<td ${total % 2 !== 0 ? 'class = "black"' : ""}></td>`;
  }
  coulumnHtml += `</tr>`;
}

var html = `<table border="1" width="100%" cellpadding = "0" cellspacing = "0">${coulumnHtml}</table>`;

document.write(html);
