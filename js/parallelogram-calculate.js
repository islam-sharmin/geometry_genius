// function parallelogramArea() {

// // get base of the parallelogram
// const baseInput = document.getElementById('parallelogram-base');
// const baseText = baseInput.value;
// const base = parseFloat(baseText);
// console.log(base);

// // get height of the parallelogram
// const heightInput = document.getElementById('parallelogram-height');
// const heightText = heightInput.value;
// const height = parseFloat(heightText);
// console.log(height);

// // calculate rectangle area
// const area = base * height;
// console.log('Parallelogram area: ', area);

// // display area
// const parallelogramAreaSpan = document.getElementById('parallelogram-area');
// parallelogramAreaSpan.innerText = area;


//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function parallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    // console.log('base value: ', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value: ', height);

    const area = base * height;
    console.log('area of the parallelogram is: ', area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}