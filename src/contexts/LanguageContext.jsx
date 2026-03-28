import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const translations = {
  es: {
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      hours: 'Horarios',
      careers: 'Empleos',
      blog: 'Blog',
      cta: 'Agendar Cita',
    },
    hero: {
      badge: 'Sirviendo a Houston desde 1985',
      headline: 'Su Salud,\nNuestra Prioridad',
      sub: 'Atención médica familiar de calidad en el corazón de Houston. Médicos certificados, trato humano y servicios completos para toda la familia.',
      cta: 'Agendar Cita',
      phone: 'Llámanos ahora: 281-741-4838',
      scroll: 'Conozca más',
    },
    about: {
      tag: 'Nuestra Historia',
      headline: 'Más de 40 años cuidando familias en Houston',
      p1: 'Desde 1985, la Clínica Familiar Tidwell ha sido el hogar médico de miles de familias en la comunidad hispana de Houston. Nuestra misión es ofrecer atención médica de alta calidad, accesible y con el calor humano que toda familia merece.',
      p2: 'Contamos con médicos certificados por juntas médicas, personal bilingüe y tecnología actualizada para garantizar los mejores resultados en su salud. Creemos que la confianza entre médico y paciente es la base de la verdadera medicina familiar.',
      stats: [
        { value: '40+', label: 'Años de experiencia' },
        { value: '15K+', label: 'Pacientes atendidos' },
        { value: '100%', label: 'Compromiso con usted' },
      ],
    },
    services: {
      tag: 'Lo que ofrecemos',
      headline: 'Servicios Médicos Completos',
      sub: 'Desde medicina preventiva hasta servicios especializados, cubrimos todas las necesidades de salud de su familia.',
      items: [
        { title: 'Medicina Familiar', desc: 'Atención integral para todas las edades. Diagnóstico, tratamiento y seguimiento continuo.' },
        { title: 'Clínica de Pérdida de Peso', desc: 'Programas personalizados supervisados por médicos para alcanzar su peso ideal de forma segura.' },
        { title: 'Médico Autorizado USCIS', desc: 'Exámenes médicos oficiales para inmigración. Formulario I-693 completado por médico civil designado.' },
        { title: 'Examen Físico Escolar', desc: 'Certificados médicos para inscripción escolar. Rápido, completo y a precio accesible.' },
        { title: 'Examen DOT', desc: 'Certificación médica para conductores comerciales (CDL). Cumplimos con todos los estándares FMCSA.' },
        { title: 'Medicina Preventiva', desc: 'Vacunas, chequeos anuales, laboratorios y screenings para mantener su salud en óptimas condiciones.' },
        { title: 'Manejo de Enfermedades Crónicas', desc: 'Control y seguimiento de diabetes, hipertensión, colesterol y otras condiciones crónicas.' },
        { title: 'Atención Pediátrica', desc: 'Cuidado especializado para bebés, niños y adolescentes. Well-child visits y vacunación completa.' },
      ],
    },
    testimonials: {
      tag: 'Opiniones reales',
      headline: 'Lo que dicen nuestros pacientes',
      items: [
        {
          name: 'Gaby Garcia',
          role: 'Paciente desde 2018',
          text: 'Excelente atención. El personal es muy amable y profesional. Me ayudaron con mi examen de inmigración y fue un proceso sencillo y rápido. Los recomiendo ampliamente.',
        },
        {
          name: 'Grupo Inztinkto',
          role: 'Clientes frecuentes',
          text: 'Siempre recibimos atención de primera. El doctor es muy dedicado y explica todo con claridad. La clínica está muy bien organizada y el ambiente es muy agradable.',
        },
        {
          name: 'Perla Montes',
          role: 'Paciente desde 2015',
          text: 'Llevo años viniendo a esta clínica y nunca me han fallado. El programa de pérdida de peso me cambió la vida. Personal amable, precios justos y excelente atención.',
        },
      ],
    },
    hours: {
      tag: 'Horarios',
      headline: 'Horario de Atención',
      sub: 'Estamos aquí para usted cuando nos necesita.',
      schedule: [
        { day: 'Lunes – Viernes', time: '09:00 am – 06:00 pm' },
        { day: 'Sábado', time: '09:00 am – 02:00 pm' },
        { day: 'Domingo', time: 'Cerrado' },
      ],
      note: 'Para citas de urgencia fuera del horario, por favor llame al 281-741-4838.',
    },
    contact: {
      tag: 'Contacto',
      headline: 'Estamos Aquí Para Usted',
      address: '13525 Tidwell Rd Suite 700, Houston, TX 77044',
      phone: '281-741-4838',
      email: 'clinicafamiliartidwell@gmail.com',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        message: 'Mensaje o motivo de consulta',
        submit: 'Enviar Mensaje',
        sending: 'Enviando...',
        success: 'Mensaje enviado correctamente. Le contactaremos pronto.',
        error: 'Ocurrió un error. Por favor llámenos directamente.',
      },
    },
    careers: {
      tag: 'Únase al equipo',
      headline: 'Trabaje Con Nosotros',
      sub: 'Buscamos profesionales comprometidos con la salud de nuestra comunidad. Si eres médico, enfermero, asistente médico o personal administrativo bilingüe, nos encantaría conocerte.',
      cta: 'Enviar CV',
      positions: [
        { title: 'Médico Familiar', type: 'Tiempo Completo' },
        { title: 'Asistente Médico', type: 'Tiempo Parcial' },
        { title: 'Recepcionista Bilingüe', type: 'Tiempo Completo' },
      ],
    },
    blog: {
      tag: 'Noticias y consejos',
      headline: 'Blog de Salud',
      posts: [
        {
          date: 'Marzo 2025',
          title: 'La importancia del chequeo anual para toda la familia',
          excerpt: 'Descubra por qué el examen médico anual puede salvar vidas y cómo prepararse para su visita.',
        },
        {
          date: 'Febrero 2025',
          title: 'Inmigración: Lo que necesita saber sobre el examen médico I-693',
          excerpt: 'Guía completa sobre el proceso de examen médico para su solicitud de residencia permanente.',
        },
        {
          date: 'Enero 2025',
          title: 'Control de peso saludable: Mitos y realidades',
          excerpt: 'Nuestros expertos responden las preguntas más comunes sobre pérdida de peso supervisada médicamente.',
        },
      ],
      readMore: 'Leer más',
    },
    footer: {
      tagline: 'Cuidando la salud de su familia desde 1985.',
      links: 'Navegación',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      testimonials: 'Testimonials',
      contact: 'Contact',
      hours: 'Hours',
      careers: 'Careers',
      blog: 'Blog',
      cta: 'Book Appointment',
    },
    hero: {
      badge: 'Serving Houston since 1985',
      headline: 'Your Health,\nOur Priority',
      sub: 'Quality family medical care in the heart of Houston. Board-certified doctors, compassionate service, and comprehensive care for the whole family.',
      cta: 'Book Appointment',
      phone: 'Call us now: 281-741-4838',
      scroll: 'Learn more',
    },
    about: {
      tag: 'Our Story',
      headline: 'Over 40 years caring for Houston families',
      p1: 'Since 1985, Clinica Familiar Tidwell has been the medical home for thousands of families in Houston\'s Hispanic community. Our mission is to provide high-quality, accessible medical care with the human warmth every family deserves.',
      p2: 'Our board-certified physicians, bilingual staff, and updated technology ensure the best health outcomes for our patients. We believe that trust between doctor and patient is the foundation of true family medicine.',
      stats: [
        { value: '40+', label: 'Years of experience' },
        { value: '15K+', label: 'Patients served' },
        { value: '100%', label: 'Commitment to you' },
      ],
    },
    services: {
      tag: 'What we offer',
      headline: 'Comprehensive Medical Services',
      sub: 'From preventive medicine to specialized services, we cover all your family\'s health needs.',
      items: [
        { title: 'Family Medicine', desc: 'Comprehensive care for all ages. Diagnosis, treatment, and ongoing follow-up.' },
        { title: 'Weight Loss Clinic', desc: 'Physician-supervised personalized programs to reach your ideal weight safely.' },
        { title: 'USCIS Authorized Doctor', desc: 'Official immigration medical exams. Form I-693 completed by a designated civil surgeon.' },
        { title: 'School Physical', desc: 'Medical certificates for school enrollment. Fast, thorough, and affordably priced.' },
        { title: 'DOT Physical', desc: 'Medical certification for commercial drivers (CDL). Full FMCSA compliance.' },
        { title: 'Preventive Medicine', desc: 'Vaccines, annual check-ups, labs, and screenings to keep your health in top condition.' },
        { title: 'Chronic Disease Management', desc: 'Monitoring and follow-up for diabetes, hypertension, cholesterol, and other chronic conditions.' },
        { title: 'Pediatric Care', desc: 'Specialized care for infants, children, and teens. Well-child visits and full vaccination.' },
      ],
    },
    testimonials: {
      tag: 'Real reviews',
      headline: 'What Our Patients Say',
      items: [
        {
          name: 'Gaby Garcia',
          role: 'Patient since 2018',
          text: 'Excellent care. The staff is very kind and professional. They helped me with my immigration exam and the process was simple and fast. I highly recommend them.',
        },
        {
          name: 'Grupo Inztinkto',
          role: 'Frequent clients',
          text: 'We always receive top-tier attention. The doctor is very dedicated and explains everything clearly. The clinic is very well organized and the environment is very pleasant.',
        },
        {
          name: 'Perla Montes',
          role: 'Patient since 2015',
          text: 'I have been coming to this clinic for years and they have never let me down. The weight loss program changed my life. Kind staff, fair prices and excellent care.',
        },
      ],
    },
    hours: {
      tag: 'Schedule',
      headline: 'Hours of Operation',
      sub: 'We are here for you when you need us.',
      schedule: [
        { day: 'Monday – Friday', time: '09:00 am – 06:00 pm' },
        { day: 'Saturday', time: '09:00 am – 02:00 pm' },
        { day: 'Sunday', time: 'Closed' },
      ],
      note: 'For urgent appointments outside office hours, please call 281-741-4838.',
    },
    contact: {
      tag: 'Contact',
      headline: 'We Are Here For You',
      address: '13525 Tidwell Rd Suite 700, Houston, TX 77044',
      phone: '281-741-4838',
      email: 'clinicafamiliartidwell@gmail.com',
      form: {
        name: 'Full name',
        email: 'Email address',
        phone: 'Phone number',
        message: 'Message or reason for consultation',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully. We will contact you soon.',
        error: 'An error occurred. Please call us directly.',
      },
    },
    careers: {
      tag: 'Join the team',
      headline: 'Work With Us',
      sub: 'We are looking for professionals committed to the health of our community. If you are a doctor, nurse, medical assistant, or bilingual administrative staff, we would love to meet you.',
      cta: 'Send Resume',
      positions: [
        { title: 'Family Physician', type: 'Full Time' },
        { title: 'Medical Assistant', type: 'Part Time' },
        { title: 'Bilingual Receptionist', type: 'Full Time' },
      ],
    },
    blog: {
      tag: 'News and tips',
      headline: 'Health Blog',
      posts: [
        {
          date: 'March 2025',
          title: 'The importance of the annual check-up for the whole family',
          excerpt: 'Discover why the annual medical exam can save lives and how to prepare for your visit.',
        },
        {
          date: 'February 2025',
          title: 'Immigration: What you need to know about the I-693 medical exam',
          excerpt: 'Complete guide to the medical examination process for your permanent residence application.',
        },
        {
          date: 'January 2025',
          title: 'Healthy weight management: Myths and facts',
          excerpt: 'Our experts answer the most common questions about medically supervised weight loss.',
        },
      ],
      readMore: 'Read more',
    },
    footer: {
      tagline: 'Caring for your family\'s health since 1985.',
      links: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      rights: 'All rights reserved.',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
