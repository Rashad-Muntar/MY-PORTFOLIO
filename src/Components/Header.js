import { useRef, useEffect } from 'react';
import '../Assets/Styles/Header.css'
import { gsap } from "gsap";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
    const el = useRef()
    const q = gsap.utils.selector(el)
    const tl = useRef()
    

    useEffect(() => {
    
        tl.current = gsap.timeline()
            .to(q('.my-name'),{
                y: '0%',
                duration: 1,
                ease: 'power2.inOut',
            })
            .to(q('.my-job-title'),{
                y:'0%',
                duration: 1,
                ease: 'power2.inOut'
            })
            .to(q('.social-icon'),{opacity:1, stagger:0.3})
    }, [])

    return (
        <section className='header-wrapper' ref={el}>
            <div className='nameWrapper'>
                <span className='my-name'>RASHAD MUNTAR</span>
            </div>

            <div className='my-job-title-wrapper'>
                <div className='my-job-title'>FULL-STACK DEVELOPER</div>
            </div>

            <div className='social'>
                <a className='social-icon' href='#'><LinkedInIcon fontSize='large'/></a>
                <a className='social-icon' href='#'><GitHubIcon fontSize='large'/></a>
                <a className='social-icon' href='#'><TwitterIcon fontSize='large'/></a>
            </div>
        </section>
    )
}

export default Header