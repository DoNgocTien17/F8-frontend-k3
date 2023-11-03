document.addEventListener("DOMContentLoaded", function () {
  const itemList = document.querySelector("#item-list");
  const loadingIndicator = document.getElementById("loading-indicator");

  let page = 1;
  const itemsPerPage = 100;
  let isLoading = false;

  function loadData() {
    if (isLoading) return;

    isLoading = true;
    loadingIndicator.style.display = "block";

    fetch(`https://crzpgs-8080.csb.app/items`)
      .then((response) => response.json())
      .then((data) => {
        renderItems(data);
        isLoading = false;
        page++;
        loadingIndicator.style.display = "none";
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        isLoading = false;
        loadingIndicator.style.display = "none";
      });
  }

  function renderItems(items) {
    items.forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.className = "item";
      itemElement.textContent = item.text;
      itemList.appendChild(itemElement);
    });
  }

  function handleScroll() {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      // console.log(
      //   "ScrollTop:",
      //   scrollTop,
      //   "ClientHeight:",
      //   clientHeight,
      //   "ScrollHeight:",
      //   scrollHeight
      // );
      loadData();
    }
  }

  loadData();

  window.addEventListener("scroll", handleScroll);
});
