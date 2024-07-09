function rotateDice(diceId) {
    const dice = document.getElementById(diceId);
    const randomX = Math.floor(Math.random() * 4) * 90;
    const randomY = Math.floor(Math.random() * 4) * 90;
    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
}

document.addEventListener('click', () => {
    rotateDice('dice1');
    rotateDice('dice2');
});
