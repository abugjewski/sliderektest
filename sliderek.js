function createSliderek(container, slideArray) {
    const sliderContainer = document.querySelector(container);

    const sliderBody = document.createElement("div");
    sliderBody.classList.add("slider");
    const sliderButtons = document.createElement("div");
    sliderButtons.classList.add("slider__buttons");
    const prev = document.createElement("div");
    prev.classList.add("slider-button");
    prev.id = "prev";
    prev.innerHTML = "&lt";
    const next = document.createElement("div");
    next.classList.add("slider-button");
    next.id = "next";
    next.innerHTML = "&gt";

    sliderButtons.appendChild(prev);
    sliderButtons.appendChild(next);
    sliderBody.appendChild(sliderButtons);
    sliderContainer.appendChild(sliderBody);

    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    const slider = document.querySelector(".slider");

    let firstSlide;
    let lastSlide;

    slideArray.forEach(({img, title, content, slideFrom, contentFrom, contentDelay}, i) => {
        console.log(slideFrom);
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.style.backgroundImage = "url(" + img + ")";
        if (i == 0) {
            firstSlide = slide;
            slide.classList.add("active");
        } else if (i + 1 == slides.length) {
            lastSlide = slide;
        }

        if (title !== undefined || content !== undefined) {
            const slideContent = document.createElement("div");
            slideContent.classList.add("slide__content");

            if (contentFrom == undefined || contentFrom == "top") {
                slideContent.classList.add("fromTop")
            }
            if (contentFrom == "bottom") {
                slideContent.classList.add("fromBottom")
            }
            if (contentFrom == "left") {
                slideContent.classList.add("fromLeft")
            }
            if (contentFrom == "right") {
                slideContent.classList.add("fromRight")
            }

            if (contentDelay !== null) {
                slideContent.style.transitionDelay = contentDelay + "s";
            }

            if (title !== undefined) {
                const contentTitle = document.createElement("h3");
                contentTitle.textContent = title;
                slideContent.appendChild(contentTitle);
            }

            if (content !== undefined) {
                const contentText = document.createElement("p");
                contentText.textContent = content;
                slideContent.appendChild(contentText);
            }

            slide.appendChild(slideContent);
        }

        if (slideFrom == undefined || slideFrom == "top") {
            slide.classList.add("fromTop");
        } 
        if (slideFrom == "bottom") {
            slide.classList.add("fromBottom");
        }
        if (slideFrom == "left") {
            slide.classList.add("fromLeft");
        }
        if (slideFrom == "right") {
            slide.classList.add("fromRight");
        }

        slider.appendChild(slide);
    });

    nextButton.addEventListener("click", () => {
        const activeSlide = document.querySelector(".slide.active");
        let nextSlide = activeSlide.nextElementSibling;
    
        if (nextSlide == null) {
            nextSlide = firstSlide;
        }
    
        if (nextSlide.classList.contains("slide")) {
            activeSlide.classList.remove("active");
            nextSlide.classList.add("active");
        }
    });
    
    prevButton.addEventListener("click", () => {
        const activeSlide = document.querySelector(".slide.active");
        let prevSlide = activeSlide.previousElementSibling;
    
        if (prevSlide == null || !prevSlide.classList.contains("slide")) {
            prevSlide = lastSlide;
        }
    
        if (prevSlide.classList.contains("slide")) {
            activeSlide.classList.remove("active");
            prevSlide.classList.add("active");
        }
    });
}