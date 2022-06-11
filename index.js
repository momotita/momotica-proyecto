const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('💞 Lis eres la mejor novia del mundo, estor muy orgulloso de ser tu novio y te admiro mucho mi corazoncito precioso 💞');
    alert('gracias por estos 7 meses de locuras y alegrias');
    location.href = 'https://www.youtube.com/watch?v=Y5cLnhGQECA';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})