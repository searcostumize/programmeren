function generateRandomArray() {
    const arraySize = document.getElementById('arraySize').value;
    if (!arraySize || arraySize <= 0) {
        alert('Please enter a valid number of elements.');
        return;
    }

    const array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);  // Generating random numbers between 1 and 100
    }

    document.getElementById('generatedArray').value = array.join(', ');
    document.getElementById('sortedArray').value = '';  // Clear sorted array
}

function linearSearch() {
    const arrayInput = document.getElementById('generatedArray').value;
    const searchValue = document.getElementById('searchValue').value;
    const array = arrayInput.split(',').map(Number);
    const value = Number(searchValue);

    const index = linearSearchArray(array, value);
    const resultElement = document.getElementById('searchResult');

    if (index !== -1) {
        resultElement.textContent = `Value "${value}" found at index ${index}.`;
    } else {
        resultElement.textContent = `Value "${value}" not found in the array.`;
    }
}

function linearSearchArray(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function binarySearch() {
    const arrayInput = document.getElementById('generatedArray').value;
    const searchValue = document.getElementById('searchValue').value;
    let array = arrayInput.split(',').map(Number);
    
    bubbleSortArray(array);  // Sort the array with bubble sort
    document.getElementById('sortedArray').value = array.join(', ');  // Display the sorted array

    const value = Number(searchValue);
    const index = binarySearchArray(array, value);
    const resultElement = document.getElementById('searchResult');

    if (index !== -1) {
        resultElement.textContent = `Value "${value}" found at index ${index} in the sorted array.`;
    } else {
        resultElement.textContent = `Value "${value}" not found in the array.`;
    }
}

function binarySearchArray(array, value) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function bubbleSort() {
    const arrayInput = document.getElementById('generatedArray').value;
    let array = arrayInput.split(',').map(Number);

    bubbleSortArray(array);

    document.getElementById('sortedArray').value = array.join(', ');
    document.getElementById('sortResult').textContent = 'Array sorted using Bubble Sort.';
}

function bubbleSortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];  // Swap elements
            }
        }
    }
}
