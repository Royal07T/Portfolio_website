const skills = [
    {
        label: 'Backend',
        icon: 'BE',
        title: 'PHP, Laravel, Python, FastAPI, Node.js',
        description: 'Building secure backend services, authentication systems, business logic, and scalable production APIs.',
    },
    {
        label: 'Frontend',
        icon: 'UI',
        title: 'JavaScript, TypeScript, Vue.js, React, HTML5, CSS3',
        description: 'Responsive interfaces with component-driven architecture, maintainable UI systems, and strong usability focus.',
    },
    {
        label: 'Database',
        icon: 'DB',
        title: 'MySQL, PostgreSQL, MongoDB',
        description: 'Schema design, query tuning, reporting flows, and production-ready data handling for business applications.',
    },
    {
        label: 'Engineering',
        icon: 'EG',
        title: 'REST APIs, Authentication, RBAC, API Integration',
        description: 'Designing secure API architectures, authentication systems, and integrating third-party services.',
    },
    {
        label: 'AI / Development Tools',
        icon: 'AI',
        title: 'ChatGPT, Claude, Cursor, Git, GitHub',
        description: 'Using AI tools to accelerate research, prototyping, debugging, and documentation while maintaining engineering quality.',
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
        title: 'MedExplain',
        category: 'HealthTech / AI',
        description: 'An AI-powered medical report analysis platform that transforms lab results into human-readable explanations with health timelines and clinician collaboration features.',
        contribution: 'Full-stack development including Laravel backend API, FastAI service for text extraction and LLM integration, Vue 3 frontend, authentication system, RBAC, and OAuth 2.0 provider integration.',
        features: ['Medical report upload (PDF/JPG/PNG)', 'AI-powered text extraction and lab result parsing', 'Educational explanations with reference-range comparisons', 'Health timeline and lab trends', 'Personal health record dashboard', 'AI assistant grounded in user health context', 'Clinician portal with audited patient consent', 'OAuth 2.0 provider integration', 'OpenAPI 3.0 specification', 'Plans & subscriptions system'],
        tags: ['Laravel', 'PHP', 'Vue.js', 'FastAPI', 'Python', 'MySQL', 'Redis', 'REST APIs', 'OAuth 2.0', 'Docker'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        link: 'https://github.com/Royal07T/MedExplain',
        github: 'https://github.com/Royal07T/MedExplain',
    },
    {
        title: 'DoctorOnTap',
        category: 'HealthTech',
        description: 'A digital health platform connecting patients with healthcare services including consultations, prescriptions, and delivery coordination.',
        contribution: 'Full-stack development focused on backend systems, REST APIs, authentication, database design, and healthcare workflow implementation.',
        features: ['REST API architecture', 'Authentication & authorization', 'Role-based access control (RBAC)', 'Healthcare workflow management', 'Database-driven functionality', 'Admin dashboard'],
        tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST APIs'],
        image: 'assets/images/doctorontap.png',
        link: 'https://new.doctorontap.com.ng/',
        github: null,
    },
    {
        title: 'Xala Premium',
        category: 'SaaS / Web Application',
        description: 'Hotel booking and reservation platform featuring room availability management, booking workflows, and administrative tools.',
        contribution: 'Full-stack development focused on backend APIs, booking system logic, customer management, and platform feature enhancements.',
        features: ['Booking workflows', 'Room availability system', 'Customer management', 'Admin dashboard', 'Payment integration', 'Responsive interface'],
        tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST APIs'],
        image: 'assets/images/xala.png',
        link: 'https://xalapremium.com.ng/',
        github: null,
    },
    {
        title: 'Wired Banking Africa',
        category: 'FinTech',
        description: 'Backend services supporting merchant wallets, POS systems, and financial transaction processing.',
        contribution: 'Backend development focused on secure API design, authentication systems, user management, and maintaining production financial services.',
        features: ['Secure API architecture', 'Authentication & validation', 'User management system', 'Transaction processing', 'POS system integration'],
        tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'POS Systems'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        link: '#contact',
        github: null,
    },
];

const experiences = [
    {
        role: 'Full-Stack Software Engineer',
        company: 'DoctorOnTap (HealthTech)',
        period: 'Jul 2025 - Present',
        meta: 'Remote',
        description: 'Develop and maintain production features for a telemedicine platform serving patients, doctors, pharmacies, and delivery partners. Design secure REST APIs for appointments, consultations, prescriptions, healthcare workflows, authentication, authorization, RBAC, and payment integrations while improving stability and backend performance.',
        tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'REST APIs', 'JWT'],
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
        period: 'May 2024 - Dec 2024',
        meta: 'Hybrid',
        description: 'Built backend services supporting merchant wallets, POS systems, and financial transactions. Developed secure APIs with authentication, validation, user management, and maintained production services.',
        tags: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git', 'POS Systems'],
    },
    {
        role: 'Backend Software Engineer',
        company: 'Methic Technology Ltd',
        period: 'Feb 2024 - May 2024',
        meta: 'Hybrid',
        description: 'Developed backend modules for a loan management platform, integrated payment gateways and webhook processing, optimized SQL queries, and maintained production backend services.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Payments', 'Webhooks', 'Query Optimization'],
    },
    {
        role: 'Network Administrator',
        company: 'Rosa Mystical Academy',
        period: 'Feb 2023 - may 2026',
        meta: 'Part-time',
        description: 'Handled networking and infrastructure support with focus on access, connectivity, and security fundamentals.',
        tags: ['Network Engineering', 'Security','Network Administrator'],
    },
    {
        role: 'Tutor',
        company: 'Freelance Educator',
        period: 'Jun 2022 - Oct 2023',
        meta: 'Education',
        description: 'Conducted hands-on tutorials in PHP, HTML, and CSS, helping learners improve practical web development knowledge.',
        tags: ['Teaching', 'PHP', 'HTML', 'CSS'],
    },
    {
        role: 'Network Engineer',
        company: 'Galak Tech',
        period: 'Jan 2019 - Mar 2022',
        meta: 'Full-time · On-site · Abuja, Nigeria',
        description: 'Engineered and maintained reliable network solutions, diagnosed issues, and improved infrastructure stability through hands-on support and deployment work.',
        tags: ['Network Infrastructure', 'Cisco', 'VPN'],
    },
];

const education = [
    {
        title: 'Bachelor of Science in Computer Science',
        organization: 'University of the People (UoPeople)',
        meta: 'Currently Enrolled',
    },
];

const certifications = [
    {
        title: 'Cisco Certified Network Associate (CCNA)',
        link: 'https://www.credly.com/badges/cd734bbd-bdf1-479d-9a45-ab6a3e363003/linked_in_profile',
    },
    {
        title: 'CCNAv7: Introduction to Networks',
        link: 'assets/docs/Timothy JehwoOghenero-CCNA CLASS ITN-certificate.pdf',
    },
    {
        title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
        link: 'assets/docs/Timothy JehwoOghenero-CCNA CLASS SRWE-certificate.pdf',
    },
    {
        title: 'CCNAv7: Enterprise Networking, Security, and Automation',
        link: 'assets/docs/Timothy JehwoOghenero-CCNA CLASS ENSA-certificate.pdf',
    },
    {
        title: 'ALX Software Engineering Program',
        link: 'assets/images/My AlX Cert.pdf',
    },
    {
        title: 'CodinGame Certification — C Problem Solving, With Honors',
        link: 'assets/docs/Certification.pdf',
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

            const contributionSection = project.contribution ? `
                <div class="project-section">
                    <span class="project-section-label">My Contribution</span>
                    <p class="project-section-text">${project.contribution}</p>
                </div>
            ` : '';

            const featuresSection = project.features && project.features.length ? `
                <div class="project-section">
                    <span class="project-section-label">Key Features</span>
                    <ul class="project-features-list">
                        ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            ` : '';

            return `
                <article class="project-card glass-card">
                    <div class="project-media">${media}</div>
                    <div class="project-body">
                        <div class="project-topline">
                            <span class="project-category">${project.category}</span>
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        ${contributionSection}
                        ${featuresSection}
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
                            <p class="experience-company">${item.company}</p>
                        </div>
                        <span class="experience-period">${item.period}</span>
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

function renderEducation() {
    const list = document.getElementById('education-list');
    if (!list) return;

    list.innerHTML = education
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

function renderCertifications() {
    const list = document.getElementById('certifications-list');
    if (!list) return;

    list.innerHTML = certifications
        .map(
            (item) => {
                const linkHtml = item.link
                    ? `<a href="${item.link}" target="_blank" rel="noreferrer" class="credential-link">View Certificate</a>`
                    : '';
                return `
                    <article class="credential-card glass-card">
                        <h3>${item.title}</h3>
                        ${linkHtml}
                    </article>
                `;
            }
        )
        .join('');
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
renderProjects();
renderExperience();
renderEducation();
renderCertifications();
setupThemeToggle();
setupMobileMenu();
setupRevealAnimations();
setupContactForm();
setYear();
