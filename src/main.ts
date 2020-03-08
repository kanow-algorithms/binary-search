function binarySearch(array: number[], value: number, startIndex: number = 0, endIndex: number = array.length - 1): number {
    if (array.length <= 0 || (startIndex === endIndex && array[startIndex] !== value)) {
        return -1;
    }
    const middleIndex: number = findMiddleIndex(startIndex, endIndex);
    if (array[middleIndex] === value) {
        return middleIndex;
    } else if ((value > array[middleIndex] && array[startIndex] < array[endIndex]) || (value < array[middleIndex] && array[startIndex] > array[endIndex])) {
        return binarySearch(array, value, middleIndex + 1, endIndex);
    }
    return binarySearch(array, value, startIndex, middleIndex - 1);
}

function findMiddleIndex(startIndex: number, endIndex: number): number {
    return  startIndex + Math.floor((endIndex - startIndex) * 0.5);
}
