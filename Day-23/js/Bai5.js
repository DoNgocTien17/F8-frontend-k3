var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
];

// Hàm đệ quy để tạo các tùy chọn và thẻ select
function buildOptions(categories, indent = "") {
  let optionsHTML = "";

  for (const category of categories) {
    const optionValue = category.id;
    const optionText = indent + category.name;
    optionsHTML += `<option value="${optionValue}">${optionText}</option>`;

    if (category.children) {
      optionsHTML += buildOptions(
        category.children,
        indent + "&nbsp;&nbsp;&nbsp;"
      );
    }
  }

  return optionsHTML;
}

// Tạo thẻ select và các tùy chọn tương ứng
const selectHTML = `<select>${buildOptions(categories)}</select>`;

document.write(selectHTML);
