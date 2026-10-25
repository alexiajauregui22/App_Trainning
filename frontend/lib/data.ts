// Datos simulados para la fase de diseño visual.
// Se reemplazarán por llamadas a la API del backend cuando se implemente la lógica.

export const brand = {
  name: "Gesundheitsforum Dienstbier",
  short: "GFD",
};

export const disciplines = [
  "Fuerza",
  "Running",
  "CrossFit",
  "Yoga",
  "Sauna",
  "Alimentación",
];

export const benefits = [
  {
    title: "Equipamiento premium",
    text: "Máquinas de última generación y zonas de peso libre diseñadas para un entrenamiento preciso.",
  },
  {
    title: "Entrenadores certificados",
    text: "Profesionales acreditados que adaptan cada sesión a tus objetivos y a tu nivel.",
  },
  {
    title: "Sauna y recuperación",
    text: "Espacios de sauna y recuperación pensados para que el descanso también cuente.",
  },
  {
    title: "Planes nutricionales",
    text: "Orientación alimentaria basada en tu progreso, no en dietas genéricas.",
  },
  {
    title: "Clases grupales",
    text: "Sesiones de alta energía y yoga para entrenar en comunidad con motivación constante.",
  },
  {
    title: "Horarios flexibles",
    text: "Abierto en horarios amplios para que el entrenamiento se adapte a tu agenda.",
  },
];

export const services = [
  { id: "musculacion", title: "Musculación", text: "Fuerza, hipertrofia y técnica con pesas libres y máquinas.", tag: "Fuerza", bg: "linear-gradient(160deg,#4a4a4a,#1a1a1a)" },
  { id: "cardio", title: "Cardio", text: "Running, intervalos y resistencia para mejorar tu capacidad aeróbica.", tag: "Resistencia", bg: "linear-gradient(160deg,#2d2d2d,#4a4a4a)" },
  { id: "funcional", title: "Entrenamiento funcional", text: "Movimiento real, potencia y coordinación para la vida diaria.", tag: "Funcional", bg: "linear-gradient(160deg,#1a1a1a,#3d5a14)" },
  { id: "yoga", title: "Yoga", text: "Movilidad, respiración y equilibrio para cuerpo y mente.", tag: "Bienestar", bg: "linear-gradient(160deg,#3a3a3a,#9acd32)" },
  { id: "sauna", title: "Sauna", text: "Calor y recuperación para relajar músculos y mejorar el descanso.", tag: "Recuperación", bg: "linear-gradient(160deg,#2d2d2d,#6b4f2a)" },
  { id: "nutricion", title: "Nutrición", text: "Planes alimentarios y recetas fitness alineados a tu objetivo.", tag: "Nutrición", bg: "linear-gradient(160deg,#1a1a1a,#5a7a1e)" },
  { id: "personal", title: "Personal Training", text: "Atención uno a uno con seguimiento y plan a medida.", tag: "1 a 1", bg: "linear-gradient(160deg,#4a4a4a,#2d2d2d)" },
  { id: "instalaciones", title: "Instalaciones", text: "Vestidores, cafetería saludable y zonas de descanso.", tag: "Espacios", bg: "linear-gradient(160deg,#3a3a3a,#1a1a1a)" },
];

export const memberships = [
  {
    name: "Básico",
    price: "39",
    period: "/ mes",
    description: "Para empezar con acceso completo a las instalaciones.",
    features: ["Acceso a sala de musculación y cardio", "Horario estándar", "1 evaluación de inicio"],
    featured: false,
  },
  {
    name: "Premium",
    price: "69",
    period: "/ mes",
    description: "El plan más elegido: clases y recuperación incluidas.",
    features: ["Todo lo del plan Básico", "Clases grupales ilimitadas", "Sauna y zona de recuperación", "Plan nutricional mensual"],
    featured: true,
  },
  {
    name: "Élite",
    price: "119",
    period: "/ mes",
    description: "Atención personalizada y seguimiento de alto rendimiento.",
    features: ["Todo lo del plan Premium", "4 sesiones de entrenador personal al mes", "Seguimiento de métricas corporales", "Acceso prioritario a reservas"],
    featured: false,
  },
];

export const transformations = [
  { name: "Lucía M.", time: "16 semanas", weight: "−9,4 kg", muscle: "+1,8 kg", fat: "−6,2 %", quote: "Pasé de entrenar sin rumbo a tener un plan que se adapta a mí cada semana." },
  { name: "Markus R.", time: "24 semanas", weight: "+6,1 kg", muscle: "+4,3 kg", fat: "−2,1 %", quote: "El seguimiento de progreso me mantuvo enfocado durante todo el proceso." },
  { name: "Ana P.", time: "12 semanas", weight: "−5,0 kg", muscle: "+0,9 kg", fat: "−4,0 %", quote: "La combinación de yoga, sauna y nutrición cambió por completo mi energía." },
];

export const nutritionTopics = [
  { title: "Alimentación saludable", tag: "01" },
  { title: "Recetas fitness", tag: "02" },
  { title: "Suplementación", tag: "03" },
  { title: "Recuperación muscular", tag: "04" },
  { title: "Bienestar integral", tag: "05" },
];

export const galleryItems = [
  { label: "Área de pesas", size: "tall", bg: "linear-gradient(160deg,#4a4a4a,#1a1a1a)" },
  { label: "Cardio", size: "wide", bg: "linear-gradient(160deg,#2d2d2d,#3d3d3d)" },
  { label: "Zonas funcionales", size: "", bg: "linear-gradient(160deg,#9acd32,#4a6a14)" },
  { label: "Sauna", size: "", bg: "linear-gradient(160deg,#6b4f2a,#1a1a1a)" },
  { label: "Vestidores", size: "", bg: "linear-gradient(160deg,#3a3a3a,#2d2d2d)" },
  { label: "Cafetería saludable", size: "wide", bg: "linear-gradient(160deg,#5a7a1e,#1a1a1a)" },
];

// ---------- Dashboard del cliente (simulado) ----------

export const memberProfile = {
  name: "Miembro demo",
  plan: "Premium",
  renewal: "15 nov 2026",
  status: "Activa",
};

export const memberPayments = [
  { date: "15 oct 2026", concept: "Plan Premium — octubre", amount: "€69,00", status: "Pagado" },
  { date: "15 sep 2026", concept: "Plan Premium — septiembre", amount: "€69,00", status: "Pagado" },
  { date: "15 ago 2026", concept: "Plan Premium — agosto", amount: "€69,00", status: "Pagado" },
];

export const memberRoutines = [
  { name: "Fuerza — tren superior", detail: "4 ejercicios · 45 min", done: 3, total: 4 },
  { name: "Cardio — intervalos", detail: "6 rondas · 25 min", done: 6, total: 6 },
  { name: "Movilidad — yoga", detail: "Flujo de 20 min", done: 0, total: 1 },
];

export const memberBookings = [
  { title: "CrossFit funcional", when: "Mar 27 oct · 18:30", kind: "Clase" },
  { title: "Entrenamiento personal", when: "Jue 29 oct · 09:00", kind: "Entrenador" },
  { title: "Sauna y recuperación", when: "Sáb 31 oct · 11:00", kind: "Sauna" },
];

export const memberGoals = [
  { label: "Reducir % de grasa a 14 %", current: 62, unit: "" },
  { label: "Aumentar masa muscular +2 kg", current: 45, unit: "" },
  { label: "Asistir 4 veces por semana", current: 75, unit: "" },
];

export const memberMetrics = {
  weight: "82,4 kg",
  muscle: "36,2 kg",
  fat: "16,8 %",
  bmi: "24,6",
};

export const weightHistory = [86.1, 85.4, 84.9, 84.2, 83.6, 83.1, 82.4];
export const weightLabels = ["Ago", "Sep", "Sep", "Oct", "Oct", "Oct", "Hoy"];

export const workoutHistory = [
  { date: "23 oct", title: "Fuerza — tren superior", duration: "48 min" },
  { date: "21 oct", title: "Cardio — intervalos", duration: "27 min" },
  { date: "19 oct", title: "Yoga — movilidad", duration: "35 min" },
  { date: "16 oct", title: "Fuerza — tren inferior", duration: "52 min" },
];

// ---------- Dashboard administrativo (simulado) ----------

export const adminKpis = [
  { label: "Miembros activos", value: "1.284", note: "+38 este mes", dark: true },
  { label: "Ingresos del mes", value: "€48.320", note: "+12 % vs. septiembre", dark: false },
  { label: "Reservas hoy", value: "176", note: "82 % de ocupación", dark: false },
  { label: "Pagos pendientes", value: "23", note: "Requieren seguimiento", dark: false },
];

export const adminRevenue = [
  { month: "May", value: 62 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 58 },
  { month: "Ago", value: 74 },
  { month: "Sep", value: 82 },
  { month: "Oct", value: 96 },
];

export const adminPayments = [
  { member: "Lucía M.", plan: "Premium", amount: "€69,00", status: "Pagado", date: "25 oct" },
  { member: "Markus R.", plan: "Élite", amount: "€119,00", status: "Pendiente", date: "24 oct" },
  { member: "Ana P.", plan: "Básico", amount: "€39,00", status: "Pagado", date: "24 oct" },
  { member: "Javier T.", plan: "Premium", amount: "€69,00", status: "Vencido", date: "10 oct" },
];

export const adminActivity = [
  { title: "Nueva membresía Élite", detail: "Markus R. · hace 12 min" },
  { title: "Recordatorio de renovación enviado", detail: "34 miembros · hoy 08:00" },
  { title: "Campaña de promoción activa", detail: "Descuento de otoño · 9 días" },
  { title: "Reserva de sauna cancelada", detail: "Ana P. · hace 1 h" },
];
