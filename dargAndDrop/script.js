

const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', dragnDrop)
})

function dragStart (e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragEnd (e) {
    e.target.classList.remove('hold', 'hide')
}

function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.target.classList.add('hoverder')
}
function dragLeave(e) {
    e.target.classList.remove('hoverder')
}
function dragnDrop(e) {
    e.target.classList.remove('hoverder')
    e.target.append(item)
}