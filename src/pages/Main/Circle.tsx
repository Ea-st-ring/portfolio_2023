import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ImageCircleProps {
    images: string[];
}

const centerX = 610; // 원 중심의 x 좌표
const centerY = 505; // 원 중심의 y 좌표
const radius = 225; // 원의 반지름

const ImageCircle: React.FC<ImageCircleProps> = ({images}) => {
    

    const [imageStyles, setImageStyles] = useState(
        images.map(() => ({
            left: 590,
            top: 505,
        }))
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageStyles(images.map((_, index) => calculateImagePosition(index)));
        }, 300);
        return () => clearTimeout(timer);
    }, [images]);

    const calculateImagePosition = (index : number) => {
      const angle = (2 * Math.PI * index + 19) / images.length // 이미지마다 각도를 분배
      const x = 610 + 225 * Math.cos(angle) // 원 중심의 x 좌표
      const y = 505 + 225 * Math.sin(angle) // 원 중심의 y 좌표
    return { position: 'absolute', left: x, top: y}
    }
    
    return (
        <Container>
            <BigCircle>
                {images.map((imageSrc : string, index : number) => (
                <Image
                    key={index}
                    src={imageSrc}
                    alt={`img-${index}`}
                    style={
                        imageStyles[index]
                    }
                />
                ))}
            </BigCircle>
        </Container>
    )
}

export default function Circle() {

    const css_img = 'https://velog.velcdn.com/images/ea_st_ring/post/12bb0a83-4b2d-4233-9758-5234616abc22/image.png';
    const html_img = 'https://velog.velcdn.com/images/ea_st_ring/post/0ae84974-7351-4363-b39f-787de1871058/image.png';
    const js_img = 'https://velog.velcdn.com/images/ea_st_ring/post/f2fc7fb9-849c-48d8-9a24-cdfd732e6adc/image.png';
    const react_img = 'https://velog.velcdn.com/images/ea_st_ring/post/b756c7d1-f394-4c4a-b0f0-c19732610147/image.png';
    const ts_img = 'https://velog.velcdn.com/images/ea_st_ring/post/cc7ca85b-bf11-4510-8ba5-d13e6069008e/image.png';

    const git_img = 'https://velog.velcdn.com/images/ea_st_ring/post/84be9dad-cf46-49f5-822c-260fccd069cc/image.png';

    const no_img = 'https://velog.velcdn.com/images/ea_st_ring/post/94fe4e82-414e-4786-92ac-d729e9f21ae9/image.png';
    const images = [
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
    return <ImageCircle images={images} />
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
    transition: all 0.2s;
    &:hover{
        transform: scale(1.1);
    }
`