const data = "https://api.chucknorris.io/jokes/random"; 
const list = document.querySelector('ul');


const getNewJoke = () => {
    const promise = fetch(data); 
        promise
            .then( function (res){
                const processPromise = res.json();
                return processPromise; 
            })
            .then( function (processedResponse) {
                console.log(processedResponse)
                const li = document.createElement('li');
                li.innerText = processedResponse.value; 
                list.appendChild(li); 
            })
}

const bttn = document.querySelector('button'); 
bttn.addEventListener('click', getNewJoke); 
