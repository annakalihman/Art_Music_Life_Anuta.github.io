import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Download, ExternalLink } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MusicSection() {
  const albums = [
    {
      title: "Классический саксофон 2024",
      year: "2024",
      genre: "Классика",
      description: "Конкурсная программа с лучшими произведениями для саксофона",
      image: "https://images.unsplash.com/photo-1594122230689-7f659cff55b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXhvcGhvbmUlMjBjbGFzc2ljYWwlMjBtdXNpYyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1OTYwOTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tracks: ["Дебюсси: Рапсодия для саксофона", "Глазунов: Концерт для саксофона", "Виллá-Лобос: Фантазия", "Рахманинов: Вокализ", "Пьяццолла: Либертанго"]
    },
    {
      title: "Новые имена России",
      year: "2023", 
      genre: "Современная классика",
      description: "Записи в рамках грантовой программы",
      image: "https://images.unsplash.com/photo-1698151923964-22149b074f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXhvcGhvbmUlMjBqYXp6JTIwY2xhc3NpY2FsJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTk2MDkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tracks: ["Миёд: Скарамуш", "Денисов: Соната для саксофона", "Эшпай: Концерт для саксофона", "Морис Равель: Болеро", "Бах: Ария на струне соль"]
    },
    {
      title: "Камерные миниатюры",
      year: "2022",
      genre: "Камерная музыка",
      description: "Записи камерных произведений с фондом Спивакова",
      image: "https://images.unsplash.com/photo-1702986956144-f51b17424f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXhvcGhvbmUlMjBjb25jZXJ0JTIwaGFsbCUyMGNsYXNzaWNhbHxlbnwxfHx8fDE3NTk2MDkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tracks: ["Чайковский: Лебединое озеро (сюита)", "Прокофьев: Ромео и Джульетта", "Шостакович: Вальс №2", "Хачатурян: Адажио Спартака", "Свиридов: Время, вперёд!"]
    }
  ];

  return (
    <section id="music" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Записи
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Коллекция записей классических произведений для саксофона
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-rose-100/50">
              <div className="relative">
                <ImageWithFallback
                  src={album.image}
                  alt={album.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-50 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Play className="mr-2 h-4 w-4" />
                    Слушать
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{album.title}</CardTitle>
                  <Badge className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-foreground border-purple-300/30">
                    {album.year}
                  </Badge>
                </div>
                <Badge className="w-fit bg-gradient-to-r from-rose-200/40 to-orange-200/40 text-foreground border-rose-200/50">
                  {album.genre}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {album.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Треки:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {album.tracks.map((track, trackIndex) => (
                      <li key={trackIndex} className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-muted flex items-center justify-center text-xs">
                          {trackIndex + 1}
                        </span>
                        {track}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Скачать
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-300 hover:bg-purple-50">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}