const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".navbar-shopping-cart")
const shoppingCartAside = document.querySelector("#shoppingCartDetail")
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

const productList = []
productList.push(
  {
    name: 'bike',
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: 'bike',
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: 'bike',
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: 'bike',
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  }
)

menuEmail.addEventListener("click", toggleDesktopMenu)
hamburgerMenu.addEventListener("click", toggleMobileMenu)
shoppingCart.addEventListener("click", toggleShoppingCart)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isShoppingCartClose = shoppingCartAside.classList.contains("inactive")
  if (!isShoppingCartClose) {
    shoppingCartAside.classList.add("inactive")
  }
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  const isShoppingCartClose = shoppingCartAside.classList.contains("inactive")
  if (!isShoppingCartClose) {
    shoppingCartAside.classList.add("inactive")
  }
  mobileMenu.classList.toggle("inactive")
  closeProductDetailAside()
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
  }

  const isProductDetailClose = productDetailContainer.classList.contains('inactive')

  if (!isProductDetailClose) {
    productDetailContainer.classList.add('inactive')
  }

  shoppingCartAside.classList.toggle("inactive")
}

function openProductDetailAside() {
  shoppingCartAside.classList.add("inactive")
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')
  shoppingCartAside.classList.add("inactive")
}

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
      
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
      
        const productInfoDiv = document.createElement("div")
      
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerHTML = product.name
      
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
      
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
      
        productInfoFigure.appendChild(productImgCart)
      
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
      
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
      
        cardsContainer.appendChild(productCard)
      }   
}

renderProducts(productList)