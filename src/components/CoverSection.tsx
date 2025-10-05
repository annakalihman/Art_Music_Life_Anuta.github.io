import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function CoverSection() {
    const [isVisible, setIsVisible] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [userInteracted, setUserInteracted] = useState(false);

    const backgroundImages = [
        'https://images.unsplash.com/photo-1708689792969-9edab5fdfcaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXhvcGhvbmUlMjBjb25jZXJ0JTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NTk2NDc4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1740904258677-91d275aabdf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2F4b3Bob25lJTIwbXVzaWNpYW4lMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk2NDc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1601333057443-bc2b6e684bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXhvcGhvbmUlMjBjb25jZXJ0JTIwaGFsbCUyMHBlcmZvcm1hbmNlJTIwZ29sZGVuJTIwbGlnaHRpbmclMjBtdXNpY3xlbnwxfHx8fDE3NTk2NDY4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ];

    useEffect(() => {
        // Анимация появления контента
        setIsVisible(true);

        // ПРИОРИТЕТ ВИДЕО: Сразу пытаемся загрузить видео
        setVideoError(false);
        console.log('🎬 ЗАПУСК: Автоматическое видео Анны...');

        // Дополнительная попытка инициализации видео
        const initVideo = () => {
            const iframe = document.getElementById('anna-video') as HTMLIFrameElement;
            if (iframe) {
                console.log('🎬 Iframe найден, попытка автозапуска...');
                // Принудительно перезагружаем iframe для запуска видео
                const currentSrc = iframe.src;
                iframe.src = '';
                setTimeout(() => {
                    iframe.src = currentSrc;
                }, 100);
            }
        };

        // Инициализируем видео через 500ms
        const initTimer = setTimeout(initVideo, 500);

        // Слушаем любое взаимодействие пользователя для повторной попытки
        const handleUserInteraction = () => {
            if (!userInteracted) {
                setUserInteracted(true);
                console.log('👆 Пользователь взаимодействует, повторная попытка видео...');
                initVideo();
            }
        };

        // Добавляем слушатели взаимодействия
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        // Fallback только если видео точно не работает
        const fallbackTimer = setTimeout(() => {
            console.log('📸 Финальный таймаут, переключение на слайд-шоу...');
            setVideoError(true);
        }, 12000);

        // Слайд-шоу для фоновых изображений
        const slideTimer = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
        }, 6000);

        return () => {
            clearTimeout(initTimer);
            clearTimeout(fallbackTimer);
            clearInterval(slideTimer);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, [backgroundImages.length, userInteracted]);

    const scrollToNext = () => {
        const nextSection = document.getElementById('hero');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="cover"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">

                {/* 🎬 АВТОМАТИЧЕСКОЕ ФОНОВОЕ ВИДЕО - ПРИОРИТЕТНЫЙ РЕЖИМ */}
                <div className={`absolute inset-0 w-full h-full transition-opacity duration-2000 ${videoError ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
                        <iframe
                            id="anna-video"
                            src="https://rutube.ru/play/embed/be478c37f13456b40713629e6fb15ff7/?p=xkn0V2Q3tQFN5d8pwZH1Eg&autoStart=1&mute=1&loop=1&skinColor=000000&rel=0&showinfo=0&controls=0&modestbranding=1&playsinline=1"
                            width="100%"
                            height="100%"
                            allow="autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="eager"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0 pointer-events-none absolute top-0 left-0"
                            style={{
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                pointerEvents: 'none',
                                transform: 'scale(1.1)',
                                filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
                                objectFit: 'cover'
                            }}
                            onLoad={() => {
                                console.log('🎬 Anna\'s RuTube video loaded successfully!');
                            }}
                            onError={() => {
                                console.log('📸 RuTube failed, switching to image slideshow');
                                setVideoError(true);
                            }}
                        />
                    </div>
                </div>

                {/* 📸 FALLBACK: Красивое слайд-шоу изображений */}
                <div className={`absolute inset-0 transition-opacity duration-2000 ${videoError ? 'opacity-100' : 'opacity-0'}`}>
                    {backgroundImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-4000 transform ${
                                index === currentImageIndex
                                    ? 'opacity-100 scale-100'
                                    : 'opacity-0 scale-110'
                            }`}
                            style={{
                                backgroundImage: `url(${image})`,
                                filter: 'brightness(0.8) contrast(1.2) saturate(1.3)'
                            }}
                        />
                    ))}

                    {/* Дополнительный эффект для изображений */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
                </div>

                {/* Background overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

                {/* Elegant overlay pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-transparent to-orange-900/30"></div>
            </div>

            {/* Живой индикатор состояния */}
            <div className="absolute top-4 right-4 z-50 bg-black/30 backdrop-blur-md rounded-full px-4 py-2 text-white/80 text-sm border border-white/10">
                <div className="flex items-center gap-2">
                    {videoError ? (
                        <>
                            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                            <span>📸 Фото</span>
                        </>
                    ) : (
                        <>
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>🎬 Живое видео</span>
                        </>
                    )}
                </div>
            </div>

            {/* Скрытая кнопка для принудительного запуска видео */}
            {videoError && (
                <button
                    onClick={() => {
                        console.log('🎬 Ручной запуск видео...');
                        setVideoError(false);
                        const iframe = document.getElementById('anna-video') as HTMLIFrameElement;
                        if (iframe) {
                            const src = iframe.src;
                            iframe.src = '';
                            setTimeout(() => { iframe.src = src; }, 100);
                        }
                    }}
                    className="absolute top-4 left-4 z-50 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full p-3 text-white/60 hover:text-white/90 transition-all duration-300 border border-white/10"
                    title="Запустить видео"
                >
                    <div className="w-4 h-4 text-lg">🎬</div>
                </button>
            )}

            {/* Индикаторы слайд-шоу */}
            {videoError && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex space-x-2">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex
                                        ? 'bg-white/80 scale-125'
                                        : 'bg-white/40 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                        {/* Компактный и элегантный заголовок */}
                        <div className="relative mb-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-white drop-shadow-2xl leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-rose-100 to-orange-100 bg-clip-text text-transparent font-light">
                  Анна Калихман
                </span>
                            </h1>

                            {/* Компактная декоративная линия */}
                            <div className="flex justify-center items-center mb-6">
                                <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-24"></div>
                                <div className="mx-3 w-3 h-3 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 shadow-lg"></div>
                                <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-24"></div>
                            </div>
                        </div>

                        {/* Компактный подзаголовок */}
                        <div className="relative mb-10">
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 leading-relaxed tracking-wide">
                <span className="relative">
                  Саксофон
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-400/60 to-orange-400/60 rounded-full block"></span>
                </span>
                            </p>

                            <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed backdrop-blur-sm bg-black/10 rounded-2xl px-6 py-4 border border-white/10">
                                Артистичное исполнение • Современный подход к классике • Уникальная интерпретация
                            </p>
                        </div>

                        {/* Enhanced CTA Button */}
                        <Button
                            onClick={scrollToNext}
                            size="lg"
                            className="bg-gradient-to-r from-rose-500/90 to-orange-500/90 hover:from-rose-400 hover:to-orange-400 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full px-12 py-4 text-lg backdrop-blur-sm border border-white/20 group"
                        >
              <span className="flex items-center gap-3">
                Узнать больше
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex flex-col items-center animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/60 rounded-full mb-2 relative">
                        <div className="w-1 h-3 bg-white/80 rounded-full mx-auto mt-2 animate-pulse"></div>
                    </div>
                    <ChevronDown
                        className="w-6 h-6 text-white/60 cursor-pointer hover:text-white transition-colors duration-200"
                        onClick={scrollToNext}
                    />
                </div>
            </div>

            {/* Cinematic vignette effect */}
            <div className="absolute inset-0 pointer-events-none z-5">
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"></div>
            </div>
        </section>
    );
}