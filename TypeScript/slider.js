"use strict";
function createSlider({ container = "", numberOfSlides = 1, speed = 300, direction = "horizontal", dots = true, arrows = true, } = {}) {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
// Необходимо типизировать объект настроек, который будет зависим
// от интерфейса ISlider
// Все поля в нем обязательны для заполнения
const customSliderOptions = {
    container: "id",
    numberOfSlides: 4,
    speed: 1100,
    direction: "horizontal",
    dots: true,
    arrows: true,
};
function createCustomSlider(options) {
    if ("container" in options) {
        console.log(options);
    }
}
