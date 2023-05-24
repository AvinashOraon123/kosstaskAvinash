//Get elements from DOM(Document object mdel)
const btns = document.querySelectorAll('.filter button');
const imgs = document.querySelectorAll('.container .main .image img');
//Add a click event to all buttons
for (let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);

}
//Set active button on click
function setActiveBtn(e) {
    //Remove active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });
    //Add active class to clicked button
    e.target.classList.add('btn-clicked');
}
//filter images
function filterImg(e) {
    //Run the active button function
    setActiveBtn(e);
    //loop through all images
    imgs.forEach(img => {
        //expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
        //get data from attributes
        //get image type data
        const imgType = parseInt(img.dataset.img);
        //get button type data
        const btnType = parseInt(e.target.dataset.btn);

        if (imgType !== btnType) {
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}
//Set click event for All button
btns[0].addEventListener('click', (e) => {
    //Run the active button function
    setActiveBtn(e);
    //loop through all images
    imgs.forEach(img => {
        //Expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expanded');
    })
}
)
//get pop-up view
document.querySelectorAll('.main img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';

}


