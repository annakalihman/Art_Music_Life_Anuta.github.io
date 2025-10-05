import { useState, useEffect } from 'react';
import { Award, Star, Trophy, Music2, Users, Sparkles } from 'lucide-react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      text: "Лауреат Всероссийских и Международных конкурсов",
      icon: Trophy
    },
    {
      text: "Обладатель гранта президента Российской Федерации",
      icon: Award
    },
    {
      text: "Участница концертных программ фонда Владимира Спивакова",
      icon: Music2
    },
    {
      text: "Стипендиат фонда «Новые имена»",
      icon: Star
    },
    {
      text: "Участница программ образовательного центра «Сириус»",
      icon: Sparkles
    },
    {
      text: "Призёр молодёжных дельфийских игр России",
      icon: Users
    },
    {
      text: "Участница международного телевизионного конкурса «Щелкунчик»",
      icon: Star
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-orange-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">Краткая творческая биография</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессиональные достижения и признание
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}