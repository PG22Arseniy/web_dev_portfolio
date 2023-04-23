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
                        <Link href='/'> Portfolio </Link>
                        <div className="hamburger">
                            <Link href='/projects'> Projects </Link>
                            <Link href='/about'> About me </Link>
                            <Link href='/resume'> Resume </Link>
                            <Link href='/references'> References </Link>
                            <Link href='/contact'> Contact me </Link>
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