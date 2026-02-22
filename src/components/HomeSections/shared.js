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
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export const slideIn = {
    hidden: { x: -40, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
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
