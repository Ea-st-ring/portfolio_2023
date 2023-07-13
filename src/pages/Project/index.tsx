import React from 'react';
import background_img from './assets/project_bg.png';
import styled from 'styled-components';
import Title from './Title';

const Project = () => {
    return (
        <Background>
        <Title text="Hyun's Projects"></Title>
        <ProjectWrapper>
        </ProjectWrapper>
        </Background>
    );
};

const Background = styled.div`
    background-image: url(${background_img});
    background-size: cover repeat;
    width: 1440px;
    height: 1024px;
    position: absolute;
    top: 0;
    left: 0;
`

const ProjectWrapper = styled.div`
    width: 1078px;
    height: 696px;
    margin : 0 auto;
    flex-shrink: 0;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);
`

export default Project;