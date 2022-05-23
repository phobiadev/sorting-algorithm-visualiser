import { swap, copy } from "./helperFunctions"

function partition(array, start, end, steps) {
    let pivot = array[end]
    let pivotIndex = start

    for (let i = start; i < end; i++) {

        if (array[i].value <= pivot.value) {


            array = swap(array, i, pivotIndex)
            pivotIndex++
        }
        array[pivotIndex].color = "red"
        array[i].color = "orange"
        steps.push(copy(array))
        array[pivotIndex].color = "grey"
        array[i].color = "grey"
    }


    array = swap(array, pivotIndex, end)
    array[pivotIndex].color = "green"
    steps.push(copy(array))

    return pivotIndex
}

function quickSortUnclean(array, start, end, steps) {
    if (start < end) {
        let pivot = partition(array, start, end, steps)

        quickSortUnclean(array, start, pivot - 1, steps)

        array[start].color = "green"

        steps.push(copy(array))

        quickSortUnclean(array, pivot + 1, end, steps)

        array[end].color = "green"

        array[pivot].color = "green"

    }
}

function quickSort(array) {
    let steps = []
    quickSortUnclean(array, 0, array.length - 1, steps)
    steps.push(copy(array))

    return steps
}

export default quickSort