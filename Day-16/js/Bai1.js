function fare(km) {
    var giaTien = 0;
    if ( km <= 1) {
        return giaTien = 15000;
    }else if ( km <= 5) {
        return giaTien = 13500;
    }else if ( km > 5) {
        return giaTien = 11000;
    } else if( km > 120) {
        return giaTien = giaTien - (giaTien * 0.1);
    }
    return giaTien;
}

const km = 1;
const tienCuoc = fare(km);
console.log(`tien cuoc: ${tienCuoc}`);

