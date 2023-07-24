import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ImageCircleProps {
    outImages: string[];
    inImages: string[];
}

const outCenterX = 710; // 원 중심의 x 좌표
const outCenterY = 385; // 원 중심의 y 좌표
const outRadius = 225; // 원의 반지름
const outAngleNum = 19;

const inCenterX = 700; // 원 중심의 x 좌표
const inCenterY = 380; // 원 중심의 y 좌표
const inRadius = 100; // 원의 반지름
const inAngleNum = 81;

const ImageCircle: React.FC<ImageCircleProps> = ({outImages,inImages}) => {
    

    const [outImageStyles, setOutImageStyles] = useState(
        outImages.map(() => ({
            top: 375,
            left: 695,
        }))
    );

    const [inImageStyles, setInImageStyles] = useState(
        inImages.map(() => ({
            top: 375,
            left: 695,
        }))
    );


    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setOutImageStyles(outImages
    //             .map((_, index) => calculateImagePosition(index, outCenterX, outCenterY, outRadius , outAngleNum))
    //         );
    //         setInImageStyles(inImages
    //             .map((_, index) => calculateImagePosition(index, inCenterX, inCenterY, inRadius, InAngleNum))
    //         );
    //     }, 300);
    //     return () => clearTimeout(timer);
    // }, [outImages, inImages]);

    useEffect(() => {
        if (currentIndex < outImages.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setOutImageStyles((prevStyles) => [
                    ...prevStyles.slice(0, currentIndex),
                    calculateImagePosition(currentIndex, outCenterX, outCenterY, outRadius, outAngleNum),
                    ...prevStyles.slice(currentIndex + 1),
                ]);
                setInImageStyles((prevStyles) => [
                    ...prevStyles.slice(0, currentIndex),
                    calculateImagePosition(currentIndex, inCenterX, inCenterY, inRadius, inAngleNum),
                    ...prevStyles.slice(currentIndex + 1),
                ]);
            }, 150);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, outImages, inImages]);

    const calculateImagePosition = (index : number, centerX : number, centerY : number, radius : number, angleNum : number) => {        
        let num = 0;
        if (centerY === 385) {
            num = 2;
        } else {
            num = 9;
        }
        const angle = (num * Math.PI * index + angleNum) / outImages.length // 이미지마다 각도를 분배
        const x = centerX + radius * Math.cos(angle) // 원 중심의 x 좌표
        const y = centerY + radius * Math.sin(angle) // 원 중심의 y 좌표
    return { position: 'absolute', left: x, top: y}
    }
    
    return (
        <Container>
            <BigCircle>
                
            </BigCircle>
            {outImages.map((imageSrc : string, index : number) => (
                <Image
                    key={index}
                    src={imageSrc}
                    alt={`img-${index}`}
                    style={
                        outImageStyles[index]
                    }
                />
                ))}
            {inImages.map((imageSrc : string, index : number) => (
                <Image
                    key={index}
                    src={imageSrc}
                    alt={`img-${index}`}
                    style={
                        inImageStyles[index]
                    }
                />
                ))}
            <Redux
            src={'https://velog.velcdn.com/images/ea_st_ring/post/494206ee-93a9-45c7-a9c4-e6372bdfdaad/image.png'}
            />

        </Container>
    )
}

export default function Circle() {

    const css_img = 'https://velog.velcdn.com/images/ea_st_ring/post/12bb0a83-4b2d-4233-9758-5234616abc22/image.png';
    const html_img = 'https://velog.velcdn.com/images/ea_st_ring/post/0ae84974-7351-4363-b39f-787de1871058/image.png';
    const js_img = 'https://velog.velcdn.com/images/ea_st_ring/post/f2fc7fb9-849c-48d8-9a24-cdfd732e6adc/image.png';
    const react_img = 'https://velog.velcdn.com/images/ea_st_ring/post/b756c7d1-f394-4c4a-b0f0-c19732610147/image.png';
    const ts_img = 'https://velog.velcdn.com/images/ea_st_ring/post/cc7ca85b-bf11-4510-8ba5-d13e6069008e/image.png';
    const no_img = 'https://velog.velcdn.com/images/ea_st_ring/post/94fe4e82-414e-4786-92ac-d729e9f21ae9/image.png';
    const outImages = [
      // 이미지 URL들
        react_img,
        ts_img,
        js_img,
        css_img,
        html_img,
        no_img,
        no_img,
        no_img,
        no_img,
        no_img,
        
    ]

    const gitKraken_img = 'https://velog.velcdn.com/images/ea_st_ring/post/9f424a19-9e62-46a8-8839-d69907004770/image.png';
    const gitHub_img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1200px-Font_Awesome_5_brands_github.svg.png';
    const git_img = 'https://velog.velcdn.com/images/ea_st_ring/post/84be9dad-cf46-49f5-822c-260fccd069cc/image.png';

    const inImages = [
        gitKraken_img,
        no_img,
        no_img,
        git_img,
        no_img,
        no_img, 
        gitHub_img,
    ]


    return <ImageCircle outImages={outImages} inImages={inImages}/>
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const BigCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1200px;
    height: 1200px;
    border-radius: 50%;
    overflow: hidden;
`


const Image = styled.img`
    position: absolute;
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
`

const Redux = styled.img`
    position: absolute;
    top: 375px;
    left: 697px;
    animation: rotating 10s linear infinite;

    @keyframes rotating {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(-360deg);
    }
}
`
