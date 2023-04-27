import React,{useState,useEffect} from 'react'

export default function ProgressBar(props) {
    const [niveau, setNiveau] = useState(0);
    const [enMarche, setEnMarche] = useState(true);

    useEffect(()=>{
        if(niveau < props.level && enMarche){
            setTimeout(()=>setNiveau(prev => prev += 2),50)
        }
    },[niveau,enMarche,props.level])

  return (
    <>
        <div className='progressbar'>
            <div style={{
                height:"100%",
                width: `${niveau}%`,
                backgroundColor: "rgb(230, 169, 1)",
                borderRadius:"inherit",
                transition:"width 0.5s"
            }}></div> <span className='pourcentage'>{niveau}%</span>
        </div>
    </>
  )
}
