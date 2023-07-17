document.querySelectorAll('.preview').forEach((link) => {
    link.addEventListener('mouseover', function(e) {
        // Create an iframe to embed the webpage
        var iframe = document.createElement('iframe');
        iframe.src = this.href;
        iframe.width = '100%';
        iframe.height = '100%';

        // Clear the preview box and append the iframe
        var previewBox = document.getElementById('preview');
        while (previewBox.firstChild) {
            previewBox.firstChild.remove();
        }
        previewBox.appendChild(iframe);

        // Show the preview box
        previewBox.style.display = 'block';
    });

    link.addEventListener('mouseout', function(e) {
        // Hide the preview box and remove the iframe
        var previewBox = document.getElementById('preview');
        previewBox.style.display = 'none';
        while (previewBox.firstChild) {
            previewBox.firstChild.remove();
        }
    });
});
