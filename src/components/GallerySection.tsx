import { useState, useEffect } from 'react';
import { X, Play, Download, Share2 } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import annaOrganPhoto from 'figma:asset/989cae2e8d2403b8af3faef18a4f81f08ed5d08d.png';
import annaPerformancePhoto from 'figma:asset/de0d818ae805f953239aac39f3f4f6006f5034c9.png';
import annaGroupPhoto from 'figma:asset/b5a6612a788f7c9cf0ca2ad41d09f6d42a36d717.png';

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    
    const element = document.getElementById('gallery');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: annaOrganPhoto,
      alt: "Анна Калихман с саксофоном перед органом",
      title: "Концерт с органом",
      description: "Подготовка к выступлению с органным сопровождением"
    },
    {
      src: annaPerformancePhoto,
      alt: "Анна Калихман на сцене концертного зала",
      title: "На концертной сцене",
      description: "Выступление в концертном зале с органом"
    },
    {
      src: annaGroupPhoto,
      alt: "Анна Калихман с коллегами-музыкантами",
      title: "С коллегами-музыкантами",
      description: "После концерта с участниками ансамбля"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50/30 to-orange-50/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-800">Галерея</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Моменты творчества и профессиональные кадры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group cursor-pointer transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg bg-white">
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-lg mb-1">{image.title}</h4>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="w-8 h-8 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image preview */}
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0">
              <div className="relative">
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 p-0 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className="relative">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  
                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-2xl text-white mb-2">{images[selectedImage].title}</h3>
                    <p className="text-gray-200">{images[selectedImage].description}</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}