import backgroundImg from '../images/fundo-home.jpg'
import styled from "styled-components";

const HeroImage = styled.img`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-fit: cover;
z-index: -1;
`;

function BackGroundImage() {
    return (
        <HeroImage src={backgroundImg} alt="foto de fundo"/>
    )
};

export default BackGroundImage;