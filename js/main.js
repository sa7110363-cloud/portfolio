// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-progress');

// Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Project Modal Data
const projectData = {
    promy: {
        title: "프로미 (Promy)",
        subtitle: "생성형 AI를 활용한 프롬프트 교육 웹 앱",
        period: "2024.04.15 - 2024.05.29",
        role: "PM (5인 팀)",
        achievement: "교내 대회 최우수상 수상",
        problem: "AI 시대에 맞는 프롬프트 작성 능력이 부족한 교육 현장의 문제를 해결하고자 했습니다.",
        role_detail: "데이터 분석을 통한 사용자 니즈 파악, 서비스 플로우 설계, 팀원들과의 협업 리드",
        result: "사용자 친화적인 프롬프트 교육 플랫폼을 구축하여 교육 효과를 극대화했습니다.",
        reflection: "AI 기술과 교육의 접목을 통해 새로운 가치를 창출할 수 있음을 배웠습니다.",
        keywords: ["AI", "교육", "협업", "데이터분석", "사용자중심"],
        image: "assets/images/project-promy-detail.jpg"
    },
    newsbara: {
        title: "뉴스바라 (NewsBara)",
        subtitle: "학생 맞춤형 뉴스앱 UX 기획",
        period: "2024.06.23 - 2024.07.28",
        role: "PM (4인 팀)",
        achievement: "MVP 구체화, 사용자 여정지도·스토리보드 제작",
        problem: "학생들이 접근하기 어려운 뉴스 정보를 쉽고 재미있게 제공하는 방법을 모색했습니다.",
        role_detail: "UX 리서치를 통한 사용자 페르소나 정의, 사용자 여정지도 설계, 스토리보드 제작",
        result: "학생들이 선호하는 뉴스 소비 패턴을 파악하고 맞춤형 서비스를 기획했습니다.",
        reflection: "사용자 관점에서의 깊이 있는 리서치의 중요성을 깨달았습니다.",
        keywords: ["UX", "리서치", "페르소나", "사용자여정", "스토리보드"],
        image: "assets/images/project-newsbara-detail.jpg"
    },
    eardream: {
        title: "이어드림",
        subtitle: "창업팀 MVP 제작 및 배포",
        period: "2024.08.13 - 2024.08.28",
        role: "PM & 프론트엔드 협업",
        achievement: "해커톤 대상 수상, 반응형 웹 구현",
        problem: "빠른 시간 내에 실행 가능한 MVP를 통해 아이디어를 검증해야 했습니다.",
        role_detail: "프로젝트 기획 및 관리, 프론트엔드 개발 협업, 팀 커뮤니케이션 리드",
        result: "제한된 시간 내에 완성도 높은 MVP를 제작하여 해커톤에서 대상을 수상했습니다.",
        reflection: "빠른 실행력과 팀워크의 중요성을 체감했습니다.",
        keywords: ["MVP", "창업", "실행력", "협업", "프론트엔드"],
        image: "assets/images/project-eardream-detail.jpg"
    },
    coupang: {
        title: "쿠팡 앱 개선 기획",
        subtitle: "사용자 리뷰 분석 및 UX 개선안 제안",
        period: "2024.07.25 - 2024.08.07",
        role: "기획자",
        achievement: "실전 서비스 기획 공모전 참여",
        problem: "기존 쿠팡 앱의 사용자 리뷰 데이터를 분석하여 개선점을 도출해야 했습니다.",
        role_detail: "리뷰 데이터 크롤링 및 분석, 시각화, UX/UI 개선안 제안",
        result: "데이터 기반의 구체적인 개선 방안을 제시하여 공모전에서 좋은 평가를 받았습니다.",
        reflection: "데이터 분석을 통한 인사이트 도출의 중요성을 배웠습니다.",
        keywords: ["데이터분석", "UX개선", "사용자중심", "크롤링", "시각화"],
        image: "assets/images/project-coupang-detail.jpg"
    }
};

// Project Modal Functionality
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            showProjectModal(project);
        }
    });
});

function showProjectModal(project) {
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <p class="modal-subtitle">${project.subtitle}</p>
        </div>
        
        <div class="modal-image">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 2rem;">
        </div>
        
        <div class="modal-meta">
            <div class="meta-item">
                <strong>기간:</strong> ${project.period}
            </div>
            <div class="meta-item">
                <strong>역할:</strong> ${project.role}
            </div>
            <div class="meta-item">
                <strong>성과:</strong> ${project.achievement}
            </div>
        </div>
        
        <div class="modal-content-sections">
            <div class="content-section">
                <h3>문제 정의</h3>
                <p>${project.problem}</p>
            </div>
            
            <div class="content-section">
                <h3>나의 역할</h3>
                <p>${project.role_detail}</p>
            </div>
            
            <div class="content-section">
                <h3>결과</h3>
                <p>${project.result}</p>
            </div>
            
            <div class="content-section">
                <h3>회고</h3>
                <p>${project.reflection}</p>
            </div>
        </div>
        
        <div class="modal-keywords">
            <h3>핵심 키워드</h3>
            <div class="keyword-tags">
                ${project.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // EmailJS configuration (you'll need to set up EmailJS service)
    // For now, we'll show a success message
    showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
    contactForm.reset();
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Skill Bar Animation
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const elementTop = bar.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            bar.style.width = width + '%';
        }
    });
}

// Navbar Background on Scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    }
}

// Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Event Listeners
window.addEventListener('scroll', () => {
    handleScrollAnimations();
    animateSkillBars();
    handleNavbarScroll();
    updateActiveNavLink();
});

window.addEventListener('load', () => {
    handleScrollAnimations();
    animateSkillBars();
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add CSS for modal content
const modalStyles = `
    .modal-header {
        margin-bottom: 2rem;
    }
    
    .modal-title {
        font-size: 2rem;
        color: #FFD700;
        margin-bottom: 0.5rem;
    }
    
    .modal-subtitle {
        color: #CCCCCC;
        font-size: 1.1rem;
    }
    
    .modal-meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background-color: rgba(255, 215, 0, 0.05);
        border-radius: 10px;
        border: 1px solid rgba(255, 215, 0, 0.1);
    }
    
    .meta-item {
        color: #CCCCCC;
    }
    
    .meta-item strong {
        color: #FFD700;
    }
    
    .modal-content-sections {
        margin-bottom: 2rem;
    }
    
    .content-section {
        margin-bottom: 2rem;
    }
    
    .content-section h3 {
        color: #FFD700;
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    
    .content-section p {
        color: #CCCCCC;
        line-height: 1.6;
    }
    
    .modal-keywords h3 {
        color: #FFD700;
        margin-bottom: 1rem;
    }
    
    .keyword-tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .keyword-tag {
        background-color: rgba(255, 215, 0, 0.1);
        color: #FFD700;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        border: 1px solid rgba(255, 215, 0, 0.3);
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .nav-link.active {
        color: #FFD700;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

// Add modal styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
