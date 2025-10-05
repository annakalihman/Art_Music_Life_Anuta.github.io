import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, Heart, Target, Zap, Music, Lightbulb } from "lucide-react";

export function ApproachSection() {
  const approaches = [
    {
      icon: User,
      title: "Персональный подход",
      description: "Каждое выступление адаптируется под особенности аудитории и акустику зала",
      gradient: "from-rose-300 to-orange-300"
    },
    {
      icon: Heart,
      title: "Эмоциональное исполнение",
      description: "Глубокое погружение в музыкальное произведение и передача авторского замысла",
      gradient: "from-orange-300 to-amber-300"
    },
    {
      icon: Target,
      title: "Техническая точность",
      description: "Безупречное владение инструментом и внимание к каждой детали исполнения",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Современная интерпретация",
      description: "Свежий взгляд на классические произведения с сохранением их духа",
      gradient: "from-rose-400 to-orange-400"
    }
  ];

  const philosophyPoints = [
    "Музыка должна говорить с сердцем слушателя",
    "Каждое произведение имеет свою уникальную историю",
    "Техника служит выражению эмоций, а не наоборот",
    "Классическая музыка актуальна в любую эпоху",
    "Саксофон способен передать всю палитру человеческих чувств"
  ];

  return (
    <section id="approach" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Индивидуальный подход
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждое выступление — это уникальная история, рассказанная через музыку
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {approaches.map((approach, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-rose-100/50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${approach.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{approach.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {approach.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl mb-6 text-gray-900">
              Философия исполнения
            </h3>
            <div className="space-y-4">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-rose-300 to-orange-300 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Music className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-4 text-amber-500" />
              <h4 className="text-xl mb-4 text-gray-900">
                Ключевой принцип
              </h4>
              <p className="text-muted-foreground leading-relaxed italic">
                "Настоящее искусство начинается там, где заканчивается техника. 
                Моя задача — создать эмоциональный мост между композитором, 
                исполнителем и слушателем."
              </p>
              <Badge className="mt-4 bg-gradient-to-r from-rose-200/40 to-orange-200/40 text-foreground border-rose-200/50">
                — Калихман Анна
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}