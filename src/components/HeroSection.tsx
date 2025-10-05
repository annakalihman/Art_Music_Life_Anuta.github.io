import { useState, useEffect } from 'react';
import { Play, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import annaPhoto from 'figma:asset/8e0d16f98d6b24b66321cf533b8e0ec7c2dcff61.png';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('hero');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <Badge className="bg-orange-50 text-orange-600 border-orange-200 mb-6">
              🎵 Профессиональный музыкант
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl mb-6 text-gray-800">
              Анна <br/>
              <span className="text-rose-400">Калихман</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Лауреат Всероссийских и международных конкурсов, исполнитель, организатор мероприятий и авторских концертных программ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                size="lg" 
                className="bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white shadow-lg transform hover:scale-105 transition-all duration-200 rounded-full px-8"
              >
                Узнать больше
              </Button>
              
              <Button 
                onClick={() => scrollToSection('gallery')}
                variant="outline" 
                size="lg" 
                className="border-rose-300 text-rose-400 hover:bg-rose-50 rounded-full px-8"
              >
                <Play className="mr-2 h-5 w-5" />
                Галерея
              </Button>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative max-w-md mx-auto">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={annaPhoto}
                  alt="Анна Калихман"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-400 to-orange-400 p-3 rounded-full shadow-lg animate-pulse">
                <Award className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-full shadow-lg animate-pulse delay-300">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}