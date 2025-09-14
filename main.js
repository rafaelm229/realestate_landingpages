// LANGUAGE SWITCHER
    const translations = {
      pt: {
        heroHeadline: "1 e 2 dormitórios com terraço e lazer completo na Água Branca",
        heroSub: "Compre na planta com condições imperdíveis",
        aboutText: "Apartamentos à venda de 1 e 2 dorms., lazer completo e fácil acesso às principais vias da Zona Oeste. Ao lado da futura Estação Santa Marina.",
        locationText: "Água Branca, São Paulo – SP. Fácil acesso à Marginal Tietê, próximo ao Mercado Municipal e ao lado da futura Estação Santa Marina.",
        areaText: "A Zona Oeste de São Paulo oferece mobilidade, diversidade de comércios, instituições de ensino e lazer. Bairros como Barra Funda, Vila Madalena, Pinheiros e Sumaré completam o estilo de vida moderno da região.",
        ctaHeadline: "Fale com um corretor online agora mesmo e faça sua simulação de financiamento. Aproveite preços de lançamento!",
        ctaSub: "Fale com um corretor online agora mesmo e faça sua simulação de financiamento. Aproveite preços de lançamento!"
      },
      en: {
        heroHeadline: "1 & 2 bedroom apartments with terrace and full leisure area in Água Branca",
        heroSub: "Buy off-plan with exclusive conditions",
        aboutText: "1 & 2-bedroom apartments for sale, full leisure, with easy access to major roads in the West Zone. Right next to the future Santa Marina Station.",
        locationText: "Água Branca, São Paulo – SP. Easy access to Marginal Tietê, close to the Municipal Market, and next to the future Santa Marina Station.",
        areaText: "The West Zone of São Paulo offers mobility, diverse commerce, schools, and leisure options. Neighborhoods like Barra Funda, Vila Madalena, Pinheiros, and Sumaré complete the modern lifestyle of the region.",
        ctaHeadline: "Talk to an online broker now and run your mortgage simulation. Take advantage of launch prices!",
        ctaSub: "Talk to an online broker now and run your mortgage simulation. Take advantage of launch prices!"
      }
    };

    document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    function setLanguage(lang) {
      document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
      document.querySelector(`#lang-${lang}`).classList.add('active');
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

      const t = translations[lang];
      document.getElementById('hero-headline').textContent = t.heroHeadline;
      document.getElementById('hero-sub').textContent = t.heroSub;
      document.getElementById('about-text').textContent = t.aboutText;
      document.getElementById('location-text').textContent = t.locationText;
      document.getElementById('area-text').textContent = t.areaText;
      document.getElementById('cta-headline').textContent = t.ctaHeadline;
      document.getElementById('cta-sub').textContent = t.ctaSub;
    }

    // INITIALIZE LANGUAGE
    setLanguage('pt');

    // GALLERY TABS
    document.querySelectorAll('.gallery-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.gallery-container').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
      });
    });

    // SLIDER FOR HIGHLIGHTS
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');

    function showSlide(index) {
      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-advance every 5 seconds
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

    // Initialize
    showSlide(0);

    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('gallery-modal');
        const modalImg = document.getElementById('gallery-modal-img');
        const modalCaption = document.getElementById('gallery-modal-caption');
        const closeBtn = document.getElementById('gallery-modal-close');
        const images = Array.from(document.querySelectorAll('.gallery-fullscreen'));
        let currentIndex = -1;

        function openModal(index) {
            currentIndex = index;
            const img = images[currentIndex];
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalCaption.textContent = img.alt;
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.style.display = 'none';
            modalImg.src = '';
            document.body.style.overflow = '';
            currentIndex = -1;
        }

        function showNext() {
            if (images.length === 0) return;
            currentIndex = (currentIndex + 1) % images.length;
            openModal(currentIndex);
        }

        function showPrev() {
            if (images.length === 0) return;
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            openModal(currentIndex);
        }

        images.forEach((img, idx) => {
            img.addEventListener('click', function () {
                openModal(idx);
            });
        });

        closeBtn.onclick = closeModal;

        modal.onclick = function (e) {
            if (e.target === modal) closeModal();
        };

        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    closeModal();
                } else if (e.key === 'ArrowRight') {
                    showNext();
                } else if (e.key === 'ArrowLeft') {
                    showPrev();
                }
            }
        });

        // Optional: Add next/prev buttons in modal (if you have them)
        const nextBtn = document.getElementById('gallery-modal-next');
        const prevBtn = document.getElementById('gallery-modal-prev');
        if (nextBtn) nextBtn.onclick = showNext;
        if (prevBtn) prevBtn.onclick = showPrev;
    });

    // HEADER SCROLL EFFECT
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
      } else {
        header.style.padding = "15px 0";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
      }
    });