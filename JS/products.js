// Product Database
const products = [
  {
    id: 1,
    name: "ម្សៅស្លឹកម្រុំ",
    image: "../image/1.JPG",
    price: 5,
    rating: 5,
    reviews: 125,
    description:
      "ម្សៅគ្រាប់ម្រុំធម្មជាតិ សម្បូរ​ទៅដោយវីតាមីន ល្អបំផុតសម្រាប់សុខភាព មិនមានសារធាតុរក្សាទុក",
    sizes: ["25 ML", "15 ML"],
    stock: "In Stock",
  },
  {
    id: 2,
    name: "ប្រេងកូឡាម្រុំ",
    image: "../image/2.JPG",
    price: 8,
    rating: 4,
    reviews: 98,
    description:
      "ប្រេងកូឡាម្រុំសុទ្ធ ដែលមានប្រយោជន៍ច្រើនសម្រាប់ស្បែក និងសុខភាព គ្មានគ្រឿងលាយផ្សេងទៀត",
    sizes: ["100 ML", "50 ML", "30 ML"],
    stock: "In Stock",
  },
  {
    id: 3,
    name: "ប្រេងម្រុំ ឯកសារ",
    image: "../image/3.JPG",
    price: 12,
    rating: 5,
    reviews: 156,
    description:
      "ប្រេងម្រុំគុណភាពខ្ពស់ដែលកម្រម និងឯកសារដ៏ល្អ សមស្របសម្រាប់ការលេបនិងលាបលើស្បែក",
    sizes: ["200 ML", "100 ML"],
    stock: "In Stock",
  },
  {
    id: 4,
    name: "ថ្នាំគ្រាប់ម្រុំ",
    image: "../image/4.JPG",
    price: 7,
    rating: 4,
    reviews: 87,
    description:
      "ថ្នាំគ្រាប់ម្រុំដែលផលិតមកពីបន្លាគ្រាប់ម្រុំសុទ្ធ មានប្រយោជន៍ច្រើនសម្រាប់ភាពសម្បូរ",
    sizes: ["60 Capsules", "30 Capsules"],
    stock: "In Stock",
  },
  {
    id: 5,
    name: "ប្រេងម្រុំ (កម្រិតពិសេស)",
    image: "../image/5.JPG",
    price: 15,
    rating: 5,
    reviews: 203,
    description:
      "ប្រេងម្រុំកម្រិតពិសេស ដែលផលិតដោយវិធីសាស្ត្របុរាណ សមស្របសម្រាប់សុខភាពល្អឥត្ម៉ាន",
    sizes: ["500 ML", "250 ML"],
    stock: "In Stock",
  },
  {
    id: 6,
    name: "គ្រែមស្លឹកម្រុំ",
    image: "../image/6.JPG",
    price: 10,
    rating: 4,
    reviews: 112,
    description: ` ក្រែមលាបមាត់ព្យាបាលមាត់ស្ងូត​ ធ្វេីអោយមានសំណេីមព្យាបាលការប្រេះមាត់​ យេីងមានបីពណ៌​ 
ពណ៌ស​ ពណ៌កុលាបពណ៌ទឹកក្រូចស្រាល `,
    sizes: ["50g", "25g"],
    stock: "In Stock",
  },
  {
    id: 7,
    name: "សាប៊ូស្លឹកម្រុំ",
    image: "../image/7.JPG",
    price: 4,
    rating: 5,
    reviews: 245,
    description:
      "សាប៊ូស្លឹកម្រុំដែលធម្មជាតិ ព្រាងនឹងចូលក្នុងស្បែក ឈានចូលក្នុងលក្ខណៈពិសេស",
    sizes: ["Bar"],
    stock: "In Stock",
  },
  {
    id: 8,
    name: "ឬស័ក្តម្រុំ (បង្ហូរ)",
    image: "../image/8.JPG",
    price: 6,
    rating: 4,
    reviews: 134,
    description:
      "ឬស័ក្តម្រុំដែលបង្ហូរ សម្រាប់ការលេបប្រចាំថ្ងៃ ដែលសម្បូរទៅដោយអង្គធាតុចិញ្ចឹម",
    sizes: ["250 ML", "150 ML"],
    stock: "In Stock",
  },
];

// Get product by ID
function getProductById(id) {
  return products.find((product) => product.id === parseInt(id));
}

// Get all products
function getAllProducts() {
  return products;
}
