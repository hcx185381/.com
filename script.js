// ==================== script.js ====================
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(44, 62, 80, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
        
        // 滚动动画触发
        animateOnScroll();
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // 移动端菜单关闭
            if(document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
            }
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 移动端菜单切换
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // 滚动动画函数
    function animateOnScroll() {
        // 技能卡片动画
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(cardPosition < screenPosition) {
                card.classList.add('active');
            }
        });
        
        // 时间轴动画
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(itemPosition < screenPosition) {
                item.classList.add('active');
            }
        });
    }
    
    // 初始化动画
    animateOnScroll();
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.skill-card, .info-list, .contact-info');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // 初始化EmailJS
    (function(){
      emailjs.init('aHIdUSDiP8HzAwYWC');
    })();

    // 邮箱弹窗逻辑
    const emailIcon = document.getElementById('email-icon');
    const emailModal = document.getElementById('email-modal');
    const emailModalClose = document.getElementById('email-modal-close');
    const emailModalMask = document.getElementById('email-modal-mask');
    const emailForm = document.getElementById('email-form');

    if (emailIcon && emailModal && emailModalClose && emailModalMask && emailForm) {
        emailIcon.addEventListener('click', () => {
            emailModal.classList.add('show');
        });
        emailModalClose.addEventListener('click', () => {
            emailModal.classList.remove('show');
        });
        emailModalMask.addEventListener('click', () => {
            emailModal.classList.remove('show');
        });
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const subject = document.getElementById('email-subject').value;
            const message = document.getElementById('email-message').value;
            emailjs.send('service_9qkg3c8', 'template_5m1d586', {
                subject: subject,
                message: message
            })
            .then(function(response) {
                alert('消息已发送！感谢您的联系。');
                emailModal.classList.remove('show');
                emailForm.reset();
            }, function(error) {
                alert('发送失败，请稍后再试。');
            });
        });
    }

    // 拨号盘弹窗逻辑
    const phoneIcon = document.getElementById('phone-icon');
    const phoneModal = document.getElementById('phone-modal');
    const phoneModalClose = document.getElementById('phone-modal-close');
    const phoneModalMask = document.getElementById('phone-modal-mask');
    const callBtn = document.getElementById('call-btn');
    const phoneRingAudio = document.getElementById('phone-ring-audio');

    if (phoneIcon && phoneModal && phoneModalClose && phoneModalMask && callBtn) {
        phoneIcon.addEventListener('click', () => {
            phoneModal.classList.add('show');
        });
        phoneModalClose.addEventListener('click', () => {
            phoneModal.classList.remove('show');
        });
        phoneModalMask.addEventListener('click', () => {
            phoneModal.classList.remove('show');
        });
        callBtn.addEventListener('click', () => {
            // 播放拨号动画
            callBtn.classList.add('calling');
            callBtn.innerHTML = '<i class="fas fa-phone-volume fa-shake"></i> 拨号中...';
            if (phoneRingAudio) {
                phoneRingAudio.currentTime = 0;
                phoneRingAudio.play();
            }
            setTimeout(() => {
                callBtn.classList.remove('calling');
                callBtn.innerHTML = '<i class="fas fa-phone"></i> 呼叫';
                phoneModal.classList.remove('show');
                if (phoneRingAudio) {
                    phoneRingAudio.pause();
                    phoneRingAudio.currentTime = 0;
                }
                window.location.href = 'call-status.html';
            }, 800);
        });
    }

    // 轮播图逻辑
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let autoPlayInterval;

    function showSlide(index) {
        // 隐藏所有幻灯片
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // 显示当前幻灯片
        carouselSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % carouselSlides.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
        showSlide(prevIndex);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 6000); // 每6秒切换一次
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // 事件监听器
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
        
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
    }

    // 指示点点击事件
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            showSlide(index);
            startAutoPlay();
        });
    });

    // 鼠标悬停时暂停自动播放
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // 开始自动播放
    startAutoPlay();
});
// ==================== END OF script.js ====================