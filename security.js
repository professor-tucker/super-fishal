// security.js
// Description: Thin cybersecurity agent for all pages
function logActivity(data) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        inputLength: data.length,
        heuristic: data.includes('http') ? 'URL detected' : 'Normal input'
    };
    console.log('Security Log:', logEntry); // Later: save to file
}

document.addEventListener('DOMContentLoaded', () => {
    logActivity('Page loaded');
});