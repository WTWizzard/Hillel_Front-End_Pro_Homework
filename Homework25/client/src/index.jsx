import { card } from "./utils";
import React from "react";
import ReactDOM from "react-dom";

const url = "http://localhost:3000";

const getUsers = (url) => fetch(url + "/get");

const app = document.getElementById("app");

function MainComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getUsers(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        }
      );
  }, []);

  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </>
  );
}

data.then((users) => {
  users.map((user) => {
    app.append(card(user));
  });
});

ReactDOM.render(<MainComponent />, app);
