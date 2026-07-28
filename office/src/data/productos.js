import React, { useState, useEffect } from 'react';

export const PRODUCTS_DATA = [
  // PAPELERÍA
  {
    id: 1, nombre: 'Cuaderno Ejecutivo', categoria: 'Papelería', marca: 'Norma', precio: 5.50,
    descCort: 'Cuaderno tapa dura 100 hojas.', descCompleta: 'Cuaderno de diseño ejecutivo con tapa dura, 100 hojas rayadas de alta calidad, ideal para notas de reuniones.',
    color: 'Negro', material: 'Papel/Cartón', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2, nombre: 'Resma de Papel A4', categoria: 'Papelería', marca: 'Report', precio: 4.20,
    descCort: 'Resma 500 hojas 75g.', descCompleta: 'Resma de papel blanco tamaño A4, 500 hojas de 75 gramos. Alta blancura, perfecta para impresoras láser y de inyección.',
    color: 'Blanco', material: 'Papel', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1598528751515-380d32eb3d15?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3, nombre: 'Carpeta de Archivos', categoria: 'Papelería', marca: 'Esselte', precio: 2.10,
    descCort: 'Carpeta plástica con gancho.', descCompleta: 'Carpeta organizadora de plástico resistente con gancho metálico interno. Ideal para documentos tamaño carta y oficio.',
    color: 'Azul', material: 'Plástico', garantia: '1 mes', disponibilidad: 'Pocas unidades',
    imagen: 'https://images.unsplash.com/photo-1554189097-ffe88e998a2b?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4, nombre: 'Libreta Moleskine Clásica', categoria: 'Papelería', marca: 'Moleskine', precio: 18.90,
    descCort: 'Libreta de bolsillo premium.', descCompleta: 'La clásica libreta Moleskine con cierre elástico y cinta marcadora. Papel libre de ácido para una escritura suave.',
    color: 'Negro', material: 'Cuero sintético/Papel', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5, nombre: 'Notas Adhesivas', categoria: 'Papelería', marca: 'Post-it', precio: 3.00,
    descCort: 'Paquete de 400 notas color.', descCompleta: 'Notas adhesivas clásicas en colores neón. Adhesivo súper fuerte que se pega y despega sin dejar residuos.',
    color: 'Multicolor', material: 'Papel', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80'
  },
  // MOBILIARIO
  {
    id: 6, nombre: 'Escritorio en L', categoria: 'Mobiliario', marca: 'OfficeDesign', precio: 150.00,
    descCort: 'Escritorio esquinero moderno.', descCompleta: 'Amplio escritorio en forma de L, ideal para optimizar el espacio en oficinas o teletrabajo. Superficie resistente a rayones.',
    color: 'Roble/Negro', material: 'Madera/Metal', garantia: '1 año', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7, nombre: 'Silla Ergonómica Pro', categoria: 'Mobiliario', marca: 'Herman Miller', precio: 450.00,
    descCort: 'Silla premium con soporte lumbar.', descCompleta: 'Silla de malla transpirable con soporte lumbar ajustable, apoyabrazos 3D y mecanismo de inclinación sincronizada.',
    color: 'Gris oscuro', material: 'Malla/Aluminio', garantia: '5 años', disponibilidad: 'Agotado temporalmente',
    imagen: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8, nombre: 'Archivador Metálico', categoria: 'Mobiliario', marca: 'Steelcase', precio: 120.00,
    descCort: 'Archivador de 3 gavetas.', descCompleta: 'Estructura metálica de alta resistencia. Incluye cerradura de seguridad para la gaveta superior y rieles de extensión total.',
    color: 'Gris', material: 'Acero', garantia: '2 años', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 9, nombre: 'Mesa Auxiliar', categoria: 'Mobiliario', marca: 'IKEA', precio: 45.00,
    descCort: 'Mesa compacta rodante.', descCompleta: 'Mesa auxiliar con ruedas giratorias bloqueables, perfecta para impresoras, café o almacenamiento adicional bajo el escritorio.',
    color: 'Blanco', material: 'MDF/Acero', garantia: '6 meses', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 10, nombre: 'Estantería de Madera', categoria: 'Mobiliario', marca: 'HomeStyle', precio: 80.00,
    descCort: 'Librero de 5 niveles.', descCompleta: 'Estantería minimalista de 5 niveles, soporta hasta 15kg por estante. Ideal para organizar libros, biblioratos o decoración.',
    color: 'Pino', material: 'Madera', garantia: '1 año', disponibilidad: 'Pocas unidades',
    imagen: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=400&q=80'
  },
  // TECNOLOGÍA
  {
    id: 11, nombre: 'Impresora Multifuncional', categoria: 'Tecnología', marca: 'HP', precio: 180.00,
    descCort: 'Imprime, escanea y copia con WiFi.', descCompleta: 'Impresora de inyección de tinta con sistema continuo. Conectividad WiFi y Bluetooth, impresión rápida a doble cara.',
    color: 'Blanco', material: 'Plástico ABS', garantia: '1 año', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 12, nombre: 'Escáner Portátil', categoria: 'Tecnología', marca: 'Epson', precio: 110.00,
    descCort: 'Escáner compacto de documentos.', descCompleta: 'Escanea documentos y recibos al instante. Ligero, se alimenta por USB y ofrece resolución de hasta 600 dpi.',
    color: 'Negro', material: 'Plástico/Cristal', garantia: '1 año', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1623861271169-be53aeb30d4a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 13, nombre: 'Calculadora Científica', categoria: 'Tecnología', marca: 'Casio', precio: 25.00,
    descCort: 'Calculadora de 240 funciones.', descCompleta: 'Pantalla de dos líneas, cálculos fraccionarios, estadísticas y funciones trigonométricas. Ideal para contabilidad y finanzas.',
    color: 'Gris oscuro', material: 'Plástico', garantia: '6 meses', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 14, nombre: 'Trituradora de Papel', categoria: 'Tecnología', marca: 'Fellowes', precio: 65.00,
    descCort: 'Corte cruzado, capacidad 8 hojas.', descCompleta: 'Destruye documentos confidenciales en partículas ilegibles (corte cruzado). Capacidad para 8 hojas, tarjetas de crédito y clips.',
    color: 'Negro', material: 'Plástico/Acero', garantia: '2 años', disponibilidad: 'Pocas unidades',
    imagen: 'https://images.unsplash.com/photo-1620060956943-7f37f3747d6a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 15, nombre: 'Monitor 24" FHD', categoria: 'Tecnología', marca: 'Dell', precio: 145.00,
    descCort: 'Monitor IPS sin bordes.', descCompleta: 'Monitor Full HD de 24 pulgadas con panel IPS para ángulos de visión ultra amplios. Tecnología anti-parpadeo y filtro de luz azul.',
    color: 'Negro/Plata', material: 'Aluminio/Plástico', garantia: '3 años', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80'
  },
  // ORGANIZACIÓN
  {
    id: 16, nombre: 'Organizador de Escritorio', categoria: 'Organización', marca: 'Acrimet', precio: 12.00,
    descCort: 'Bandeja triple de acrílico.', descCompleta: 'Organizador escalonado de 3 bandejas para clasificar documentos, facturas y correos. Diseño elegante en acrílico transparente.',
    color: 'Transparente', material: 'Acrílico', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 17, nombre: 'Bandejas para Documentos', categoria: 'Organización', marca: 'AmazonBasics', precio: 10.00,
    descCort: 'Set de 2 bandejas apilables.', descCompleta: 'Bandejas tamaño carta apilables. Perfectas para maximizar el espacio vertical en el escritorio y mantener el orden.',
    color: 'Negro mate', material: 'Malla metálica', garantia: '6 meses', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 18, nombre: 'Portalápices Metálico', categoria: 'Organización', marca: 'Mesh', precio: 5.50,
    descCort: 'Portalápices redondo de malla.', descCompleta: 'Cilindro portalápices clásico, resistente al óxido. Espacio suficiente para bolígrafos, tijeras y reglas pequeñas.',
    color: 'Plata', material: 'Metal', garantia: 'No aplica', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1590487561935-7c5c0ba36f32?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 19, nombre: 'Cajonera Móvil', categoria: 'Organización', marca: 'Bisley', precio: 55.00,
    descCort: 'Cajonera plástica de 4 niveles.', descCompleta: 'Módulo de almacenamiento ligero con 4 cajones. Las ruedas facilitan su movilidad bajo cualquier mesa de trabajo.',
    color: 'Blanco/Transparente', material: 'Plástico ABS', garantia: '1 año', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80' // Using generic drawer img
  },
  {
    id: 20, nombre: 'Archivador Plástico', categoria: 'Organización', marca: 'Sterilite', precio: 15.00,
    descCort: 'Caja organizadora con tapa.', descCompleta: 'Caja resistente para archivo muerto o almacenamiento prolongado. Incluye ranuras para colgar carpetas tamaño oficio.',
    color: 'Azul', material: 'Plástico reforzado', garantia: 'No aplica', disponibilidad: 'Pocas unidades',
    imagen: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=400&q=80'
  },
  // ERGONOMÍA
  {
    id: 21, nombre: 'Teclado Ergonómico', categoria: 'Ergonomía', marca: 'Logitech', precio: 85.00,
    descCort: 'Teclado dividido inalámbrico.', descCompleta: 'Diseño dividido y curvo que mejora la postura de las manos. Incluye reposamuñecas acolchado para mayor confort durante todo el día.',
    color: 'Negro', material: 'Plástico/Tela', garantia: '2 años', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 22, nombre: 'Mouse Inalámbrico Vertical', categoria: 'Ergonomía', marca: 'Anker', precio: 28.00,
    descCort: 'Mouse óptico ergonómico.', descCompleta: 'Promueve una posición natural de "apretón de manos", previniendo el síndrome del túnel carpiano. Alta precisión óptica.',
    color: 'Negro', material: 'Plástico/Goma', garantia: '1.5 años', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 23, nombre: 'Descansa Muñecas', categoria: 'Ergonomía', marca: 'Kensington', precio: 18.00,
    descCort: 'Almohadilla de gel para teclado.', descCompleta: 'Almohadilla ergonómica rellena de gel que se adapta a las muñecas, aliviando la presión y reduciendo la fatiga.',
    color: 'Azul marino', material: 'Gel/Tela', garantia: '6 meses', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1618365908648-74f440536ed0?auto=format&fit=crop&w=400&q=80' // Generic office accessories
  },
  {
    id: 24, nombre: 'Soporte para Laptop', categoria: 'Ergonomía', marca: 'Roost', precio: 45.00,
    descCort: 'Base de aluminio ajustable.', descCompleta: 'Eleva la pantalla de tu laptop al nivel de los ojos. Diseño plegable de aluminio, súper portátil y compatible con laptops de 10 a 15.6 pulgadas.',
    color: 'Plata', material: 'Aluminio', garantia: '2 años', disponibilidad: 'Pocas unidades',
    imagen: 'https://images.unsplash.com/photo-1527814050087-379381547384?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 25, nombre: 'Lámpara LED Escritorio', categoria: 'Ergonomía', marca: 'Xiaomi', precio: 38.00,
    descCort: 'Lámpara inteligente anti-fatiga.', descCompleta: 'Iluminación ajustable sin parpadeos para cuidar la vista. Modos de temperatura de color (cálido a frío) controlables por app.',
    color: 'Blanco', material: 'Aleación de aluminio', garantia: '1 año', disponibilidad: 'En stock',
    imagen: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80'
  }
];

export const VIDEOS_DATA = [
  { id: 1, titulo: 'Escritorios Inteligentes Ajustables', desc: 'Mejora tu postura alternando entre estar sentado y de pie con escritorios motorizados.', url: 'https://www.youtube.com/embed/P_H1m1YJ0_Y' },
  { id: 2, titulo: 'Sillas Ergonómicas del Futuro', desc: 'Conoce cómo la tecnología se adapta a tu columna vertebral para un confort absoluto.', url: 'https://www.youtube.com/embed/5X5s_F2-j24' },
  { id: 3, titulo: 'Impresoras Multifuncionales Ecológicas', desc: 'Ahorra tinta y energía con los últimos avances en tecnología de impresión para oficinas.', url: 'https://www.youtube.com/embed/T6X9_o4mG-M' },
  { id: 4, titulo: 'Iluminación LED Inteligente', desc: 'Evita la fatiga visual con lámparas que ajustan su luz según la hora del día.', url: 'https://www.youtube.com/embed/7M_3fHk4V0M' }
];

