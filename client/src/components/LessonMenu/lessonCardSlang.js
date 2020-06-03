import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Row, Button, Col } from 'react-bootstrap';
import CardGradient from '../CardGradient';



export default function SlangCard() {
    const { lang } = useParams();
    const { type } = useParams();




    return (

        <Row>

            <CardGradient className="slangGradientMargin">
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.dribbble.com/users/2056807/screenshots/7815777/dope.gif" />
                    <Card.Body>
                        <Card.Title>Slang</Card.Title>
                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang` : `/${lang}/presentation/slang`}>
                            <Button>Click Here!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGradient>

            <CardGradient className="slangGradientMargin">
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.dribbble.com/users/2056807/screenshots/7815777/dope.gif" />
                    <Card.Body>
                        <Card.Title>More Slang</Card.Title>
                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang2` : `/${lang}/presentation/slang2`}>
                            <Button>Click Here!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGradient>

            {/* <CardGradient className="slangGradientMargin">
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.dribbble.com/users/2056807/screenshots/7815777/dope.gif" />
                    <Card.Body>
                        <Card.Title>Even More Slang</Card.Title>
                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang3` : `/${lang}/presentation/slang3`}>
                            <Button>Click Here!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGradient> */}

            <CardGradient>
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.buzzfeed.com/buzzfeed-static/static/2018-08/14/17/asset/buzzfeed-prod-web-01/anigif_sub-buzz-17012-1534280923-3.gif?downsize=600:*&output-format=auto&output-quality=auto" />
                    <Card.Body>
                        <Card.Title>Profanity</Card.Title>

                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `}  some swear words and phrases in <strong> {lang}</strong>!
                    </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/profanity` : `/${lang}/presentation/profanity`}>
                            <Button>
                                Click Here!
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGradient >

        </Row >

    )
}



