import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import "./style.css";
import CardGradient from '../CardGradient';
import LangCategory from "./lessonLangHeader";
import SlangCard from "./lessonCardSlang";
import { UserContext } from '../../utils/Context';
import fadeIn from 'react-animations/lib/fade-in';

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;
const FadeInCard = styled.div`animation: 3s ${keyframes`${fadeIn}`} 1`;


function LessonMenu() {
    const { lang } = useParams();
    // console.log(lang);

    const { setCurrentLang } = useContext(UserContext);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        setCurrentLang(lang);
    }, []);

    return (
        <>
            <div className="backgroundImage" style={{
                backgroundImage:
                    `url(https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/${lang.toLowerCase()}.png
  )`
            }}>
            </div>
            <Container>
                <LangCategory />
                <hr />
                <Card.Body className="presCardBody text-center" >
                    <Card className="presCard" >
                        <h2>Slang/Profanity</h2>
                    </Card>
                    {/* <SlideDown> */}
                    <FadeInCard>
                        <SlangCard />
                    </FadeInCard>
                    {/* </SlideDown> */}

                    <Card className="presCard2" >
                    <h2 onClick={() => setShowCards(!showCards)}>{!showCards ? "Click for More Categories" : "Hide More Categories"}</h2>
                    </Card>
                    {/* <SlideDown> */}
                    <FadeInCard>
                        <Row>
                            <Col>
                                {showCards && <LessonCards />}
                            </Col>
                        </Row>
                    </FadeInCard>
                    {/* </SlideDown> */}
                </Card.Body>
            </Container>
        </ >
    )
}

export default LessonMenu;
