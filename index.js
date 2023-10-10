document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".banners img");
    const indicatorsContainer = document.querySelector(".indicadores");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });

        // Atualiza o indicador ativo
        const indicators = document.querySelectorAll(".indicator");
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Alterna a cada 3 segundos (3000 milissegundos)

    // Cria os indicadores
    images.forEach(() => {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorsContainer.appendChild(indicator);

        indicator.addEventListener("click", function () {
            currentIndex = Array.from(indicatorsContainer.children).indexOf(indicator);
            showImage(currentIndex);
        });
    });

    // Mostra a primeira imagem ao carregar a página
    showImage(currentIndex);
});