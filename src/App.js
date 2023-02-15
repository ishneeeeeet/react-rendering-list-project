import "./styles.css";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 }
];

export default function App() {
  const allItems = products.map((item) => (
    <li style={{ color: item.isFruit ? "red" : "green" }} key={item.id}>
      {item.title}
    </li>
  ));
  return <h1>{allItems}</h1>;
}
