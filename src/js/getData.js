import {
  upcomingProduct,
  product,
  baner
} from './htmlFragment';



const createUpcomingProductCard = data => {
  const upcomingSection = document.querySelector('#upcoming-product');
  console.log(upcomingSection)
  console.log(data)
  
  let htmlFragment=""
  for (let i = 0; i < 4; i++) {
    htmlFragment=htmlFragment.concat(" ", upcomingProduct(data[i].id, data[i].image, data[i].text))
  }
  upcomingSection.innerHTML = htmlFragment
  if(window.screen.width<361){
    const uItem2 = document.querySelector('#upcoming-2')
    uItem2.classList.add('hide')
    const uItem3 = document.querySelector('#upcoming-3')
    uItem3.classList.add('hide')
    const uItem4 = document.querySelector('#upcoming-4')
    uItem4.classList.add('hide')
  }

};
const createProductCard = data => {
  const productSection = document.querySelector('#product-list');
  console.log(productSection)
  console.log(data)
  let htmlFragment=""
  for (let i = 0; i < 14; i++) {
    htmlFragment=htmlFragment.concat(" ", product(data[i].id, data[i].image, data[i].text))
  }
  productSection.innerHTML = htmlFragment
 

};

const banerInsertion = ()=>{
  window.screen.width>360
        ?productItem = document.querySelector('#product-5')
        :productItem = document.querySelector('#product-4')
  productItem.insertAdjacentHTML("afterend", baner())
}



(async function getData() {
    const url = "https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=20";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const contentData = await response.json();

      if(contentData.data.length===0)
        console.log(contentData.data.length); 

      if(contentData.data.length!==0){
        createUpcomingProductCard(contentData.data)
        createProductCard(contentData.data)
        banerInsertion()
      }


    } catch (error) {
      console.error(error.message);
    }
  })()


  


 

