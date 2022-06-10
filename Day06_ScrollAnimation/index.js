const boxes= document.querySelectorAll(".box")

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom= window.innerHeight* (4/5); // gives the 80% of the viewport height
    boxes.forEach(box => {
        const boxTop= box.getBoundingClientRect().top // returns the size and position of the element from the top of the viewport.

        if (boxTop< triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}