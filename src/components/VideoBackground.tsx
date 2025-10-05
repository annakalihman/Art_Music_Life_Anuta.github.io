import { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  youtubeId?: string;
  vimeoId?: string;
  directUrl?: string;
  fallbackImage: string;
}

export function VideoBackground({ 
  youtubeId, 
  vimeoId, 
  directUrl, 
  fallbackImage 
}: VideoBackgroundProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Delay video load for better performance
    const timer = setTimeout(() => setShowVideo(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // YouTube embed
  if (youtubeId && showVideo && !hasError) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=${youtubeId}`}
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{ 
            minWidth: '100%', 
            minHeight: '100%',
            objectFit: 'cover',
            pointerEvents: 'none'
          }}
          onError={() => setHasError(true)}
        />
        {/* Overlay to prevent interaction */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    );
  }

  // Vimeo embed
  if (vimeoId && showVideo && !hasError) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&controls=0&background=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          style={{ 
            minWidth: '100%', 
            minHeight: '100%',
            pointerEvents: 'none'
          }}
          onError={() => setHasError(true)}
        />
        {/* Overlay to prevent interaction */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    );
  }

  // Direct video URL
  if (directUrl && showVideo && !hasError) {
    return (
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setHasError(true)}
      >
        <source src={directUrl} type="video/mp4" />
      </video>
    );
  }

  // Fallback image
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fallbackImage})` }}
    />
  );
}