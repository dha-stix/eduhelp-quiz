import React, { useState } from "react";
import Questions from "./Questions";
import { Link } from "react-router-dom";
import "./Questions.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";

function CSC205() {
  const questions = [
    {
      question: "Is Perl is an interpreted or compiled language?",
      answer: "interpreted",
    },
    {
      question:
        "Most programming languages have semantics and syntax. TRUE / FALSE",
      answer: "True",
    },
    {
      question: "Does programming languages allow for ambiguity? Yes / No",
      answer:
        "No! programming languages have to be absolutely precise. No corner corner :)",
    },
    {
      question: "Perl was designed in the mid what by who?",
      answer: "1980s by Larry Wall",
    },
    {
      question: "Is Perl open-sourced, Yes / No ?",
      answer: "Yes, it is",
    },
    {
      question: "Perl has been called what?",
      answer: "a Swiss-Army chainsaw",
    },
    {
      question: "Perl is also known as what?",
      answer: "The duct-tape of the Internet",
    },
    {
      question: "Perl is a language for who but not for who",
      answer: "hackers not for computer scientists",
    },
    {
      question: "What is Larry Wall's perspective of Perl?",
      answer: "Perl is a language for getting your job done",
    },
    {
      question: "Two other slogans of Perl are:",
      answer:
        "1.  Easy things should be easy, and hard things should be possible.  2.  There is More Than One Way To Do It. (TMTOWTDI)",
    },
    {
      question: "Perl is not free, YES / NO",
      answer: "Yes, it IS FREE",
    },

    {
      question: "What are the two ways of running a Perl script?",
      answer: "At the Command Line & From a Text File",
    },
    {
      question: "When do we run Perl from a text file?",
      answer:
        "For longer scripts (programs), it is easier and advisable to use the text file method",
    },
    {
      question: "What is Perl's extension",
      answer: ".pl",
    },
    {
      question: "It is advisable not to use MS Word for writing perl, because",
      answer:
        "it saves documents in some binary by default, (i.e non plain-text format)",
    },
    {
      question: "We generally start a Perl script with the?",
      answer: " shebang line",
    },
    {
      question: "How does shebang looks like",
      answer:
        "1.)   #!/usr/bin/perl 2.)  #!/usr/local/bin/perl   3.)  #!/usr/local/bin/perl5    4.)    #!/usr/bin/perl-w",
    },
    {
      question: "Write an hello world program with Perl",
      answer: "DIY (Do It Yourself)",
    },
    {
      question: "How do we execute a Perl script?",
      answer:
        "We execute a Perl script at the Command Line, in UNIX it is called a SHELL, in Windows, it is COMMAND PROMPT and in Mac OS X, a Terminal Window",
    },
    {
      question: "What does cd, ls, cd.., pwd, mkdir means?",
      answer:
        "cd means CHANGE DIRECTORY, ls means LIST FILES IN THE DIRECTORY, cd.. means MOVE UP THE PARENT DIRECTORY, pwd means Print the path of the Working Directory",
    },
    {
      question:
        "The most important thing Perl looks out for in a statement is?",
      answer: "semi colon",
    },
    {
      question:
        "All lines of code in Perl must end with one of two things which are :",
      answer: "semi colon or curly braces",
    },
    {
      question: "A line of code is called a ",
      answer: "Statement",
    },
    {
      question: "What expression is represented by a block?",
      answer: "{} curly braces",
    },
    {
      question: "A block can contain?",
      answer: "several statements",
    },
    {
      question: "Any line that begins with the character # is treated as a? ",
      answer: "Comment",
    },
    {
      question: "When can comments come in a line of code",
      answer: "At any point",
    },
    {
      question:
        "When # is seen in a line of code, only codes before the # are treated as comments. TRUE / FALSE",
      answer: "FALSE. Only codes written after the # are treated as comments.",
    },
    {
      question: "Perl makes use of three basic types of quotes, which are:",
      answer: "Single, double and backquotes",
    },
    {
      question: "What is Variable Interpolation?",
      answer: "Go and research! or check your manual.",
    },
    {
      question:
        "What type of quote allows for Variable interpolation and which does not?",
      answer: "Double quotes allows and Single quotes doesn't",
    },
    {
      question: "What does Backquotes does?",
      answer:
        "Run an external program and grabs the output. It is rarely used.",
    },
    {
      question: "What does \n and \t means?",
      answer: "Newline and Tab",
    },
    {
      question: "What is the difference between a String and a Number?",
      answer: "Make research!",
    },
    {
      question: "What is a variable?",
      answer: "A variable is essentially a placeholder for a value.",
    },
    {
      question: "The three most important types of variables are:",
      answer: "Scalar, Array and the Hash",
    },
    {
      question: "What symbol represents the types of variables?",
      answer:
        "Scalar is represented by a dollar sign $, Array is represented by the at sign @ and Hash is represented by percentage %",
    },
    {
      question: "Scalar is used for holding what type of value?",
      answer:
        "It is used for holding a single value. Check your manual for examples",
    },
    {
      question: "Array is used for holding what type of value?",
      answer:
        "Array holds multiple values in series. Check your manual for examples",
    },
    {
      question: "Hash is used for holding what type of values?",
      answer: "Hash holds a pairs of data",
    },
    {
      question:
        "Variables in Perl starts with the character representing the variable then the name of the variable. YES / NO",
      answer: "YES",
    },
    {
      question: "Perl is not case-sensitive. TRUE / FALSE",
      answer: "FALSE",
    },
    {
      question:
        "The first character after the symbol, either ($, @, %) can be a number. TRUE / FALSE",
      answer: "FALSE. It can only be an underscore or letter not a number",
    },
    {
      question:
        "It is advisable to use singular names for scalars and plural names for arrays. TRUE / FALSE",
      answer: "TRUE. Wetin you expect? :)",
    },
    {
      question: "What is the difference between '=' and '=='? ",
      answer:
        "Equal-to is an assignment operator while double equal-to is a comparison operator. Make research to learn more.",
    },
    {
      question: "What operator is used to perform concantenation? ",
      answer: "The . dot / period  operator (fullstop sign)",
    },
    {
      question:
        "Values in an array are indexed or position, starting with 1. TRUE / FALSE",
      answer: "FALSE. Arrays are indexed at 0",
    },
    {
      question: "Do you know how to work with Arrays?",
      answer: "If No, Check Slide 42 of your manual.",
    },
    {
      question: "Perl gets data from three source, which are:",
      answer: "keyboard input, files or the server (system)",
    },
    {
      question: "The if conditional statement has two parts, which are:",
      answer:
        "The condition, which is evaluated and a block of statement to be executed if the condition is true",
    },
    {
      question:
        "The if statement can have an else statement and also numerous___",
      answer:
        "Elsif statement, which is executed if the 'if' statement is false.",
    },
    {
      question: "What is looping?",
      answer: "Repeated actions or recursion. Make research for more knowledge",
    },
    {
      question: "The main types of loop statement in Perl are: ",
      answer:
        "for, foreach and while statement. Check your manual for more information about them",
    },
    {
      question: "What does next, redo and last stands for in Perl?",
      answer: "Check your manual for adequate information.",
    },
  ];

  //STATES & FUNCTIONS
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  const nextBtn = (e) => {
    e.preventDefault();
    if (count < questions.length - 1) {
      setCount(count + 1);
      setShow(false);
    }
  };

  const prevBtn = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
      setShow(false);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz">
        <h4 className="question-number">
          Question {count + 1} of {questions.length}
        </h4>
        <Questions
          question={questions[count].question}
          answer={questions[count].answer}
          show={show}
          setShow={setShow}
        />
        <div className="btns">
          {count !== 0 && (
            <IconButton onClick={prevBtn} id="nextBtn">
              <ArrowBackIcon />
            </IconButton>
          )}
          {count !== questions.length - 1 && (
            <IconButton onClick={nextBtn} id="prevBtn">
              <ArrowForwardIcon />
            </IconButton>
          )}
        </div>
        {count === questions.length - 1 && (
          <Link to="/endpage" id="finish">
            FINISH
          </Link>
        )}
      </div>
    </div>
  );
}

export default CSC205;
