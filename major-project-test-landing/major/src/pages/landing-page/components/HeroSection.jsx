import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onGenerateRoadmap, onViewSample }) => {
  const [activeUsers, setActiveUsers] = useState(1247);
  const [recentGenerations, setRecentGenerations] = useState(89);
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Get Your Personalized B.Tech Career Roadmap in 60 Seconds';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText?.length) {
        setTypedText(fullText?.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const userInterval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    const genInterval = setInterval(() => {
      setRecentGenerations(prev => prev + 1);
    }, 8000);

    return () => {
      clearInterval(userInterval);
      clearInterval(genInterval);
    };
  }, []);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-20 pb-16 px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing gradient blobs with mouse tracking */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mousePosition.x * 2.5}px, ${mousePosition.y * 2.5}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400 transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse animation-delay-200 transition-transform duration-1000 ease-out"
          style={{ transform: `translate(calc(-50% + ${mousePosition.x * 1.0}px), calc(-50% + ${mousePosition.y * 1.0}px))` }}
        />

        {/* Floating shapes with mouse tracking - Wrapper handles position & tracking, Inner handles float & style */}
        <div
          className="absolute top-[15%] left-[5%] md:left-[10%] transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)` }}
        >
          <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl flex items-center justify-center animate-float-slow transform hover:scale-110 transition-all duration-300" style={{ animationDelay: '0s' }}>
            <Icon name="Code" size={32} className="text-blue-500" />
          </div>
        </div>

        <div
          className="absolute top-[12%] right-[5%] md:right-[10%] transition-transform duration-400 ease-out"
          style={{ transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)` }}
        >
          <div className="w-20 h-20 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full flex items-center justify-center animate-float transform hover:scale-110 transition-all duration-300" style={{ animationDelay: '1s' }}>
            <Icon name="Briefcase" size={36} className="text-purple-500" />
          </div>
        </div>

        <div
          className="absolute bottom-[20%] left-[5%] md:left-[8%] transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mousePosition.x * 3.5}px, ${mousePosition.y * 3.5}px)` }}
        >
          <div className="w-14 h-14 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl flex items-center justify-center animate-float-slow transform hover:scale-110 transition-all duration-300" style={{ animationDelay: '2s' }}>
            <Icon name="TrendingUp" size={28} className="text-emerald-500" />
          </div>
        </div>

        <div
          className="absolute bottom-[15%] right-[5%] md:right-[10%] transition-transform duration-600 ease-out"
          style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
        >
          <div className="w-16 h-16 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full flex items-center justify-center animate-float transform hover:scale-110 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
            <Icon name="Target" size={30} className="text-orange-500" />
          </div>
        </div>

        <div
          className="absolute top-[45%] right-[5%] transition-transform duration-350 ease-out"
          style={{ transform: `translate(${mousePosition.x * 4.5}px, ${mousePosition.y * 4.5}px)` }}
        >
          <div className="w-12 h-12 bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 rounded-xl flex items-center justify-center animate-float-slow transform hover:scale-110 transition-all duration-300" style={{ animationDelay: '1.5s' }}>
            <Icon name="Brain" size={24} className="text-pink-500" />
          </div>
        </div>

        {/* Floating particles with mouse tracking */}
        <div
          className="absolute top-[20%] left-[20%] transition-transform duration-200 ease-out"
          style={{ transform: `translate(${mousePosition.x * 6}px, ${mousePosition.y * 6}px)` }}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-float-slow" style={{ animationDelay: '0s' }} />
        </div>

        <div
          className="absolute top-[60%] left-[10%] transition-transform duration-250 ease-out"
          style={{ transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)` }}
        >
          <div className="w-3 h-3 bg-accent rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div
          className="absolute bottom-[25%] right-[20%] transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePosition.x * 5.5}px, ${mousePosition.y * 5.5}px)` }}
        >
          <div className="w-2 h-2 bg-secondary rounded-full animate-float-slow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-slide-down">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">
              Trusted by {activeUsers?.toLocaleString('en-IN')}+ B.Tech Students
            </span>
          </div>

          <div className="space-y-4 animate-slide-up animation-delay-200">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {typedText}
              <span className="inline-block w-1 h-12 bg-primary ml-1 animate-pulse" />
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI-powered career analysis combining your academic performance, coding profiles, and psychometric insights to create personalized roadmaps for skills, projects, internships, and placements
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
            <Button
              variant="default"
              size="lg"
              onClick={onGenerateRoadmap}
              iconName="Sparkles"
              iconPosition="left"
              className="shadow-cta hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Generate My Roadmap
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onViewSample}
              iconName="Eye"
              iconPosition="left"
              className="hover:bg-muted/50 hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              See Sample Roadmap
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>{recentGenerations} roadmaps generated today</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>100% Data Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-warning" />
              <span>60-second analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;