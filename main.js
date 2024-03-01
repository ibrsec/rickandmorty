const navMenu = document.querySelector("#nav__menu");
const openBtn_navMenu = document.querySelector(".open-btn");
const closeBtn_navMenu = document.querySelector(".close-btn");


openBtn_navMenu.onclick = () => {
  navMenu.style.display = "flex";
  openBtn_navMenu.style.display = "none";
  closeBtn_navMenu.style.display = "inline-block";
};
closeBtn_navMenu.onclick = () => {
  navMenu.style.display = "none";
  openBtn_navMenu.style.display = "inline-block";
  closeBtn_navMenu.style.display = "none";
};


//fix nav menu var at window resize
window.onresize = () => {
    console.log(typeof window.innerWidth);
  if (window.innerWidth >= 1024) {
    navMenu.style.display = "flex";
    openBtn_navMenu.style.display = "none";
    closeBtn_navMenu.style.display = "none";

  }else{
    navMenu.style.display = "none";
    openBtn_navMenu.style.display = "inline-block";
    closeBtn_navMenu.style.display = "none";
  }
};



  

//-----
const apiUrl = "https://rickandmortyapi.com/api";
const charactersURL = "/character?page=";
let pageUrl = 2;

const first = "https://rickandmortyapi.com/api/character?page=1";
const last = "https://rickandmortyapi.com/api/character?page=42";

let responseData ;


const cardsContainer = document.querySelector("#card-container");



async function rickAndMorty(apiUrl,pagination='') {
  const response = await fetch(apiUrl + pagination);

  if(response.status == 404){
    console.log("ERRORR GELDI");
    return;
  }else{
    console.log("ERROR yok");
  }
  responseData = await response.json();
  


  cardsContainer.textContent = "";
responseData.results.forEach(item => {
    sendDataToCards(item);

});

    document.querySelector("#next-page").addEventListener("click",() => {
        console.log('click try');
        rickAndMorty(responseData.info.next);
    
    });
    document.querySelector("#prev-page").addEventListener("click",() => {
        console.log('click try');
        rickAndMorty(responseData.info.prev);
    
    });
    document.querySelector("#first-page").addEventListener("click",() => {
        console.log('click try');
        rickAndMorty(first);
    
    });
    document.querySelector("#last-page").addEventListener("click",() => {
        console.log('click try');
        rickAndMorty(last);
    
    });


  
};

const sendDataToCards = (item) => {

    
    let divCard = document.createElement("div");
    divCard.classList.add("card");

    //card__image
    let divImage = document.createElement("div");
    divImage.classList.add("card__image");
    let img = document.createElement("img");
    img.src = item.image;
    divImage.appendChild(img);
    divCard.appendChild(divImage);
    


    //content
    let divContent = document.createElement("div");
    divContent.classList.add("card__content");
    //h4
    let h4 = document.createElement("h4");
    h4.classList.add("fullname");
    h4.textContent = item.name;
    divContent.appendChild(h4);

    //first_specs
    let first_specs_p = document.createElement("p");
    first_specs_p.classList.add("first_specs");
    //first_specs - circleSign
    let circleSign = document.createElement("i");
    circleSign.classList.add("fa-solid","fa-circle");
    first_specs_p.appendChild(circleSign);
    //first_specs - statusSpan
    let statusSpan = document.createElement("span");
    statusSpan.classList.add("status");
    statusSpan.textContent = item.status + " - ";
    if(statusSpan.textContent.includes("Alive")){
        circleSign.style.color = "green";
    }
    first_specs_p.appendChild(statusSpan);
    //first_specs - speciesSpan
    let speciesSpan = document.createElement("span");
    speciesSpan.classList.add("species");
    speciesSpan.textContent = item.species + " - ";
    first_specs_p.appendChild(speciesSpan);
    //first_specs - genderSpan
    let genderSpan = document.createElement("span");
    genderSpan.classList.add("gender");
    genderSpan.textContent = item.gender;
    first_specs_p.appendChild(genderSpan);


    divContent.appendChild(first_specs_p);



    //origin-container
    let origin_container_p = document.createElement("p");
    origin_container_p.classList.add("origin-container");
    //origin-container - originNameSpan
    let originNameSpan = document.createElement("span");
    originNameSpan.classList.add("origin-name");
    originNameSpan.textContent = "Origin: ";
    origin_container_p.appendChild(originNameSpan);
    //origin-container - originSpan
    let originSpan = document.createElement("span");
    originSpan.classList.add("origin");
    originSpan.textContent = item.origin.name;
    origin_container_p.appendChild(originSpan);

    divContent.appendChild(origin_container_p);


    //location-container
    let location_continer_p = document.createElement("p");
    location_continer_p.classList.add("location-container");
    //location-container - location-name
    let locatioNameSpan = document.createElement("span");
    locatioNameSpan.classList.add("location-name");
    locatioNameSpan.textContent = "Location: ";
    location_continer_p.appendChild(locatioNameSpan);
    //location-container - locationSpan
    let locationSpan = document.createElement("span");
    locationSpan.classList.add("location");
    locationSpan.textContent = item.location.name;
    location_continer_p.appendChild(locationSpan);

    divContent.appendChild(location_continer_p);

//     //first-seen-container
//     let firstseen_container_p = document.createElement("p");
//     firstseen_container_p.classList.add("first-seen-container");
//     //first-seen-container - firstSeenNameSpan
//     let firstSeenNameSpan = document.createElement("span");
//     firstSeenNameSpan.classList.add("first-seen-name");
//     firstSeenNameSpan.textContent = "First Seen: ";
//     firstseen_container_p.appendChild(firstSeenNameSpan);
//     //first-seen-container - firstSeenSpan
//     let firstSeenSpan = document.createElement("span");
//     firstSeenSpan.classList.add("first-seen");
//     firstSeenSpan.textContent = item.first_seen;
//     firstseen_container_p.appendChild(firstSeenSpan);

// divContent.appendChild(firstseen_container_p);

    divCard.appendChild(divContent);
    cardsContainer.appendChild(divCard);
}


async function fetchData() {
    await rickAndMorty(first);
    console.log(responseData);

    

}

fetchData();







// const firstPage = document.querySelector("#firstpage")

// firstPage.addEventListener("click", () => {
//   checkweather();
// });








