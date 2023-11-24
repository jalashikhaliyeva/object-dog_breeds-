// const dat = {
//     dog_breeds : ["Labrador" , "Golden Retriever" , "Husky" , "Poodle" , "Cocker Spaniel" , "Maaltipoo"],
//     lifespan : []
// }

const data = [
    {   
        name : "Cavoodle" ,
        lifespan: "lifespan: 10-12 years" ,
        weight: "29-36 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "57-62 cm" ,
        img : "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/cavoodle-700x700.jpg"
    } ,
    {   
        name : "Bichon Frise" ,
        lifespan: "lifespan: 13-16 years" ,
        weight: "2-10 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "27-30 cm" ,
        img: "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/bichon-frise-700x700.jpg"
    } ,
    {   
        name : "Australian Terrier" ,
        lifespan: "lifespan: 12-15 years" ,
        weight: "20-32 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "57-62 cm",
        img : "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/australian-aussie-terrier-700x700.jpg"
    } ,
    {   
        name : "Australian Cobberdog" ,
        lifespan: "lifespan: 12-15 years" ,
        weight: "20-26 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "57-62 cm" ,
        img : "https://bowwowinsurance.com.au/wp-content/uploads/2020/09/shutterstock_1635272731-Cute-red-abricot-Australian-Cobberdog-Labradoodle-dog-pup-sitting-up-with-one-paw-high-in-air.-Mouth-closed.-Isolated-on-white-background.jpg"
    } ,
    {   
        name : "Alaskan Malamute" ,
        lifespan: "lifespan: 11-13 years" ,
        weight: "13-16 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "57-62 cm" ,
        img : "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/alaskan-malamute-700x700.jpg"

    } ,
    {   
        name : "American Terrier" ,
        lifespan: "lifespan:  8-15 years" ,
        weight: "16-26 kg" ,
        colors : "Black, Chocolate, Yellow" , 
        height: "57-62 cm" , 
        img : "https://bowwowinsurance.com.au/wp-content/uploads/2018/10/american-staffordshire-terrier-amstaff-american-staffy-700x700.jpg"
    } ,
];

// for (let breeds of data){   
//     console.log(breeds.name);   
//     console.log(breeds.height);
// }

const cardList = document.querySelector("#cardList")

const newData = data.map((item) => {    
    // console.log(item);

    return `        
    <div class="card " style="width: 18rem;">
    <img class="img-fluid" 
    src="${item.img}"   >
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.lifespan}</p>
      <p class="card-text">${item.weight}</p>
    
    </div>
  </div>  

    `
}).join()
console.log(newData);

cardList.innerHTML = newData

// console.log(cardList);