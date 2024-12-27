 function lapTop(image) {
     const display = document.getElementById('previewContainer');
     const img = document.getElementById('previewImage');
     img.src = './img/' + image + '.jpg
     display.style.display = 'block';
 }
