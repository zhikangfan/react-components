import {useState} from "react";
import ProgressButton from '@/components/ProgressButton'

export default function Home() {
    const [progress, setProgress] = useState(0)
    function handleInstall() {
        console.log('start install')
        let timer:any = null;
        timer = setInterval(() => {
            setProgress((prevState) => {
                if (prevState >= 100) {
                    clearInterval(timer)
                    return 100;
                }
                return prevState + 2;
            })
        }, 200)
    }


  return (
    <>
      <ProgressButton progress={progress} onInstall={handleInstall} onSuccess={() => {console.log('success')}}></ProgressButton>
    </>
  )
}
