import React, { useEffect, useState } from "react";
import "./styles.css";
import { styled } from "styled-components";

interface Character {
    char: string;
    key: number;
}

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
const [characters, setCharacters] = useState<Character[]>([]);

useEffect(() => {
    let chars: Character[] = [];
    for (let i = 0; i < text.length; i++) {
        chars.push({
        char: text[i],
        key: i,
        });
    }
    setCharacters(chars);
}, [text]);

return (
    <Char>
        {characters.map((char, index) => (
            <span
                key={index}
                className="character"
                style={{
                    animationDelay: `${0.5 + index * 0.05}s`,
                    animationDuration: "0.5s",
                }}
            >
            {char.char}
            </span>
        ))}
    </Char>
);
};



const Char = styled.h1`
    color: rgba(255, 255, 255, 0.90);
    font-family:'Abhaya Libre', serif;
    font-size: 54px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-top: 96px;
`


export default Title;