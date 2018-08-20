// console.log('kalkulator');

// let input = $('#input');
let myInput=document.getElementById('input');

clickBtn = (obj) =>{

    let clicked = obj.innerHTML;

    // console.log(clicked);

    if (clicked == '=') {
        input.innerHTML=eval(input.innerHTML);
    }else if (clicked == 'ac.'){
        input.innerHTML='0';
    }else{
        if (input.innerHTML=='0') {
            input.innerHTML=clicked;
        }else{
            input.innerHTML+=clicked;
        }
    }

};

