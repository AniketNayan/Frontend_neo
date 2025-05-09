// script.js
function updateSelection() {
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;
    const dimensions = document.getElementById('dimensions').value;

    const output = `Selected Options: Color - ${color}, Material - ${material}, Dimensions - ${dimensions}`;
    document.getElementById('selectionOutput').innerText = output;
}