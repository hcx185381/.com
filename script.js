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
});
// ==================== END OF script.js ====================