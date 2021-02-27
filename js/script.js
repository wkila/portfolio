const mainTitleBlock = document.querySelector(".titleBlock"),
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

// анимация выхода

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

// анимация глаз (нахуй оно надо, сделать самой последней правкой)

// анимация пароля

let input = document.querySelector(".input"),
    btnInput = document.querySelector(".inputBtn"),
    displayNone = document.querySelectorAll(".displayAnim"),
    titleCat = document.querySelector(".titleCat");

let validProperty = "OK, BOSS";
let wrongAsk = "This cat is angry right now, ASK NORMAL";
let durationRemove = 200;

btnInput.addEventListener("click", () =>{
    let valid = input.value;
    console.log(valid);
    if (valid == validProperty) {
        for (let i = 0; i <= displayNone.length; i++) {
            displayNone[i].classList.remove("displayAnim");
        }
    }else if(valid != validProperty) {
        let lengthCallBack = titleCat.textContent.length;
        let maxtime = durationRemove * lengthCallBack;
        function fRemoveText() {  
            let anyString = titleCat.textContent;
            let i = 0;
            let fRemove = function() {
              if (i <= anyString.length) {
                titleCat.innerHTML = anyString.substring(0, anyString.length - i);
                setTimeout(arguments.callee, durationRemove);
              }
              i++;
            }
            setTimeout(fRemove, 0);
        };
        fRemoveText();
        
        function fTypeText() {
            let anyString = wrongAsk;
            let i = 0;
            let fType = function() {
              if (i <= anyString.length) {
                titleCat.innerHTML = anyString.substring(0, i);
                setTimeout(arguments.callee, 200);
              }
              i++;
            };
            fType();
        }
        setTimeout(fTypeText, maxtime);
    }
});

// burger

// let burgerBlock = document.querySelector(".burgerBlock"),
//     lines = document.querySelectorAll(".line"),
//     navLink = document.querySelectorAll(".contactBurger"),
//     headerInner = document.querySelector(".burgerMenu");

// burgerBlock.addEventListener("mouseenter", () => {
//   for (let i = 0; i <= lines.length; i++) {
//     if (lines[i].classList.contains("up")) {
//       lines[i].classList.add("upLine");
//     }else if (lines[i].classList.contains("down")) {
//       lines[i].classList.add("downLine");
//     }else {
//       lines[i].classList.add("hidden");
//     }
//   }
// });

// burgerBlock.addEventListener("mouseleave", () => {
//   for (let i = 0; i <= lines.length; i++) {
//     if (lines[i].classList.contains("upLine")) {
//       lines[i].classList.remove("upLine");
//     }else if (lines[i].classList.contains("downLine")) {
//       lines[i].classList.remove("downLine");
//     }else {
//       lines[i].classList.remove("hidden");
//     }
//   }
// });

// burgerBlock.addEventListener("click", () => {
    
// });
