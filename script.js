function openGallery(){document.getElementById('gallery').classList.add('show');document.body.style.overflow='hidden'}
function closeGallery(e){if(!e || e.target.id==='gallery' || e.target.tagName==='BUTTON'){document.getElementById('gallery').classList.remove('show');document.body.style.overflow=''}}
function openImage(src,title){document.getElementById('largeImage').src=src;document.getElementById('imageTitle').textContent=title;document.getElementById('imageModal').classList.add('show');document.body.style.overflow='hidden'}
function closeImage(e){if(!e || e.target.id==='imageModal' || e.target.tagName==='BUTTON'){document.getElementById('imageModal').classList.remove('show');document.body.style.overflow=''}}
