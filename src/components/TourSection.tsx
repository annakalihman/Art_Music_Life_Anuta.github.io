import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

export function TourSection() {
  const upcomingShows = [
    {
      date: "15 ноября 2024",
      time: "19:00",
      venue: "Центр им. Вс. Мейерхольда",
      city: "Саратов",
      status: "Свободный вход",
      ticketLink: "#",
      program: "Программа 'Новые имена' - классический саксофон"
    },
    {
      date: "22 ноября 2024",
      time: "18:00",
      venue: "Консерватория",
      city: "Санкт-Петербург", 
      status: "Мастер-класс",
      ticketLink: "#",
      program: "Техники игры на саксофоне"
    },
    {
      date: "5 декабря 2024",
      time: "16:00",
      venue: "Камерный зал филармонии",
      city: "Екатеринбург",
      status: "Благотворительный концерт",
      ticketLink: "#",
      program: "Дебюсси и современная классика"
    },
    {
      date: "15 декабря 2024",
      time: "19:00",
      venue: "Большой зал филармонии",
      city: "Новосибирск",
      status: "В рамках тура",
      ticketLink: "#",
      program: "Рождественские мелодии для саксофона"
    }
  ];

  const pastShows = [
    {
      date: "15 октября 2024",
      venue: "Главная сцена",
      city: "Казань",
      status: "Прошел"
    },
    {
      date: "8 октября 2024", 
      venue: "Арена",
      city: "Краснодар",
      status: "Прошел"
    }
  ];

  return (
    <section id="tour" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Концерты и туры</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Встретимся на живых выступлениях по всей стране
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl mb-6">Предстоящие концерты</h3>
          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {show.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {show.time}
                        </div>
                      </div>
                      
                      <h4 className="text-lg mb-1">{show.venue}</h4>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{show.city}</span>
                      </div>
                      
                      <p className="text-sm text-primary mb-2">{show.program}</p>
                      
                      <Badge 
                        variant={show.status === "Почти распродано" ? "destructive" : 
                                show.status === "Скоро в продаже" ? "secondary" : "default"}
                      >
                        {show.status}
                      </Badge>
                    </div>
                    
                    <Button 
                      disabled={show.status === "Скоро в продаже"}
                      className="md:w-auto w-full"
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      {show.status === "Скоро в продаже" ? "Скоро" : "Купить билет"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl mb-6">Прошедшие концерты</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pastShows.map((show, index) => (
              <Card key={index} className="opacity-75">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    {show.date}
                  </div>
                  <h4 className="font-medium">{show.venue}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {show.city}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}