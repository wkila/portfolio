const mainTitleBlock = document.querySelector(".titleBlock"),
      btn = document.querySelector(".changeBtn"),
      title = document.querySelector(".mainTitle");

// ширина блока анимация

window.onload = function () {
    mainTitleBlock.classList.add("anim");
    if (mainTitleBlock.classList.contains("anim")) {
        mainTitleBlock.style.width = 355 + "px";
    }

    // написание текста анимация

    function fTypeText() {
        let anyString = title.textContent;
        title.style.opacity = 100;
        let i = 1;
        let fType = function() {
          if (i <= anyString.length) {
            title.innerHTML = anyString.substring(0, i);
            setTimeout(arguments.callee, 200);
          }
          i++;
        };
        fType();
    }
    setTimeout(fTypeText, 1000);
};

let duration;
let widthThis;
let scrollHeight;
let animItems = document.querySelectorAll(".animItems");

if (animItems.length > 0) {
    function animOnScroll(params) {
        window.addEventListener("scroll", animOnScroll);
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("active");
            }else {
                if (!animItem.classList.contains("anim-no-hide")) {
                    animItem.classList.remove("active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
