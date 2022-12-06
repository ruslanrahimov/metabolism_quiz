import { useState } from "react";

import "./App.css";
import "./assets/fonts.css";
import firstCardImage from "./assets/body1_15a3_9.png";
import secondCardImage from "./assets/body2_5160_10.png";
import thirdCardImage from "./assets/body3_fa53_11.png";
import fourthCardImage from "./assets/body4_b846_12.png";
import footerEdge from "./assets/footer-edge_b3e5_16.png";
// import chickenMeatIcon from "./assets/chicken-icon-1chicke_6589_15.png";
// import porkMeatIcon from "./assets/pork-icon-01-1pork-i_0231_17.png";
// import beefMeatIcon from "./assets/beef-icon-01_ff53_18.png";
// import fishMeatIcon from "./assets/fish-icon-01_f49d_19.png";
// import baconMeatIcon from "./assets/bacon-icon-01_c114_20.png";
import Logo from "./components/Logo/Logo";
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import GenderButton from "./components/Button/GenderButton";
import Progressbar from "./components/Progressbar/Progressbar";
// import QuizCheckBox from "./components/QuizCheckBox/QuizCheckBox";
import Input from "./components/Input/Input";
import QuizHeader from "./components/QuizHeader/QuizHeader";

function App() {
  const [steps, setStep] = useState(11);
  const [currentStep, setCurrentStep] = useState(0);
  const [checkList, setCheckList] = useState({
    Chicken: "",
    Pork: "",
    Beef: "",
    Fish: "",
    Seafood: "",
    Bacon: "",
  });

  function onStepUpdate(currentStep, steps) {
    currentStep >= steps
      ? setCurrentStep(steps)
      : setCurrentStep(currentStep + 1);
  }

  function onCheckBoxUpdate(item) {
    setCheckList((prevState) => {
      return {
        ...prevState,
        [item]: prevState[item] === "checked" ? "" : "checked",
      };
    });
  }

  return (
    <div className="App">
      {/* Step 1 */}
      <div className={currentStep === 0 ? "main" : "main hidden"}>
        <div className="section_headline flex justify-center py-4">
          <Logo size="big" />
        </div>
        <div className="section_content">
          <div className="header-main-wrapper w-4/5 mx-auto mb-4">
            <h1 className="header-main ff-raleway font-extrabold text-2xl text-center">
              New Keto Routine Speeds Your Metabolism to Ketosis. Take our quick
              1 minute quiz to see if it would work for you?
            </h1>
          </div>
          <div className="main-box-wrapper mt-5 mx-auto">
            <Box image={firstCardImage} />
            <Box image={secondCardImage} />
            <Box image={thirdCardImage} />
            <Box image={fourthCardImage} />
          </div>
          <Button
            onStepUpdate={onStepUpdate}
            currentStep={currentStep}
            steps={steps}
            type="main"
            label="take the quiz now"
          />
        </div>
      </div>
      {/* Step 2 */}
      <div className={currentStep === 1 ? "quiz-sex" : "quiz-sex hidden"}>
        <div className="section_content">
          <h1 className="quiz-sex-header text-center mt-10 mb-11">
            Is This New <span className="font-extrabold">Speed Keto</span>
            <br />
            <span style={{ fontSize: "50px" }}>Routine For You?</span>
          </h1>
          <div className="quiz-box-wrapper mt-5">
            <div className="gender-box mx-auto flex justify-center w-11/12">
              <GenderButton
                step={currentStep}
                steps={steps}
                onStepUpdate={onStepUpdate}
                gender="male"
              />
              <GenderButton
                step={currentStep}
                steps={steps}
                onStepUpdate={onStepUpdate}
                gender="female"
              />
            </div>
            <Progressbar currentStep={currentStep} steps={steps} />
          </div>
        </div>
      </div>
      {/* Step 3 */}
      {/* <div className={currentStep === 2 ? "quiz-meat" : "quiz-meat hidden"}>
        <div className="section_content">
          <div className="quiz-header-wrapper">
            <h1 className="quiz-question-header">
              PLEASE SELECT WHICH MEAT YOU <br /> WOULD LIKE TO BE INCLUDED{" "}
            </h1>
          </div>
          <div className="quiz-box-wrapper">
            <div className="quiz-box-inner flex">
              <div className="quiz-column">
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Chicken"
                  icon={chickenMeatIcon}
                />
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Pork"
                  icon={porkMeatIcon}
                />
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Beef"
                  icon={beefMeatIcon}
                />
              </div>
              <div className="quiz-column">
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Fish"
                  icon={fishMeatIcon}
                />
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Seafood"
                  icon={fishMeatIcon}
                />
                <QuizCheckBox
                  onCheckBoxUpdate={onCheckBoxUpdate}
                  checkList={checkList}
                  item="Bacon"
                  icon={baconMeatIcon}
                />
              </div>
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
        <Button
          onStepUpdate={onStepUpdate}
          currentStep={currentStep}
          steps={steps}
          type="next"
          label="next"
        />
      </div> */}
      <div
        className={
          currentStep === 2
            ? "quiz-measurment-age"
            : "quiz-measurment-age hidden"
        }
      >
        <div className="section_content">
          <QuizHeader text="YOUR AGE" />
          <div className="quiz-box-wrapper">
            <div className="measurment-wrapper mx-auto">
              <Input name="age" type="text" placeholder="age" />
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
        <Button
          onStepUpdate={onStepUpdate}
          currentStep={currentStep}
          steps={steps}
          type="next"
          label="next"
        />
      </div>
      {/* Step 4 */}
      <div
        className={
          currentStep === 3
            ? "quiz-measurment-height"
            : "quiz-measurment-height hidden"
        }
      >
        <div className="section_content">
          <QuizHeader text="YOUR HEIGH" />
          <div className="quiz-box-wrapper">
            <div className="measurment-wrapper mx-auto">
              <Input
                name="height"
                type="number"
                placeholder="Height (Centimeters)"
              />
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
        <Button
          onStepUpdate={onStepUpdate}
          currentStep={currentStep}
          steps={steps}
          type="next"
          label="next"
        />
      </div>
      {/* Step 5 */}
      <div
        className={
          currentStep === 4
            ? "quiz-measurment-current_weight"
            : "quiz-measurment-current_weight hidden"
        }
      >
        <div className="section_content">
          <QuizHeader text="YOUR CURRENT WEIGHT" />
          <div className="quiz-box-wrapper">
            <div className="measurment-wrapper mx-auto">
              <Input
                name="weight"
                type="number"
                placeholder="Current Weight (Kilograms)"
              />
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
        <Button
          onStepUpdate={onStepUpdate}
          currentStep={currentStep}
          steps={steps}
          type="next"
          label="next"
        />
      </div>
      {/* Step 6 */}
      <div
        className={
          currentStep === 5
            ? "quiz-measurment-target_weight"
            : "quiz-measurment-target_weight hidden"
        }
      >
        <div className="section_content">
          <QuizHeader text="YOUR TARGET WEIGHT" />
          <div className="quiz-box-wrapper">
            <div className="measurment-wrapper mx-auto">
              <Input
                name="target_weight"
                type="number"
                placeholder="Target Weight (Kilograms)"
              />
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
        <Button
          onStepUpdate={onStepUpdate}
          currentStep={currentStep}
          steps={steps}
          type="next"
          label="next"
        />
      </div>
      {/* Step 7 */}
      <div
        className={currentStep === 6 ? "quiz-activity" : "quiz-activity hidden"}
      >
        <div className="section_content">
          <QuizHeader text="PHYSICAL ACTIVITY" />
          <div className="quiz-box-wrapper">
            <div className="activity-wrapper mx-auto w-4/5">
              <Button
                onStepUpdate={onStepUpdate}
                currentStep={currentStep}
                steps={steps}
                type="answer"
                label="Almost no physical activity"
              />
              <Button
                onStepUpdate={onStepUpdate}
                currentStep={currentStep}
                steps={steps}
                type="answer"
                label="I OFTEN GO FOR A WALK"
              />
              <Button
                onStepUpdate={onStepUpdate}
                currentStep={currentStep}
                steps={steps}
                type="answer"
                label="I EXERCISE 1-2 A WEEK"
              />
              <Button
                onStepUpdate={onStepUpdate}
                currentStep={currentStep}
                steps={steps}
                type="answer"
                label="I EXERCISE 3-5 TIMES A WEEK"
              />
              <Button
                onStepUpdate={onStepUpdate}
                currentStep={currentStep}
                steps={steps}
                type="answer"
                label="I EXERCISE 5-7 TIMES A WEEK"
              />
            </div>
          </div>
          <Progressbar currentStep={currentStep} steps={steps} />
        </div>
      </div>
      <div
        className="divider-footer"
        style={{ backgroundImage: `url(${footerEdge})` }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
