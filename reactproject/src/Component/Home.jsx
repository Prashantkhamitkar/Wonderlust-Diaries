import gsap from 'gsap';
import '../Component/css/stylecreative.css'
import { useRef ,useEffect} from 'react';


function Home() {
const url='/neom-igw-14UnNjg-unsplash.jpg'

//want to show the static data from the public_url
//process.env.PUBLIC_URL which gives the corrected path 
const sidebarRef = useRef(null);
  const mainImgRef = useRef(null);
  const containerRef = useRef(null);
  //useref gives the current dom address 
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        opacity: 0,
        ease: "linear",
        duration: 2,
      },
    });

    tl.fromTo(
      sidebarRef.current,
      { width: 0 },
      { opacity: 1, width: "30%" }
    );
    tl.fromTo(mainImgRef.current, { x: 0 }, { opacity: 1 });
    tl.fromTo(
      containerRef.current,
      { x: 100 },
      { opacity: 1, x: 0 },
      "-=1" // Adjust the overlap of animations as needed
    );
  }, []);


    return ( <>
    
  
    <section className="sidebar" ref={sidebarRef}></section>
    <section className="content-container">
        <img src={process.env.PUBLIC_URL+url} alt="" className="main-img" ref={mainImgRef}/>
    <div className="container" ref={containerRef}>
        <h1 className="main-title">CREATIVES</h1>
        <p className="main-info">
            Wake Up To Reality <br/>

        </p>
    </div>
    </section>
    </> );
}

export default Home;