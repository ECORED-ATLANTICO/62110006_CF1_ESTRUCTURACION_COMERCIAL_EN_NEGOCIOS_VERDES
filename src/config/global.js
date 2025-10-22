export default {
  global: {
    Name: 'Comercio sostenible',
    Description:
      'El componente formativo Comercio sostenible aborda los negocios verdes desde su marco legal en Colombia, oportunidades y tendencias. Profundiza en la demanda y oferta verde, perfil del cliente, productos sostenibles, valor agregado, formatos comerciales y creación de portafolios. Promueve prácticas responsables con el ambiente, orientadas al mercado actual y al desarrollo económico sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Negocios verdes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco referencial y legal en Colombia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Oportunidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tendencias del mercado',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Demanda verde',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Oferta verde',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Perfil del cliente verde',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Productos y servicios verdes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Valor agregado y paquete de beneficios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Formatos comerciales verdes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Portafolio de productos y servicios verdes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: '<em>Brochure</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1 Negocios verdes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2020). <i>Negocios verdes</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AYRX9Ofq5xk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '1 Negocios verdes',
      referencia:
        'TvAgro por Juan Gonzalo Angel. (2025). <i>Negocios verdes: Guía de emprendimiento sostenible en Colombia</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2tI03K0Uv50&ab_channel=TvAgro',
    },
    {
      tema: '5 Productos y servicios verdes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). <i>Productos y negocios sostenibles</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=P37n6kTYaZ0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '8 Portafolio de productos y servicios verdes',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 15 de noviembre). <i>Portafolio de productos y servicios</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DWjhZ4fNVuk&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: '<em>9 Brochure</em>',
      referencia:
        'Olaya, M. (2025). <i>Guía para crear brochure</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=X0eC1yLRASk',
    },
  ],
  glosario: [
    {
      termino: 'Agricultura sostenible',
      significado:
        'Prácticas agrícolas que protegen el medioambiente, respetan la biodiversidad y mejoran el bienestar rural.',
    },
    {
      termino: 'Beneficios',
      significado:
        'Ventajas tangibles e intangibles que obtiene el cliente al adquirir un producto o servicio verde.',
    },
    {
      termino: '<em>Brochure</em>',
      significado:
        'Herramienta gráfica que presenta de manera resumida los productos o servicios sostenibles de una empresa.',
    },
    {
      termino: 'Comercio sostenible',
      significado:
        'Modelo económico que promueve prácticas responsables en lo ambiental, social y económico.',
    },
    {
      termino: 'Concepto',
      significado:
        'Definición general que permite comprender un tema, fenómeno o categoría dentro del enfoque sostenible.',
    },
    {
      termino: 'Demanda verde',
      significado:
        'Preferencia de los consumidores por productos y servicios amigables con el medioambiente.',
    },
    {
      termino: 'Efectos',
      significado:
        'Resultados o impactos generados por la implementación de prácticas verdes en la economía o la sociedad.',
    },
    {
      termino: 'Economía circular',
      significado:
        'Modelo productivo basado en reducir, reutilizar y reciclar recursos para minimizar residuos.',
    },
    {
      termino: 'Empaque sostenible',
      significado:
        'Envase que minimiza su impacto ambiental mediante materiales reciclables o biodegradables.',
    },
    {
      termino: 'Energías renovables',
      significado:
        'Fuentes de energía que se obtienen de recursos naturales inagotables como el sol, viento o agua.',
    },
    {
      termino: 'Estructura',
      significado:
        'Organización interna de elementos como un portafolio, <em>brochure</em> o paquete de beneficios.',
    },
    {
      termino: 'Formatos comerciales',
      significado:
        'Tipos de presentación comercial de productos verdes, tanto físicos como digitales.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Efecto que una actividad, producto o servicio tiene sobre el entorno natural.',
    },
    {
      termino: 'Innovación sostenible',
      significado:
        'Desarrollo de nuevas soluciones que combinan funcionalidad con cuidado del medioambiente',
    },
    {
      termino: 'Marco legal',
      significado:
        'Conjunto de normas que regulan los negocios verdes en Colombia.',
    },
    {
      termino: 'Negocios verdes',
      significado:
        'Emprendimientos económicos que generan beneficios ambientales, sociales y económicos.',
    },
    {
      termino: 'Oferta verde',
      significado:
        'Conjunto de bienes o servicios producidos bajo criterios de sostenibilidad.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'Posibilidades de crecimiento económico en sectores ecológicos o sostenibles.',
    },
    {
      termino: 'Paquete de beneficios',
      significado:
        'Conjunto integral de valores añadidos que complementan un producto o servicio verde.',
    },
    {
      termino: 'Perfil del cliente verde',
      significado:
        'Conjunto de características que definen al consumidor comprometido con la sostenibilidad.',
    },
    {
      termino: 'Portafolio verde',
      significado:
        'Conjunto organizado de productos o servicios con enfoque ambiental y social positivo.',
    },
    {
      termino: 'Tendencias sostenibles',
      significado:
        'Cambios emergentes en el comportamiento del mercado hacia prácticas responsables y ecológicas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona Calle, D. A., & Echeverri Sierra, A. (2018). <em>Adopción e implementación de la economía verde en Colombia.</em> CENSAT Agua Viva – Amigos de la Tierra Colombia.',
      link: 'https://co.boell.org/sites/default/files/economiaverde2_web.pdf',
    },
    {
      referencia:
        'Echavarría, J. (2012). <em>Gerencia de ventas (1.ª ed.).</em> México: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Escobar Cabrera, J. C., & Gómez Racines, L. (Eds.). (2021). <em>Marketing verde, responsabilidad social y composición empresarial.</em> Universidad Santiago de Cali.',
      link:
        'https://libros.usc.edu.co/index.php/usc/catalog/download/323/455/6518?inline=1',
    },
    {
      referencia:
        'Forbes Colombia. (2024). <em>Semana de la sostenibilidad 2024: 25 empresas líderes en sostenibilidad.</em>',
      link:
        'https://forbes.co/2024/09/23/sostenibilidad/forbes-colombia-presenta-la-semana-de-la-sostenibilidad-2024/',
    },
    {
      referencia:
        'García, Á. M. (2014). <em>Cierre esa venta: No deje escapar al cliente. Técnicas y ejemplos prácticos.</em> Bogotá: Fundación Confemetal.',
      link: '',
    },
    {
      referencia:
        'García Palomo, J. P. (2013). <em>Neuromarketing: El otro lado del marketing.</em> Bogotá: Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Llamazares, O. (2015). <em>Negociación internacional.</em> Madrid: Global Marketing.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). <em>Anexo 2: Tendencias de mercado de los negocios verdes del Plan Nacional de Negocios Verdes 2022 – 2030.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/11/Anexo2-Tendencias-de-mercado-de-NV-del-PNNV-2022-2030.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2023). <em>Catálogo de negocios verdes 2023.</em>',
      link: 'https://www.minambiente.gov.co/wp-content/uploads/2023/12/CATALOGO-NEGOCIOS-VERDES-2023-4.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
