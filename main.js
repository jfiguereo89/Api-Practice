const data = "https://icanhazdadjoke.com"; 
const list = document.querySelector('ul');


 const  getNewJoke = async () => {
    const promise = await fetch(data, {
        headers: {
            Accept: "application/json"
        },
    }); 
    const processedResponse = await promise.json(); 
    const newLi = document.createElement('li');
    newLi.innerText = processedResponse.joke; 
    list.appendChild(newLi); 

}

const bttn = document.querySelector('button'); 
bttn.addEventListener('click', getNewJoke); 
