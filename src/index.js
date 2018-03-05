module.exports = function getZerosCount(number, base) {

    let allSimpleDividers = findSimpleDividers();

    return countZeros(allSimpleDividers);

    function findSimpleDividers() {
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

                collectAllSimpleDividers(check, i, arrSimpleNum, arrCountSimpleNum);
            }
        }
        return {arrSimpleNum, arrCountSimpleNum};
    }

    function collectAllSimpleDividers(check, i, arrSimpleNum, arrCountSimpleNum) {
        if (check === 1) {
            arrSimpleNum.push(i);
            countSimpleDividers(i, arrSimpleNum, arrCountSimpleNum);
        }
    }

    function countSimpleDividers(i, arrSimpleNum, arrCountSimpleNum) {
        let count = 1;
        arrCountSimpleNum.push(count);

        while (!(base % i)) {
            base = Math.floor(base / i);
            arrSimpleNum.push(i);
            count = count + 1;
            arrCountSimpleNum.push(count);
        }
    }

    function countZeros({arrSimpleNum, arrCountSimpleNum}) {
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
}