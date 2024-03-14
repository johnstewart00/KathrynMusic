"use client";

import { MuiBox } from "../components/Box";
import backgroundTriviaImage from "../../../public/TriviaGameBackground.jpeg";
import Header from "../components/Header";
import Image from "next/image";
import { Paragraph } from "../components/Paragraph";
import { Color } from "../styles/colors";
import Spacer, { SpacerSizes } from "../components/Spacer";
import { MuiButton } from "../components/Button";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import $ from "jquery";

export default function Trivia() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  useEffect(() => {
    if (started) {
      setAllQuestions();
    }
  }, [started]);

  const startGame = () => {
    console.log("starting game");
    setStarted(true);
  };

  async function setAllQuestions() {
    let data: any = await getQuestions();
    console.log("data is: ", data);
    for (let i = 0; i < 5; i++) {
      let tempQuestion: any = data.results[i].question;
      tempQuestion = tempQuestion.replace(/&#039;/g, "'");
      tempQuestion = tempQuestion.replace(/&quot;/g, '"');
      let possibleAnswers = data.results[i].incorrect_answers;
      let correctAnswer = data.results[i].correct_answer;
      possibleAnswers.push(correctAnswer);
      setCorrectAnswer((prevAnswers): any => [...prevAnswers, correctAnswer]);
      setAnswers((prevAnswers): any => [...prevAnswers, possibleAnswers]);
      setQuestions((prevQuestions): any => [...prevQuestions, tempQuestion]);
    }
  }
  const getQuestions = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: "GET",
        url: `https://opentdb.com/api.php?amount=5`,
        success: function (data) {
          resolve(data);
        },
        error: function (errorThrown) {
          reject(errorThrown);
        },
      });
    });
  };
  const nextQuestion = () => {
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setStarted(false);
    }
  };

  const answerClicked = (selectedAnswer: string) => {
    console.log("the answer you clicked is: ", selectedAnswer);
    console.log("the correct answer is: ", correctAnswer[activeQuestion]);
    if (selectedAnswer === correctAnswer[activeQuestion])
      setScore((score) => score + 1);
  };
  return (
    <div>
      {/* Image */}
      <div style={{ position: "absolute", width: "100%", height: "100vh" }}>
        <Image
          src={backgroundTriviaImage}
          alt="backgroundTriviaImage"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <Header />
          <Spacer size={SpacerSizes.small} />
          <div
            style={{
              display: "grid",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MuiBox color={Color.turquoiseGreen} width="300px">
                <Paragraph>Welcome to the trivia game</Paragraph>
              </MuiBox>
              <MuiBox color={Color.turquoiseGreen} width="300px">
                <Paragraph>
                  Answer all 5 questions correctly to win big
                </Paragraph>
              </MuiBox>
            </div>
            {started ? (
              <div>
                <Spacer size={SpacerSizes.small} />
                <MuiBox>
                  <div style={{ display: "flex" }}>
                    <Paragraph>Question {activeQuestion + 1}/5 </Paragraph>
                    <Spacer size={SpacerSizes.small} />
                    <Paragraph>Score: {score}/5</Paragraph>
                  </div>
                  <h3>{questions[activeQuestion]}</h3>
                  {answers[activeQuestion]?.map((answer: any) => (
                    <div>
                      <MuiButton
                        background_color={Color.white}
                        onClick={() => answerClicked(answer)}
                      >
                        {answer}
                      </MuiButton>
                    </div>
                  ))}
                </MuiBox>
                <MuiButton onClick={nextQuestion}>
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </MuiButton>
              </div>
            ) : (
              <MuiButton onClick={startGame}>Start</MuiButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
