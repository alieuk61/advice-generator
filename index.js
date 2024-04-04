// import axios from 'axios';
// import 'regenerator-runtime/runtime';

const adviceText = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const dice = document.querySelector('.dice__wrapper');

//api calls
async function adviceGenerator(){
    try{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json()
        const {id, advice} = data.slip
        console.log(data, id, advice)
        adviceId.textContent = `ADVICE #${id}`
        adviceText.textContent = `"${advice}"`
        console.log(data)
    }catch(errors){
        console.error(errors)
    }
}

adviceGenerator()

dice.addEventListener('click', () => {
    adviceGenerator()
})

