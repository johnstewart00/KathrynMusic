"use client";

import backgroundTriviaImage from "../../../public/TriviaGameBackground.jpeg";
import Header from "../components/Header";
import Image from "next/image";
import Spacer, { SpacerSizes } from "../components/Spacer";
import { useEffect, useState } from "react";
import $ from "jquery";

export default function Trivia() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<string[][]>([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();

  useEffect(() => {
    if (started) {
      setAllQuestions();
    }
  }, [started]);

  const startGame = () => {
    console.log("starting game");
    setStarted(true);
  };

  const restartGame = () => {
    setActiveQuestion(0);
    setQuestions([]);
    setAnswers([]);
    setScore(0);
    setCorrectAnswer([]);
    setAllQuestions();
  };

  async function setAllQuestions() {
    let data: any = await getQuestions();
    for (let i = 0; i < 5; i++) {
      let tempQuestion: any = data.results[i].question;
      tempQuestion = filterString(tempQuestion);
      let possibleAnswers = data.results[i].incorrect_answers;
      let correctAnswer = data.results[i].correct_answer;
      possibleAnswers.push(correctAnswer);
      possibleAnswers = filterAnswers(possibleAnswers);
      possibleAnswers = shuffle(possibleAnswers);
      setCorrectAnswer((prevAnswers): any => [...prevAnswers, correctAnswer]);
      setAnswers((prevAnswers): any => [...prevAnswers, possibleAnswers]);
      setQuestions((prevQuestions): any => [...prevQuestions, tempQuestion]);
    }
  }
  const filterString = (str: string) => {
    str = str.replace(/&#039;/g, "'");
    str = str.replace(/&quot;/g, '"');
    return str;
  };
  const filterAnswers = (answers: any) => {
    for (let i = 0; i < answers.length; i++) {
      answers[i] = filterString(answers[i]);
    }
    return answers;
  };
  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
    updateScore();
    setSelectedAnswerIndex(5);
    setActiveQuestion((prev) => prev + 1);
  };
  const answerClicked = (answer: string, index: number) => {
    setSelectedAnswer(answer);
    setSelectedAnswerIndex(index);
  };

  const updateScore = () => {
    // console.log("the answer you clicked is: ", selectedAnswer);
    // console.log("the correct answer is: ", correctAnswer[activeQuestion]);
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
              <div>
                <p>Welcome to the trivia game</p>
              </div>
              <div>
                <p>Answer all 5 questions correctly to win big</p>
              </div>
            </div>
            {started ? (
              activeQuestion === questions.length ? (
                <div>
                  <p>Results: {score}/5</p>
                  <button onClick={restartGame}>Start</button>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Spacer size={SpacerSizes.small} />
                    <div>
                      <div style={{ display: "flex" }}>
                        <p>Question {activeQuestion + 1}/5 </p>
                        <Spacer size={SpacerSizes.small} />
                        <p>Score: {score}/5</p>
                      </div>
                      <h1>{questions[activeQuestion]}</h1>
                    </div>
                  </div>
                  <Spacer size={SpacerSizes.small} />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {answers[activeQuestion]?.map(
                      (answer: any, index: number) => (
                        <div>
                          <button onClick={() => answerClicked(answer, index)}>
                            {answer}
                          </button>
                        </div>
                      )
                    )}
                  </div>
                  <button onClick={nextQuestion}>
                    {activeQuestion === questions.length - 1
                      ? "Finish"
                      : "Next"}
                  </button>
                </div>
              )
            ) : (
              <button onClick={startGame}>Start</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
