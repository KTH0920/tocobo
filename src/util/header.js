const img = (path) => `/img/${path}`;

export const headerData = {
  logo: {
    src: img("logo.svg"), // 예: /public/img/logo_tocobo.svg
    alt: "TOCOBO",
    href: "/", // 로고 클릭시 이동
    width: 120,
    height: 28,
  },
  menus: [
    { id: "Hero", label: "Hero", href: "#Hero", type: "section" },
    { id: "Brand", label: "Brand", href: "#Brand", type: "section" },
    { id: "Products", label: "Products", href: "#Products", type: "section" },
    { id: "Reviews", label: "Reviews", href: "#Reviews", type: "section" },
    { id: "Cta", label: "Cta", href: "#Cta", type: "section" },
  ],
};
