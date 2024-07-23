document.addEventListener('DOMContentLoaded', (event) => {
    const burgerMenu = document.getElementById('burger-menu');
    const widgetContainer = document.getElementById('widget-container');
    const boxes = document.querySelectorAll('#widget-container .box');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle("change");

        if (widgetContainer.classList.contains('open')) {
            widgetContainer.classList.remove('open');
            boxes.forEach((box, index) => {
                box.classList.remove('visible');
                setTimeout(() => {
                    box.classList.remove('clicked');
                }, index * 200); // Delay removal of visible class
            });
        } else {
            widgetContainer.classList.add('open');
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('visible');
                }, index * 200); // Delay adding visible class
            });
        }
    });

    function handleClickOnImage(event) {
        event.target.classList.toggle('clicked');
        event.currentTarget.classList.toggle('clicked');
    }

    document.querySelectorAll('#widget-container .box').forEach(box => {
        box.addEventListener('click', handleClickOnImage);
    });

    document.addEventListener('click', function(event) {
        const container = document.getElementById('widget-container');
        const burgerMenu = document.getElementById('burger-menu');

        // Check if the clicked target is not the widget container or the burger menu
        if (!container.contains(event.target) && !burgerMenu.contains(event.target)) {
            container.classList.remove('open');
            burgerMenu.classList.remove('change');
            boxes.forEach(box => {
                box.classList.remove('visible');
                setTimeout(() => {
                    box.classList.remove('clicked');
                }, 200);
            });
        }
    });
});
