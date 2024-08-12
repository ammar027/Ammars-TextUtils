import React from 'react'

export default function Alert({ alert = ""}) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
        
        {alert && 
        <div  className={`alert alert-${alert.type} alert-dismissible fade show fade hide my-1 mx-5`}  role="alert">
        <strong>{capitalize (alert.type)}</strong> : {alert.msg}
        </div>
        }

    </div>
  )
}
