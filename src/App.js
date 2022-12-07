import { useState, useEffect } from "react";
import "./App.css";
import "./assets/fonts.css";
import * as Constants from "./constants/constants";
import Logo from "./components/Logo/Logo";
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import GenderButton from "./components/Button/GenderButton";
import Progressbar from "./components/Progressbar/Progressbar";
import Input from "./components/Input/Input";
import QuizHeader from "./components/QuizHeader/QuizHeader";
import Postloader from "./components/Postloader/Postloader";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [prelander, setPrelander] = useState(false);

  const onStepUpdate = () => {
    currentStep > Constants.steps
      ? setCurrentStep(Constants.steps)
      : setCurrentStep((step) => step + 1);
  };

  if (currentStep > Constants.steps) {
    setLoading(true);
  }

  return (
    <div className="App">
      <div className="steps_wrapper">
        {/* Step 1 */}
        <div className={currentStep === 0 ? "main" : "main hidden"}>
          <div className="section_headline flex justify-center py-4">
            <Logo size="big" />
          </div>
          <div className="section_content">
            <div className="header-main-wrapper w-4/5 mx-auto mb-4">
              <h1 className="header-main ff-raleway font-extrabold text-2xl text-center">
                New Keto Routine Speeds Your Metabolism to Ketosis. Take our
                quick 1 minute quiz to see if it would work for you?
              </h1>
            </div>
            <div className="main-box-wrapper mt-5 mx-auto">
              <Box image={Constants.firstCardImage} />
              <Box image={Constants.secondCardImage} />
              <Box image={Constants.thirdCardImage} />
              <Box image={Constants.fourthCardImage} />
            </div>
            <Button
              onStepUpdate={onStepUpdate}
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
                <GenderButton onStepUpdate={onStepUpdate} gender="male" />
                <GenderButton onStepUpdate={onStepUpdate} gender="female" />
              </div>
              <Progressbar currentStep={currentStep} steps={Constants.steps} />
            </div>
          </div>
        </div>
        {/* Step 3 */}
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
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
          <Button onStepUpdate={onStepUpdate} type="next" label="next" />
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
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
          <Button onStepUpdate={onStepUpdate} type="next" label="next" />
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
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
          <Button onStepUpdate={onStepUpdate} type="next" label="next" />
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
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
          <Button onStepUpdate={onStepUpdate} type="next" label="next" />
        </div>
        {/* Step 7 */}
        <div
          className={
            currentStep === 6 ? "quiz-activity" : "quiz-activity hidden"
          }
        >
          <div className="section_content">
            <QuizHeader text="PHYSICAL ACTIVITY" />
            <div className="quiz-box-wrapper">
              <div className="activity-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Almost no physical activity"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I OFTEN GO FOR A WALK"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I EXERCISE 1-2 A WEEK"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I EXERCISE 3-5 TIMES A WEEK"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I EXERCISE 5-7 TIMES A WEEK"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        {/* Step 8 */}
        <div className={currentStep === 7 ? "quiz-true" : "quiz-true hidden"}>
          <div className="section_content">
            <QuizHeader text="WHICH OF THE FOLLOWING IS TRUE FOR YOU " />
            <div className="quiz-box-wrapper">
              <div className="true-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I DO NOT GET ENOUGH SLEEP"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I EAT LATE AT NIGHT"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I CONSUME A LOT OF SALT"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I CANNOT GIVE UP EATING SWEETS"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I LOVE SOFT DRINKS"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        {/* Step 9 */}
        <div className={currentStep === 8 ? "quiz-sleep" : "quiz-sleep hidden"}>
          <div className="section_content">
            <QuizHeader text="How long do you usually sleep?" />
            <div className="quiz-box-wrapper">
              <div className="sleep-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Minimal sleep (less than 5 hours)"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I don't sleep much (5-6 hours)"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I sleep long and well (7-8 hours)"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I sleep a lot (more than 8 hours)"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="My sleep is unstable in time"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        {/* Step 10 */}
        <div className={currentStep === 9 ? "quiz-water" : "quiz-water hidden"}>
          <div className="section_content">
            <QuizHeader text="How much water do you drink every day?" />
            <div className="quiz-box-wrapper">
              <div className="water-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="I only drink coffee, tea or soda"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="About 2 cups of water"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="2 to 6 cups of water"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="More than 6 cups of water"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Drinking water as needed"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        {/* Step 11 */}
        <div
          className={
            currentStep === 10
              ? "quiz-desired_weight"
              : "quiz-desired_weight hidden"
          }
        >
          <div className="section_content">
            <QuizHeader text="When was the last time you were at your desired weight?" />
            <div className="quiz-box-wrapper">
              <div className="desired_weight-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Less than a year ago"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="1-2 years ago"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="3-5 years ago"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="More than 5 years ago"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Never"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        {/* Step 12 */}
        <div className={currentStep === 11 ? "quiz-diet" : "quiz-diet hidden"}>
          <div className="section_content">
            <QuizHeader text="Have you ever tried a diet or weight loss product before?" />
            <div className="quiz-box-wrapper">
              <div className="diet-wrapper mx-auto w-4/5">
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Yes, I lost weight, but the weight came back"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Yes, but no results"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="Yes, but I would like to lose more weight"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="No, but want to try"
                />
                <Button
                  onStepUpdate={onStepUpdate}
                  type="answer"
                  label="No, but I am interested"
                />
              </div>
            </div>
            <Progressbar currentStep={currentStep} steps={Constants.steps} />
          </div>
        </div>
        <div className="divider-footer"></div>
      </div>
      <Footer />
      <Postloader loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
