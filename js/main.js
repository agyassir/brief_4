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