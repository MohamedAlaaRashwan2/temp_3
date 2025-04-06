//  Start Header

let links2 = document.querySelectorAll("header .main-nav>li>a ");



links2.forEach(function (ele) {
    ele.onclick = function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active")
        } else {

            links2.forEach(function (e) {
                e.classList.remove("active")
            })
            this.classList.toggle("active");
        }
    };
});


// Menu 
let menu = document.getElementById("menu");
let menu1 = document.querySelector(".mega-menu");
// Show and hide the Menu when clicked
menu.addEventListener("click", function (event) {
    menu1.classList.toggle("idmega-menu");
    event.stopPropagation();
});
// Hide the Menu when clicking somewhere on the page outside the menu
document.addEventListener("click", function (event) {
    if (!menu1.contains(event.target) && menu1.classList.contains("idmega-menu")) {
        menu1.classList.remove("idmega-menu")
    }
});


// إضافة كلاس sticky ديناميكيًا عند التمرير
let navbar = document.getElementById('header');
let stickyOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= stickyOffset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScroll) {
        navbar.style.top = '-73px'; // إخفاء الناف بار
    } else {
        navbar.style.top = '0'; // إظهاره
    }
    lastScroll = window.scrollY;
});

//  End Header


// Start Skills


let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let spansSkill = document.querySelectorAll(".skill h3 span");

let sectionOffsetTop;

// Update offset on load and resize
function updateOffset() {
    sectionOffsetTop = section.offsetTop;
}

window.addEventListener("load", updateOffset);
window.addEventListener("resize", updateOffset);

window.addEventListener("scroll", function () {
    if (window.scrollY >= sectionOffsetTop - 500) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        // Reset progress when scrolling up
        spans.forEach((span) => {
            span.style.width = "0";
        });
    }
});


// End Skills

// Start Events
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let countDownDate = new Date("Jan 20, 2026 15:37:25").getTime();

let container = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days2 = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((dateDiff % (1000 * 60)) / 1000);

    days.textContent = days2 < 10 ? `0${days2}` : days2;
    hours.textContent = hours2 < 10 ? `0${hours2}` : hours2;
    minutes.textContent = minutes2 < 10 ? `0${minutes2}` : minutes2;
    seconds.textContent = seconds2 < 10 ? `0${seconds2}` : seconds2;

}, 1000);


// End Events

// Start pricing

let pricingBoxs = document.querySelectorAll(".pricing .box");

window.addEventListener("resize", function () {
    if (window.innerWidth < 1200) {
        console.log(window.innerWidth);
        pricingBoxs.forEach((box) => {
            box.addEventListener("mouseover", function () {
                pricingBoxs.forEach((el) => {
                    if (el !== box) {
                        el.style.transform = "translateY(0)";
                    }
                });
                box.style.transform = "translateY(-20px)";
            });

            box.addEventListener("mouseout", function () {
                pricingBoxs.forEach((el) => {
                    if (!el.classList.contains("popular")) {
                        el.style.transform = "translateY(0)";
                    }
                    else {
                        el.style.transform = "translateY(-20px)";
                    }
                });
            });
        });
    }
});

// End pricing

// Start Video

let videoList = document.querySelectorAll(".video .list li");
let videoPreview = document.querySelector(".video .preview video");
let videoInfo = document.querySelector(".video .preview .info");

videoList.forEach((li, index) => {
    li.addEventListener("click", function () {
        videoInfo.textContent = `${li.textContent.split("0")[0]} `;
        videoPreview.src = `videos/${index}.mp4`;
        videoPreview.load();
        li.classList.add("active");
        videoList.forEach((el) => {
            if (el !== li) {
                el.classList.remove("active");
            }
        });
    });
});

// End Video

// Start Stats

let nums = document.querySelectorAll(".stats .box .number");
let sectionstats = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= sectionstats.offsetTop - 550) {
        if (!started) {
            nums.forEach((num) => { updateNums(num); })
        }
        started = true;
    }
};

 

function updateNums(el) {
    let goal = +el.dataset.goal;
    let count = 0;
    let counter = setInterval(() => {
        count++;
        el.textContent = count < 1000 ? count : `${(count / 1000).toFixed(1)}K`;
        if (count == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);
}


// End Stats