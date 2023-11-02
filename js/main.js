let showMore = document.getElementById('show-more');
let arrow = document.getElementsByClassName('arrow');

showMore.addEventListener('click', () => {
    if (showMore.innerText == 'show more') {
        showMore.innerText = 'show less';
        arrow[0].style.display = 'block';
        arrow[1].style.display = 'none';
    } else {
        showMore.innerText = 'show more';
        arrow[0].style.display = 'none';
        arrow[1].style.display = 'block';
    }
})

let menu = document.getElementById('menu');
let burgerMenu = document.getElementsByClassName('burgermenu');
burgerMenu = Array.from(burgerMenu);

burgerMenu.forEach((element) => {
    element.addEventListener('click', () => {
        if(menu.style.display == 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    })    
});
