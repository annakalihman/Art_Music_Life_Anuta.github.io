# 🎬 Инструкции по получению прямой ссылки с Яндекс.Диска

## Ваше видео
**Ссылка:** https://disk.yandex.ru/i/8e90yzrWlSDYUw

## 🔧 Способы получения прямой ссылки:

### Метод 1: Через API Яндекс.Диска
```javascript
// Автоматический запрос к API (уже реализован в коде)
const publicKey = 'https://disk.yandex.ru/i/8e90yzrWlSDYUw';
const apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${encodeURIComponent(publicKey)}`;
```

### Метод 2: Ручное получение ссылки
1. Откройте: https://disk.yandex.ru/i/8e90yzrWlSDYUw
2. Нажмите "Скачать"
3. Скопируйте прямую ссылку из адресной строки
4. Вставьте в код вместо `YOUR_DIRECT_VIDEO_URL`

### Метод 3: Альтернативные сервисы
- Используйте прокси-сервисы для получения прямых ссылок
- Загрузите видео на другой хостинг (YouTube, Vimeo)

## 📱 Текущая реализация:
- ✅ Автоматическое получение прямой ссылки через API
- ✅ Несколько fallback методов
- ✅ Красивый fallback на изображение
- ✅ Индикаторы загрузки
- ✅ Контролы воспроизведения

## 🎯 Альтернативные решения:
1. **YouTube:** Загрузите видео на YouTube и используйте iframe
2. **Vimeo:** Профессиональная платформа для видео
3. **CDN:** Используйте любой CDN для хостинга файлов
4. **GitHub:** Загрузите видео в GitHub и используйте raw ссылку

## 🔄 Обновление ссылки в коде:
Найдите в `/components/CoverSection.tsx` строку:
```tsx
<source src="YOUR_DIRECT_VIDEO_URL" type="video/mp4" />
```
И замените `YOUR_DIRECT_VIDEO_URL` на вашу прямую ссылку.