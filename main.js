
// Start Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    document.body.removeAttribute("class");
});
// End Loader
// Start Fade-in on scroll
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.08,
    rootMargin: '0px 0px -100px 0px'
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
            observer.unobserve(el.target);
        }
    });
},options);

sections.forEach(section=> observer.observe(section))
// Start Header
let links2 = document.querySelectorAll("header .main-nav>li>a ");

links2.forEach(ele => {
    ele.onclick = function (e) {
        // Prevent default behavior and stop event propagation
        e.preventDefault();
        e.stopPropagation();
        // Get the section ID from the data-scroll attribute
        if(e.target.getAttribute("data-scroll")) { // that (if) because the menu has no data-scroll attribute
        let sectionId = e.target.getAttribute("data-scroll");
            let section = document.getElementById(sectionId);
            section.scrollIntoView();
        }
        // Toggle active class
        if (this.classList.contains("active")) {
            this.classList.remove("active")
        } else {

            links2.forEach(e => {
                e.classList.remove("active")
            })
            this.classList.toggle("active");
        }
    };
});
// Menu 
let menu = document.getElementById("menu");
let menu1 = document.querySelector(".mega-menu");
let menuLinks = document.querySelectorAll(".mega-menu .links a");

menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.target.getAttribute("data-scroll")) { // that (if) because the menu has no data-scroll attribute
            let sectionId = e.target.getAttribute("data-scroll");
            let section = document.getElementById(sectionId);
            section.scrollIntoView();
        }
    });
});
// Show and hide the Menu when clicked
menu.addEventListener("click", (event) => {
    menu1.classList.toggle("idmega-menu");
    event.stopPropagation();
});
// Hide the Menu when clicking somewhere on the page outside the menu
document.addEventListener("click", (event) => {
    if (!menu1.contains(event.target) && menu1.classList.contains("idmega-menu")) {
        menu1.classList.remove("idmega-menu")
    }
});

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
        navbar.style.top = '-73px'; 
    } else {
        navbar.style.top = '0';
    }
    lastScroll = window.scrollY;
});
//  End Header
// Start Skills
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");

const observer1 = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    } else {
        spans.forEach((span) => {
            span.style.width = "0";
        });
    }
}, { threshold: 0.5,
    rootMargin: '300px 0px -100px 0px'
 });
observer1.observe(section);
// End Skills
// Start Events
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let countDownDate = new Date("1/20/2026 15:37:25").getTime();

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
}, 1000)
// End Events
// Start pricing
let pricingBoxs = document.querySelectorAll(".pricing .box");

window.addEventListener("resize", function () {
    if (window.innerWidth > 1200) {
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