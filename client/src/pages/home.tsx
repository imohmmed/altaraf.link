import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LinkCard from "@/components/LinkCard";
import FloatingShapes from "@/components/FloatingShapes";
import logoImage from "@assets/IMG_6310.png";

const videoBackground = "https://j.top4top.io/m_343897gd60.mp4";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const links = [
    {
      icon: "fas fa-map-marker-alt",
      title: "موقع الشركة",
      description: "زورنا في مقرنا الرئيسي",
      url: "https://maps.app.goo.gl/aiWDcKgQDaGL2h7Q9?g_st=com.google.maps.preview.copy"
    },
    {
      icon: "fab fa-whatsapp",
      title: "واتساب",
      description: "تواصل وحجز مباشر",
      url: "https://wa.me/+9647728887722"
    },
    {
      icon: "fab fa-telegram",
      title: "تيليجرام",
      description: "قناتنا لمتابعة اخر الاخبار",
      url: "https://t.me/ataraf"
    },
    {
      icon: "fab fa-instagram",
      title: "إنستغرام",
      description: "تابعونا على انستغرام",
      url: "https://www.instagram.com/altaraf_company?igsh=dG85aGw0cGxmZmJ0"
    },
    {
      icon: "fab fa-facebook",
      title: "فيسبوك",
      description: "تواصل معنا على فيسبوك",
      url: "https://www.facebook.com/share/1E48C3Tq45/?mibextid=wwXIfr"
    },
    {
      icon: "fab fa-tiktok",
      title: "تيك توك",
      description: "شاهد آخر فيديوهاتنا",
      url: "https://vt.tiktok.com/ZSkd7rSFb/"
    }
  ];

  const features = [
    {
      icon: "fas fa-plane",
      title: "خدمات طيران",
      description: "حجز تذاكر الطيران والرحلات الجوية"
    },
    {
      icon: "fas fa-hotel",
      title: "حجز فنادق",
      description: "أفضل الفنادق والمنتجعات العالمية"
    },
    {
      icon: "fas fa-map-marked-alt",
      title: "برامج سياحية",
      description: "جولات منظمة وبرامج سياحية مميزة"
    },
    {
      icon: "fas fa-car",
      title: "تأجير سيارات",
      description: "خدمات تأجير السيارات والنقل"
    }
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: 'hsl(200, 100%, 40%)' }}
    >
      {/* Video Header Section */}
      <header className="relative w-full overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop
          playsInline
          preload="metadata"
          className="w-full h-auto block"
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </header>

      {/* Links Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: 'hsl(200, 100%, 40%)' }}>
        <FloatingShapes />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <img
                src={logoImage}
                alt="شركة التَرف"
                className="w-24 h-24 mx-auto rounded-full shadow-2xl border-4 border-white/20"
              />
            </motion.div>
            <h3 className="text-2xl font-cairo font-bold text-white mb-2">شركة التَرف</h3>
            <p className="font-tajawal text-white/80">رحلتك تبدأ من هنا</p>
          </motion.div>
          
          <div className="text-center mb-8">
            <h2 className="text-xl font-cairo font-bold text-white mb-6">تواصل معنا</h2>
            <div className="flex justify-center items-center gap-4">
              {[
                { icon: "fas fa-map-marker-alt", label: "موقع الشركة", url: "https://maps.app.goo.gl/aiWDcKgQDaGL2h7Q9?g_st=com.google.maps.preview.copy" },
                { icon: "fab fa-whatsapp", label: "واتساب", url: "https://wa.me/+9647728887722" },
                { icon: "fab fa-telegram", label: "تيليجرام", url: "https://t.me/ataraf" },
                { icon: "fab fa-instagram", label: "إنستغرام", url: "https://www.instagram.com/altaraf_company?igsh=dG85aGw0cGxmZmJ0" },
                { icon: "fab fa-facebook", label: "فيسبوك", url: "https://www.facebook.com/share/1E48C3Tq45/?mibextid=wwXIfr" },
                { icon: "fab fa-tiktok", label: "تيك توك", url: "https://vt.tiktok.com/ZSkd7rSFb/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20"
                >
                  <i className={`${social.icon} text-lg`} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                icon={link.icon}
                title={link.title}
                description={link.description}
                url={link.url}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative" style={{ backgroundColor: 'hsl(200, 100%, 35%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-white mb-4">
              خدماتنا المميزة
            </h2>
            <p className="font-tajawal text-white/80 text-lg max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات السياحية والسفر لضمان رحلة مثالية
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
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
      <footer className="py-12 border-t border-white/20" style={{ backgroundColor: 'hsl(200, 100%, 30%)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-4"
            >
              <img
                src={logoImage}
                alt="شركة التَرف"
                className="w-16 h-16 mx-auto rounded-full shadow-lg"
              />
            </motion.div>
            <h3 className="text-xl font-cairo font-bold text-white mb-2">شركة التَرف</h3>
            <p className="font-tajawal text-white/80">رحلتك تبدأ من هنا</p>
          </div>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            {[
              { icon: "fab fa-instagram", url: "https://www.instagram.com/altaraf_company?igsh=dG85aGw0cGxmZmJ0" },
              { icon: "fab fa-telegram", url: "https://t.me/ataraf" },
              { icon: "fab fa-whatsapp", url: "https://wa.me/+9647728887722" },
              { icon: "fab fa-facebook", url: "https://www.facebook.com/share/1E48C3Tq45/?mibextid=wwXIfr" },
              { icon: "fab fa-tiktok", url: "https://vt.tiktok.com/ZSkd7rSFb/" },
              { icon: "fas fa-map-marker-alt", url: "https://maps.app.goo.gl/aiWDcKgQDaGL2h7Q9?g_st=com.google.maps.preview.copy" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <i className={`${social.icon} text-sm`} />
              </motion.a>
            ))}
          </div>
          
          <p className="text-white/60 font-tajawal">
            © 2019 شركة التَرف. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}