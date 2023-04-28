import Link from "next/link";
import React, { ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
    title?:string,
    children: ReactNode; 
}

const Layout = ({title, children}:LayoutProps) => {

    return (
        <div>
            <Head> 
                <title>[{title? title:"Arseniy" }]</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="pageContainer">
                <header>
                    <nav>
                        <div className="navbar">
                        <div className ="container nav-container">
                            <input title="hamburger" className="checkbox" type="checkbox" name="" id="" />
                            <div className ="hamburger-lines">
                                <span className ="line line1"></span>
                                <span className ="line line2"></span>
                                <span className ="line line3"></span>
                            </div>  
                            <div className ="logo">
                                <h1>Navbar</h1>
                            </div>
                            <ul className ="menu-items">
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="/about">About me</a></li>
                                <li><a href="/references">References</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/contact">Contact me</a></li>
                                <li><a href="/resume">Resume me</a></li>
                            </ul>
                        </div>
                        </div>
                    </nav>

                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <p>Copyright Arseniy Skudaev</p>
                </footer>
            </div>
        </div>
    )
}

export default Layout