const modal=document.querySelector('.modal');
const previous=document.querySelectorAll('.gallery img');
const original=document.querySelector(".full-img");
const caption=document.querySelector('.caption');

previous.forEach(preview => {
    preview.addEventListener('click',()=>{
        modal.classList.add("open");
        original.classList.add('open');
        // change text and image
        const originalsrc=preview.getAttribute('data-original');
        original.src=`large/${originalsrc}`;
        const alttext=preview.alt;
        caption.textContent=alttext;

    })
} )
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})