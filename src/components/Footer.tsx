import { Music, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-50 to-orange-50 border-t border-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Music className="h-6 w-6 text-rose-400" />
              <span className="text-lg text-gray-800">Анна Калихман</span>
            </div>
            <p className="text-muted-foreground">
              Саксофон, создающий уникальные музыкальные переживания через искусство исполнения.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg text-gray-800 mb-4">Контакты</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground">
                <a href="mailto:kalihmanana@yandex.ru" className="hover:text-rose-400 transition-colors">
                  kalihmanana@yandex.ru
                </a>
              </div>
              <div className="text-muted-foreground">
                <a href="tel:+79873283425" className="hover:text-rose-400 transition-colors">
                  +7 (987) 328-34-25
                </a>
              </div>
              <div className="text-muted-foreground">
                Саратов
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <a 
                  href="https://vk.com/annakalihman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  ВК
                </a>
                <a 
                  href="https://t.me/annakalihman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-right">
            <h4 className="text-lg text-gray-800 mb-4">Навигация</h4>
            <div className="space-y-2">
              {['О себе', 'Репертуар', 'Подход', 'Мероприятия', 'Видео', 'Галерея', 'Контакты'].map((item) => (
                <div key={item} className="text-muted-foreground hover:text-rose-400 transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-orange-100 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>© 2024 Анна Калихман. Создано с</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>для музыки</span>
          </div>
        </div>
      </div>
    </footer>
  );
}