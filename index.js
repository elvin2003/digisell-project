let viewAllBtn = document.querySelector(".viewAllProduct");

let allProductsVisible = false;

viewAllBtn.onclick = () => {

  if (!allProductsVisible) {
    document.querySelector(".featuredProducts .viewAllProduct").innerHTML = "View less";   

    window.scrollBy({
      top: 200, // negative value acceptable 
      left: 0,
      behavior: 'smooth'
    });
    document.querySelector(".featuredProducts .viewMore1").style.display = "flex";
    document.querySelector(".featuredProducts .viewMore2").style.display = "flex";
    allProductsVisible = true;
 
  } else {

    document.querySelector(".featuredProducts .viewAllProduct").innerHTML = "View All Products";

    window.scroll({
      top: 1170, // negative value acceptable 
      left: 0,
      behavior: 'smooth'
    });

    document.querySelector(".featuredProducts .viewMore1").style.display = "none";
    document.querySelector(".featuredProducts .viewMore2").style.display = "none";
    allProductsVisible = false;

  }
}

let divs = document.querySelectorAll(".featuredProducts>div>div>.container");
let divsAll = document.querySelectorAll(".allProducts .container");

divs.forEach((singleDiv) => {
  singleDiv.addEventListener("mouseover", () => {
    showPreviewFeatured(singleDiv);
  })

  singleDiv.addEventListener("mouseout", () => {

    singleDiv.previousElementSibling.addEventListener("mouseover", () => {
      showPreviewFeatured(singleDiv);
    })

    hidePreviewFeatured(singleDiv);

  })
})

divsAll.forEach((singleDiv) => {
  singleDiv.addEventListener("mouseover", () => {
    showPreviewAll(singleDiv);
  })

  singleDiv.addEventListener("mouseout", () => {

    singleDiv.previousElementSibling.addEventListener("mouseover", () => {
      showPreviewAll(singleDiv);
    })

    hidePreviewAll(singleDiv);

  })
})

function hidePreviewFeatured(item) {
  item.style = "background-color: transparent;";
  item.children[0].style.opacity = 1;
  item.previousElementSibling.style = "display: none";
}

function showPreviewFeatured(item) {
  item.style = "background-color: #000000;";
  item.children[0].style.opacity = 0.3;
  item.previousElementSibling.style = "display: flex";
}

function hidePreviewAll(item) {
  item.style = "background-color: transparent;";
  item.children[0].style.opacity = 1;
  item.previousElementSibling.style = "display: none";
}

function showPreviewAll(item) {
  item.style = "background-color: #000000;";
  item.children[0].style.opacity = 0.3;
  item.previousElementSibling.style = "display: flex";
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})


let categroies = document.querySelectorAll(".categories > div");

let cardsAllProducts = document.querySelectorAll(".allProducts .cards > div");

categroies.forEach((singleCategory, index) => {
  if (index == 0) {
    singleCategory.classList.add("activeCategory");
  }
  singleCategory.onclick = () => {
    categroies.forEach((item) => {
      item.classList.remove("activeCategory");
    })
    singleCategory.classList.add("activeCategory");

    switch (singleCategory.id) {
      case "allCategories":
        cardsAllProducts.forEach((singleCard) => {
          singleCard.style.display = "block"
        })
        break;
      case "htmlDesign":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card1" || singleCard.className == "card2") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
      case "wpThemes":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card8") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
      case "cmsThemes":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card3") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
      case "eCommerce":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card4" || singleCard.className == "card7") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
      case "blogging":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card5") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
      case "uiTemplates":
        cardsAllProducts.forEach((singleCard) => {
          if (singleCard.className == "card6") {
            singleCard.style.display = "block"
          } else {
            singleCard.style.display = "none"
          }
        })
        break;
    }
  }
})

let allProductsVisibleAll = false;

function viewAllProduct() {
  let viewAllBtn = document.querySelector(".allProducts .viewAllProduct");

  viewAllBtn.onclick = () => {

    if (!allProductsVisibleAll) {
      document.querySelector(".allProducts .viewAllProduct").innerHTML = "View less";
      window.scrollBy({
        top: 200, // negative value acceptable 
        left: 0,
        behavior: 'smooth'
      });
      document.querySelector(".allProducts .viewMore").style.display = "grid";
      allProductsVisibleAll = true;
    } else {
      document.querySelector(".allProducts .viewAllProduct").innerHTML = "View All Products";
      window.scroll({
        top: 2100, // negative value acceptable 
        left: 0,
        behavior: 'smooth'
      });
      document.querySelector(".allProducts .viewMore").style.display = "none";
      allProductsVisibleAll = false;
    }
  }
}

viewAllProduct();




let a = document.querySelectorAll(".header-bottom>div>div");

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    switch (item.className) {
      case "wellDocumentation":
        item.children[0].src = "./images/wellDocumentationW.png";
        break;
      case "liveSupport":
        item.children[0].src = "./images/liveSupportW.png";
        break;
      case "freeResource":
        item.children[0].src = "./images/freeResourceW.png";
        break;
      case "regularUpdate":
        item.children[0].src = "./images/regularUpdateW.png";
        break;
    }
  })

  item.addEventListener("mouseout", () => {
    switch (item.className) {
      case "wellDocumentation":
        item.children[0].src = "./images/wellDocumentation.png";
        break;
      case "liveSupport":
        item.children[0].src = "./images/liveSupport.png";
        break;
      case "freeResource":
        item.children[0].src = "./images/freeResource.png";
        break;
      case "regularUpdate":
        item.children[0].src = "./images/regularUpdate.png";
        break;
    }
  })

})


let previewBtn = document.querySelectorAll(".featuredProducts .preview button")

previewBtn.forEach((item) => {
  item.onclick = () => {
    hidePreviewFeatured(item.parentElement.nextElementSibling);
    document.querySelector(".previewPopUp").style.display = "block";
    document.querySelector(".popupBG").style.display = "block";

    document.querySelector(".previewPopUp .right h2").innerHTML = item.parentElement.parentElement.children[2].innerHTML;
    document.querySelector(".previewPopUp .left img").src = item.parentElement.nextElementSibling.children[0].src;

  }
})

previewPopUpXBtn = document.querySelector(".previewPopUp span");

previewPopUpXBtn.onclick = () => {
  document.querySelector(".previewPopUp").style.display = "none";
  document.querySelector(".popupBG").style.display = "none";
}



let previewBtnAll = document.querySelectorAll(".allProducts .preview button")

previewBtnAll.forEach((item) => {
  item.onclick = () => {
    hidePreviewFeatured(item.parentElement.nextElementSibling);
    document.querySelector(".previewPopUp").style.display = "block";
    document.querySelector(".popupBG").style.display = "block";

    document.querySelector(".previewPopUp .right h2").innerHTML = item.parentElement.parentElement.children[2].innerHTML;
    document.querySelector(".previewPopUp .left img").src = item.parentElement.nextElementSibling.children[0].src;

  }
})