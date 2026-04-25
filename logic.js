const state = {
    iq: 0,
    level: 1,
    stars: 0,
    currentScreen: 'screen-splash'
};

function showScreen(screenId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        gsap.to(".loader-progress", { width: "100%", duration: 1.5, ease: "power2.inOut" });
        setTimeout(() => {
            showScreen('screen-menu');
            gsap.from(".btn-pro", {
                x: -50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "expo.out"
            });
        }, 1800);
    }, 500);
});

function selectMode(mode) {
    console.log("Selected Mode:", mode);
}