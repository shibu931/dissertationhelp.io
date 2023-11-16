import React, { useEffect } from 'react'

function Form() {
    useEffect(()=>{
      const script = document.createElement("script");
      script.src = "https://forms.app/static/embed.js";
      script.async = true;
  
      document.body.appendChild(script);
  
      script.onload = () => {
        var formsappForm = new window.formsapp('6540f47b4b72a947dc5b2457', 'standard', {"width":"100%","height":"500px","opacity":0});
      }
    },[])
    return <div formsappId="6540f47b4b72a947dc5b2457" className='w-80'></div>;
}

export default Form;