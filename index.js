alert('Welcome to Itadori Page')
function color(value) {
    document.body.style.backgroundColor = value
};
const toggleButton = document.getElementById('toggleButton');
const myParagraph = document.getElementById('myParagraph');

 function toggler() {
    if(myParagraph.style.display === 'none') {
        myParagraph.style.display = 'block'
    } else {
        myParagraph.style.display = 'none'
    }
};