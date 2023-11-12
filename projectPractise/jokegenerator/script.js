function joke(){


const btnE1=document.querySelector('button');
const joke =document.querySelector('p')
const apikeys='QM9fGWKNGus3dZQrS63nZQ==PvuAPIaviPYGna2i'
let options={
    method: 'GET',
    headers: { 'X-Api-Key': apikeys},
}
    
    const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';

btnE1.addEventListener('click',async()=>{
    btnE1.innerText='...Loading';
    btnE1.disabled;
    fetch(apiURL,options)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
        console.log(data);
        btnE1.enable;
        btnE1.innerText='Tell me a joke';
        joke.innerHTML=data[0].joke;
    })
    .catch((error)=>{
        console.log(error.message);
    })
    
    


    




});

}

joke();