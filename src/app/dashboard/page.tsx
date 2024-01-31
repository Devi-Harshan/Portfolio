import Image from 'next/image'
import './styles.css'

export default function Dashboard(){
    return (
        <div className="wrapper">
            <div className="nameWrapper"> DEVI HARSHAN</div>
            <div className="row">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter">UI Developer</h3>
    </div>
  </div>
       {/* <Image
              src="/backgroundGIF.gif"
              alt="Gif"
              className="dark:invert"
              objectFit='fill'
              layout='fill'
              priority
            />  */}
        </div>
    )
}