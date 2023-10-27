const products = [
  {
    id: 1,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 10,
    image: "img/img1.jpg",
    rating: 3.8,
  },
  {
    id: 2,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 20,
    image: "img/img2.jpg",
    rating: 3.8,
  },
  {
    id: 3,
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 144,
    image: "img/img3.jpg",
    rating: 3.8,
  },
  {
    id: 4,
    name: "    WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard",
    price: 599,
    image: "img/img4.jpg",
    rating: 3.8,
  },
  {
    id: 5,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 999.99,
    image: "img/img5.jpg",
    rating: 3.8,
  },
  {
    id: 6,
    name: " Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    price: 69,
    image: "img/img6.jpg",
    rating: 3.8,
  },
];

function renderProducts() {
  const productsInfo = document.querySelector(".products-info");

  showSkeletonScreen(productsInfo);

  const delay = Math.floor(Math.random() * 1000) + 1000;
  const delayPromise = new Promise((resolve) => setTimeout(resolve, delay));

  delayPromise.then(() => {
    hideSkeletonScreen(productsInfo);

    products.forEach((product) => {
      const item = document.createElement("div");
      item.classList.add("item");

      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image");
      item.appendChild(imageWrapper);

      const image = document.createElement("img");
      image.src = product.image;
      imageWrapper.appendChild(image);

      const name = document.createElement("div");
      name.classList.add("name");
      name.textContent = product.name;
      item.appendChild(name);

      const text2 = document.createElement("div");
      text2.classList.add("text-2");
      item.appendChild(text2);

      const electronics = document.createElement("div");
      electronics.classList.add("electronics");
      electronics.textContent = "electronics";
      text2.appendChild(electronics);

      const star = document.createElement("div");
      star.classList.add("star");
      text2.appendChild(star);

      const starRating = document.createElement("span");
      starRating.classList.add("star-rating");
      starRating.textContent = product.rating;
      star.appendChild(starRating);

      const price = document.createElement("div");
      price.classList.add("price");
      price.textContent = `$${product.price}`;
      item.appendChild(price);

      const btn = document.createElement("div");
      btn.classList.add("btn");
      item.appendChild(btn);

      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("add");
      addToCartButton.textContent = "Add to cart";
      btn.appendChild(addToCartButton);

      const buyNowButton = document.createElement("button");
      buyNowButton.classList.add("buy");
      buyNowButton.textContent = "Buy now";
      btn.appendChild(buyNowButton);

      productsInfo.appendChild(item);
    });
  });
}

function showSkeletonScreen(container) {
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const skeletonItem = document.createElement("div");
    skeletonItem.classList.add("skeleton-item");

    const skeletonImage = document.createElement("div");
    skeletonImage.classList.add("skeleton-image");
    skeletonItem.appendChild(skeletonImage);

    const skeletonName = document.createElement("div");
    skeletonName.classList.add("skeleton-name");
    skeletonItem.appendChild(skeletonName);

    const skeletonText2 = document.createElement("div");
    skeletonText2.classList.add("skeleton-text2");
    skeletonItem.appendChild(skeletonText2);

    const skeletonElectronics = document.createElement("div");
    skeletonElectronics.classList.add("skeleton-electronics");
    skeletonText2.appendChild(skeletonElectronics);

    const skeletonStar = document.createElement("div");
    skeletonStar.classList.add("skeleton-star");
    skeletonText2.appendChild(skeletonStar);

    const skeletonPrice = document.createElement("div");
    skeletonPrice.classList.add("skeleton-price");
    skeletonItem.appendChild(skeletonPrice);

    const skeletonBtn = document.createElement("div");
    skeletonBtn.classList.add("skeleton-btn");
    skeletonItem.appendChild(skeletonBtn);

    const skeletonAddToCartButton = document.createElement("div");
    skeletonAddToCartButton.classList.add("skeleton-add");
    skeletonBtn.appendChild(skeletonAddToCartButton);

    const skeletonBuyNowButton = document.createElement("div");
    skeletonBuyNowButton.classList.add("skeleton-buy");
    skeletonBtn.appendChild(skeletonBuyNowButton);

    container.appendChild(skeletonItem);
  }
}

function hideSkeletonScreen(container) {
  container.innerHTML = "";
}

renderProducts();
