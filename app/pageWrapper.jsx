"use client";

import {motion,AnimatePresence} from "framer-motion";

export const PageWrapper=({children})=>(
    <>
    <AnimatePresence>
        <motion.div
        initial={{opacity:0,y:75}}
        animate={{opacity:1,y:0}}
        exist={{opacity:0,y:15}}
        tranistion={{duration:0.5,delay:0.25}}
        >
        {children}
        </motion.div>

    </AnimatePresence>
    </>
)
