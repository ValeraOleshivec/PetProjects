import { useState } from "react";

const messages = ["Lear React ", "Apply for jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step === 1) {
      alert("И так на первом шаге");
      return;
    }
    setStep((cur) => cur - 1);
  };
  const handleNext = () => {
    if (step === 3) {
      alert("Ты добился всего в этой жизни");
      return;
    }
    setStep((cur) => cur + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
