import Layout from "@/components/Layout";
import React from "react";

const Contact= () => {
    return (
        <Layout title="Contact">
            <h1> Contact me </h1>
            <div className="contactPage">
                <img alt="my photo" src="/images/MyPhoto.jpeg" className="myPhoto"/>
                <div className="contactOptions"> 
                    <div className="contactOption"> 
                        <img src="/images/logos/TelephoneLogo.png" alt="Phone"/> 
                        <p> +972 55-5617506 </p>
                        <div className="logos">
                            <img src="/images/logos/TelegramLogo.png" alt="Telegram"/>
                            <img src="/images/logos/WhatsAppLogo.png" alt="WhatsApp"  style={{height : "60px"}}/>  
                            <img src="/images/logos/ViberLogo.png" alt="Viber" style={{height : "60px"}}/>    
                        </div>
                    </div>
                    <div className="contactOption">
                        <img src="/images/logos/EmailLogo.png" alt="Email"/> 
                        <p> arseniyskudaev@gmail.com </p>
                    </div>
                    <div className="contactOption">
                        <img src="/images/logos/VKLogo.png" alt="VK"/> 
                        <p> <a href="https://vk.com/skudaevarsen" target="_blank" rel="noopener noreferrer"> Message me in VK </a></p>
                    </div>
                    <div className="contactOption">   
                        <img src="/images/logos/LinkedInLogo.png" alt="LinkedIn" style={{marginLeft: "-5px"}} />  
                        <p style={{marginLeft: "-10px"}} > <a href="https://www.linkedin.com/in/arseniy-skudaev-655338255/"  target="_blank" rel="noopener noreferrer"> Let's connect in Linked In </a></p>
                    </div>
                    <div className="contactOption">
                        <img src="/images/logos/DiscordLogo.png" alt="Discord"/> 
                        <p> PG22_Arseniy#8277 </p>
                    </div>
                    <div className="contactOption">
                        <img src="/images/logos/InstagramLogo.png" alt="Instagram"/> 
                        <p> <a href="https://www.instagram.com/fc__tottenham/"  target="_blank" rel="noopener noreferrer"> Message me in Instagram </a></p>
                    </div>
                    <div className="contactOption">
                        <img src="/images/logos/SkypeLogo.png" alt="Skype"/>  
                        <p> live:.cid.964fea350a3caf2 </p> 
                    </div>
                </div>
                
            </div>
        </Layout>
    )
}

export default Contact