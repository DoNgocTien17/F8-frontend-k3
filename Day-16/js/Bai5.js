function triangle(N) {
    let num = 1;
    for (let i = 1; i <= N; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += num.toString().padStart(3, " ") + " ";
            num++;
        }
        console.log(row);
    }
}

const N = 5;

triangle(N);
