import React, { useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import { styled } from 'styled-components';
import {ReactComponent as Record} from './assets/record.svg';
import turntable from './assets/turntable.png';
import lp_group from './assets/lp_group.svg';
import { useNavigate } from 'react-router-dom';


const Main = () => {

    const navigate = useNavigate();

    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const updatePosition = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const videoAspectRatio = 16 / 9;
        const viewportAspectRatio = viewportWidth / viewportHeight;

        if (viewportAspectRatio > videoAspectRatio) {
            const videoHeight = viewportWidth * (9 / 16);
            setTop((viewportHeight - videoHeight) / 2);
            setLeft(0);
        } else {
            const videoWidth = viewportHeight * (16 / 9);
            setTop(0);
            setLeft((viewportWidth - videoWidth) / 2);
        }
    };

    useEffect(() => {
        updatePosition();
        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, []);

    const goToProject = () => {
        navigate('/project');
    }


    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
                    }}>
            <PlayerWrapper top={top} left={left}>
                <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + '/videos/main-video.mp4'}
                    
                    muted
                    loop
                />
            </PlayerWrapper>
            <RecordIcon 
                className='record'
                onClick={goToProject}
            />   
            <div 
            style={{marginTop: '100px',
                    marginBottom: '900px',
        }}
            >
                <TurnTable/>
                <LPGroup src={lp_group}/>
            </div>
            
        </div>
    );
};



interface PlayerWrapperProps {
    top:number;
    left:number;
}

const PlayerWrapper = styled.div<PlayerWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
    overflow: hidden;

.react-player {
    position: absolute;
    width: 100vw;
    height: 100vw !important; //계산을 위해 가로 비율 16:9
    min-height: 100%;
    min-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

`;





const Wrapper = styled.div`
    position: absolute;
    margin-top: 98px;
    width: 1169px;
    height: 886px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(2px);
`;

const TurnTable = styled.div`
    background-image: url(${turntable});
    width: 1169px;
    height: 886px;
    position: absolute;
    z-index: -1;
    left: 135px;
`

const LPGroup = styled.img`
    width: 1031px;
    height: 875px;
    position: absolute;
    left: 203px;
    flex-shrink: 0;
`


const RecordIcon = styled(Record)`
    width: 100px;
    height: 100px;
    position: fixed;
    right: -48px;
    top: 350px;
    animation: rotating 3s linear infinite;
    transition: 1s;
    cursor: pointer;
    @keyframes rotating {
    0% {
        transform: rotate(0)
    }
    100% {
        transform: rotate(-360deg);
    }
}
    &:hover{
        right: 0px;
    }

`

export default Main;