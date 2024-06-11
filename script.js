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
}

function linearSearch() {
    const arrayInput = document.getElementById('generatedArray').value;
    const searchValue = document.getElementById('searchValue').value;
    const array = arrayInput.split(',').map(Number);
    const value = Number(searchValue);

    const index = linearSearchArray(array, value);
    const resultElement = document.getElementById('result');

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

