import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Church, Users, Handshake, Calendar, MapPin, Clock, Star } from "lucide-react";

export function EventsSection() {
  const eventCategories = [
    {
      title: "Коммерческие выступления",
      icon: Building2,
      gradient: "from-rose-400 to-orange-400",
      description: "Профессиональные выступления для корпоративных мероприятий и частных событий",
      services: [
        "Корпоративные мероприятия",
        "Торжественные церемонии",
        "Презентации и открытия", 
        "Частные торжества",
        "Свадебные церемонии"
      ],
      features: [
        { icon: Clock, text: "Выступления от 30 минут до 2 часов" },
        { icon: MapPin, text: "По всей России" },
        { icon: Star, text: "Индивидуальный подход к каждому событию" }
      ]
    },
    {
      title: "Концерты с органом",
      icon: Church,
      gradient: "from-orange-400 to-amber-400",
      description: "Уникальные концертные программы в сопровождении органа",
      services: [
        "Концерты в соборах и церквях",
        "Духовная музыка",
        "Классический репертуар",
        "Современные интерпретации",
        "Рождественские концерты"
      ],
      features: [
        { icon: Church, text: "Выступления в исторических залах" },
        { icon: Calendar, text: "Регулярные концертные программы" },
        { icon: Star, text: "Уникальное звучание саксофон-орган" }
      ]
    },
    {
      title: "Концерты с оркестром",
      icon: Users,
      gradient: "from-amber-400 to-rose-400",
      description: "Сольные выступления с симфоническими и камерными оркестрами",
      services: [
        "Симфонические концерты",
        "Камерные программы",
        "Концерты с духовым оркестром",
        "Молодежные концерты",
        "Фестивальные выступления"
      ],
      features: [
        { icon: Users, text: "Сотрудничество с ведущими оркестрами" },
        { icon: MapPin, text: "Концертные залы и филармонии" },
        { icon: Star, text: "Сольные партии в симфониях" }
      ]
    },
    {
      title: "Сотрудничество",
      icon: Handshake,
      gradient: "from-rose-500 to-orange-500",
      description: "Творческие партнерства и совместные проекты",
      services: [
        "Дуэты с пианистами",
        "Ансамбли саксофонов",
        "Междисциплинарные проекты",
        "Образовательные программы",
        "Мастер-классы"
      ],
      features: [
        { icon: Handshake, text: "Долгосрочные творческие партнерства" },
        { icon: Calendar, text: "Регулярные совместные концерты" },
        { icon: Star, text: "Инновационные музыкальные проекты" }
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-200 to-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Мероприятия
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-300 to-orange-300 mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разнообразные форматы выступлений для любых событий и площадок
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-rose-100/50">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Services */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Виды мероприятий:</h4>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Особенности:</h4>
                  <div className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <feature.icon className="w-4 h-4 text-rose-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Badge className="bg-white/60 text-gray-700 border-rose-200 backdrop-blur-sm px-6 py-2">
            <Calendar className="mr-2 h-4 w-4" />
            Открыта для новых предложений и творческих проектов
          </Badge>
        </div>
      </div>
    </section>
  );
}