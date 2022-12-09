const btn = document.getElementById('btn');


const generateAdvice = () =>{
  fetch('https://api.adviceslip.com/advice') // Default (When page is opened)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const advice = document.getElementById('advice'); // Dom Elements
    const adviceId = document.getElementById('advice-id')

    const adviceNo = data.slip.id;
    const adviceData = data.slip.advice;
    adviceId.innerHTML = `ADVICE # ${adviceNo}`
    advice.innerHTML = adviceData
  })
  .catch(err =>{
    console.log(err);
  })
}

generateAdvice()


btn.addEventListener("click", function(){ // Generate advice with button
  generateAdvice()
})

