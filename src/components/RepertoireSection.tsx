import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Users, Award, Palette, ExternalLink } from "lucide-react";

export function RepertoireSection() {
  const repertoireCategories = [
    {
      title: "Классический репертуар",
      icon: BookOpen,
      gradient: "from-rose-400 to-orange-400",
      pieces: [
        "Александр Глазунов — Концерт для саксофона с оркестром",
        "Сергей Рахманинов — Романс номер 1, опус 6",
        "Сергей Плеханов — Aria Tristia",
        "Andre Waignein — Два Движения",
        "Denis Bedar — Фантазия"
      ]
    },
    {
      title: "Специальный репертуар",
      icon: Award,
      gradient: "from-orange-400 to-amber-400",
      pieces: [
        "Качинни — Аве Мария",
        "Andre Waignein — Рапсодия",
        "G. Tartini — Соната соль минор «Devil's Trill»",
        "Ежен Бозза — Ария"
      ]
    },
    {
      title: "Камерная музыка",
      icon: Users,
      gradient: "from-amber-400 to-rose-400",
      pieces: [
        "Дуэты с фортепиано",
        "Квартеты саксофонов",
        "Ансамбли духовых",
        "Трио с струнными",
        "Концерты с оркестром"
      ]
    },
    {
      title: "Авторские аранжировки",
      icon: Palette,
      gradient: "from-rose-500 to-orange-500",
      pieces: [
        {
          title: "Валенки — переложение для саксофона",
          link: "https://rutube.ru/video/8810b0d193a32f3c3e622835b8f7fa70/?r=wd"
        },
        {
          title: "Трава у дома — переложение для саксофона",
          link: "https://rutube.ru/video/7daf851c713f73f4a611211794f79edd/?r=wd"
        }
      ]
    }
  ];

  return (
    <section id="repertoire" className="py-20 bg-gradient-to-b from-white to-rose-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Репертуар
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-300 to-orange-300 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разнообразная программа от классических шедевров до современных интерпретаций
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {repertoireCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-rose-100/50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.pieces.map((piece, pieceIndex) => (
                    <li key={pieceIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {typeof piece === 'string' ? (
                        <span className="text-sm text-muted-foreground leading-relaxed">{piece}</span>
                      ) : (
                        <div className="flex items-center gap-2 group">
                          <span className="text-sm text-muted-foreground leading-relaxed">{piece.title}</span>
                          <a
                            href={piece.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-rose-500 hover:text-rose-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Слушать
                          </a>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Badge className="bg-white/60 text-gray-700 border-rose-200 backdrop-blur-sm px-6 py-2">
            <BookOpen className="mr-2 h-4 w-4" />
            Постоянно расширяю репертуар новыми произведениями
          </Badge>
        </div>
      </div>
    </section>
  );
}