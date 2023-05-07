import Layout from "@/components/Layout";
import React, { useRef } from "react";

const Projects = () => {

    const imageListRef = useRef<HTMLUListElement>(null)

    const ChangeImage = (next:Boolean) => {
        const slides  = imageListRef.current

        let newIndex:number = 0;
        const CollectionLength = slides?.children.length!

        // find  new index
        for (let i = 0; i < CollectionLength; i++) {
           if (slides?.children[i].classList.contains("active")){
                slides?.children[i].classList.remove("active")

                if (next) newIndex = i+1;
                else newIndex = i-1;
           }
        }  

        // adjust index for rotation
        if (newIndex < 0) newIndex = CollectionLength - 1;
        if (newIndex >= CollectionLength) newIndex = 0;

        slides?.children[newIndex].classList.add("active")

    }

    return (
        <Layout>
        <h1> My Projetcs </h1> 
        <div className="collection"> 
            <section area-label = "Best Price Products">
                <div className="carousel">
                    <button className="prev" onClick={()=> ChangeImage(false)} value="prev"> &#8656; </button>
                    <button className="next" onClick={()=> ChangeImage(true)} value="next"> &#8658; </button> 
                    <ul ref={imageListRef}>
                        <li className="slide" > 
                            <div className="card">
                                <h3> Angry Football </h3> 
                                <img src = "/images/projects/AngryFootball.png" alt = "shirt1"/> 
                                <div className="description">
                                    <p> Famous themed angry birds game with Box2D, Javascript, CSS, HTML  </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/AngryFootball.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>
                            </div>
                        </li>
                        <li className="slide active"> 
                            <div className="card">
                                <h3> Ecommerce Website</h3>
                                <img src = "/images/projects/Ecommerce.png" alt = "Ecommerce Project"/>
                                <div className="description">
                                    <p> My dummy online clothing shop made with: Next.js, React, MongoDB, TypeScript, HTML, CSS   </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/ecommerce_nextjs_react_mongodb.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>                            
                            </div>
                        </li> 
                        <li className="slide">
                            <div className="card">
                                <h3> Messenger for browser</h3>
                                <img src = "/images/projects/Messenger.png" alt = "Messenger"/> 
                                <div className="description">
                                    <p> Browser messenger made with: TypeScript, React, Stream, HTML, CSS   </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/AngryFootball.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>                            
                            </div>
                        </li> 
                        <li className="slide">
                            <div className="card">
                                <h3> Level Editor for "Angry birds" </h3>
                                <img src = "/images/projects/LevelEditor.png" alt = "Level Editor"/>
                                <div className="description">
                                    <p> Easy to use level editor for "Angry Birds" game. Designers can drag and drop obstacles and pigs, setting their stats and saving levels on local host. Made with: JavaScript, HTML, CSS </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/Level_Editor.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>                            
                            </div>
                        </li>  
                        <li className="slide">
                            <div className="card">
                                <h3> Telemetry App </h3>
                                <img src = "/images/projects/Telemetry.png" alt = "Telemetry app"/>
                                <div className="description">
                                    <p> Application that saves data to firebase storage and displays it in charts. Made with:  VueJS, axios, Firebase, JavaScript, HTML, CSS  </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/ArseniyTelemetryApp.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>                           
                            </div>
                        </li> 
                        <li className="slide">
                            <div className="card">
                                <h3> MineSweeper</h3>
                                <img src = "/images/projects/MineSweeper.png" alt = "MineSweeper"/> 
                                <div className="description">
                                    <p> Classic browser game made with: Javascript, CSS, HTML  </p>
                                    <p className="link"> <a href="https://github.com/PG22Arseniy/mineSweeperFinalProject.git" target="_blank" rel="noopener noreferrer"> Repository link </a> </p>
                                </div>                            
                            </div>
                        </li> 
                    </ul>
                </div>
            </section>
        </div>
        </Layout>
    )
}

export default Projects; 