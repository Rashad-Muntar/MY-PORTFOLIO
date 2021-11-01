import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import '../Assets/Styles/Menu.css'

const Menu = ({showMenu}) => {
    const el = useRef()
    const q = gsap.utils.selector(el)
    const tl = useRef()

    useEffect(() => {
        tl.current = gsap.timeline()
        .to(q('.slide'), {
            y:'0%',
            duration: 0.5,
            ease: 'power2.inOut',
            stagger: 0.2,
        })
    }, [showMenu])

    return(
 
        showMenu && 
        (
        <div className="menu-wrapper" ref={el}>
            <div className='slide slide1'></div>
            <div className='slide slide2'></div>
            <div className='slide slide3'></div>
            <div className='slide slide4'></div>
        </div>
        )
    )
}

export default Menu