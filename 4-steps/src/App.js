import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Button({ textColor, bgColor, onClick, text, emoji }) {
  return (
    <button onClick={onClick} style={{ background: bgColor, color: textColor }}>
      <span>{emoji}</span>
      {text}
    </button>
  );
}
function App() {
  // const step = 23;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }
  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
              text={"Previous"}
              emoji={"👈"}
            />
            <Button
              textColor={"#fff"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
              text={"Next"}
              emoji={"👉"}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
export default App;
