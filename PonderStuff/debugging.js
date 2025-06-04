const PI = 3.14;
let area = 0;

area = calcArea(3);
console.log("Area: ", area);
area = calcArea(4);
console.log("Area: ", area);


function calcArea(r) {
    debugger;
    area = r * r * PI;
    return area;
}