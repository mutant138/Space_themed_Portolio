"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DevCard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 3.4, ease: "easeOut" }}
            className="w-full flex items-center justify-center mt-10"
        >
            <a href="https://app.daily.dev/udhayasuryau">
                <img
                    src="https://api.daily.dev/devcards/v2/mHIV8yBrucgwPHythvMbU.png?type=wide&r=ppk"
                    width="652"
                    alt="Udhaya Surya U's Dev Card"
                    className="transition-transform transform hover:scale-105"
                />
            </a>
        </motion.div>
    );
};

export default DevCard;
