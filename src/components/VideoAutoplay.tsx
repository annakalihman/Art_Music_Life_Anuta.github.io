import { useEffect } from 'react';

export function VideoAutoplay() {
  useEffect(() => {
    // Устанавливаем глобальные настройки для автовоспроизведения
    const enableAutoplay = () => {
      // Разрешаем автовоспроизведение в браузере
      if ('permissions' in navigator) {
        navigator.permissions.query({ name: 'autoplay' as any }).then((result) => {
          if (result.state === 'granted') {
            console.log('🎬 Автовоспроизведение разрешено');
          } else {
            console.log('📸 Автовоспроизведение заблокировано браузером');
          }
        }).catch(() => {
          console.log('📱 API permissions недоступен');
        });
      }

      // Добавляем мета-тег для мобильных устройств
      const metaAutoplay = document.createElement('meta');
      metaAutoplay.name = 'autoplay-policy';
      metaAutoplay.content = 'user-gesture-required';
      
      const existingMeta = document.querySelector('meta[name="autoplay-policy"]');
      if (!existingMeta) {
        document.head.appendChild(metaAutoplay);
      }

      // Устанавливаем политику для iframe
      const setIframePolicy = () => {
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
          iframe.setAttribute('allowfullscreen', 'true');
        });
      };

      // Проверяем каждые 500ms
      const checkInterval = setInterval(setIframePolicy, 500);
      
      // Очищаем через 10 секунд
      setTimeout(() => clearInterval(checkInterval), 10000);
    };

    enableAutoplay();
  }, []);

  return null; // Компонент невидимый
}