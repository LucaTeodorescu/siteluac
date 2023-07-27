import React from 'react';
import "../styles/Home.css"

function Home() {
    return(
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Luca</h2>
                <div className="prompt"> 
                <p> A Data Scientist with passions for learning and experimenting. </p> 
                </div>
            </div>
        <div className="skills">
            <h1>Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Analysis</h2>
                    <span>
                        blablablabla
                    </span>
                    <h2>Computer Science</h2>
                    <span>
                        blablablabla
                    </span>
                </li>
            </ol>
        </div>
        </div>
    );
}

export default Home;