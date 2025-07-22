import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Building" className="text-primary text-2xl" />
              <span className="text-xl font-bold text-secondary">СтройМастер</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-secondary hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-secondary hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="text-secondary hover:text-primary transition-colors">Проекты</a>
              <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-secondary via-accent to-primary flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-pulse">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Строим <br />
                <span className="text-primary">будущее</span> <br />
                вместе
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Профессиональное строительство жилых и коммерческих объектов. 
                15 лет опыта, современные технологии, гарантия качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Icon name="Phone" className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 text-lg">
                  <Icon name="Play" className="mr-2" />
                  Посмотреть проекты
                </Button>
              </div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://v3.fal.media/files/rabbit/eoKEW1dO4CyQgHUEqzzco_output.png" 
                alt="Строительный проект"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании СтройМастер</h2>
              <p className="text-lg text-secondary/80 mb-6 leading-relaxed">
                Мы — команда профессионалов с 15-летним опытом в строительной индустрии. 
                Специализируемся на строительстве жилых домов, коммерческих зданий и промышленных объектов.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">15+ лет</h4>
                    <p className="text-secondary/70">на рынке</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Users" className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">200+</h4>
                    <p className="text-secondary/70">довольных клиентов</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Building" className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">500+</h4>
                    <p className="text-secondary/70">завершенных проектов</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">100%</h4>
                    <p className="text-secondary/70">гарантия качества</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <Icon name="Quote" className="text-primary text-3xl mb-4" />
                <p className="text-lg text-secondary/80 italic mb-4">
                  "Наша миссия — создавать надежные и красивые здания, которые служат поколениями."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Александр Петров</p>
                    <p className="text-secondary/70">Генеральный директор</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Полный спектр строительных услуг от проектирования до сдачи объекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Home" className="text-primary text-2xl" />
                </div>
                <CardTitle className="text-xl text-secondary">Жилые дома</CardTitle>
                <CardDescription>
                  Строительство частных домов, коттеджей и таунхаусов под ключ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary/70">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Индивидуальные проекты</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Энергоэффективные решения</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Гарантия 10 лет</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon name="Building2" className="text-accent text-2xl" />
                </div>
                <CardTitle className="text-xl text-secondary">Коммерческие объекты</CardTitle>
                <CardDescription>
                  Офисы, торговые центры, склады и производственные помещения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary/70">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-accent text-sm" />
                    <span>Быстрые сроки</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-accent text-sm" />
                    <span>Современные технологии</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-accent text-sm" />
                    <span>Соответствие стандартам</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Wrench" className="text-primary text-2xl" />
                </div>
                <CardTitle className="text-xl text-secondary">Реконструкция</CardTitle>
                <CardDescription>
                  Модернизация и реконструкция существующих зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-secondary/70">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Диагностика состояния</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Без остановки работы</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" className="text-primary text-sm" />
                    <span>Увеличение площади</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши проекты</h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Примеры наших лучших строительных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary to-accent"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="text-center text-white transform group-hover:scale-105 transition-transform">
                    <Icon name="Eye" className="text-2xl mx-auto mb-2" />
                    <p className="font-bold">Посмотреть проект</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg mb-1">Жилой комплекс #{item}</h3>
                  <p className="text-white/80">Современный дизайн, 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Свяжитесь с нами</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Готовы обсудить ваш проект? Оставьте заявку, и наш менеджер свяжется с вами в течение часа.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">+7 (495) 123-45-67</p>
                    <p className="text-white/70">Круглосуточно</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">info@stroymaster.ru</p>
                    <p className="text-white/70">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">г. Москва, ул. Строителей, д. 10</p>
                    <p className="text-white/70">Офис и выставочный зал</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-secondary mb-6">Получить консультацию</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Опишите ваш проект"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building" className="text-primary text-2xl" />
                <span className="text-xl font-bold">СтройМастер</span>
              </div>
              <p className="text-white/70 mb-4">
                Надежный партнер в строительстве вашей мечты
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Жилые дома</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие объекты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реконструкция</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Следите за нами</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" className="text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;