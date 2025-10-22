import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Graduate {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface Production {
  id: number;
  title: string;
  year: string;
  image: string;
  description: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const graduates: Graduate[] = [
    { id: 1, name: 'Анна Смирнова', role: 'Актриса драматического театра', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png' },
    { id: 2, name: 'Дмитрий Петров', role: 'Актёр музыкального театра', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png' },
    { id: 3, name: 'Елена Иванова', role: 'Актриса театра и кино', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png' },
    { id: 4, name: 'Михаил Козлов', role: 'Актёр драматического театра', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png' },
  ];

  const productions: Production[] = [
    { id: 1, title: 'Гамлет', year: '2024', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png', description: 'Дипломный спектакль' },
    { id: 2, title: 'Вишнёвый сад', year: '2023', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png', description: 'Постановка третьего курса' },
    { id: 3, title: 'Чайка', year: '2023', image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png', description: 'Экзаменационная работа' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ТЕАТР ФИРАХ</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'graduates', 'productions', 'gallery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm hover:text-accent transition-colors ${
                    activeSection === section ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О курсе'}
                  {section === 'graduates' && 'Выпускники'}
                  {section === 'productions' && 'Спектакли'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Курс Андрея Ярлыкова
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Театральное училище имени Евстигнеева
          </p>
          <div className="flex gap-4 justify-center text-4xl mb-12">
            <span>🎭</span>
            <span>🎬</span>
            <span>📹</span>
            <span>🎪</span>
          </div>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => scrollToSection('graduates')}
          >
            Смотреть портфолио
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">О курсе</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Курс Андрея Алексеевича Ярлыкова в Театральном училище имени Евстигнеева — это сообщество 
              талантливых актёров, объединённых общей любовью к театральному искусству. Здесь формируются 
              профессионалы, способные создавать яркие и запоминающиеся образы на сцене и в кино.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Наши выпускники работают в ведущих театрах России, снимаются в кино и продолжают развивать 
              традиции русской театральной школы.
            </p>
          </div>
        </div>
      </section>

      <section id="graduates" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Выпускники</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {graduates.map((graduate, index) => (
              <Card 
                key={graduate.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                    <img 
                      src={graduate.image} 
                      alt={graduate.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{graduate.name}</h3>
                    <p className="text-sm text-muted-foreground">{graduate.role}</p>
                    <Button 
                      className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="sm"
                    >
                      Портфолио
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="productions" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Спектакли</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productions.map((production, index) => (
              <Card 
                key={production.id}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                    <img 
                      src={production.image} 
                      alt={production.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold">{production.title}</h3>
                      <span className="text-sm text-muted-foreground">{production.year}</span>
                    </div>
                    <p className="text-muted-foreground">{production.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div 
                key={item}
                className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src="https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png"
                  alt={`Gallery ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Mail" size={24} className="text-accent" />
              <a href="mailto:info@theatre.ru" className="text-lg hover:text-accent transition-colors">
                info@theatre.ru
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" size={24} className="text-accent" />
              <a href="tel:+74951234567" className="text-lg hover:text-accent transition-colors">
                +7 (495) 123-45-67
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="MapPin" size={24} className="text-accent" />
              <p className="text-lg">
                Санкт-Петербург, Театральная площадь, 1
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Курс Андрея Ярлыкова. Театральное училище имени Евстигнеева</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
