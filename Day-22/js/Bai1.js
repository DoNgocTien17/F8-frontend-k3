function Array(flatArray) {
  const nested = {};
  const result = [];

  flatArray.forEach((item) => {
    if (!nested[item.id]) {
      nested[item.id] = { ...item, children: [] };
    } else {
      nested[item.id] = { ...nested[item.id], ...item };
    }

    if (item.parent === 0) {
      result.push(nested[item.id]);
    } else {
      if (!nested[item.parent]) {
        nested[item.parent] = { children: [] };
      }
      nested[item.parent].children.push(nested[item.id]);
    }
  });

  return result;
}

const flatArray = [
  // Danh sách dữ liệu của bạn
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

const nestedArray = Array(flatArray);

function printArray(categories, level = 0) {
  categories.forEach((category) => {
    console.log("  ".repeat(level) + `- ${category.name}`);
    if (category.children) {
      printArray(category.children, level + 1);
    }
  });
}

printArray(nestedArray);
