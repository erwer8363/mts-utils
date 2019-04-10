// 移动端计算rem
// const fontFun = function () { 
//     let docEl = document.documentElement
//     let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
//     const recalc = function () {
//         let clientWidth = docEl.clientWidth
//         if (!clientWidth) return
//         docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
//     }

//     if (!document.addEventListener) return
//     window.addEventListener(resizeEvt, recalc, false)
//     window.addEventListener('pageshow', recalc, false)
//     window.addEventListener('DOMContentLoaded', recalc, false)
//   }
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

/*****************************排序 */

function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
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
    let arr = [...sourceArr]
    let len = arr.length
    if (len <= 1) {
        return arr
    }

    let i = len
    while (i > 0) {
        let pos = 0
        let tmp
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                pos = j
                tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }         
        }
        i = pos
    }
    return arr
}
/**选择排序 */
const selectSort = function (sourceArr) {
    let arr = [...sourceArr]
    let len = arr.length
    let minIndex
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
    return arr
}
/**堆排序 */
const heapSort = function (sourceArr) {
    let arr = [...sourceArr]
    let len = arr.length
    if (len <= 1) return arr
    for (let middle = Math.floor(len /2); middle >= 0; middle--) {
        maxHeapify(arr, middle, len)
    }
    for (let j=len; j >= 1; j--) {
        swap(arr, 0, j-1)
        maxHeapify(arr, 0, j-2)
    }
    return arr
}
function maxHeapify(arr, mid_index, len) {
    let largest_index = mid_index
    let left_index = 2 * mid_index +1
    let right_index = 2 * mid_index + 2
    if (left_index <= len && arr[left_index] > arr[largest_index]) {
        largest_index = left_index
    }
    if (right_index <= len && arr[right_index] > arr[largest_index]) {
        largest_index = right_index
    }

    if (largest_index != mid_index) {
        swap(arr, mid_index, largest_index)
        maxHeapify(arr, largest_index, len)
    }
}
/**插入排序 */
const binaryInsertSort = function (sourceArr) {
    let arr = [...sourceArr]
    const len = arr.length
    for(let i = 1; i < len; i++) {
        let current_ele = arr[i]
        let left = 0, right = i -1
        while (left <= right) {
            let middle = parseInt((left + right) / 2)
            if (current_ele < arr[middle]) right = middle - 1
            else left = middle + 1
        }

        for (let j = i - 1; j >= left; j--) {
            arr[j+1] = arr[j]
        }
        arr[left] = current_ele
    }
    return arr
}




























module.exports = {
    // fontFun,
    delRepeat,
    delRepeatUseObj,
    quickSort,
    bubbleSort,
    selectSort
}