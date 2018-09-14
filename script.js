document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded');
    let buttonBox = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Add Square'
    button.style.background = "blue";
    button.style.color = "white";
    button.classList.add('btn');
    buttonBox.appendChild(button);
    document.body.appendChild(buttonBox);

    button.addEventListener('click', function () {
        let box = document.createElement('div');
        document.body.appendChild(box);
        box.classList.add('boxes');
        let currentNumber = document.getElementsByClassName('boxes').length;
        box.setAttribute("id", currentNumber);

        box.addEventListener('mouseover', function (e) {
            console.log(e.target.innerText);
            e.target.innerText = currentNumber;
        })
        box.addEventListener('mouseout', function (e) {
            e.target.innerText = '';
        })
        box.addEventListener('click', function random_bg_color() {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                console.log(bgColor);
                box.style.background = bgColor;
                })
        box.addEventListener('dblclick', function(){
            if(currentNumber%2 == 0){ 
           document.body.removeChild(box.nextElementSibling); }
              else if(currentNumber%2){
                  document.body.removeChild(box.previousElementSibling);
              }
            })
        })
    })
