import Layout from "@/components/Layout";
import React from "react";

const About= () => {
    return (
        <Layout title="About">
            <h1> About me </h1>
            <p className="intro">Hi, my name is Arseniy, I am a professional web developper. And here are some things about me: </p>
            <div className="content">
                <img src="/images/MyPhoto.jpeg" alt = "my photo"/>
                <div className="aboutme">
                    <p>
                        I enjoy taking complex problems and breaking them down to simple steps that result in efficient web page with beatiful and responsive UI and  <span>Clean & Maintainable</span> code. I always strive to write code in the most elegant way, following all good principles of <span> DRY, KISS and SOLID </span> 
                    </p>
                    <p> In 2017 I finished high school and got into the University "Higher School of Economics" </p>
                    <p>In 2019 I started working as a Junior Web Developer at a small company "Modern"</p>
                    <p>
                        In 2021 I got my bachelor's degree in "Business Informatics" and shortly after I  moved to Vancouver to study "Programming for web and games"
                    </p>
                    <p> In 2023 I finished the course and  ready to find the job anywhere in the world</p>
                    <p> While I'm not working on new web pages, you can find me playing football, tennis, baskeball or chess. I have 1562 elo rating on chess.com</p>
                </div>
            </div>
        </Layout>
    )
}

export default About