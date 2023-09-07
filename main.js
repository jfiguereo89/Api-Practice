const data = "https://api.chucknorris.io/jokes/random"; 
const list = document.querySelector('ul');


 const  getNewJoke = async () => {
    const promise = await fetch(data); 
    const processedResponse = await promise.json(); 
    const newLi = document.createElement('li');
    newLi.innerText = processedResponse.value; 
    list.appendChild(newLi); 
}

const bttn = document.querySelector('button'); 
bttn.addEventListener('click', getNewJoke); 
