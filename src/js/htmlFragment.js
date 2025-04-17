export const upcomingProduct = (
    id,
    imgScr,
    text,
  ) => {
    return `    <li class="upcoming-product-item" id="upcoming-${id}">
                    <div class="upcoming-product-item-box">
                        <div class="upcoming-product-item-atr-box" >
                            <div class="upcoming-product-item-atr-p">
                                <p >Bestseller</p>
                            </div>
                            <svg class="hart-svg">
                                <use href="./icons/icons.svg#hart"></use>
                            </svg>
                        </div>
                        <picture data-action="openModla">
                            <img class="upcoming-product-image" src=${imgScr} alt="product photo" data-action="openModla">
                        </picture>

                    </div>
                    <div class="upcoming-product-description-box">
                        <h1 class="upcoming-product-description">${text}</h1>
                        <p class="upcoming-product-price">€300,00 EUR</p>
                    </div>
                </li>`
  };
  export const baner = () =>{
    return` <li class="banner" id="baner">
                <div class="banner-box">
                    <div>
                        <p class="banner-logo">Forma’sint.</p>
                        <h2 class="banner-slogan">You'll look and feel like the champion.</h2>
                    </div>
                    <button class="banner-button">
                        <p>Check this out ></p>
                    </button>
                </div>
            </li> 
    `
  }

  export const product =(
    id,
    imgScr,
    text,
  )=>{
    return` <li class="product-list-item" id="product-${id}">
                <div class="product-item-box">
                    <h3 class="product-item-h">ID: ${id}</h3>
                    <picture>
                        <img class="product-item-image" src="${imgScr}" alt="product photo" data-action="openModla">
                    </picture>
                </div>
            </li>`
  }

  export const catBox =( )=>{
    return` <li class="catBox" id="smal-box">
            </li>`
  }