const main=document.querySelector(".main")
const moviesDisplay=document.querySelector(".movies-display")



// html.forEach((user ,index) => {
//     moviesDisplay.innerHTML+=`

    
// `






const api="https://swapi.dev/api/people";


const getApi=(url)=>{
   return fetch(url)
        .then(response=>{
            console.log(response)
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something went wrong")
            }
        })
        .then(data=>{
           // console.log(data.results)
            const html =data.results.map((user, index)=>{
               console.log(index)
                const charaParameter={name: user.name, height:user.height, gender:user.gender}
                return charaParameter;})

                html.forEach((user, index) => {
                    moviesDisplay.innerHTML += `
                    
                    <div class="star">
                    <div class="star-img"><img src="/image/${index}.jpeg"/> </div>
                        <div class="person-details" onclick="displayDetails(${index})">
                            <h4>${user.name}</h4>
                            <i class="uil uil-arrow-circle-left"></i>
                        </div>
                    </div>
                   
                    <div class="modal modal-container" id="modal${index}">
                        <div class="modal-box">
                            <h2>Character</h2>
                            <p>Name:    ${user.name}</p>
                            <p>Gender:  ${user.gender}</p>
                            <p>Height:  ${user.height}</p>
                   
                                <div class="modal-button">
                                    <button class="btn-close" onclick="closeFunc(${index})">Close</button>
                                </div>
                   
                        </div>
                   
                    </div>
                    
                    
                    
                    
                    `
                });

        })



        
                
        
    }

getApi(api)

function displayDetails(index){
    
   
    console.log("hey James")
    document.querySelector(`#modal${index}`).style.display="block"
    // document.querySelector(`#modal${index}`).style.display="block"
}

function closeFunc(index){
    
  console.log("hey")
  document.querySelector(`#modal${index}`).style.display="none"
 }



let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}



//module.exports = { main }


