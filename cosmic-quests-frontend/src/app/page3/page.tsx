"use client";
import "../globals.css";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

export default function Page3() {
  const dataArray = [["Who is the founder of Ethereum?","Vitalik Buterin","Satoshi Nakamoto","Charlie Lee","Vitalik Buterin"],
  ["What country is known for manufacturing the car brand Volvo?","Sweden","Germany","United States","Sweden"],
  ["What is the capital of Australia?","Sydney","Melbourne","Canberra","Canberra"],
  ["Who painted the Mona Lisa?","Vincent Van Gogh","Leonardo da Vinci","Pablo Picasso","Leonardo da Vinci"],
  ["What country makes BMW, Audi, and Mercedes?","United States","Germany","Japan","Germany"],
  ["What system do the blind use to read?","Morse Code","Braille","Sign Language","Braille"],
  ["Which month has only 28 days and every 4 years has 29?","February","October","April","February"],
  ["What is the largest ocean in the world?","Atlantic Ocean","Indian Ocean","Pacific Ocean","Pacific Ocean"],
  ["What is a common use of smart contracts in blockchain technology?","Email Encryption","Automated Transactions","Online Voting","Automated Transactions"],
  ["How many colors are in the rainbow?","5","7","9","7"],
  ["In which TV show would you find the characters Rachel, Ross, and Monica?","Friends","How I Met Your Mother","The Big Bang Theory","Friends"],
  ["What is the smallest planet in our solar system?","Mercury","Mars","Venus","Mercury"],
  ["What does 'NFT' stand for in the blockchain space?","New Fund Transfer","Non-Fungible Token","Network File Transfer","Non-Fungible Token"],
  ["Which company is known for producing the electric car known as the Leaf?","Nissan","Toyota","Chevrolet","Nissan"],
  ["What is the boiling point of water at sea level?","100°C","90°C","80°C","100°C"],
  ["Who wrote the Harry Potter series?","J.K. Rowling","J.R.R. Tolkien","George R.R. Martin","J.K. Rowling"],
  ["What gas do plants absorb from the atmosphere?","Oxygen","Carbon Dioxide","Nitrogen","Carbon Dioxide"],
  ["In cryptocurrency, what is 'DeFi' short for?","Digital Finance","Decentralized Finance","Direct Finance","Decentralized Finance"],
  ["What does ABS stand for in car features?","Automatic Brake System","Anti-lock Braking System","Advanced Braking System","Anti-lock Braking System"],
  ["How many continents are there on Earth?","5","6","7","7"],
  ["Which actor played Jack Sparrow in the 'Pirates of the Caribbean' series?","Johnny Depp","Orlando Bloom","Brad Pitt","Johnny Depp"]]

  const [questionid, setQuestionId] = useState(0)
  const [AnsweredOne, setAnweredOne] = useState(false)
  const [AnsweredTwo, setAnweredTwo] = useState(false)
  const [AnsweredThree, setAnweredThree] = useState(false)

  let IsOne = dataArray[questionid][1] == dataArray[questionid][4]
  let IsTwo = dataArray[questionid][2] == dataArray[questionid][4]
  let IsThree = dataArray[questionid][3] == dataArray[questionid][4]

  let Universe1 = 5;
  let Universe2 = 10;
  let Universe3 = 15;
  let Universe4 = 20;

  const router = useRouter()
  const handleAnswer = (answer : string) =>{
    if(answer == dataArray[questionid][1])
    {
      setAnweredOne(true);
    }
    if(answer == dataArray[questionid][2])
    {
      setAnweredTwo(true);
    }
    if(answer == dataArray[questionid][3])
    {
      setAnweredThree(true);
    }
    if (answer == dataArray[questionid][4])
    {
      setTimeout(() => {
        if(questionid < dataArray.length - 1)
        {
          setQuestionId(questionid + 1)
          IsOne = dataArray[questionid][1] == dataArray[questionid][4]
          IsTwo = dataArray[questionid][2] == dataArray[questionid][4]
          IsThree = dataArray[questionid][3] == dataArray[questionid][4]
      
          setAnweredOne(false)
          setAnweredTwo(false)
          setAnweredThree(false)
        }
        else{
          router.push('/page4')
        }
        
      }, 1000);
    }
  }


  return (
    <div className="Game" style={{backgroundImage: questionid > Universe4 ? `url(8.jpg)`: questionid > Universe3? `url(7.jpg)` : questionid > Universe2? `url(6.jpg)` : questionid > Universe1? `url(5.jpg)`: `url(3.jpg)`}}>
      <div className="flex flex-col items-center justify-center min-h-screen gap-12">
          <p>{questionid + 1}. {dataArray[questionid][0]}</p>
          <Button onClick={() => handleAnswer(dataArray[questionid][1])} style={{ backgroundColor: AnsweredOne ? (IsOne ? 'green' : 'red'):''}}>a. {dataArray[questionid][1]}</Button>
          <Button onClick={() => handleAnswer(dataArray[questionid][2])} style={{ backgroundColor: AnsweredTwo ? (IsTwo ? 'green' : 'red'):''}}>b. {dataArray[questionid][2]}</Button>
          <Button onClick={() => handleAnswer(dataArray[questionid][3])} style={{ backgroundColor: AnsweredThree ? (IsThree ? 'green' : 'red'):''}}>c. {dataArray[questionid][3]}</Button>
      </div>
    </div>
  );
}
