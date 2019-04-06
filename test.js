{
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
            let tmp
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    pos = j
                    tmp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = tmp
                }
            }
            i = pos
        }
        console.timeEnd('冒泡排序耗时')
        return arr
    }
    
    console.log(bubbleSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 23, 45, 34]))
    
}

{
    const quickSort = function (sourceArr) {
        console.time('快速排序')
        let arr = [...sourceArr]
        let len = arr.length
        if (len <= 1) {
            return arr
        }

        let midIndex = parseInt(len / 2)
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
        console.timeEnd('快速排序')
        return [...quickSort(leftArr), midValue, ...quickSort(rightArr)]
    }
    console.log(quickSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 23, 45, 34]))
}
{
    const selectSort = function (sourceArr) {
        console.time('选择排序')
        let arr = [...sourceArr]
        let len = arr.length
        let minIndex, temp
        for (let i = 0; i < len - 1; i++) {
            minIndex = i
            for (let j = i; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j
                }
            }
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
        console.timeEnd('选择排序')
        return arr
    }
    console.log(selectSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 23, 45, 34]))
}