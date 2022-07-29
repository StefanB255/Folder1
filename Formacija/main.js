function semafor(){
    var boje = document.getElementsByClassName('boje');
boje[0].style.background = 'red';
boje[1].style.background = 'grey';
boje[2].style.background = 'grey';

function changetoyellow(){
    boje[0].style.background = 'red';
    boje[1].style.background = 'yellow';
    boje[2].style.background = 'grey';

}
function changetogreen(){
    boje[0].style.background = 'grey';
    boje[1].style.background = 'grey';
    boje[2].style.background = 'green';
}
var x = setTimeout(changetoyellow,5000);
var y = setTimeout(changetogreen,8000);
var start = setInterval(semafor, 11000);
}
semafor();


function semafor2(){
    var boje2 = document.getElementsByClassName('boje2');
boje2[0].style.background = 'red';
boje2[1].style.background = 'yellow';
boje2[2].style.background = 'grey';

function changetored(){
    boje2[0].style.background = 'grey';
    boje2[1].style.background = 'grey';
    boje2[2].style.background = 'green';
}
function changetoyellow(){
    boje2[0].style.background = 'red';
    boje2[1].style.background = 'grey';   
    boje2[2].style.background = 'grey';
}
var x = setTimeout(changetored,5000);
var y = setTimeout(changetoyellow,8000);
var start = setInterval(semafor2, 11000);
}
semafor2();


var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');
for(i=0;i<slike.length; i++){
    slike[i].addEventListener('click',display);
}

function display(){
    var sl = this.getAttribute('src');
    current.setAttribute('src',sl);
}

var timer = document.getElementById('timer');
var loop;

function Sat(){
    var sada = new Date();
    var h = sada.getHours();
    var m = sada.getMinutes();
    var s = sada.getSeconds();
    
    timer.innerHTML = h+'h:'+m+"m:"+s+"s"
}
loop = setInterval(Sat,1000);


var ime = document.getElementById('inp1');
var email1 = document.getElementById('email');
var msg = document.getElementById('message');
var send = document.getElementById('sendBtn');
var xx;

send.addEventListener('click',submit);
ime.addEventListener('focus',clear);
email.addEventListener('focus',clear);
msg.addEventListener('focus',clear);

function submit(){
    xx = 1;
    
    if(ime.value == "") {
        ime.value = "Ovo polje je obavezno!!!"
        ime.style.color = 'red';
        xx = 0;
    };
    if(email1.value.indexOf('@gmail.com') == -1){
        email1.value = 'Vas email mora sadrzati @gmail.com';
        xx = 0;
    };
    if(email1.value == "") {
        email1.value = "Ovo polje je obavezno!!!";
        email1.style.color = 'red';
        xx = 0;
    };
    if(msg.value == "") {
        msg.value = "Ovo polje je obavezno!!!";
        msg.style.color = 'red';
        xx = 0;
    };
    if (xx == 1) {
    window.location.assign('druga.html');
};
};



function clear(){
    this.value = "";
    this.style.color = 'black';
};

let names = ['Audi RS7','Audi RS6','Audi A5','Audi RS7','Audi A7','BMW','BMW i8','BMW'];
let obj = {};

for (var i = 0; i < names.length; i++){
    obj[names[i]] = (obj[names[i]] + 1) || 1;
}
console.log(obj);

var parent = document.getElementById('parent');
var child1 = document.getElementById('child1');
var child2 = document.getElementById('child2');
var child3 = document.getElementById('child3');
var child4 = document.getElementById('child4');

parent.addEventListener('click',doSomething);
child1.addEventListener('click',doSomething);
child3.addEventListener('click',doSomething);

function doSomething() {
    child1.style.display = 'block';
}