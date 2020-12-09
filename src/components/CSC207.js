import React, { useState } from "react";
import Questions from "./Questions";
import { Link } from "react-router-dom";
import "./Questions.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";

function CSC207() {
  const questions = [
    {
      question: "What is an Internet?",
      answer:
        "An internet is essentially a global network of computing resources",
    },
    {
      question: "What does WWW stands for?",
      answer: "World Wide Web",
    },
    {
      question: "Who invented the Web?",
      answer: "Tim Berners-Lee",
    },
    {
      question: "HTTP stands for what?",
      answer: "Hyper Text Transfer Protocol",
    },
    {
      question: "What is HTTP?",
      answer:
        "HTTP is the protocol used to transfer hypertext documents that makes the World Wide Web possible",
    },
    {
      question: "What does a URL stands for?",
      answer: "Uniform Resource Locator",
    },
    {
      question: "What is a URL?",
      answer:
        "It is used to specify addresses on the World Wide Web. It is the fundamental networ identification for any resource connected the web",
    },
    {
      question:
        "In 'https://www.dha-stix.com/portfolio' which of them represents the protocol?",
      answer: "https",
    },
    {
      question:
        "In 'https://www.dha-stix.com/portfolio' which of them represents the hostname?",
      answer: "www.dha-stix.com",
    },
    {
      question:
        "In 'https://www.dha-stix.com/portfolio' which of them represents other information?",
      answer: "portfolio",
    },
    {
      question:
        "In 'https://dha-stix.com/portfolio' which of them represents the scheme?",
      answer: "https. The Scheme tells the web servers which protocol to use",
    },
    {
      question:
        "In 'https://dha-stix.com/portfolio' which of them represents the sub-domain?",
      answer: "dha-stix",
    },
    {
      question:
        "In 'https://www.dha-stix.com/portfolio' which of them represents the top-level domain?",
      answer: ".com",
    },
    {
      question:
        "In 'https://www.dha-stix.com/portfolio' which of them represents the sub directory?",
      answer: "portfolio",
    },
    {
      question: "What is Website?",
      answer:
        "A website is a collection of related webpages that displays information under a single domain name",
    },
    {
      question: "What is a Web Server",
      answer:
        "A web server is a server software, or hardware dedicated to running this software, that can satisfy client requests on the World Wide Web",
    },
    {
      question:
        "Every web server that is connected to the Internet is given a unique address made up of a series of numbers, called",
      answer: "IP Address",
    },
    {
      question: "What is IP?",
      answer: "Internet Protocol",
    },
    {
      question:
        "An IP address made up of how many series of number. THREE / FOUR / FIVE?",
      answer: "FOUR",
    },
    {
      question: "The series of numbers in an IP address are seperated by what?",
      answer: "A Period / Full Stop / Dot",
    },
    {
      question: "The numbers in an IP address consists ranges between",
      answer: "0 and 256",
    },
    {
      question: "What are Web Browsers?",
      answer: "Make your research! ",
    },
    {
      question: "What does SMTP stands for?",
      answer: "Simple Mail Transfer Protocol",
    },
    {
      question: "What is the use of SMTP server?",
      answer:
        "It takes care of delivering emails from one server to another server. When you send an email address, it is delivered to its recipient by a SMTP Server ",
    },
    {
      question: "What does ISP stands for?",
      answer: "Internet Service Provider",
    },
    {
      question: "Who are the ISPs?",
      answer:
        "They are the companies who provide you service in terms of internet connection to connect to the internet.",
    },
    {
      question: "HTML stands for what?",
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What is HTML?",
      answer:
        "This is the language in which we write web pages for any website",
    },
    {
      question: "What is a hyperlink?",
      answer:
        "A hyperlink is a selectable element in an electronic document that serves as an access point to other electronic resources.",
    },
    {
      question: "What is a DNS?",
      answer: "Domain Name System",
    },
    {
      question: "What is a Domain Name System?",
      answer:
        "Domain Name System is in charge of matching domain names to their respective IP addresses.",
    },
    {
      question: "What is W3C?",
      answer: "World Wide Web Consortium",
    },
    {
      question: "Learn more about the web works",
      answer: "Visit the manual",
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

export default CSC207;
