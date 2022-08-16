import React, { useState, useEffect } from "react";
import CharBox from "./charBox";
function InputBox({ word, setNextWord }) {
    let error = new Audio(`./sounds/Error.wav`);
    // const [wordLength, setWordLength] = useState(word.length);

    const [chars, setChars] = useState([]);
    const updateChar = (index, e) => {
        if (e.target.value.toLowerCase() === word.slice(index, index + 1).toLowerCase()) {
            const newChars = [...chars];
            newChars[index] = e.target.value.toUpperCase();
            setChars(newChars);
            const form = e.target.form;
            if (index < form.elements.length - 1) {
                form.elements[index + 1].focus();
            } else {
                setChars([]);
                setNextWord(false, true);
                form.elements[0].focus();
            }
            e.preventDefault();
        } else {
            e.target.value = "";
            error.play();
            const newChars = [...chars];
            newChars[index] = "INVALID";
            setChars(newChars);
        }
    };
    return (
        <>
            <div className="input-box">
                <div className="input-box-wrapper">
                    <form>
                        {[...Array(word.length)].map((e, i) => (
                            <CharBox key={i} index={i} char={chars[i] ?? ""} focus={chars.length === i} updateChar={updateChar} />
                        ))}
                    </form>
                </div>
            </div>
        </>
    );
}

export default InputBox;
