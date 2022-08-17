import logo from "./logo.svg";
import "./App.css";
import InputBox from "./components/inputbox";
import "./styles/css-compiled/main.css";
import { useEffect, useState } from "react";
import fileListJson from "./file-list.json";
import ImageBox from "./components/imageBox";
import WordTitle from "./components/wordTitle";

function App() {
    const [fileList, setFileList] = useState(fileListJson);
    const [active, setActive] = useState(false);
    const [file, setFile] = useState("");
    const [word, setWord] = useState("");
    let xylophone = new Audio(`./sounds/Xylophone.wav`);
    let blips = new Audio(`./sounds/Blips.wav`);

    const startGame = (start, next) => {
        const files = [...fileList];
        var index = Math.floor(Math.random() * files.length);
        const randomFile = files[index];
        files.splice(index, 1);
        if (files.length > 0) {
            setFileList(files);
        } else {
            setFileList(fileListJson);
        }
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
