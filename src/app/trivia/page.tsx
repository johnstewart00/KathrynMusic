"use client";

import Header from "../components/Header";
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
      <div className="flex justify-center">
        <div className="flex flex-col bg-gray-100 mt-4 md:w-3/4 mx-4 p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl py-4">Welcome to the trivia game!</div>
            <div>Answer all 5 questions correctly to win big</div>
          </div>
          <hr className="border-t-2 border-gray-300 my-6" />
          {started ? (
            activeQuestion === questions.length ? (
              <div className="flex flex-col items-center justify-center">
                <p>Results: {score}/5</p>
                <div
                  className="bg-primary text-white hover:bg-secondary w-min px-4 py-2 mt-4 rounded-md"
                  onClick={restartGame}
                >
                  Start
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="md:mx-20">
                  <div className="flex">
                    <div className="mr-8">Question {activeQuestion + 1}/5 </div>

                    <div>Score: {score}/5</div>
                  </div>
                  <div className="mt-6 mb-8">{questions[activeQuestion]}</div>
                </div>

                <div className="flex md:flex-row flex-col justify-center">
                  {answers[activeQuestion]?.map(
                    (answer: any, index: number) => (
                      <div
                        key={index}
                        className={`${
                          selectedAnswerIndex === index
                            ? "bg-secondary text-white"
                            : "bg-primary text-white hover:bg-secondary"
                        } rounded-md px-4 py-2 md:mx-4 md:my-0 my-2`}
                        onClick={() => answerClicked(answer, index)}
                      >
                        {answer}
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-center">
                  <div
                    className="bg-primary text-white hover:bg-secondary mt-12 px-4 py-2 rounded-md mb-4"
                    onClick={nextQuestion}
                  >
                    {activeQuestion === questions.length - 1
                      ? "Finish"
                      : "Next"}
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="flex justify-center mt-4">
              <div
                className="bg-primary text-white p-4 rounded-lg shadow-md hover:bg-secondary"
                onClick={startGame}
              >
                Start
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
