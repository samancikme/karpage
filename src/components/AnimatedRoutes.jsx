import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from "react-router-dom";

const AnimatedRoutes = ({ children }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0.8, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;