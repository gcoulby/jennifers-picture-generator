import React, { useState, useEffect } from "react";
function ImageBox({ image, word }) {
    return (
        <>
            <div className="image-box">
                <img id="image" src={`./img/${image}`} alt={`image of ${word}`} />
            </div>
        </>
    );
}

export default ImageBox;
