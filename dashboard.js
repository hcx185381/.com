// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 处理导航链接点击
    const navLinks = document.querySelectorAll('.dashboard-header nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加active类到被点击的链接
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            
            // 平滑滚动到目标位置
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 处理保存设置按钮
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            // 获取表单数据
            const email = document.querySelector('#email').value;
            const bio = document.querySelector('#bio').value;
            
            // 简单的表单验证
            if (!email || !email.includes('@')) {
                alert('请输入有效的邮箱地址！');
                return;
            }
            
            // 模拟保存操作
            alert('设置已保存！');
            
            // 这里可以添加实际的保存逻辑
            console.log('保存的设置:', { email, bio });
        });
    }

    // 添加页面加载动画
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 退出登录功能
function logout() {
    if (confirm('确定要退出登录吗？')) {
        alert('已退出登录，正在返回主页...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// 添加统计数字动画效果
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
        const target = parseInt(number.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current);
        }, 30);
    });
}

// 页面加载完成后启动数字动画
window.addEventListener('load', function() {
    setTimeout(animateNumbers, 500);
});

// 添加项目卡片点击效果
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('h3').textContent;
            alert(`你点击了项目：${projectTitle}\n这里可以添加项目详情页面跳转逻辑。`);
        });
    });
}); 