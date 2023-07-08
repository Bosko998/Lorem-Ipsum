import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    const max = e.target.max;
    const min = e.target.min;
    if (value === max) {
      setCount(max);
    } else if (value === min) {
      setCount(min);
    } else {
      setCount(value);
    }
    if (e.key === "Backspace") {
      setCount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = data.slice(0, count);
    setText(newText);
  };

  return (
    <section>
      <h4>Lorem ipsum auto generator</h4>
      <form>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          autoComplete="off"
          onKeyDown={handleChange}
          value={count}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Generate
        </button>
      </form>
      {text.map((paragraph, index) => (
        <article className="lorem-text" key={index}>
          <p className="heading-paragraph">Text {index + 1}</p>
          <p>{paragraph}</p>
        </article>
      ))}
    </section>
  );
}

export default App;
