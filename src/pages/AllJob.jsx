import NavBar from "../shared/NavBar";
import { motion, useScroll } from "framer-motion"

import './Blogs.css'

const AllJob = () => {
    const { scrollYProgress } = useScroll();
  
    return (
        <div>
            
            <NavBar></NavBar>
           
  
 
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress, height:'2px' }} />  
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
    <h2>igjthjyojkhypjlpulpj</h2>
  
           
            
        </div>
    );
};

export default AllJob;