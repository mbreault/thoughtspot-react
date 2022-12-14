import logo from "./logo.svg";
import "./App.css";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";
import { Search } from "./Search";

init({
  thoughtSpotHost: "https://my2.thoughtspot.cloud",
  authType: AuthType.None
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello ThoughtSpot Everywhere </h1>
      <p>This is a simple demo embedding ThoughSpot Search in a React App.</p>
      <Search/>
    </div>
  );
}