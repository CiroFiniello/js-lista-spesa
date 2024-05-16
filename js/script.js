const spesa = ['banane','pasta','manzo','sugo','latte','uova'];
const ulEl = document.querySelector('ul');

// for (let index = 0; index < spesa.length; index++) {
//     const element = document.createElement('li');
//     element.append(spesa[index]);
//     ulEl.appendChild(element)   
// }
let x = 0;
while( x < spesa.length){
    const element = document.createElement('li');
    element.append(spesa[x]);
    ulEl.appendChild(element);
    x++
}
