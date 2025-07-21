// 粒子效果配置
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// 打字机效果
const roles = ['前端开发', '3D艺术家', 'AI探索者'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

function type() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector('.typing');
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex-1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex+1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(type, isDeleting ? erasingDelay : typingDelay);
    }
}

// 启动打字机效果
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTextDelay);
});

// 聊天对话框功能
function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = userInput.value.trim();

    if (message) {
        // 添加用户消息
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);

        // 模拟AI回复
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = getAIResponse(message);
            chatMessages.appendChild(botMessage);
            
            // 滚动到最新消息
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        // 清空输入框
        userInput.value = '';
    }
}

function getAIResponse(message) {
    // 这里可以替换为真实的AI接口
    const responses = [
        '我明白你的意思了',
        '这是一个很好的问题',
        '让我想想...',
        '你说得对',
        '需要我为你详细解释吗？'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// 添加回车发送功能
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 在页面加载完成后初始化聊天图标
document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.querySelector('.chat-icon');
    if (chatIcon) {
        chatIcon.style.display = 'flex';
    }

    // 处理导航链接点击
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加active类到被点击的链接
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            
            // 如果点击的是首页链接，显示聊天框
            if (targetId === 'home') {
                const chatContainer = document.getElementById('chatContainer');
                if (chatContainer) {
                    chatContainer.style.display = 'flex';
                }
            }

            // 平滑滚动到目标位置
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// 打开登录弹窗
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}
// 关闭登录弹窗
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}
// 登录表单处理
function handleLogin(event) {
    event.preventDefault();
    
    // 获取表单输入
    const form = event.target;
    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;
    
    // 验证账号密码
    if (username === '九尾梵星' && password === 'hcx185381') {
        // 登录成功
        alert('登录成功！正在跳转到新界面...');
        closeLoginModal();
        
        // 跳转到新界面
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    } else {
        // 登录失败
        alert('登录失败！账号或密码错误。');
        // 清空密码输入框
        form.querySelector('input[type="password"]').value = '';
    }
    
    return false;
}
// 点击弹窗外部关闭弹窗
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeLoginModal();
    }
}

// 显示照片功能
function showPhoto() {
    const photoSection = document.getElementById('photo');
    if (photoSection) {
        photoSection.style.display = 'block';
        photoSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 上传并显示照片
function displayPhoto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        document.querySelector('.photo-placeholder').style.display = 'none';
        const photoDisplay = document.getElementById('photoDisplay');
        const uploadedPhoto = document.getElementById('uploadedPhoto');
        uploadedPhoto.src = e.target.result;
        photoDisplay.style.display = 'block';
    };
    reader.readAsDataURL(file);
} 