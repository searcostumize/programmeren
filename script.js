function linearSearch() {
    const arrayInput = document.getElementById('arrayInput').value;
    const searchValue = document.getElementById('searchValue').value;
    const resultElement = document.getElementById('result');

    if (arrayInput === '' || searchValue === '') {
        resultElement.textContent = 'Please enter both array and search value.';
        return;
    }

    const array = arrayInput.split(',').map(item => item.trim());
    const value = searchValue.trim();
    const index = linearSearchAlgorithm(array, value);

    if (index === -1) {
        resultElement.textContent = `Value "${value}" not found in the array.`;
    } else {
        resultElement.textContent = `Value "${value}" found at index ${index}.`;
    }
}

function linearSearchAlgorithm(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
