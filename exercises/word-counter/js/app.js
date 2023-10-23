// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textarea = document.getElementById('text');
const statsDiv = document.getElementById('stat');

// 🤖: Create an Event Listener on textarea input
textarea.addEventListener('input', function() {
    const text = textarea.value;
    const charCount = text.length;
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    statsDiv.textContent = `You've written ${wordCount} words and ${charCount} characters.`;
});
