import logo from "./logo.svg";
import "./App.css";
import InputBox from "./components/inputbox";
import "./styles/css-compiled/main.css";
import { useEffect, useState } from "react";
import fileList from "./file-list.json";
import ImageBox from "./components/imageBox";
import WordTitle from "./components/wordTitle";

function App() {
    const [active, setActive] = useState(false);
    const [file, setFile] = useState("");
    const [word, setWord] = useState("");
    let xylophone = new Audio(`./sounds/Xylophone.wav`);
    let blips = new Audio(`./sounds/Blips.wav`);

    const startGame = (start, next) => {
        const randomFile = fileList[Math.floor(Math.random() * fileList.length)];
        // console.log(randomFile);
        setFile(randomFile);
        const word = randomFile.substring(0, randomFile.lastIndexOf(".")) || randomFile;
        setWord(word);
        setActive(start || next);
        if (start) {
            xylophone.play();
        } else {
            blips.play();
        }
    };
    return (
        <div className="App">
            {!active ? (
                <div className="centered">
                    <h1>Jennifer's Picture Generator</h1>
                    <button onClick={(e) => startGame(true)}>Begin</button>
                </div>
            ) : (
                <>
                    <WordTitle word={word} />
                    <ImageBox image={file} word={word} />
                    <InputBox word={word} setNextWord={startGame} />
                </>
            )}
        </div>
    );
}

export default App;
