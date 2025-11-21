"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo, useMotionValue, useTransform, useSpring, MotionValue, useDragControls } from "framer-motion";
import { cards as initialCards, CardData } from "../lib/cards";

// --- Animation Guidelines & Constants ---

const EASE_OUT_QUART: [number, number, number, number] = [0.165, 0.84, 0.44, 1];
const TRANSITION_SPRING = {
  type: "spring" as const,
  stiffness: 230,
  damping: 25,
  mass: 1
};

// Simple Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function CardStack({ initialActiveId }: { initialActiveId?: string }) {
  const [cards, setCards] = useState(() => {
    if (!initialActiveId) return initialCards;
    const index = initialCards.findIndex((c) => c.id === initialActiveId);
    if (index === -1) return initialCards;
    const newCards = [...initialCards];
    const [selectedCard] = newCards.splice(index, 1);
    newCards.unshift(selectedCard);
    return newCards;
  });
  const [selectedId, setSelectedId] = useState<string | null>(initialActiveId || null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mouse position for spotlight and tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth mouse for tilt to avoid jitter
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Center of the screen/container
    const { innerWidth, innerHeight } = window;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    
    // Values from -1 to 1
    mouseX.set((e.clientX - centerX) / centerX);
    mouseY.set((e.clientY - centerY) / centerY);
  };

  // Move card logic
  const moveCardToBack = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) newCards.push(first);
      return newCards;
    });
  }, []);
  
  const moveCardToFront = useCallback(() => {
     setCards((prev) => {
      const newCards = [...prev];
      const last = newCards.pop();
      if (last) newCards.unshift(last);
      return newCards;
    });
  }, []);

  // Wheel Control
  const lastWheelTime = useRef<number>(0);
  const handleWheel = (e: React.WheelEvent) => {
    if (selectedId) return;
    
    const now = Date.now();
    if (now - lastWheelTime.current < 200) return; // Throttle speed

    // Check for vertical scroll dominance
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    
    if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
            moveCardToBack();
        } else {
            moveCardToFront();
        }
        lastWheelTime.current = now;
    }
  };

  // Keyboard nav
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        moveCardToBack();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        moveCardToFront();
      } else if (e.key === "Enter" || e.key === " ") {
        setSelectedId(cards[0].id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveCardToBack, moveCardToFront, selectedId, cards]);

  // For the spotlight background, we want pixel values usually.
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  
  return (
    <div 
        className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative bg-neutral-950" 
        ref={containerRef}
        onMouseMove={(e) => {
            handleMouseMove(e);
            setSpotlightPos({ x: e.clientX, y: e.clientY });
        }}
        onWheel={handleWheel}
    >
       {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-[1]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* Liquid Glass Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
          <filter id="chromatic">
             <feOffset in="SourceGraphic" dx="2" dy="0" result="red" />
             <feOffset in="SourceGraphic" dx="-2" dy="0" result="blue" />
             <feBlend mode="screen" in="red" in2="blue" />
          </filter>
        </defs>
      </svg>

      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
            background: `radial-gradient(800px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.08), transparent 40%)`,
            filter: "url(#liquid)"
        }}
      />

      {/* Chromatic Aberration Outline */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5] mix-blend-overlay opacity-50"
        style={{
            background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255,255,255,0.1), transparent 40%)`,
             filter: "url(#chromatic)"
        }}
      />
      
      {/* Navigation Hints */}
      {/* <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none z-10">
         <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white/50 uppercase tracking-widest"
         >
            Scroll / Drag to Navigate
         </motion.div>
      </div> */}

      {/* Card Container */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center perspective-1000">
        <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            {/* 
               Use AnimatePresence with mode="popLayout" or similar isn't strictly needed here because we are re-ordering an array in place.
               However, if we wanted to remove cards, we would need it.
            */}
            <AnimatePresence>
            {cards.map((card, index) => {
                return (
                    <Card 
                        key={card.id} 
                        card={card} 
                        index={index} 
                        total={cards.length} 
                        activeId={selectedId}
                        mouseX={smoothMouseX}
                        mouseY={smoothMouseY}
                        isLoaded={isLoaded}
                        onClick={() => {
                            if (index === 0) setSelectedId(card.id);
                            else if (index === 1) moveCardToBack();
                        }}
                        onDragEnd={(info) => {
                            if (index === 0) {
                                const swipeThreshold = 100;
                                const velocityThreshold = 500;
                                if (
                                    Math.abs(info.offset.x) > swipeThreshold || 
                                    Math.abs(info.velocity.x) > velocityThreshold
                                ) {
                                    moveCardToBack();
                                }
                            }
                        }}
                    />
                );
            })}
            </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <ExpandedCard 
            card={cards.find((c) => c.id === selectedId) || initialCards.find(c => c.id === selectedId)!} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Card({ 
  card, 
  index, 
  total, 
  activeId,
  mouseX,
  mouseY,
  isLoaded,
  onClick,
  onDragEnd
}: { 
  card: CardData; 
  index: number; 
  total: number; 
  activeId: string | null;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isLoaded: boolean;
  onClick: () => void; 
  onDragEnd: (info: PanInfo) => void;
}) {
  const isFront = index === 0;
  const isSecond = index === 1;
  
  // Layout Calcs
  const yOffset = index * 40; 
  const scale = 1 - (index * 0.08);
  const zIndex = total - index;
  const opacity = Math.max(0, 1 - (index * 0.15));
  const brightness = Math.max(0.4, 1 - (index * 0.2));
  
  // Tilt transforms - Only active for front card
  const rotateX = useTransform(mouseY, [-1, 1], [10, -10]); // Look up/down
  const rotateY = useTransform(mouseX, [-1, 1], [-10, 10]); // Look left/right
  
  // Default static rotation for back cards
  const staticRotateX = index * 2; 

  // Entry Animation
  const initialY = 600 + (index * 100);
  
  return (
    <motion.div
      layoutId={`card-${card.id}`}
      onClick={onClick}
      drag={isFront && !activeId ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => onDragEnd(info)}
      
      initial={
        activeId
          ? {
              y: yOffset,
              scale,
              opacity,
              zIndex,
            }
          : { y: initialY, opacity: 0 }
      }
      animate={{
        y: yOffset,
        scale: scale,
        opacity: opacity,
        zIndex: zIndex,
        rotateX: isFront ? 0 : staticRotateX,
        rotateY: 0,
        filter: `brightness(${brightness})`,
      }}
      
      style={{
        rotateX: isFront && !activeId ? rotateX : undefined,
        rotateY: isFront && !activeId ? rotateY : undefined,
        backgroundColor: card.color,
        color: card.textColor,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        transformStyle: "preserve-3d",
        cursor: isFront ? "grab" : isSecond ? "pointer" : "default",
      }}
      
      whileHover={isFront && !activeId ? { 
        scale: 1.02, 
        filter: "brightness(1.1)",
        cursor: "grab"
      } : isSecond && !activeId ? {
        y: yOffset - 30,
        filter: "brightness(0.9)",
        cursor: "pointer"
      } : {}}
      
      transition={{
        ...TRANSITION_SPRING,
        delay: isLoaded ? 0 : index * 0.1 
      }}
      
      className="absolute w-full max-w-[360px] h-[480px] rounded-[32px] shadow-2xl origin-center will-change-transform"
    >
         {/* Glossy highlight */}
        <motion.div 
            className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/20 to-transparent opacity-100 pointer-events-none z-10 mix-blend-overlay" 
            style={{
                background: useTransform(
                    mouseX, 
                    [-1, 1], 
                    ["linear-gradient(105deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)", 
                     "linear-gradient(65deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)"]
                ),
                filter: "url(#liquid)"
            }}
        />
        
      <div className="p-8 flex flex-col h-full relative z-0 transform-style-3d">
        {/* Floating content for parallax depth */}
        <motion.div 
            className="flex-1 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            style={{ 
                z: 20, 
                transform: isFront ? "translateZ(30px)" : "translateZ(0px)" 
            }} 
        >
            {/* Header */}
            <div className="mb-8">
                 <motion.p 
                    className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2"
                >
                    {card.subtitle}
                </motion.p>
                <motion.h2 
                    className="text-4xl font-bold leading-tight tracking-tight"
                >
                    {card.title}
                </motion.h2>
            </div>
            
            {/* Body */}
            <motion.div className="text-white/80 text-lg leading-relaxed">
                {card.description}
            </motion.div>
        </motion.div>
        
        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                    {index === 0 ? "Active" : "Next"}
                </span>
             </div>
             <span className="text-xs font-bold text-white/40 uppercase tracking-widest">
                {/* Since we are shuffling the array, the card's "true" index relative to the original list is lost unless we track it.
                    However, for the purpose of a stack, maybe we just want to show "1 / Total"? 
                    Or better, we can add an 'index' property to the CardData interface to track original position. 
                    OR, we can just find the index of this card in the original 'initialCards' array.
                */}
                {String(initialCards.findIndex(c => c.id === card.id) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
             </span>
        </div>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ card, onClose }: { card: CardData; onClose: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    if (cardRef.current) {
        cardRef.current.focus();
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
      />

      <motion.div
        ref={cardRef}
        layoutId={`card-${card.id}`}
        tabIndex={-1}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.2 }}
        onDragEnd={(event, info) => {
          if (info.offset.y > 100 && info.velocity.y > 0) {
            onClose();
          }
        }}
        className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col rounded-[40px] shadow-2xl overflow-hidden bg-neutral-900 border border-white/10 outline-none"
        style={{ 
          backgroundColor: card.color,
          color: card.textColor 
        }}
        transition={TRANSITION_SPRING}
        onClick={(e) => e.stopPropagation()} 
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.1 }}
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-black/20 hover:bg-black/40 rounded-full text-white/90 transition-colors z-30 backdrop-blur-md border border-white/10"
        >
          <CloseIcon />
        </motion.button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden custom-scrollbar">
            {/* Sidebar / Header Region */}
            <div 
              className="md:w-[400px] p-8 pt-20 md:p-12 md:pt-12 flex flex-col relative z-10 bg-black/10 flex-shrink-0 cursor-grab active:cursor-grabbing"
              onPointerDown={(e) => dragControls.start(e)}
            >
                {/* Mobile Drag Handle */}
                <div className="md:hidden absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/20 rounded-full" />

                 <div className="flex-1">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4, ease: EASE_OUT_QUART }}
                        className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4"
                    >
                        {card.subtitle}
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.4, ease: EASE_OUT_QUART }}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        {card.title}
                    </motion.h2>
                    
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: EASE_OUT_QUART }}
                        className="text-white/60 text-lg leading-relaxed font-medium"
                    >
                        {card.description}
                    </motion.div>
                 </div>
            </div>
            
            {/* Main Content Region */}
           <div className="flex-1 p-8 md:p-12 md:pt-24 overflow-visible md:overflow-y-auto custom-scrollbar bg-black/20 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ 
                        delay: 0.2, 
                        duration: 0.4, 
                        ease: EASE_OUT_QUART 
                    }}
                    className="prose prose-invert prose-lg max-w-none"
                >
                    {card.longDescription}
                </motion.div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
