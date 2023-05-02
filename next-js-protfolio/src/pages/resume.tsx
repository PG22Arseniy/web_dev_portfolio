import Layout from "@/components/Layout";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";

const Resume= () => {

    const IMAGE_LINK = "https://i.ibb.co/8bYY9vR/Web-Developer-Resume.png"
    const [resume, setResume] = useState<null|jsPDF> (null)


        useEffect(()=>{
            const getResume  = () => {
                if (resume) return
                let file = new jsPDF('portrait', 'px', 'a4', false)
                file.addImage(IMAGE_LINK, 'PNG', 0,0,417, 653)
                setResume(file);
            }

            getResume()
        },[]) 

        const saveResume = () => {
            resume!.save('resume.pdf')
        }
    
    return (
        <Layout title="Resume">
            <h1> My Resume</h1>
           

            {
                resume
                ? 
                <div className="resumePage">  
                    <img src= {IMAGE_LINK} alt="resume img png" />  
                    <button onClick={saveResume}> Download Resume (PDF) </button>  
                </div>
                :
                <div> Resume Not Found </div> 
            } 


        </Layout>
    )
}

export default Resume