module.exports = function getZerosCount(number, base) {

    let arrSimpleNum = [];
    let chekingNum;
    let devider = base;

    for (let i = 1; i <= devider; i++) {
        if (!(devider % i)) {
            devider = Math.floor(devider / i);
            chekingNum = i;

            for (let j = 1; j <= chekingNum; j++) {
                if (!(chekingNum % j) && j !== 1) {

                    if (chekingNum % 2) {
                        chekingNum = Math.floor(chekingNum / j);

                        if (!arrSimpleNum.includes(j)) {
                            arrSimpleNum.push(j);
                        }
                        let k = chekingNum;
                        for (let n = 1; n < k; n++) {

                            if (!(k % n) && arrSimpleNum[arrSimpleNum.length - 1] === k) {
                                arrSimpleNum.pop();
                            }
                        }
                    }
                    if (chekingNum === 2) {
                        arrSimpleNum.push(j);
                    }
                }
            }
        }

    }

    let countArr = [];

    for (let i = 0; i < arrSimpleNum.length; i++) {
        let countNum = number;
        let count = 0;

        while (countNum > 0) {
            countNum = Math.floor(countNum / arrSimpleNum[i]);
            count += countNum;
        }
        countArr.push(count);
    }

    let result = Math.min.apply(null, countArr);
    return result;
}

