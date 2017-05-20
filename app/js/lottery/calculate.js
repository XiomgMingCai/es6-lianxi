export default class Calculate {
    /**
     *  计算注数
     * @param acrive     当前选中的号码
     * @param play_name  当前的玩法标示
     * @returns {number}  注数
     */
    computeCount(acrive, play_name) {
        let count = 0

        const arr = new Array(acrive).fill(0)
        //玩法是否存才
        const exist = this.play_list.has(play_name)
        if (exist && play_name.at(0) === 'r') {
            count = Calculate.combine(arr, play_name.splice('')[1])
        }
        return count
    }


    computeBonus(active, play_name)  {
        const self = this

        const play = play_name.splice('');//r2 => r 2
        //r8 形成相匹配的数组
        let arr = new Array(play[1] * 1).fill(0)
        let min, max;
        //当前玩法 组合运算
        if (play[0] === 'r') {
            //最小命中数
            let min_active = 5 - (11 - active)

            if (min_active > 0) {
                // - 当前玩法基数
                if (min_active - play[1] >= 0) {
                    arr = new Array(min_active).fill(0);
                    min = Calculate.combine(arr, play[1]).length
                } else {
                    if (play[1] - 5 > 0 && active - play[1] >= 0) {
                        arr = new Array(active - 5).fill(0)
                        //////////
                    }
                }
            }
        }


    }

    /**
     * 组合运算
     * @param arr  [参议组合运算的数组]
     * @param size  组合运算的基数
     * @returns {number} 计算注数
     */
    static combine(arr, size) {
        let allResult = []

        (function f(arr, size, result) {
            let arrlen = arr.length
            if (size > arrlen) {
                return;
            }
            if (size === arrlen) {
                allResult.push([].concat(result));
            } else {
                for (let i = 0; i < arrlen; i++) {
                    let newResult = [].concat(result)
                    newResult.push(arr[i])
                    if (size === 1) {
                        allResult.push(newResult)
                    } else {
                        let newArr = [].concat(arr)
                        newArr.splice(0, i + 1)
                        f(newArr, size - 1, newResult)
                    }
                }
            }
        })(arr, size, [])

        return allResult
    }


}