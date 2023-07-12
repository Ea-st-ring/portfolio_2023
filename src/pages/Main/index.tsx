import React from 'react';
import ReactPlayer from 'react-player';
import { styled } from 'styled-components';

const Main = () => {
    return (
        <div>
            <PlayerWrapper>
                <ReactPlayer
                    className="react-player"
                    url={process.env.PUBLIC_URL + '/videos/main-video.mp4'}
                    playing
                    muted
                    loop
                />
            </PlayerWrapper>
        </div>
    );
};


const PlayerWrapper = styled.div`
position: relative;
.react-player {
    position: absolute;
    top: -20px;
    left: 0;
    min-width: 100% !important;
    min-height: 110vh !important;
}
`;

export default Main;