import Card from "./components/Card/Card";

const products = [
  {
    name: "Футболка",
    price: "1000",
    oldPrice: "2500",
    desc: "е только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в ",
    img: "https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png",
  },
  {
    name: "Кофта",
    price: "5000",
    oldPrice: "6500",
    desc: "е только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в ",
    img: "https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png",
  },
  {
    name: "Куртка",
    price: "7000",
    oldPrice: "8500",
    desc: "е только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в ",
    img: "https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png",
  },
];

const App = () => {
  return (
    <div className="app">
      {products.map((el, index) => (
        <div key={index}>
          <Card el={el} />
          <button>Cart</button>
        </div>
      ))}
    </div>
  );
};
export default App;
