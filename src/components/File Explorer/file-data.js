export const fileSystem = [
  {
    name: "src",
    isFolder: true,
    children: [
      {
        name: "components",
        isFolder: true,
        children: [
          { name: "Navbar.jsx", isFolder: false, children: [] },
          { name: "Sidebar.jsx", isFolder: false, children: [] },
          { name: "Button.jsx", isFolder: false, children: [] },
        ],
      },
      {
        name: "pages",
        isFolder: true,
        children: [
          { name: "Home.jsx", isFolder: false, children: [] },
          { name: "About.jsx", isFolder: false, children: [] },
        ],
      },
      {
        name: "App.js",
        isFolder: false,
        children: [],
      },
      {
        name: "index.js",
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    name: "public",
    isFolder: true,
    children: [
      { name: "index.html", isFolder: false, children: [] },
      { name: "favicon.ico", isFolder: false, children: [] },
    ],
  },
  {
    name: "package.json",
    isFolder: false,
    children: [],
  },
  {
    name: ".gitignore",
    isFolder: false,
    children: [],
  },
  {
    name: "README.md",
    isFolder: false,
    children: [],
  },
];
