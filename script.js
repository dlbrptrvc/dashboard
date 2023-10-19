let ssb = document.getElementById('slidesb')
let ct = document.getElementById('changetheme')
let sb = document.querySelector(".sidebar")
let body = document.body
body.style.gridTemplate = "1fr / 300px 1fr"
body.style.filter = 'invert(0%)'

function checksize() {
    if (screen.width<500) {ssb.click()}
}

ssb.addEventListener('click', ()=>{

    let x = body.style.gridTemplate
    if (x.includes('300px')) {
        body.style.gridTemplate = "1fr / 1fr"
        sb.style.display = 'none'
    } else {
        body.style.gridTemplate = "1fr / 300px 1fr"
        sb.style.display = 'grid'
    }
})

ct.addEventListener('click', ()=>{

    let x = body.style.filter
    if (x.includes('(0%)')) {
        body.style.filter = "invert(100%)"
        let avts = Array.from(document.querySelectorAll('[class^="avatar"]'))
        console.log(avts)
        avts.forEach( (item) => {
            item.style.filter = "invert(100%)"
        })
    } else {
        body.style.filter = "invert(0%)"
        let avts = Array.from(document.querySelectorAll('[class^="avatar"]'))
        avts.forEach( (item) => {
            item.style.filter = "invert(0%)"
        })
    }
})