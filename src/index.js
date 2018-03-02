module.exports = function getZerosCount(number, base) {

    let arrSimpleNum = [];
    let arrCountSimpleNum = [];

    for (let i = 2; i <= base; i++) {
        if (!(base % i)) {
            base = Math.floor(base / i);
            let check = 1;

            for (let j = 2; j < i; j++) {
                if (!(i % j) && j !== i) {
                    check = 0;
                }
            }
            if (check === 1) {
                arrSimpleNum.push(i);
                let count = 1;
                arrCountSimpleNum.push(count);

                while (!(base % i)) {
                    base = Math.floor(base / i);
                    arrSimpleNum.push(i);
                    count = count + 1;
                    arrCountSimpleNum.push(count);
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
        if (arrSimpleNum[i] === arrSimpleNum[i - 1]) {
            count = Math.floor(count / arrCountSimpleNum[i]);
        }
        countArr.push(count);
    }

    return Math.min.apply(null, countArr);
}

