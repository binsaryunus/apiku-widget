document.addEventListener('DOMContentLoaded', (event) => {
    // Create and append the style element
    const style = document.createElement('style');
    style.textContent = `
        /* Gaya untuk burger menu */
        .burger-menu {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            top: 50%;
            left: 40px; /* Posisi toggle */
            transform: translateY(-50%); /* Tengah vertikal */
            background-color: rgba(241, 241, 241, 0.9); /* Transparan */
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            transition: background-color 0.3s ease; /* Animasi perubahan warna background */
        }

        /* Gaya saat hover pada burger menu */
        .burger-menu:hover {
            background-color: rgba(200, 200, 200, 0.9); /* Background saat hover */
        }

        /* Gaya bar dalam burger menu */
        .bar1, .bar2, .bar3 {
            width: 20px; /* Ukuran bar lebih kecil */
            height: 2px;
            background-color: #333;
            margin: 3px 0;
            transition: 0.4s;
        }

        /* Gaya saat burger menu terbuka */
        .burger-menu.change .bar1 {
            transform: rotate(-45deg) translate(-3px, 4px);
        }

        .burger-menu.change .bar2 {
            opacity: 0;
        }

        .burger-menu.change .bar3 {
            transform: rotate(45deg) translate(-3px, -4px);
        }

        /* Gaya untuk teks animasi "CLICK ME" */
        .click-me {
            font-size: 16px; /* Ukuran font lebih kecil */
            color: #000; /* Warna teks hitam */
            margin-bottom: 5px; /* Jarak antara teks dan toggle burger */
            animation: blink-animation 1s infinite; /* Animasi kedap kedip */
            font-weight: bold; /* Menebalkan teks */
            text-align: center; /* Tengah teks */
            position: absolute;
            top: -35px; /* Jarak dari toggle burger menu */
            left: 50%; /* Tengah horizontal */
            transform: translateX(-50%); /* Tengah horizontal */
        }

        /* Animasi kedap kedip */
        @keyframes blink-animation {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* Gaya untuk widget container */
        #widget-container {
            position: fixed;
            top: 50%;
            left: 80px; /* Posisi widget lebih ke kanan */
            transform: translateY(-50%) scale(0); /* Start hidden */
            background-color: transparent; /* Transparan */
            padding: 0; /* Hapus padding */
            border: none; /* Hapus border */
            box-shadow: none; /* Hapus shadow */
            z-index: 1000;
            overflow: hidden;
            max-height: 0;
            transition: max-height 0.5s ease-out, transform 0.5s ease-out;
        }

        /* Gaya saat widget terbuka */
        #widget-container.open {
            transform: translateY(-50%) scale(1); /* Show widget */
            max-height: 400px; /* Adjust as needed */
        }

        /* Gaya untuk gambar di dalam widget */
        #widget-container img {
            width: 50px; /* Ukuran gambar sedikit diperbesar */
            height: auto;
            display: block;
            margin: 5px auto; /* Jarak antara gambar dan border, posisikan gambar di tengah */
            transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
            background-color: transparent; /* Transparan */
        }

        /* Gaya untuk kotak */
        .box {
            padding: 5px; /* Padding di dalam box */
            margin: 2px 0; /* Jarak antar box diperpendek */
            background-color: transparent; /* Transparan */
            box-shadow: none; /* Hapus shadow */
            transform: scale(0); /* Start hidden */
            transition: transform 0.5s ease-out, background-color 0.3s ease-in-out;
            border: none; /* Hapus border */
        }

        /* Gaya saat kotak terlihat */
        .box.visible {
            transform: scale(1); /* Show box */
        }

        /* Gaya tambahan untuk kotak saat diklik */
        .box.clicked img {
            transform: scale(1.2) rotate(15deg); /* Contoh transformasi */
        }

        /* Delay animasi untuk kotak */
        .box:nth-child(1) { transition-delay: 0s; }
        .box:nth-child(2) { transition-delay: 0.2s; }
        .box:nth-child(3) { transition-delay: 0.4s; }
        .box:nth-child(4) { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);

    // JavaScript for functionality
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
            if (container.classList.contains('open')) {
                container.classList.remove('open');
                burgerMenu.classList.remove('change');
                boxes.forEach(box => {
                    box.classList.remove('visible');
                    setTimeout(() => {
                        box.classList.remove('clicked');
                    }, 200);
                });
            }
        }
    });
});
