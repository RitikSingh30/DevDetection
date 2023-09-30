const url = "https://api.github.com/users/";
const searchBtn = document.querySelector('[searchBtn]');
const input = document.querySelector('[input]');
const userImg = document.querySelector('[userImg]');

searchBtn.addEventListener('click',()=>{
    if(input.value != ''){
        fetchData(url + input.value);
    }
})

// rendering data
function renderData(data){
    if(data !== null){
        function notNull(content){
            if(content === null) return false ;
            return true ;
        }

        userImg.src = (notNull(data.avatar_url) ? data.avatar_url : "#") ;
        // userName.innerText = notNull
        
    }
}

async function fetchData(gitUrl){
    fetch(gitUrl).then((response) =>{
        if(!response.ok){
            throw Error('Invalid');
        }
        return response.json() ;
    }).then((data) =>{
        renderData(data);
    }).catch((err) =>{
        console.log('Invalid UserName');
        console.log(err);
    })
}