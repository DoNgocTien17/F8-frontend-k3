var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  const sortedCustomers = customers.slice().sort((a, b) => a.age - b.age);

  const result = sortedCustomers.map((customer) => {
    const nameParts = customer.name.split(" ");
    const shortName =
      nameParts[0] + " " + nameParts[nameParts.length - 1].charAt(0);

    return { ...customer, shortName };
  });

  return result;
}

var result = createCustomers(customers);
console.log(result);
