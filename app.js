// app.js
// Description: Playground logic with placeholder API call
document.addEventListener('DOMContentLoaded', () => {
    const processBtn = document.getElementById('process-btn');
    const promptInput = document.getElementById('prompt-input');
    const output = document.getElementById('output');
    const donateBtn = document.querySelector('.donate-btn');
    const donateInfo = document.querySelector('.donate-info');

    function simulateApi(prompt) {
        return new Promise((resolve) => {
            setTimeout(() => {