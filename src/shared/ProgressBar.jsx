
import { motion,useScroll } from 'framer-motion';
import './ProgressBar.css'

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
  
    return (
        <div className="">
        <motion.div
          className="progress-bar"
          
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    );
};

export default ProgressBar;