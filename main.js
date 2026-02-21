const connectTabButtons = document.querySelectorAll('.connect__tabs-control')
const connectTabItems = document.querySelectorAll('.connect__tabs-item')

connectTabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    connectTabButtons.forEach(btn => btn.classList.remove('is-active'))
    connectTabItems.forEach(item => item.classList.remove('is-active'))

    button.classList.add('is-active');
    connectTabItems[index].classList.add('is-active')
  })
})