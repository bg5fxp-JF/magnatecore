// Fade in and out
export const fadeInOut = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

// Slide in from right
export const slideInFromRight = {
	hidden: { x: "100%" },
	visible: { x: 0 },
	exit: { x: "100%" },
};

// Slide in from left
export const slideInFromLeft = {
	hidden: { x: "-100%" },
	visible: { x: 0 },
	exit: { x: "-100%" },
};

// Slide in from top
export const slideInFromTop = {
	hidden: { y: "-100%", opacity: 0 },
	visible: { y: 0, opacity: 1 },
	exit: { y: "-100%" },
};

// Slide in from bottom
export const slideInFromBottom = {
	hidden: { y: "100%" },
	visible: { y: 0 },
	exit: { y: "100%" },
};

// Fade in from bottom
export const fadeInFromBottom = {
	hidden: { y: "100%", opacity: 0 },
	visible: { y: 0, opacity: 1 },
	exit: { y: "100%", opacity: 0 },
};

// Scale up and down
export const scaleUpDown = {
	hidden: { scale: 0 },
	visible: { scale: 1 },
	exit: { scale: 0 },
};

// Rotate in and out
export const rotateInOut = {
	hidden: { rotate: 90 },
	visible: { rotate: 0 },
	exit: { rotate: 90 },
};

// Pulse effect
export const pulse = {
	visible: { scale: [1, 1.1, 1] },
};

// Bounce in from top
export const bounceInFromTop = {
	hidden: { y: "-100%", opacity: 0.5 },
	visible: {
		y: ["-50%", "0%", "-10%", "0%"],
		opacity: 1,
	},
};

export const slideUp = {
	initial: {
		top: 0,
	},
	exit: {
		top: "-100vh",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
	},
};

export const slideDiagonal = {
	initial: {
		x: 0,
		y: 0,
	},
	exit: {
		x: "150vh", // Using a large value to ensure the element exits the viewport
		y: "150vh", // Negative to move upwards
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
	},
};
