import React, { useState, useEffect } from "react";
function WordTitle({ word }) {
    return (
        <>
            <h1>
                <span id="letter">{word.slice(0, 1).toUpperCase()}</span>&nbsp;is for&nbsp;<span id="word">{word.toUpperCase()}</span>
            </h1>
        </>
    );
}

export default WordTitle;
