// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Slider Dewan Guru
function slideGuru(dir) {
  const container = document.getElementById('guruContainer');
  container.scrollBy({ left: dir * 220, behavior: 'smooth' });
}

// Testimonial Navigation
let currentTesti = 0;
const testi = document.querySelectorAll('.testimonial');

// Perbaiki selektor dan struktur data
let texts = [
  Array.from(document.querySelectorAll('.text')).slice(0, 5),
  Array.from(document.querySelectorAll('.text')).slice(6, 11)
];

function fixing() {
// Reset animasi dan width untuk teks sebelumnya
    texts[currentTesti].forEach((text, index) => {
    text.style.animation = 'typing 5s steps(70, end) forwards'
    text.style.animationDelay = `${index * 5 + 1}s`
  })
}
function changeTestimonial(dir) {
  const testi = document.querySelectorAll('.testimonial');
  testi[currentTesti].classList.remove('active');
  
  // Reset animasi dan width untuk teks sebelumnya
  
  // Perbarui indeks testimonial
  currentTesti = (currentTesti + dir + testi.length) % testi.length;
  
  // Aktifkan testimonial baru
  testi[currentTesti].classList.add('active');
  
  // Terapkan animasi untuk teks baru
  texts[currentTesti].forEach( (text, index) => {
    // Reset dulu untuk memastikan animasi berjalan
    text.style.animation = 'none';
    // Trigger reflow
    void text.offsetWidth;
    // Terapkan animasi
    texts[currentTesti].forEach((text, index) => {
    text.style.animation = 'typing 5s steps(70, end) forwards'
    text.style.animationDelay = `${index * 5}s`
  })
  });
}

// Auto slide change
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile submenu toggle
document.querySelectorAll('.menu > li').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && this.querySelector('.submenu')) {
            e.preventDefault();
            this.querySelector('.submenu').classList.toggle('active');
        }
    });
});

// animation script
envelope = document.querySelector(".envelope")
phone = document.querySelector(".phone")
fesnuk = document.querySelector(".fa-facebook-f")
instagram = document.querySelector(".fa-instagram")
youtube = document.querySelector(".fa-youtube")
topBar = document.querySelector(".top-bar")

animTopBar = () => {
    animPhone = () => {phone.style = "opacity:1; transform:translateX(0)"}
    animEnvelope = () => {envelope.style = "opacity:1; transform:translateX(0)"}
    setTimeout(animPhone, 300)
    setTimeout(animEnvelope, 400)
    topBar.style.transform = "translateY(0)"
    animFesnuk = () => {fesnuk.style.transform = "translateY(0)"}
    animInstagram = () => {instagram.style.transform = "translateY(0)"}
    animYoutube = () => {youtube.style.transform = "translateY(0)"}
    setTimeout(animFesnuk, 300)
    setTimeout(animInstagram, 400)
    setTimeout(animYoutube, 500)
}

animTopBar()

const beranda = document.querySelector(".beranda")
animNavbar = () => {
    document.querySelector(".logo").style.transform = "translateX(0)"
    document.querySelector(".menu").style.opacity = "1"
    animBeranda = () => {
        beranda.style = "color: var(--secondary)"
        beranda.style.setProperty("--width", "100%");
    }
    setTimeout(animBeranda, 1000)
}
animNavbar()

animSlider = () => {
    document.querySelector(".slide-content").style.transform = "translate(0, -50%)"
    document.querySelector(".chief").style.opacity = "1"
}
animSlider()

const parameter = document.querySelector(".parameter")
const animMessage = () => {
    document.querySelector(".principal-header").style.transform = "translateX(0)"
    document.querySelector(".principal-image").style.transform = "translateX(0)"
    document.querySelector(".text-sambutan").style.transform = "translateX(0)"

    const animPrinciple = () => {document.querySelector(".principle-school").style.transform = "translateX(0)"}
    const animName = () => {document.querySelector(".principle-name").style.transform = "translateX(0)"}
    setTimeout(animName, 950)
    setTimeout(animPrinciple, 1200)
}

const messageObserver = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            animMessage()
            observer.unobserve(parameter)
        }
    })
})
messageObserver.observe(parameter)


linkBoxs = document.querySelectorAll(".link-box")
linkBoxs.forEach( box => box.addEventListener("mouseover", () => {
    box.style.transition = "0.3s"
    box.style.transform = `translateY(-15px)`
}))

linkBoxs.forEach( box => box.addEventListener("mouseout", () => {
    box.style.transform = `translateY(0px)`
}))

const quickLinksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            linkBoxs.forEach((box, index) => {
                setTimeout(() => {box.style.transform = "translateY(0)"}, index * 200)
            })
        } else {
            linkBoxs.forEach( box => {
                box.style.transition = "0.8s"
                box.style.transform = "translateY(-40px)"
            })
        }
    })
},{
    threshold: 0.5
})
quickLinksObserver.observe(linkBoxs[0])

const opacityObserver = new IntersectionObserver(entries => {
    entries.forEach( entry => {
        if (entry.isIntersecting) {entry.target.style.opacity = "1"}
        else {entry.target.style.opacity = "0"}
    })
}, { threshold: 0.3 })

opacityObserver.observe(document.querySelector(".visi-misi-header"))
opacityObserver.observe(document.querySelector(".visi"))
opacityObserver.observe(document.querySelector(".misi"))
opacityObserver.observe(document.querySelector(".guru-slider"))
opacityObserver.observe(document.querySelector(".section-header"))
opacityObserver.observe(document.querySelector(".section-header0"))
opacityObserver.observe(document.querySelector(".contact-header"))

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
            animTopBar()
        } else {
            phone.style = `
            opacity: 0;
            transform: translateX(-20px); 
            display: inline-block
            `
            envelope.style = getComputedStyle(phone)

            fesnuk.style.transform = "translateY(-27px)"
            sosmedStyle = getComputedStyle(fesnuk)
            instagram.style = sosmedStyle
            youtube.style = sosmedStyle
            topBar.style.transform = "translateY(-45px)"
        }
})

const newsCards = document.querySelectorAll(".news-card")
newsCards.forEach( box => box.addEventListener("mouseover", () => {
    box.style.transition = "0.3s"
    box.style.transform = `translateY(-15px)`
}))

newsCards.forEach( box => box.addEventListener("mouseout", () => {
    box.style.transform = `translateY(0px)`
}))

const newsCardsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        header = document.querySelector(".section-header")
        if (entry.isIntersecting) {
            newsCards.forEach((box, index) => {
                setTimeout(() => {box.style.transform = "translateY(0)"}, index * 200)
                header.style.opacity = "1"
            })
        } else {
            newsCards.forEach( box => {
                box.style.transition = "0.8s"
                box.style.transform = "translateY(-40px)"
                header.style.opacity = "0"
            })
        }
    })
},{
    threshold: 0.6
})
newsCardsObserver.observe(newsCards[0])

const appCards = document.querySelectorAll(".app-card")
appCards.forEach( box => box.addEventListener("mouseover", () => {
    box.style.transition = "0.3s"
    box.style.transform = `translateY(-15px)`
}))

appCards.forEach( box => box.addEventListener("mouseout", () => {
    box.style.transform = `translateY(0px)`
}))

const appCardsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            appCards.forEach((box, index) => {
                setTimeout(() => {box.style.transform = "translateY(0)"}, index * 200)
            })
        } else {
            appCards.forEach( box => {
                box.style.transition = "0.8s"
                box.style.transform = "translateY(-40px)"
            })
        }
    })
},{
    threshold: 0.5
})
appCardsObserver.observe(appCards[0])

const testiObserver = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let a = setTimeout(fixing())
            entry.target.style.width = "100%"
            setTimeout(() => {document.querySelector(".quote").style.setProperty('--opacity', '1')}, 900)
        } else { 
            entry.target.style.width = "0"
            clearTimeout(a)
         }
    })
})

testiObserver.observe(document.querySelector(".testimonials"))

let map = document.querySelector(".map-container")
let contactInfo = document.querySelector(".contact-info-box")
const contactObserver = new IntersectionObserver(entries => entries.forEach( entry => {
    if (entry.isIntersecting) {
        map.style.transform = "translateX(0)"
        contactInfo.style.transform = "translateX(0)"
    } else {
        map.style.transform = "translateX(-100px)"
        contactInfo.style.transform = "translateX(100px)"
    }
}))

contactObserver.observe(map)