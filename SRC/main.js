
var svgElement = document.getElementById("mySVG");

svgElement.addEventListener("mouseover", function () {
    svgElement.style.fill = "purple";
});

svgElement.addEventListener("mouseout", function () {
    svgElement.style.fill = "blue";
});