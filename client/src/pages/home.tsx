import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LinkCard from "@/components/LinkCard";
import FloatingShapes from "@/components/FloatingShapes";
import logoImage from "@assets/IMG_6310.png";
const videoBackground = "https://cdn.shopify.com/videos/c/o/v/a11d4df1500b4a20b9225ef86ce4ce82.mp4";
const linksVideoBackground = "https://cdn.shopify.com/videos/c/o/v/12f1dd56e2f34187a1352282e6ac9535.mov";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const links = [
    {
      icon: "fas fa-map-marker-alt",
      title: "موقع المكتب",
      description: "زورنا في مقرنا الرئيسي",
    },
    {
      icon: "fas fa-globe",
      title: "الموقع الإلكتروني",
      description: "اكتشف جميع خدماتنا وعروضنا",
    },
    {
      icon: "fab fa-telegram",
      title: "تيليجرام",
      description: "تواصل مباشر وخدمة سريعة",
    },
    {
      icon: "fab fa-instagram",
      title: "إنستغرام",
      description: "شاهد أعمالنا وأحدث العروض",
    },
    {
      icon: "fab fa-tiktok",
      title: "تيك توك",
      description: "فيديوهات قصيرة ومحتوى تفاعلي",
    },
    {
      icon: "fab fa-facebook",
      title: "فيسبوك",
      description: "انضم لمجتمعنا وآخر الأخبار",
    },
  ];

  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "أمان وثقة",
      description: "نضمن لك تجربة آمنة وموثوقة في جميع رحلاتك",
    },
    {
      icon: "fas fa-clock",
      title: "خدمة 24/7",
      description: "فريق دعم متاح على مدار الساعة لخدمتك",
    },
    {
      icon: "fas fa-gem",
      title: "خدمات فاخرة",
      description: "تجربة سفر استثنائية بأعلى معايير الجودة",
    },
  ];

  useEffect(() => {
    // Add parallax effect to floating shapes
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll('.floating-shape');
      
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        (shape as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="luxury-gradient min-h-screen relative overflow-x-hidden"
    >

      {/* Video Header Section */}
      <header className="relative w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          playsInline
          preload="metadata"
          className="w-full h-auto block"
          style={{ maxWidth: '100%', height: 'auto' }}
          onEnded={(e) => {
            const video = e.target as HTMLVideoElement;
            video.playbackRate = video.playbackRate === 1 ? -1 : 1;
            video.play();
          }}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </header>

      {/* Links Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Video Background for Links Section */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            playsInline
            preload="auto"
            controls={false}
            className="w-full h-full object-cover"
            onError={(e) => console.log('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onEnded={(e) => {
              const video = e.target as HTMLVideoElement;
              video.playbackRate = video.playbackRate === 1 ? -1 : 1;
              video.play();
            }}
          >
            <source src={linksVideoBackground} type="video/quicktime" />
            <source src={linksVideoBackground} type="video/mp4" />
            {/* Fallback background if video doesn't load */}
          </video>
          {!linksVideoBackground && (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
          )}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-cairo font-bold text-white mb-4">تواصل معنا</h2>
            <p className="text-xl font-tajawal text-white/80">جميع روابطنا في مكان واحد</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                {...link}
                delay={0.1 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 relative" style={{ backgroundColor: 'hsl(220, 13%, 18%)' }}>
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-cairo font-bold text-white mb-4">لماذا نحن؟</h2>
            <p className="text-xl font-tajawal text-white/80">مميزات تجعلنا الخيار الأول</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                className="text-center"
              >
                <div className="icon-container w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-3xl text-accent`} />
                </div>
                <h3 className="text-xl font-cairo font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-tajawal text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20" style={{ backgroundColor: 'hsl(220, 13%, 18%)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-4"
            >
              <img 
                src={logoImage} 
                alt="شركة التَرف - لوجو الطائرة والأمواج" 
                className="w-16 h-16 mx-auto filter drop-shadow-xl object-contain"
              />
            </motion.div>
            <h3 className="text-2xl font-cairo font-bold text-white mb-2">شركة التَرف</h3>
            <p className="font-tajawal text-white/80">رحلتك تبدأ من هنا</p>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            {[
              { icon: "fas fa-map-marker-alt", label: "موقع المكتب" },
              { icon: "fas fa-globe", label: "الموقع الإلكتروني" },
              { icon: "fab fa-telegram", label: "تيليجرام" },
              { icon: "fab fa-instagram", label: "إنستغرام" },
              { icon: "fab fa-tiktok", label: "تيك توك" },
              { icon: "fab fa-facebook", label: "فيسبوك" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="https://t.me/mohmmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group"
                title={social.label}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <i className={`${social.icon} text-lg text-white/70 group-hover:text-accent transition-colors duration-300`} />
                </div>
              </motion.a>
            ))}
          </div>
          
          <p className="text-white/60 font-tajawal">
            © 2024 شركة التَرف. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
