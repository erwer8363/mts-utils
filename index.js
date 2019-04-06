// 移动端计算rem
const fontFun = function () { 
    let docEl = document.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = function () {
        let clientWidth = docEl.clientWidth
        if (!clientWidth) return
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }

    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    window.addEventListener('pageshow', recalc, false)
    window.addEventListener('DOMContentLoaded', recalc, false)
  }
// 删除重复元素
const delRepeat = function (arr) {
    let tmpArr = []
    arr.map(value => {
        if (!tmpArr.includes(value)) {
            tmpArr.push(value)
        }
    })
    return tmpArr
}
// 删除重复元素
const delRepeatUseObj = function (arr) {
    let tmpArr = []
    let tmpObj = Object.create(null)
    arr.forEach(element => {
        if (!tmpObj[element]) {
            tmpObj[element] = true
            tmpArr.push(element)
        }
    });
    return tmpArr
}

const quickSort = function (sourceArr) {
    let arr = [...sourceArr]
    let len = arr.length
    if (len <= 1) {
        return arr
    }

    let midIndex = parseInt(len/2)
    let midValue = arr.splice(midIndex, 1)[0]
    let leftArr = []
    let rightArr = []
    arr.forEach(element => {
        if (element < midValue) {
            leftArr.push(element)
        } else {
            rightArr.push(element)
        }
    })
    return [...quickSort(leftArr), midValue, ...quickSort(rightArr)]
}

const bubbleSort = function (sourceArr) {
    console.time('冒泡排序耗时')
    let arr = [...sourceArr]
    let len = arr.length
    if (len <= 1) {
        return arr
    }

    let i = len
    while (i > 0) {
        let pos = 0
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                pos = j
                [j+1, j] = [j, j+1]
            }         
        }
        i = pos
    }
    console.timeEnd('冒泡排序耗时')
    return arr
}





























export {
    fontFun,
    delRepeat,
    delRepeatUseObj,
    quickSort,
    bubbleSort
}