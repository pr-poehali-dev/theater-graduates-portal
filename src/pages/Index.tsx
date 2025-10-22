import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Graduate {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string;
  achievements: string[];
  photos: string[];
  videos: { title: string; url: string }[];
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
  const [selectedGraduate, setSelectedGraduate] = useState<Graduate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const graduates: Graduate[] = [
    { 
      id: 1, 
      name: 'Анна Смирнова', 
      role: 'Актриса драматического театра', 
      image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
      bio: 'Выпускница 2024 года. Специализируется на классической драме и современных постановках. Работает в Малом драматическом театре.',
      education: 'Театральное училище имени Евстигнеева, курс А.А. Ярлыкова, 2020-2024',
      achievements: [
        'Лауреат фестиваля «Театральная весна» 2023',
        'Специальный приз жюри на конкурсе «Молодые таланты России»',
        'Главная роль в дипломном спектакле «Гамлет»'
      ],
      photos: [
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png'
      ],
      videos: [
        { title: 'Монолог из спектакля "Гамлет"', url: '#' },
        { title: 'Отрывок из "Вишнёвого сада"', url: '#' }
      ]
    },
    { 
      id: 2, 
      name: 'Дмитрий Петров', 
      role: 'Актёр музыкального театра', 
      image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
      bio: 'Выпускник 2024 года. Обладает выдающимися вокальными данными. Работает в Театре музыкальной комедии.',
      education: 'Театральное училище имени Евстигнеева, курс А.А. Ярлыкова, 2020-2024',
      achievements: [
        'Победитель конкурса «Голоса театра» 2023',
        'Главная роль в мюзикле "Чикаго"',
        'Стипендиат фонда поддержки молодых талантов'
      ],
      photos: [
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png'
      ],
      videos: [
        { title: 'Ария из мюзикла "Чикаго"', url: '#' }
      ]
    },
    { 
      id: 3, 
      name: 'Елена Иванова', 
      role: 'Актриса театра и кино', 
      image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
      bio: 'Выпускница 2024 года. Снимается в кино и сериалах, играет в БДТ им. Товстоногова.',
      education: 'Театральное училище имени Евстигнеева, курс А.А. Ярлыкова, 2020-2024',
      achievements: [
        'Роль второго плана в фильме "Северное сияние"',
        'Участие в сериале "Питерские истории"',
        'Номинация на премию "Прорыв года"'
      ],
      photos: [
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png'
      ],
      videos: [
        { title: 'Трейлер фильма "Северное сияние"', url: '#' },
        { title: 'Театральная сцена', url: '#' }
      ]
    },
    { 
      id: 4, 
      name: 'Михаил Козлов', 
      role: 'Актёр драматического театра', 
      image: 'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
      bio: 'Выпускник 2024 года. Специализируется на характерных ролях. Работает в Александринском театре.',
      education: 'Театральное училище имени Евстигнеева, курс А.А. Ярлыкова, 2020-2024',
      achievements: [
        'Лучшая мужская роль на фестивале «Балтийский дом»',
        'Главная роль в спектакле "Ревизор"',
        'Участник европейской театральной лаборатории'
      ],
      photos: [
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png',
        'https://v3b.fal.media/files/b/lion/RxpKUwVWOqeISA38_MeRD_output.png'
      ],
      videos: [
        { title: 'Сцена из "Ревизора"', url: '#' }
      ]
    },
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

  const openPortfolio = (graduate: Graduate) => {
    setSelectedGraduate(graduate);
    setIsDialogOpen(true);
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
                      onClick={() => openPortfolio(graduate)}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedGraduate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedGraduate.name}</DialogTitle>
                <p className="text-muted-foreground">{selectedGraduate.role}</p>
              </DialogHeader>
              
              <Tabs defaultValue="bio" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="bio">О себе</TabsTrigger>
                  <TabsTrigger value="achievements">Достижения</TabsTrigger>
                  <TabsTrigger value="photos">Фото</TabsTrigger>
                  <TabsTrigger value="videos">Видео</TabsTrigger>
                </TabsList>
                
                <TabsContent value="bio" className="space-y-4">
                  <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
                    <img 
                      src={selectedGraduate.image} 
                      alt={selectedGraduate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Биография</h3>
                      <p className="text-muted-foreground">{selectedGraduate.bio}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Образование</h3>
                      <p className="text-muted-foreground">{selectedGraduate.education}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="achievements" className="space-y-4">
                  <h3 className="text-xl font-semibold">Награды и достижения</h3>
                  <ul className="space-y-3">
                    {selectedGraduate.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="Award" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="photos" className="space-y-4">
                  <h3 className="text-xl font-semibold">Фотогалерея</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedGraduate.photos.map((photo, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={photo} 
                          alt={`${selectedGraduate.name} - фото ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="videos" className="space-y-4">
                  <h3 className="text-xl font-semibold">Видеоработы</h3>
                  <div className="space-y-4">
                    {selectedGraduate.videos.map((video, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center gap-3">
                          <Icon name="Video" size={24} className="text-accent" />
                          <div>
                            <h4 className="font-semibold">{video.title}</h4>
                            <a href={video.url} className="text-sm text-accent hover:underline">
                              Смотреть видео
                            </a>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;