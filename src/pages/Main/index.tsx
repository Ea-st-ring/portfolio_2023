import React, { useState, useEffect} from 'react';
import { styled } from 'styled-components';
import {ReactComponent as Record} from './assets/record.svg';
import turntable from './assets/turntable.png';
import lp_group from './assets/lp_group.svg';
import { useNavigate } from 'react-router-dom';
import Circle from './Circle';

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
            // maxHeight: `${window.innerHeight}`,
            height:'100vh',
                    }}>
            <Background width={`${window.innerWidth}px`} height={`${window.innerHeight}px`}/>
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
                <Circle/>
            </div>
        </div>
    );
};



const Background = styled.div<{width? : string, height? : string}>`
    /* background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/915c841c-f51c-47bd-95e2-88e50b5e7b71/image.png'); */
    background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/7a961054-c601-452e-8ba8-2006f82fa08c/image.png');
    background-size: cover;
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    position: absolute;
    z-index: -1;
    top:0;
`

const TurnTable = styled.div`
    background-image: url(${turntable});
    /* background-size: cover; */
    width: 1169px;
    height: 682px;
    position: absolute;
    z-index: -1;
    top:40px;
    left: 135px;
`

const LPGroup = styled.img`
    width: 710px;
    height: 603px;
    position: absolute;
    left: 433px;
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