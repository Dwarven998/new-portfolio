import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Upload, CheckCircle2, AlertCircle, X, Shield, Zap, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { 
  AssetMap, 
  getAllAssetsFromDB, 
  saveAssetToDB, 
  clearAllAssetsFromDB 
} from '../utils/spiderAssetStore';

interface SpiderProfileTransformationProps {
  className?: string;
}

export const SpiderProfileTransformation: React.FC<SpiderProfileTransformationProps> = ({
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transformStage, setTransformStage] = useState<'idle' | 'glitching' | 'mid' | 'spiderman'>('idle');
  const [isGlitching, setIsGlitching] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  
  // Custom uploaded images in base64 / blob
  const [customAssets, setCustomAssets] = useState<Partial<AssetMap>>({});
  
  // Track image load errors to prevent browser broken image icon
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const timerRef = useRef<NodeJS.Timeout[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Asset paths (Default public directory paths + custom asset store)
  const assetUrls = {
    original: customAssets.original || '/01_original_profile.png',
    mid: customAssets.mid || '/02_transformation_mid_state.png',
    spiderman: customAssets.spiderman || '/03_spiderman_variant.png',
    webOverlay: customAssets.webOverlay || '/04_web_overlay.png',
    energyGlitch: customAssets.energyGlitch || '/05_energy_glitch_overlay.png',
  };

  // Load any previously uploaded assets from IndexedDB on mount
  useEffect(() => {
    const loadSavedAssets = async () => {
      try {
        const stored = await getAllAssetsFromDB();
        if (stored && Object.keys(stored).length > 0) {
          setCustomAssets(stored);
          const loadedMap: { [key: string]: boolean } = {};
          Object.keys(stored).forEach((k) => {
            if (stored[k as keyof AssetMap]) loadedMap[k] = true;
          });
          setLoadedImages((prev) => ({ ...prev, ...loadedMap }));
        }
      } catch (err) {
        console.warn('Could not load assets from DB:', err);
      }
    };
    loadSavedAssets();
  }, []);

  // Handle image load success / failure
  const handleImageLoad = (key: string) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
    setImgErrors((prev) => ({ ...prev, [key]: false }));
  };

  const handleImageError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
    setLoadedImages((prev) => ({ ...prev, [key]: false }));
  };

  // Process uploaded files with smart matching
  const processFiles = useCallback((files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    
    // Sort or map files by name
    fileList.forEach((file) => {
      const reader = new FileReader();
      const name = file.name.toLowerCase();

      reader.onload = async (e) => {
        const dataUrl = e.target?.result as string;
        if (!dataUrl) return;

        let detectedKey: keyof AssetMap | null = null;
        if (name.includes('01') || name.includes('original') || name.includes('default') || name.includes('profile')) {
          detectedKey = 'original';
        } else if (name.includes('02') || name.includes('transformation') || name.includes('mid') || name.includes('transit')) {
          detectedKey = 'mid';
        } else if (name.includes('03') || name.includes('spiderman') || name.includes('spider') || name.includes('variant')) {
          detectedKey = 'spiderman';
        } else if (name.includes('04') || name.includes('web') || name.includes('overlay')) {
          detectedKey = 'webOverlay';
        } else if (name.includes('05') || name.includes('energy') || name.includes('glitch') || name.includes('spark')) {
          detectedKey = 'energyGlitch';
        }

        // If file name didn't match patterns, fallback based on index if exactly 5 were dropped
        if (!detectedKey && fileList.length === 5) {
          const index = fileList.indexOf(file);
          const keys: (keyof AssetMap)[] = ['original', 'mid', 'spiderman', 'webOverlay', 'energyGlitch'];
          detectedKey = keys[index] || null;
        }

        if (detectedKey) {
          setCustomAssets((prev) => ({ ...prev, [detectedKey!]: dataUrl }));
          setLoadedImages((prev) => ({ ...prev, [detectedKey!]: true }));
          setImgErrors((prev) => ({ ...prev, [detectedKey!]: false }));
          await saveAssetToDB(detectedKey, dataUrl);
        }
      };
      reader.readAsDataURL(file);
    });
  }, []);

  // Listen for paste event on window/card
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        processFiles(e.clipboardData.files);
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [processFiles]);

  // Timer clean up
  const clearTimers = () => {
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];
  };

  // Hover Transformation Animation Timeline
  useEffect(() => {
    clearTimers();

    if (isHovered) {
      // Step 1: Initial glitched energy pulse & lighting (80ms)
      const t1 = setTimeout(() => {
        setTransformStage('glitching');
        setIsGlitching(true);
      }, 80);

      // Step 2: Mid-state transformation reveal (300ms)
      const t2 = setTimeout(() => {
        setTransformStage('mid');
      }, 300);

      // Step 3: Settle chromatic flicker (550ms)
      const t3 = setTimeout(() => {
        setIsGlitching(false);
      }, 550);

      // Step 4: Final Spider-Man superhero state (780ms - 900ms)
      const t4 = setTimeout(() => {
        setTransformStage('spiderman');
      }, 780);

      timerRef.current = [t1, t2, t3, t4];
    } else {
      // Reverse transformation sequence: Spiderman -> Mid -> Idle (0.5s - 0.7s)
      if (transformStage === 'spiderman') {
        const t1 = setTimeout(() => {
          setTransformStage('mid');
        }, 120);

        const t2 = setTimeout(() => {
          setTransformStage('idle');
          setIsGlitching(false);
        }, 450);

        timerRef.current = [t1, t2];
      } else {
        setTransformStage('idle');
        setIsGlitching(false);
      }
    }

    return () => clearTimers();
  }, [isHovered]);

  const hasLoadedOriginal = loadedImages.original && !imgErrors.original;
  const hasLoadedSpiderman = loadedImages.spiderman && !imgErrors.spiderman;
  const hasLoadedMid = loadedImages.mid && !imgErrors.mid;
  const hasCustom = Object.keys(customAssets).length > 0;

  return (
    <div
      className={`relative select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered((prev) => !prev)}
      id="spider-profile-container"
    >
      {/* Hidden File Input for uploading 5 assets */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/png, image/jpeg, image/webp"
        className="hidden"
        onChange={(e) => processFiles(e.target.files || [])}
      />

      {/* Main Profile Card Frame */}
      <div 
        className={`relative bg-white border ${
          isDragOver ? 'border-red-500 ring-2 ring-red-400' : 'border-black/15'
        } shadow-xl transition-all duration-500 overflow-hidden group`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          if (e.dataTransfer.files) {
            processFiles(e.dataTransfer.files);
          }
        }}
      >
        
        {/* Technical Top Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-black text-white text-[10px] font-mono tracking-wider border-b border-black/20 z-20 relative">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              isHovered 
                ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)] animate-pulse' 
                : 'bg-emerald-400'
            }`} />
            <span className="font-bold uppercase tracking-widest">
              {isHovered ? 'SPIDER-PROTOCOL ACTIVE' : 'PROFILE // VERIFIED'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/70 font-mono text-[9px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowUploader(!showUploader);
              }}
              className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[9px] transition-colors flex items-center gap-1 cursor-pointer"
              title="Upload or manage the 5 PNG images"
            >
              <Upload className="w-2.5 h-2.5" />
              <span>{hasCustom ? 'ASSETS SYNCED' : 'UPLOAD 5 IMAGES'}</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/90 font-bold">ALGIAN</span>
          </div>
        </div>

        {/* Interactive Image Frame (Aspect 3:4 for portrait alignment) */}
        <div className="relative w-full aspect-[3/4] bg-[#EAEAE8] overflow-hidden">
          
          {/* Subtle Technical Grid Lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

          {/* Drag & Drop Overlay Indicator */}
          {isDragOver && (
            <div className="absolute inset-0 bg-red-600/90 text-white z-40 flex flex-col items-center justify-center p-4 text-center font-mono">
              <Upload className="w-8 h-8 mb-2 animate-bounce" />
              <span className="text-sm font-bold uppercase">Drop your 5 PNGs here</span>
              <span className="text-xs opacity-80 mt-1">Automatic matching & saving to browser</span>
            </div>
          )}

          {/* 1. Cinematic Red & Blue Rim Lighting Gradients */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-opacity duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Left Edge: Vibrant Spider-Man Crimson Rim Light */}
            <div 
              className="absolute -left-12 -top-12 bottom-0 w-48 bg-radial from-red-600/40 via-rose-500/20 to-transparent blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
            {/* Right Edge: Vibrant Spider-Man Electric Blue Rim Light */}
            <div 
              className="absolute -right-12 -top-12 bottom-0 w-48 bg-radial from-blue-600/40 via-cyan-500/20 to-transparent blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
            {/* Bottom Ambient Glow */}
            <div 
              className="absolute -bottom-10 left-0 right-0 h-28 bg-radial from-red-500/25 via-blue-500/20 to-transparent blur-xl"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>

          {/* Core Portrait Wrapper with 3D Depth & Micro Zoom */}
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-out ${
              isHovered ? 'scale-[1.025] translate-y-[-2px]' : 'scale-100 translate-y-0'
            }`}
          >
            {/* ------------------------------------------------------------- */}
            {/* LAYER 1: 01_original_profile.png (Base Portrait)              */}
            {/* High-contrast Black & White when idle, full-tone when hovered  */}
            {/* ------------------------------------------------------------- */}
            {!imgErrors.original && (
              <div
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isHovered
                    ? 'filter grayscale-0 contrast-100 brightness-100'
                    : 'filter grayscale contrast-[1.08] brightness-[1.02]'
                }`}
              >
                <img
                  src={assetUrls.original}
                  alt=""
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad('original')}
                  onError={() => handleImageError('original')}
                  className={`w-full h-full object-cover object-top select-none pointer-events-none transition-opacity duration-300 ${
                    loadedImages.original ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* LAYER 2: 02_transformation_mid_state.png                      */}
            {/* ------------------------------------------------------------- */}
            {!imgErrors.mid && (
              <div
                className={`absolute inset-0 transition-opacity duration-500 ease-out pointer-events-none ${
                  transformStage === 'mid' || (isHovered && transformStage === 'glitching')
                    ? 'opacity-95'
                    : transformStage === 'spiderman'
                    ? 'opacity-25'
                    : 'opacity-0'
                }`}
                style={{
                  mixBlendMode: transformStage === 'mid' ? 'normal' : 'plus-lighter',
                }}
              >
                <img
                  src={assetUrls.mid}
                  alt=""
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad('mid')}
                  onError={() => handleImageError('mid')}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* LAYER 3: 03_spiderman_variant.png (Hero Suit Variant)         */}
            {/* ------------------------------------------------------------- */}
            {!imgErrors.spiderman && (
              <div
                className={`absolute inset-0 transition-all duration-600 ease-in-out pointer-events-none ${
                  transformStage === 'spiderman'
                    ? 'opacity-100 scale-100'
                    : transformStage === 'mid'
                    ? 'opacity-20 scale-[0.995]'
                    : 'opacity-0 scale-[0.99]'
                }`}
              >
                <img
                  src={assetUrls.spiderman}
                  alt=""
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad('spiderman')}
                  onError={() => handleImageError('spiderman')}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* LAYER 4: 04_web_overlay.png (Web Strands)                     */}
            {/* ------------------------------------------------------------- */}
            {!imgErrors.webOverlay && (
              <div
                className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
                  isHovered ? 'opacity-85 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  mixBlendMode: 'screen',
                  filter: isHovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none',
                }}
              >
                <img
                  src={assetUrls.webOverlay}
                  alt=""
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad('webOverlay')}
                  onError={() => handleImageError('webOverlay')}
                  className="w-full h-full object-cover object-center select-none"
                />
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* LAYER 5: 05_energy_glitch_overlay.png (Energy & Sparks)       */}
            {/* ------------------------------------------------------------- */}
            {!imgErrors.energyGlitch && (
              <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                  isGlitching || transformStage === 'glitching'
                    ? 'opacity-100'
                    : isHovered && transformStage === 'spiderman'
                    ? 'opacity-40'
                    : 'opacity-0'
                }`}
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.25) contrast(1.2)',
                }}
              >
                <img
                  src={assetUrls.energyGlitch}
                  alt=""
                  referrerPolicy="no-referrer"
                  onLoad={() => handleImageLoad('energyGlitch')}
                  onError={() => handleImageError('energyGlitch')}
                  className="w-full h-full object-cover object-center select-none animate-pulse"
                />
              </div>
            )}

            {/* ------------------------------------------------------------- */}
            {/* HIGH-FIDELITY VECTOR TRANSFORMATION FALLBACK & TRIGGER         */}
            {/* Renders cleanly if PNG files are not yet loaded               */}
            {/* ------------------------------------------------------------- */}
            {(!hasLoadedOriginal || !hasLoadedSpiderman) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-15 bg-[#EAEAE8]">
                <div className="relative w-36 h-36 mb-4">
                  {/* Outer Glowing Energy Rings */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                    isHovered 
                      ? 'bg-gradient-to-tr from-red-600 via-rose-500 to-blue-600 animate-spin opacity-80 blur-md' 
                      : 'bg-black/10 opacity-30'
                  }`} style={{ animationDuration: '5s' }} />

                  {/* Core Circular Hero Avatar */}
                  <div className="relative w-full h-full rounded-full bg-white border-2 border-black flex items-center justify-center overflow-hidden shadow-inner">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Web background grid */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke={isHovered ? '#ef4444' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke={isHovered ? '#3b82f6' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <circle cx="50" cy="50" r="15" fill="none" stroke={isHovered ? '#ef4444' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <line x1="50" y1="5" x2="50" y2="95" stroke={isHovered ? '#ef4444' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <line x1="5" y1="50" x2="95" y2="50" stroke={isHovered ? '#3b82f6' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <line x1="18" y1="18" x2="82" y2="82" stroke={isHovered ? '#ef4444' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      <line x1="82" y1="18" x2="18" y2="82" stroke={isHovered ? '#3b82f6' : '#000000'} strokeWidth="0.8" opacity="0.35" />
                      
                      {/* Spider Mask Emblem Silhouette */}
                      <path
                        d="M 50 20 C 35 20 30 35 30 50 C 30 68 45 80 50 85 C 55 80 70 68 70 50 C 70 35 65 20 50 20 Z"
                        fill={isHovered ? '#b91c1c' : '#18181b'}
                        stroke={isHovered ? '#dc2626' : '#000000'}
                        strokeWidth="1.5"
                        className="transition-colors duration-500"
                      />
                      
                      {/* Spider Eyes / Lenses */}
                      <path
                        d="M 38 45 Q 45 42 48 52 Q 42 56 36 50 Z"
                        fill="white"
                        stroke="#000000"
                        strokeWidth="1"
                        className={isHovered ? 'animate-pulse' : ''}
                      />
                      <path
                        d="M 62 45 Q 55 42 52 52 Q 58 56 64 50 Z"
                        fill="white"
                        stroke="#000000"
                        strokeWidth="1"
                        className={isHovered ? 'animate-pulse' : ''}
                      />
                    </svg>
                  </div>
                </div>

                <div className="font-mono text-xs text-black font-black uppercase tracking-wider mb-2">
                  {isHovered ? 'Spider-Protocol Active' : 'Algian — Profile Asset Ready'}
                </div>

                {/* 1-Click Select Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-3.5 py-1.5 bg-black hover:bg-zinc-800 text-white font-mono text-[10px] font-bold tracking-wider rounded-none flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>SELECT 5 PNG ASSETS</span>
                </button>
                
                <span className="text-[9px] font-mono text-black/50 mt-2">
                  Or drag & drop your 5 PNGs directly onto this card
                </span>
              </div>
            )}

            {/* Chromatic Glitch Scanlines */}
            {isGlitching && (
              <div 
                className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-80"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,0,50,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,100,255,0.2) 1px, transparent 1px)`,
                  backgroundSize: '4px 4px',
                }}
              />
            )}

            {/* Spider-Sense Pulse Effect */}
            <AnimatePresence>
              {isHovered && transformStage === 'glitching' && (
                <motion.div
                  initial={{ opacity: 0.8, scale: 0.85 }}
                  animate={{ opacity: 0, scale: 1.25 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute inset-0 border-2 border-red-500/80 rounded-none pointer-events-none z-30"
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(239,68,68,0.6), 0 0 20px rgba(59,130,246,0.6)',
                  }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Technical Corner Crop Accents */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-black/40 pointer-events-none z-20" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-black/40 pointer-events-none z-20" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-black/40 pointer-events-none z-20" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-black/40 pointer-events-none z-20" />

          {/* Subtle Hover Action Pill at Bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-md ${
              isHovered
                ? 'bg-black/90 text-white border border-red-500/50 backdrop-blur-md'
                : 'bg-white/95 text-black border border-black/20 backdrop-blur-sm'
            }`}>
              <Sparkles className={`w-3 h-3 ${isHovered ? 'text-red-400 animate-spin' : 'text-black/60'}`} />
              <span className="font-bold">
                {isHovered ? 'SPIDER-MAN VARIANT' : 'HOVER TO TRANSFORM'}
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Bottom Meta Bar */}
        <div className="p-3.5 bg-white border-t border-black/10 flex flex-col gap-2 z-20 relative text-[#121212]">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="font-black">ALGIAN</span>
              <span className="text-black/30">|</span>
              <span className="text-black/60 text-[11px]">DEVELOPER & DESIGNER</span>
            </div>
            <div className="text-[10px] font-bold text-black/50">
              {isHovered ? 'PHASE: 03/03' : 'PHASE: 01/03'}
            </div>
          </div>

          {/* Transformation Step Visualizer Pills */}
          <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-black/5 font-mono text-[9px]">
            <div className={`p-1 text-center transition-colors border ${
              transformStage === 'idle'
                ? 'bg-black text-white font-bold border-black'
                : 'bg-black/5 text-black/60 border-black/10'
            }`}>
              01 ORIGINAL
            </div>
            <div className={`p-1 text-center transition-colors border ${
              transformStage === 'mid' || transformStage === 'glitching'
                ? 'bg-black text-white font-bold border-black'
                : 'bg-black/5 text-black/60 border-black/10'
            }`}>
              02 TRANSIT
            </div>
            <div className={`p-1 text-center transition-colors border ${
              transformStage === 'spiderman'
                ? 'bg-red-700 text-white font-bold border-red-800 shadow-sm'
                : 'bg-black/5 text-black/60 border-black/10'
            }`}>
              03 SPIDER-MAN
            </div>
          </div>
        </div>

      </div>

      {/* Asset Manager Modal / Slide-down Drawer */}
      <AnimatePresence>
        {showUploader && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-12 inset-x-2 bg-white border-2 border-black p-4 z-40 shadow-2xl font-mono text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-black/10 mb-3">
              <div className="flex items-center gap-1.5 font-bold text-black">
                <Upload className="w-3.5 h-3.5" />
                <span>SPIDER ASSET MANAGER</span>
              </div>
              <button
                onClick={() => setShowUploader(false)}
                className="p-1 hover:bg-black/5 text-black/70 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-black/70 mb-3 leading-relaxed">
              Drag and drop your 5 PNG images anywhere onto the card or click below:
            </p>

            {/* Drop Zone Button */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="p-4 border-2 border-dashed border-black/20 hover:border-black bg-black/5 hover:bg-black/10 text-center cursor-pointer transition-colors mb-3"
            >
              <Upload className="w-5 h-5 mx-auto mb-1.5 text-black/60" />
              <span className="font-bold text-black text-[11px] block">
                CLICK TO SELECT 5 PNGs
              </span>
              <span className="text-[9px] text-black/50">
                01_original, 02_transformation, 03_spiderman, 04_web, 05_energy_glitch
              </span>
            </div>

            {/* Asset Status Checklist */}
            <div className="space-y-1.5 text-[10px] border-t border-black/10 pt-2.5">
              {[
                { key: 'original', name: '01_original_profile.png' },
                { key: 'mid', name: '02_transformation_mid_state.png' },
                { key: 'spiderman', name: '03_spiderman_variant.png' },
                { key: 'webOverlay', name: '04_web_overlay.png' },
                { key: 'energyGlitch', name: '05_energy_glitch_overlay.png' },
              ].map((item) => {
                const isPresent = Boolean(customAssets[item.key as keyof AssetMap] || loadedImages[item.key]);
                return (
                  <div key={item.key} className="flex items-center justify-between">
                    <span className="text-black/80">{item.name}</span>
                    {isPresent ? (
                      <span className="flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    ) : (
                      <span className="text-amber-600 font-medium">Awaiting</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            {hasCustom && (
              <div className="pt-3 mt-3 border-t border-black/10 flex justify-end">
                <button
                  onClick={async () => {
                    await clearAllAssetsFromDB();
                    setCustomAssets({});
                    setLoadedImages({});
                    setImgErrors({});
                  }}
                  className="px-2 py-1 text-[10px] text-red-600 hover:bg-red-50 border border-red-200 cursor-pointer"
                >
                  Reset Loaded Assets
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
