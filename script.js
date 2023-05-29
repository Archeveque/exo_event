// Fonctionalité 1//////////////////////////////////////////////////////////////////////////////////////
const footer = document.getElementsByTagName('footer');
let fclick = 0;
function footer_click() {
 fclick++
 console.log(`wow tu as cliqué sur le footer ! Bravo je suis fier de toi! clic numéro ${fclick}`);
}
footer[0].addEventListener("click", footer_click);


// Fonctionalité 2//////////////////////////////////////////////////////////////////////////////////////
const burger = document.getElementsByClassName('navbar-toggler');
function burger_click() {
    console.log(`Incroyable, tu as cliqué sur le burger !!!`);
    // on peut juste faire un classlist.toggle('collapse')
    if (document.getElementById('navbarHeader').classList.contains('collapse')){
        document.getElementById('navbarHeader').classList.remove('collapse');
    }else{
        document.getElementById('navbarHeader').classList.add('collapse');
    }}
   burger[0].addEventListener("click", burger_click);


// Fonctionalité 3//////////////////////////////////////////////////////////////////////////////////////
const edit = document.getElementsByClassName('btn btn-sm btn-outline-secondary');
const card_text = document.getElementsByClassName('card-text');
function edit_click() {
    console.log(`Fantastique ! tu as cliqué sur edit !`);
    card_text[0].classList.add('text-danger');
   }
   edit[0].addEventListener("click", edit_click);


// Fonctionalité 4//////////////////////////////////////////////////////////////////////////////////////
function edit1_click() {
    console.log(`Fantastique ! tu as cliqué sur edit 2!`);
    card_text[1].classList.toggle('text-success');}
   edit[1].addEventListener("click", edit1_click);
// Fonctionalité 5
const link = document.getElementsByTagName('link');
const navbar = document.getElementsByClassName('navbar');
 navbar[0].addEventListener("dblclick", function nav_click(){
    link[0].disabled = !link[0].disabled;
    console.log(`Félicitation! tu as double cliqué sur la navbar !`);
 });
// Fonctionalité 6//////////////////////////////////////////////////////////////////////////////////////
const view = document.getElementsByClassName('btn btn-sm btn-success');
const card_img= document.getElementsByClassName('card-img-top');
let test_text=card_text[2].innerHTML
function view_hover() {
    console.log(`INC-CROY-ABLE! tu as hover sur view !`);
    if (card_text.innerHTML = ""){
        card_text[2].innerHTML= test_text
    }else {
        card_text[2].remove();
    }
    console.log(test_text)
    console.log(card_text[2])
    card_img[2].classList.toggle('w-25');
   }
  view[2].addEventListener("mouseover", view_hover);
// Fonctionalité 7//////////////////////////////////////////////////////////////////////////////////////

// Fonctionalité 8//////////////////////////////////////////////////////////////////////////////////////

// Fonctionalité 9//////////////////////////////////////////////////////////////////////////////////////