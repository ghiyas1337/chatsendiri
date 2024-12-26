// script.js
document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo img');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            alert('Anda mengklik gambar: ' + this.alt);
        });
    });
});
