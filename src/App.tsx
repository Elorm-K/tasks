import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <>
                <div className="App">
                    <header className="App-header">
                        UM COS420 with React Hooks and TypeScript
                    </header>
                    <h2>This is a Test</h2>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload. Cyril Hello World
                    </p>
                    <img
                        src="/Users/cyril/Downloads/IMG_9410.JPG"
                        alt="This is a a test photo"
                    />
                    <ul>
                        <li>Soccer</li>
                        <li>Volleyball</li>
                        <li>Squash</li>
                        <li>Tennis</li>
                    </ul>
                </div>
            </>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div
                            style={{
                                width: "100%",
                                height: "20px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div
                            style={{
                                width: "100%",
                                height: "20px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
