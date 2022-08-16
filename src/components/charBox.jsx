import React, { useState, useEffect } from "react";
function CharBox({ index, char, focus, updateChar }) {
    let charInput = null;
    useEffect(() => {
        if (focus) {
            charInput.focus();
        }
    }, []);
    return (
        <>
            <span data-test="2fa-input-wrapper" className="text-input-wrapper">
                <input
                    data-index={index}
                    value={char !== "INVALID" ? char : ""}
                    onChange={(e) => updateChar(index, e)}
                    type="text"
                    pattern="[0-9A-Za-z]{1}"
                    inputMode="text"
                    autoComplete="off"
                    className={`single-char-input ${char === undefined || char === "" ? "show-dot" : "valid-input"} ${
                        char === "INVALID" ? "invalid-input" : ""
                    }`}
                    maxLength="1"
                    ref={(input) => {
                        charInput = input;
                    }}
                />
                <span className="input-dot"></span>
            </span>
        </>
    );
}

export default CharBox;
