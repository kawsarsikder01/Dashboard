// summernote.js

// Get the toolbar buttons
var boldBtn = document.getElementById('bold-btn');
var italicBtn = document.getElementById('italic-btn');
var underlineBtn = document.getElementById('underline-btn');


// Get the editor content area
var editor = document.getElementById('editor');

// Add event listeners to the toolbar buttons
boldBtn.addEventListener('click', function() {
    document.execCommand('bold', false, null);
});

italicBtn.addEventListener('click', function() {
    document.execCommand('italic', false, null);
});
underlineBtn.addEventListener('click', function() {
    document.execCommand('underline', false, null);
});