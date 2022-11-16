/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let length = Math.max(a.length, b.length);
    let result = [length];
    let i = length - 1;
    let k = 0;
    if (a.length < b.length) {
        a = a.padStart(length, "0");
    } else if (b.length < a.length) {
        b = b.padStart(length, "0");
    }
    for (; i >= 0; i--) {
        result[i] = parseInt(a[i]) + parseInt(b[i]) + k;
        switch (result[i]) {
            case 3:
                result[i] = 1;
                k = 1;
                break;
            case 2:
                result[i] = 0;
                k = 1;
                break;
            case 1:
                result[i] = 1;
                k = 0;
                break;
            case 0:
                result[i] = 0;
                k = 0;
                break;
        }
    }
    if (k === 1) {
        result.unshift(1);
    }
    return result.join("");
};

console.log(addBinary("11", "1"));
