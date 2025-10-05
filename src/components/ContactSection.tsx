import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    toast.success('Сообщение отправлено! Анна свяжется с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-orange-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-800">Контакты для связи</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Готова обсудить ваше мероприятие и создать незабываемую музыкальную атмосферу
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-6 text-gray-800">Контактная информация</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-rose-400 to-orange-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a 
                        href="mailto:kalihmanana@yandex.ru"
                        className="text-lg text-gray-800 hover:text-rose-500 transition-colors"
                      >
                        kalihmanana@yandex.ru
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-orange-400 to-yellow-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Телефон</p>
                      <a 
                        href="tel:+79873283425"
                        className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                      >
                        +7 (987) 328-34-25
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-rose-400 to-pink-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Город</p>
                      <p className="text-lg text-gray-800">Саратов</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-purple-400 to-rose-400 p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Время ответа</p>
                      <p className="text-lg text-gray-800">В течение 24 часов</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg mb-4 text-gray-800">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://vk.com/annakalihman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    ВКонтакте
                  </a>
                  <a 
                    href="https://t.me/annakalihman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-rose-500" />
                  <span>Форма для сотрудничества</span>
                </CardTitle>
                <CardDescription>
                  Расскажите о вашем мероприятии, и я подготовлю персональное предложение
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventType">Тип мероприятия</Label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="mt-1"
                        placeholder="Свадьба, концерт, корпоратив..."
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date">Предполагаемая дата</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Расскажите подробнее о вашем мероприятии, пожеланиях к репертуару, бюджете и других важных деталях..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}