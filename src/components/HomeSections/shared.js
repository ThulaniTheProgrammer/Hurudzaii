// Shared Framer Motion variants used across all home page sections

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

export const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export const slideIn = {
    hidden: { x: -40, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
};

export const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

export const reveal = {
    hidden: { clipPath: "inset(10% 0 10% 0)", opacity: 0 },
    visible: {
        clipPath: "inset(0% 0 0% 0)",
        opacity: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
};

export const floatingAnim = {
    y: ["0%", "-3%", "0%"],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

export const glowAnim = {
    opacity: [0.4, 0.7, 0.4],
    scale: [1, 1.05, 1],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
    },
};

