const intputE1=document.getElementById('input');
const infoTextE1=document.getElementById('info-text');
const meaningContainerE1=document.getElementById('meaning-container');
const titleE1=document.getElementById('title');
const meaningE1=document.getElementById('meaning');
const audioE1= document.getElementById('audio');


async function fetchAPI(word){
    try {
        infoTextE1.style.display='block';
        infoTextE1.innerHTML=`Searching the meaning of ${word}`;
        
        meaningContainerE1.style.display='none';
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result= await fetch(url).then((res) => res.json());
        
        if(result.title){
        meaningContainerE1.style.display='block';
        // infoTextE1.style.display='none';
            titleE1.innerHTML=word;
        meaningE1.innerHTML="N/A";
        audioE1.style.display='none';    
        }
        else{
            titleE1.innerHTML=result[0].word;
            audioE1.style.display='inline-flex';
            meaningE1.innerHTML=result[0].meanings[0].definitions[0].definition;
            audioE1.src=result[0].phonetics[0].audio;
    
        }
        
        infoTextE1.style.display='none';
        meaningContainerE1.style.display='block';
        
        
    } catch (error) {   
        console.log(error);
        infoTextE1.innerText=`an error happened try again later`;
    }

}

intputE1.addEventListener("keyup",(e)=>{
    if(e.target.value && e.key==='Enter'){
        fetchAPI(e.target.value);
    }
})