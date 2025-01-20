const magnifier = document.getElementById('magnifier');
const mapImage = document.getElementById('map-image');

mapImage.addEventListener('mousemove', (e) => {
    const magnifierSize = 25;
    const zoomLevel = 3;
    const mapRect = mapImage.getBoundingClientRect();
    const xPos = e.clientX - mapRect.left;
    const yPos = e.clientY - mapRect.top;

    const xPercent = (xPos / mapRect.width) * 100;
    const yPercent = (yPos / mapRect.height) * 100;

    magnifier.style.display = 'block';
    magnifier.style.backgroundImage = `url('${mapImage.src}')`;
    magnifier.style.backgroundSize = `${mapRect.width * zoomLevel}px ${mapRect.height * zoomLevel}px`;
    magnifier.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    magnifier.style.left = `${e.pageX - magnifierSize / 2}px`;
    magnifier.style.top = `${e.pageY - magnifierSize / 2}px`;
});

mapImage.addEventListener('click', () => {
    if (mapImage.requestFullscreen) {
        mapImage.requestFullscreen();
    }
});


mapImage.addEventListener('mouseleave', () => {
    magnifier.style.display = 'none';
});