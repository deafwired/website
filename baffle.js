const elements = document.querySelectorAll(".baffle");

elements.forEach(element => {
    const text = baffle(element, {
        characters: "▓░█ />▒<1234567890#$%!+",
        speed: 150
    });
    text.start();
    text.reveal(1500);
    element.addEventListener("mouseenter", () => {
        text.start();
    });

    element.addEventListener("mouseleave", () => {
        text.stop();
        text.reveal(500);
    });

});
