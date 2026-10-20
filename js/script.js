// ============================================
// PRIYANSHU SINGH PORTFOLIO
// COMPLETE JAVASCRIPT
// ============================================


// ============================================
// 1. TYPING ANIMATION
// ============================================

const typingText = document.getElementById("typing-text");

if (typingText) {

    const words = [
        "Front-End Developer",
        "JavaScript Developer",
        "Python Programmer",
        "C / C++ Programmer"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            characterIndex++;

            typingText.textContent =
                currentWord.substring(0, characterIndex);

            if (characterIndex >= currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1400);

                return;
            }

        } else {

            characterIndex--;

            typingText.textContent =
                currentWord.substring(0, characterIndex);

            if (characterIndex <= 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 90);
    }

    typeEffect();
}


// ============================================
// 2. SECTION REVEAL
// ============================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);
                }
            });

        },

        {
            threshold: 0.1
        }

    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


// ============================================
// 3. MOBILE NAVIGATION
// ============================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";
        });
    });

}


// ============================================
// 4. PROFILE PHOTO CHECK
// ============================================

const profileImage = document.querySelector(".profile-image");

if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.error(
            "Profile photo could not be loaded. " +
            "Check that images/profile.jpg exists."
        );

        profileImage.alt =
            "Profile photo unavailable. Check images/profile.jpg.";

        profileImage.style.background = "#172554";
    });

    profileImage.addEventListener("load", function () {

        console.log("Profile photo loaded successfully.");

    });
}


// ============================================
// 5. PLACEHOLDER LINKS
// ============================================

document.querySelectorAll(".social-placeholder").forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "Add your actual social media profile URL " +
                    "to this link in index.html."
                );
            }
        });

    }
);


document.querySelectorAll(".project-placeholder").forEach(
    function (link) {

        link.addEventListener("click", function (event) {

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "Add your deployed project URL to this link " +
                    "in index.html."
                );
            }
        });

    }
);


// ============================================
// 6. RESUME DOWNLOAD LINK CHECK
// ============================================

const resumeLinks = document.querySelectorAll(
    ".resume-download, #resumeNav"
);

resumeLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const href = link.getAttribute("href");

        if (!href || href.includes(" ")) {

            console.error(
                "Check the resume filename in index.html."
            );
        }

    });

});


// ============================================
// PORTFOLIO INITIALIZED
// ============================================

console.log("Priyanshu Singh portfolio initialized.");