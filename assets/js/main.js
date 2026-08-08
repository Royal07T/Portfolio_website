const skills = [
    {
        label: 'Backend',
        icon: 'BE',
        title: 'Laravel, REST APIs, JWT, Sanctum, RBAC',
        description: 'Building secure backend services, authentication systems, business logic, and scalable production APIs.',
        level: 98,
    },
    {
        label: 'Full Stack',
        icon: 'FS',
        title: 'Laravel, Vue.js, React, TypeScript, Next.js',
        description: 'Delivering connected product experiences across frontend, backend, typed interfaces, and real-world workflows.',
        level: 95,
    },
    {
        label: 'Frontend',
        icon: 'UI',
        title: 'Vue.js, React, TypeScript, Next.js, Tailwind CSS',
        description: 'Responsive interfaces with component-driven architecture, maintainable UI systems, and strong usability focus.',
        level: 92,
    },
    {
        label: 'Database',
        icon: 'DB',
        title: 'MySQL, SQL, Database Design, Query Optimization',
        description: 'Schema design, query tuning, reporting flows, and production-ready data handling for business applications.',
        level: 90,
    },
    {
        label: 'Payments',
        icon: 'PY',
        title: 'Paystack, Flutterwave, Stripe, Korapay',
        description: 'Integrating payment gateways, webhook processing, validation, and transaction-focused backend flows.',
        level: 89,
    },
    {
        label: 'Tools',
        icon: 'TL',
        title: 'Git, GitHub, Linux, Apache, Composer, Postman',
        description: 'Daily engineering workflow tools for collaboration, server environments, API testing, and delivery discipline.',
        level: 87,
    },
    {
        label: 'AI Tools',
        icon: 'AI',
        title: 'ChatGPT, Claude, Cursor',
        description: 'Using LLM AI-assisted development to speed up debugging, documentation, prototyping, and feature delivery.',
        level: 93,
    },
];

const services = [
    {
        title: 'Backend API Development',
        description: 'Designing secure, maintainable Laravel APIs for business logic, authentication, RBAC, integrations, and production workflows.',
        tags: ['Laravel', 'REST APIs', 'JWT', 'Sanctum'],
    },
    {
        title: 'Full-Stack Product Development',
        description: 'Building complete web products across backend, frontend, databases, and deployment-aware architecture for startups and businesses.',
        tags: ['Laravel', 'Vue.js', 'React', 'TypeScript'],
    },
    {
        title: 'Payment & FinTech Integrations',
        description: 'Implementing payment gateways, transaction logic, merchant flows, webhook handling, and financial operations for fintech products.',
        tags: ['Paystack', 'Flutterwave', 'Stripe', 'Korapay'],
    },
    {
        title: 'Performance & Production Support',
        description: 'Troubleshooting issues, optimizing SQL queries, improving backend performance, and stabilizing production systems.',
        tags: ['MySQL', 'Query Optimization', 'Debugging', 'Maintenance'],
    },
    {
        title: 'POS & Business Systems Architecture',
        description: 'Building merchant wallets, POS systems, reporting flows, and business operations software using Laravel, React, and TypeScript.',
        tags: ['POS Systems', 'React', 'TypeScript', 'Architecture'],
    },
    {
        title: 'LLM AI-assisted Development',
        description: 'Using ChatGPT, Claude, and Cursor to speed up prototyping, debugging, documentation, and feature delivery while keeping code quality high.',
        tags: ['ChatGPT', 'Claude', 'Cursor', 'Productivity'],
    },
];

const projects = [
    {
        title: 'DoctorOnTap Telemedicine Platform',
        category: 'HealthTech',
        description: 'Developed secure APIs supporting patient management, doctor consultations, appointments, prescriptions, online payments, pharmacy services, and medication delivery.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Healthcare'],
        image: 'assets/images/doctorontap.png',
        link: 'https://new.doctorontap.com.ng/',
    },
    {
        title: 'Loan Management System',
        category: 'FinTech',
        description: 'Built backend modules for a loan management platform, including payment gateway integrations, webhook processing, and optimized SQL-backed financial workflows.',
        tags: ['Laravel', 'Payments', 'MySQL', 'Webhooks'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        link: '#contact',
    },
    {
        title: 'Merchant Wallet & POS Platform',
        category: 'FinTech Infrastructure',
        description: 'Built merchant onboarding, wallet management, transaction processing, reporting, and business operations architecture using Laravel, React, and TypeScript.',
        tags: ['Laravel', 'React', 'TypeScript', 'POS Architecture'],
        image: 'assets/images/pos.jpeg',
        link: '#contact',
    },
    {
        title: 'Xala Premium Booking Platform',
        category: 'Hospitality',
        description: 'Developed backend APIs and frontend booking features for hotel reservations, event workflows, customer management, and platform enhancements.',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'Booking Workflows'],
        image: 'assets/images/xala.png',
        link: 'https://xalapremium.com.ng/',
    },
];

const experiences = [
    {
        role: 'Full-Stack Software Engineer',
        company: 'DoctorOnTap (HealthTech)',
        period: 'Jul 2025 - Present',
        meta: 'Remote',
        description: 'Develop and maintain production features for a telemedicine platform serving patients, doctors, pharmacies, and delivery partners. Design secure REST APIs for appointments, consultations, prescriptions, healthcare workflows, authentication, authorization, RBAC, and payment integrations while improving stability and backend performance.',
        tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST APIs', 'JWT', 'AI-assisted Delivery'],
    },
    {
        role: 'Full-Stack Software Engineer',
        company: 'Xala Premium',
        period: 'Nov 2025 - May 2026',
        meta: 'Remote',
        description: 'Developed backend APIs and frontend features for a hotel and event booking platform. Built booking workflows, maintained existing modules, resolved production issues, refactored legacy code, and improved overall performance.',
        tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST APIs'],
    },
    {
        role: 'Backend Software Engineer',
        company: 'Wired Banking Africa (FinTech)',
        period: 'May 2025 - Dec 2025',
        meta: 'Hybrid',
        description: 'Built backend services supporting merchant wallets, POS systems, and financial transactions. Developed secure APIs with authentication, validation, user management, and maintained production services.',
        tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git', 'POS Systems'],
    },
    {
        role: 'Backend Software Engineer',
        company: 'Methic Technology Ltd',
        period: 'Feb 2025 - May 2025',
        meta: 'Hybrid',
        description: 'Developed backend modules for a loan management platform, integrated payment gateways and webhook processing, optimized SQL queries, and maintained production backend services.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Payments', 'Webhooks', 'Query Optimization'],
    },
    {
        role: 'Network Administrator',
        company: 'Rosa Mystical Academy',
        period: 'Feb 2025',
        meta: 'Part-time',
        description: 'Handled networking and infrastructure support with focus on access, connectivity, and security fundamentals.',
        tags: ['Network Engineering', 'Security'],
    },
    {
        role: 'Tutor',
        company: 'Freelance Educator',
        period: 'Jun 2024 - Oct 2024',
        meta: 'Education',
        description: 'Conducted hands-on tutorials in PHP, HTML, and CSS, helping learners improve practical web development knowledge.',
        tags: ['Teaching', 'PHP', 'HTML', 'CSS'],
    },
    {
        role: 'Network Engineer',
        company: 'Galak Tech',
        period: 'Jan 2019 - Mar 2024',
        meta: 'Full-time · On-site · Abuja, Nigeria',
        description: 'Engineered and maintained reliable network solutions, diagnosed issues, and improved infrastructure stability through hands-on support and deployment work.',
        tags: ['Network Infrastructure', 'Cisco', 'VPN'],
    },
];

const education = [
    {
        title: 'Bachelor of Science in Computer Science',
        organization: 'University of the People (UoPeople)',
        meta: 'Expected 2030',
    },
];

const certifications = [
    {
        title: 'Cisco Certified Network Associate (CCNA)',
    },
    {
        title: 'ALX Software Engineering Program',
    },
    {
        title: 'W3Schools Web Development Certifications',
    },
];

function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skills
        .map(
            (skill) => `
                <article class="skill-card glass-card">
                    <div class="skill-top">
                        <div>
                            <span class="skill-label">${skill.label}</span>
                            <h3>${skill.title}</h3>
                        </div>
                        <span class="skill-icon">${skill.icon}</span>
                    </div>
                    <p>${skill.description}</p>
                    <div class="skill-meter" aria-label="${skill.label} proficiency ${skill.level}%">
                        <span style="width: ${skill.level}%"></span>
                    </div>
                </article>
            `
        )
        .join('');
}

function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = services
        .map(
            (service) => `
                <article class="service-card glass-card">
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <div class="service-tags">
                        ${service.tags.map((tag) => `<span>${tag}</span>`).join('')}
                    </div>
                </article>
            `
        )
        .join('');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects
        .map((project) => {
            const media = project.image
                ? `<img src="${project.image}" alt="${project.title} preview">`
                : `<div class="project-placeholder">${project.title}</div>`;

            const actionLabel = project.link.startsWith('http') ? 'Visit Project' : 'Discuss Project';
            const actionTarget = project.link.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';

            return `
                <article class="project-card glass-card">
                    <div class="project-media">${media}</div>
                    <div class="project-body">
                        <div class="project-topline">
                            <span class="project-category">${project.category}</span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <a class="project-link" href="${project.link}"${actionTarget}>${actionLabel}</a>
                        </div>
                    </div>
                </article>
            `;
        })
        .join('');
}

function renderExperience() {
    const list = document.getElementById('experience-list');
    if (!list) return;

    list.innerHTML = experiences
        .map(
            (item) => `
                <article class="experience-card glass-card">
                    <div class="experience-head">
                        <div>
                            <h3 class="experience-role">${item.role}</h3>
                            <div class="experience-company">${item.company}</div>
                        </div>
                        <div class="experience-meta">
                            <div>${item.period}</div>
                            <div>${item.meta}</div>
                        </div>
                    </div>
                    <p class="experience-description">${item.description}</p>
                    <div class="experience-tags">
                        ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
                    </div>
                </article>
            `
        )
        .join('');
}

function renderCredentials() {
    const educationList = document.getElementById('education-list');
    const certificationsList = document.getElementById('certifications-list');

    if (educationList) {
        educationList.innerHTML = education
            .map(
                (item) => `
                    <article class="credential-card glass-card">
                        <h3>${item.title}</h3>
                        <p>${item.organization}</p>
                        <span>${item.meta}</span>
                    </article>
                `
            )
            .join('');
    }

    if (certificationsList) {
        certificationsList.innerHTML = certifications
            .map(
                (item) => `
                    <article class="credential-card glass-card">
                        <h3>${item.title}</h3>
                    </article>
                `
            )
            .join('');
    }
}

function setupThemeToggle() {
    const body = document.body;
    const toggle = document.getElementById('theme-toggle');
    if (!body || !toggle) return;

    const icon = toggle.querySelector('.theme-toggle-icon');
    const label = toggle.querySelector('.theme-toggle-label');
    const storageKey = 'portfolio-theme';

    const applyTheme = (theme) => {
        body.dataset.theme = theme;
        toggle.setAttribute('aria-pressed', String(theme === 'light'));
        if (icon) icon.textContent = theme === 'light' ? '☀️' : '🌙';
        if (label) label.textContent = theme === 'light' ? 'Light' : 'Dark';
    };

    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || body.dataset.theme || 'dark';
    applyTheme(initialTheme);

    toggle.addEventListener('click', () => {
        const nextTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
    });
}

function setupMobileMenu() {
    const button = document.querySelector('.menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!button || !menu) return;

    button.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        button.classList.toggle('is-open', isOpen);
        button.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-open');
            button.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
        });
    });
}

function setupRevealAnimations() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
}

function validateField(field) {
    const wrapper = field.closest('.field-group');
    const error = wrapper?.querySelector('.error-message');
    if (!error) return true;

    let message = '';
    const value = field.value.trim();

    if (!value) {
        message = 'This field is required.';
    } else if (field.name === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            message = 'Please enter a valid email address.';
        }
    } else if (field.name === 'message' && value.length < 10) {
        message = 'Please provide at least 10 characters.';
    }

    error.textContent = message;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    return !message;
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form || !status) return;

    const fields = [...form.querySelectorAll('input, textarea')];

    fields.forEach((field) => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.getAttribute('aria-invalid') === 'true') {
                validateField(field);
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const isValid = fields.every(validateField);

        if (!isValid) {
            status.textContent = 'Please fix the highlighted fields and try again.';
            status.style.color = '#ff8b8b';
            return;
        }

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
        );

        status.textContent = 'Opening your email app...';
        status.style.color = '#94f5cb';
        window.location.href = `mailto:timmyroyalty@gmail.com?subject=${subject}&body=${body}`;
        form.reset();
    });
}

function setYear() {
    const year = document.getElementById('year');
    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
}

renderSkills();
renderServices();
renderProjects();
renderExperience();
renderCredentials();
setupThemeToggle();
setupMobileMenu();
setupRevealAnimations();
setupContactForm();
setYear();
