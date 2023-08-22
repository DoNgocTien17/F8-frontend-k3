var dataArray = [
  {
    title: "Tiêu đề bài viết 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/girl.jfif",
  },
  {
    title: "Tiêu đề bài viết 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/girl1.jfif",
  },
  {
    title: "Tiêu đề bài viết 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat, reprehenderit tempore a quas reiciendis harum possimus aliquid. Blanditiis deserunt, recusandae cupiditate libero perferendis, et est harum, pariatur nesciunt eos nisi dicta. Cumque aperiam ipsa itaque obcaecati, iusto dolorem atque quisquam cupiditate eum impedit dolor iure culpa autem necessitatibus explicabo sed consequuntur magnam enim velit praesentium fugit? Quidem sunt illum, excepturi voluptatum, earum vel magni quas laboriosam velit labore, et aperiam libero quasi? Iste qui velit ex alias in minima repellendus, officia quisquam et perferendis, ducimus hic! Vitae harum at maxime temporibus dolorum magnam laboriosam, ratione asperiores, ipsam aliquam itaque quidem doloremque est ullam. Excepturi eius accusantium recusandae tempore accusamus fuga. Quis ipsam molestiae placeat est autem recusandae necessitatibus labore, sunt voluptatem repudiandae saepe nemo quos, omnis repellat. Minima praesentium nihil dolor sequi atque quod perferendis, dolorem porro quasi facilis corrupti laboriosam officiis accusantium provident? Dolores deleniti molestiae atque commodi? consequatur atque placeat perspiciatis necessitatibus culpa error officiis alias fuga provident obcaecati odio eligendi, eaque magni quos maiores veritatis. Impedit, enim!",
    image: "./image/girl2.jfif",
  },
];

function createArticleElement(article) {
  var item = document.createElement("div");
  item.classList.add("item");

  var image = document.createElement("img");
  image.src = article.image;
  item.appendChild(image);

  var content = document.createElement("div");
  content.classList.add("content");

  var title = document.createElement("h2");
  title.textContent = article.title;
  title.addEventListener("click", function () {
    content.classList.toggle("expanded"); // Thêm hoặc xóa lớp 'expanded' để mở rộng/collapse nội dung
  });
  content.appendChild(title);

  var text = document.createElement("p");
  text.textContent = article.content;
  content.appendChild(text);

  item.appendChild(content);

  return item;
}

// Hàm tạo giao diện với dữ liệu
function createInterface(dataArray) {
  var dataList = document.getElementById("list-item");
  dataArray.forEach(function (article) {
    var articleElement = createArticleElement(article);
    dataList.appendChild(articleElement);
  });
}

createInterface(dataArray);
