import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Clock, Eye, Calendar } from "lucide-react";
import { useState } from "react";

export function VideoSection() {

  const videos = [
    {
      id: "1",
      title: "J.D.Michat \"Back to Bach\"",
      description: "Выступление с произведением «Back to Bach» в исполнении для саксофона",
      thumbnail: "https://images.unsplash.com/photo-1610254449353-5698372fa83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpYyUyMHBlcmZvcm1hbmNlJTIwY29uY2VydCUyMGhhbGx8ZW58MXx8fHwxNzU5NjE2NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "6:45",
      views: "2.1K",
      date: "2024",
      category: "Современная классика",
      embedUrl: "https://rutube.ru/video/8810b0d193a32f3c3e622835b8f7fa70/?r=wd",
      videoUrl: "https://rutube.ru/video/8810b0d193a32f3c3e622835b8f7fa70/?r=wd"
    },
    {
      id: "2", 
      title: "Концерты с органом - Дуэт с Жан Пьером Стайверсом",
      description: "Концертное выступление в дуэте с органистом Жан Пьером Стайверсом",
      thumbnail: "https://images.unsplash.com/photo-1644000067890-2dfa7aeda2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbiUyMGNodXJjaCUyMGNsYXNzaWNhbCUyMG11c2ljfGVufDF8fHx8MTc1OTYxNjYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "18:30",
      views: "3.8K",
      date: "2023",
      category: "Дуэты",
      embedUrl: "https://rutube.ru/video/7daf851c713f73f4a611211794f79edd/?r=wd",
      videoUrl: "https://rutube.ru/video/7daf851c713f73f4a611211794f79edd/?r=wd"
    },
    {
      id: "3",
      title: "Греческая сюита",
      description: "Исполнение «Греческой сюиты» - авторская интерпретация традиционных греческих мелодий",
      thumbnail: "https://images.unsplash.com/photo-1595775556780-0c8afe6cd36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpYyUyMHRoZWF0ZXIlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTk2MTY2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "12:15",
      views: "1.9K",
      date: "2024",
      category: "Народная музыка",
      embedUrl: "https://vk.com/video589612554_456241319",
      videoUrl: "https://vk.com/video589612554_456241319"
    }
  ];

  const categories = ["Все", "Современная классика", "Дуэты", "Народная музыка"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredVideos = activeCategory === "Все" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-orange-50/30 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Видеозаписи
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-300 to-orange-300 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Концертные выступления, мастер-классы и авторские интерпретации
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer px-4 py-2 transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-rose-400 to-orange-400 text-white hover:from-rose-500 hover:to-orange-500"
                  : "bg-white/80 text-foreground border-rose-200/50 hover:bg-rose-50 hover:border-rose-300"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>



        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <Card key={video.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-rose-100/50 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => window.open(video.videoUrl, '_blank')}
                    className="bg-white/90 hover:bg-white text-gray-900 w-16 h-16 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-200"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </button>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white border-none backdrop-blur-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-rose-400/90 to-orange-400/90 text-white border-none backdrop-blur-sm">
                    {video.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-rose-600 transition-colors duration-200">
                  {video.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              В этой категории пока нет видеозаписей
            </p>
          </div>
        )}

        <div className="mt-16 text-center space-y-4">
          <Badge className="bg-white/60 text-gray-700 border-rose-200 backdrop-blur-sm px-6 py-2">
            <Play className="mr-2 h-4 w-4" />
            Концертные записи и видеовыступления
          </Badge>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Избранные видеозаписи концертных выступлений, демонстрирующие мастерство исполнения и разнообразие репертуара
          </p>
        </div>
      </div>
    </section>
  );
}