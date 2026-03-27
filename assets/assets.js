import user_image from './user-image.png';
import foto_cv from './foto cv.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import perfilnofondo from './perfilnofondo.png.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    foto_cv,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    perfilnofondo,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Ecosistema Digital Multi-Plataforma para Radiodifusión',
        description: 'Aplicación Móvil & Web',
        bgImage: '/radio1.jpeg',
        images: ['/radio1.jpeg', '/radio2.jpeg', '/admin radio.jpeg', '/admin radio 2.jpeg', '/admin radio 3.jpeg'],
        link: null,
        fullDescription: 'Desarrollo completo de un ecosistema digital para radiodifusión que incluye aplicación móvil multiplataforma y panel de administración web. La aplicación permite a los usuarios escuchar radio en vivo, ver programación, recibir notificaciones y acceder a contenido exclusivo. El panel administrativo facilita la gestión de contenido, programación y análisis de audiencia en tiempo real.'
    },
    {
        title: 'Plataforma de soporte con agente de IA para empresa OMD',
        description: 'Aplicación Web',
        bgImage: '/soporte1.png',
        images: ['/soporte1.png', '/soporte2.png'],
        link: null,
        fullDescription: 'Plataforma web de soporte técnico integrada con inteligencia artificial para automatizar y optimizar la atención al cliente. El sistema utiliza un agente de IA para responder consultas frecuentes, clasificar tickets y proporcionar soluciones instantáneas, mejorando significativamente los tiempos de respuesta y la satisfacción del cliente.'
    },
    {
        title: 'Panel de Administración para empresa de Criptoactivos',
        description: 'Frontend Web',
        bgImage: '/ADMIN.png',
        link: null,
        fullDescription: 'Desarrollo del frontend de un panel de administración robusto y seguro para la gestión de criptoactivos. La interfaz permite monitorear transacciones, gestionar carteras digitales, visualizar análisis de mercado en tiempo real y administrar usuarios, todo con un diseño intuitivo y enfocado en la seguridad.'
    },
    {
        title: 'Sistema de Evaluación de Pensamiento Computacional mediante Juegos',
        description: 'Aplicación Web Educativa',
        bgImage: '/teg.png',
        images: ['/teg.png', '/teg2.png', '/teg3.png'],
        link: null,
        fullDescription: 'Plataforma educativa interactiva que evalúa el pensamiento computacional de estudiantes a través de juegos didácticos. El sistema gamifica conceptos de programación y lógica, proporcionando retroalimentación inmediata y reportes detallados de progreso para educadores, haciendo el aprendizaje más atractivo y efectivo.'
    },
]

export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Desarrollo Web', 
        description: 'Desarrollo de sitios web modernos, escalables y responsivos utilizando las últimas tecnologías como React, Next.js y Vue.js, optimizados para rendimiento y experiencia de usuario.', 
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Aplicaciones Móviles', 
        description: 'Creación de aplicaciones móviles nativas con Kotlin y multiplataforma con React Native, Flutter y Expo, enfocadas en ofrecer experiencias fluidas y de alto rendimiento.', 
        link: '' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'Diseño UI/UX', 
        description: 'Diseño de interfaces intuitivas y centradas en el usuario mediante prototipado en Figma, garantizando experiencias visuales atractivas y funcionales que conectan con tu audiencia.', 
        link: '' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Mantenimiento y Optimización', 
        description: 'Mejora continua de sistemas existentes, optimización de rendimiento, actualización de tecnologías y mantenimiento preventivo para garantizar la estabilidad y evolución de tus proyectos.', 
        link: '' 
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tecnologías', description: 'C, C++, JavaScript, Kotlin, MySQL, React, Next.js, HTML, CSS, Tailwind CSS, Python, WordPress, PHP, Figma, Dart, Flutter, Firebase, Vue.js, React Native, Expo', isHtml: false },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Educación', description: 'Ingeniera en Informática', isHtml: false }
];

export const certifications = [
    { name: 'React Advanced', org: 'Meta 2026', link: 'https://www.coursera.org/account/accomplishments/verify/AFAO58B9XXVO' },
    { name: 'React Basics', org: 'Meta 2026', link: 'https://www.coursera.org/account/accomplishments/verify/ZBNWTT6Z8GV2' },
    { name: 'Fundamentos de JavaScript', org: 'Platzi 2023', link: 'https://platzi.com/p/sarai2021/curso/2467-frontend-developer/diploma/detalle/' },
    { name: 'Frontend Developer teórico-práctico', org: 'Platzi 2023', link: 'https://platzi.com/p/sarai2021/curso/2477-frontend-developer-practico/diploma/detalle/' },
    { name: 'JavaScript Práctico', org: 'Platzi 2023', link: 'https://platzi.com/p/sarai2021/curso/3271-javascript-practico/diploma/detalle/' },
    { name: 'IA generativa: más allá del chatbot', org: 'Google Cloud 2026', link: 'https://www.coursera.org/account/accomplishments/verify/84ZLBZTXAT88' },
    { name: 'Kotlin para Android', org: 'en proceso', link: null }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];