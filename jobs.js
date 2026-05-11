// Listen for the hash change in the URL
window.addEventListener('hashchange', function() {
    if(window.location.hash === '#jobs') {
        // Automatically put the cursor in the Name field
        document.getElementById('fullName').focus();
    }
});