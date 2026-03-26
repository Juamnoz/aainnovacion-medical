export const SITE_URL = 'https://www.innovacionmedical.com'
export const SITE_NAME = 'AA Innovacion Medica'
export const SITE_DESCRIPTION =
  'Fabricantes de instrumentos quirurgicos de alta precision para cirujanos plasticos y clinicas de cirugia. Diseñados y fabricados en Medellin, Colombia.'

export interface Product {
  slug: string
  title: string
  description: string
  longDescription: string
  images: string[]
  tag: string
  keywords: string[]
  category: string
}

export const products: Product[] = [
  {
    slug: 'canulas-liposuccion',
    title: 'Canulas de Liposuccion',
    description:
      'Sistema de canulas diseñadas para liposuccion de alta precision. Disponibles en multiples calibres y longitudes.',
    longDescription:
      'Canulas de liposuccion fabricadas en acero inoxidable quirurgico de alta precision. Disponibles en multiples calibres (2mm a 6mm) y longitudes (15cm a 40cm). Diseñadas para aspiracion eficiente con minimo trauma tisular. Personalizables con el logo de tu clinica. Ideales para liposuccion tumescente, lipoescultura y liposuccion asistida por poder (PAL).',
    images: [
      '/images/products/canulas-1.png',
      '/images/products/canulas-2.png',
      '/images/products/canulas-3.png',
      '/images/products/canulas-4.png',
      '/images/products/canulas-5.png',
      '/images/products/canulas-6.png',
    ],
    tag: 'Best Seller',
    keywords: [
      'canulas liposuccion',
      'canulas aspiracion',
      'canulas lipoescultura',
      'comprar canulas liposuccion Colombia',
      'canulas quirurgicas Medellin',
    ],
    category: 'Canulas',
  },
  {
    slug: 'kit-mamoplastia',
    title: 'Kit Mamoplastia',
    description:
      'Set completo de instrumentos para cirugia de aumento y reduccion mamaria, con acabados de alta resistencia.',
    longDescription:
      'Kit completo de instrumental quirurgico para mamoplastia de aumento, reduccion y mastopexia. Incluye separadores, disectores, portaagujas, tijeras y pinzas especializadas. Fabricado en acero inoxidable quirurgico con acabado satinado antirreflejante. Personalizable con logo y marca del cirujano.',
    images: [
      '/images/products/kit-mamoplastia/1.png',
      '/images/products/kit-mamoplastia/2.png',
      '/images/products/kit-mamoplastia/3.png',
      '/images/products/kit-mamoplastia/4.png',
    ],
    tag: 'Kit Completo',
    keywords: [
      'kit mamoplastia',
      'instrumentos mamoplastia',
      'kit cirugia mamaria',
      'instrumental aumento mamario',
      'kit mamoplastia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'kit-abdominoplastia',
    title: 'Kit Abdominoplastia',
    description:
      'Instrumental especializado para procedimientos de abdominoplastia con ergonomia optimizada.',
    longDescription:
      'Kit profesional de instrumentos para abdominoplastia completa y mini abdominoplastia. Incluye separadores abdominales, pinzas de traccion, disectores, portaagujas y tijeras de diseccion. Diseñado para maximizar la eficiencia en quirofano con ergonomia optimizada para procedimientos prolongados.',
    images: [
      '/images/products/kit-abdominoplastia/1.png',
      '/images/products/kit-abdominoplastia/2.png',
    ],
    tag: 'Kit Completo',
    keywords: [
      'kit abdominoplastia',
      'instrumentos abdominoplastia',
      'kit cirugia abdominal',
      'instrumental abdominoplastia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'kit-rinoplastia',
    title: 'Kit Rinoplastia',
    description:
      'Kit completo de instrumentos para rinoplastia con pinzas, cinceles y especulos de alta precision.',
    longDescription:
      'Kit especializado para rinoplastia abierta y cerrada. Incluye osteotomos, cinceles nasales, especulos nasales, pinzas de columela, tijeras de Iris, elevadores de periostio y raspas nasales. Instrumental de microcirugia con acabado de alta precision para resultados esteticos superiores.',
    images: [
      '/images/products/kit-rinoplastia/1.png',
      '/images/products/kit-rinoplastia/2.png',
      '/images/products/kit-rinoplastia/3.png',
    ],
    tag: 'Kit Completo',
    keywords: [
      'kit rinoplastia',
      'instrumentos rinoplastia',
      'cinceles nasales',
      'especulos nasales',
      'kit rinoplastia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'kit-blefaroplastia',
    title: 'Kit Blefaroplastia',
    description:
      'Instrumental completo para cirugia de parpados con tijeras, pinzas y portaagujas de microcirugia.',
    longDescription:
      'Kit de microcirugia para blefaroplastia superior e inferior. Incluye tijeras de microcirugia, pinzas de relojero, portaagujas de microcirugia, gancho de piel, marcador quirurgico y separadores palpebrales. Instrumental de precision extrema para cirugia de parpados con resultados naturales.',
    images: [
      '/images/products/kit-blefaroplastia/1.png',
      '/images/products/kit-blefaroplastia/2.png',
      '/images/products/kit-blefaroplastia/3.png',
      '/images/products/kit-blefaroplastia/4.png',
    ],
    tag: 'Kit Completo',
    keywords: [
      'kit blefaroplastia',
      'instrumentos blefaroplastia',
      'instrumental cirugia parpados',
      'kit blefaroplastia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'equipo-liposuccion',
    title: 'Equipo de Liposuccion',
    description:
      'Maquina y accesorios para procedimientos de liposuccion asistida, con tecnologia nacional de vanguardia.',
    longDescription:
      'Equipo completo de liposuccion con bomba de aspiracion de alta potencia, canulas intercambiables, mangueras y accesorios. Tecnologia colombiana de vanguardia con control de presion ajustable. Ideal para consultorios y clinicas de cirugia plastica. Incluye capacitacion y soporte tecnico.',
    images: [
      '/images/products/equipo-lipo/1.png',
      '/images/products/equipo-lipo/2.png',
      '/images/products/equipo-lipo/3.png',
    ],
    tag: 'Equipo',
    keywords: [
      'equipo liposuccion',
      'maquina liposuccion',
      'bomba liposuccion',
      'equipo liposuccion Colombia',
    ],
    category: 'Equipos',
  },
  {
    slug: 'pinzas-quirurgicas',
    title: 'Pinzas Quirurgicas',
    description:
      'Amplia linea de pinzas quirurgicas para cirugia plastica: Adson, Kelly, Kocher, mosquito y microcirugia.',
    longDescription:
      'Linea completa de pinzas quirurgicas fabricadas en acero inoxidable. Incluye pinzas Adson con y sin dientes, Kelly, Kocher, mosquito, Allis, Babcock, pinzas de diseccion y pinzas de microcirugia. Disponibles en diferentes longitudes y acabados. Personalizables con el logo de tu practica.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'pinzas quirurgicas',
      'pinzas Adson',
      'pinzas Kelly',
      'pinzas microcirugia',
      'pinzas quirurgicas Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'disectores-quirurgicos',
    title: 'Disectores Quirurgicos',
    description:
      'Disectores de punta fina y roma para separacion atraumatica de tejidos en cirugia plastica y reconstructiva.',
    longDescription:
      'Disectores quirurgicos de alta precision para separacion atraumatica de tejidos. Disponibles en punta fina, roma y curva. Ideales para cirugia plastica, reconstructiva y microcirugia. Fabricados en acero inoxidable quirurgico con acabado satinado.',
    images: ['/images/products/disectores.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'disectores quirurgicos',
      'disector cirugia plastica',
      'instrumentos diseccion',
      'disectores Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'valvas-quirurgicas',
    title: 'Valvas Quirurgicas',
    description:
      'Valvas y separadores quirurgicos tipo Ferreira y Farabeuf para exposicion optima del campo operatorio.',
    longDescription:
      'Valvas quirurgicas y separadores para cirugia plastica y general. Incluye valva Ferreira, Farabeuf, Richardson, retractores abdominales y separadores autostaticos. Fabricados en acero inoxidable con bordes atraumaticos y acabado pulido espejo.',
    images: ['/images/products/valvas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'valvas quirurgicas',
      'separadores quirurgicos',
      'valva Ferreira',
      'retractores cirugia',
      'valvas quirurgicas Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'especulos-grades',
    title: 'Especulos y Grades',
    description:
      'Especulos nasales, vaginales y grades quirurgicos de multiples tamaños para exploracion y cirugia.',
    longDescription:
      'Linea completa de especulos y grades quirurgicos. Especulos nasales Killian y Vienna en multiples tamaños, grades de diferentes anchos. Fabricados en acero inoxidable con mecanismo de ajuste preciso. Ideales para otorrinolaringologia y cirugia plastica nasal.',
    images: ['/images/products/canulas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'especulos nasales',
      'especulos quirurgicos',
      'grades quirurgicos',
      'especulo Killian',
      'especulos Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'tijeras-microcirugia',
    title: 'Tijeras de Microcirugia',
    description:
      'Tijeras de microcirugia de alta precision para blefaroplastia, rinoplastia y procedimientos delicados.',
    longDescription:
      'Tijeras de microcirugia con filos de alta precision. Incluye tijeras de Iris, Castroviejo, Westcott y Stevens. Puntas finas y ultrafinas para cortes precisos en cirugia de parpados, nariz y procedimientos esteticos faciales. Acero inoxidable con temple especial para durabilidad del filo.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Microcirugia',
    keywords: [
      'tijeras microcirugia',
      'tijeras Castroviejo',
      'tijeras Iris',
      'tijeras cirugia plastica',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'cinceles-quirurgicos',
    title: 'Cinceles Quirurgicos',
    description:
      'Cinceles y osteotomos nasales para rinoplastia, fabricados con acero templado de maxima precision.',
    longDescription:
      'Cinceles y osteotomos quirurgicos para rinoplastia y cirugia osea. Incluye cinceles rectos, curvos, de gubia y osteotomos nasales laterales y mediales. Fabricados en acero templado con filo duradero. Diferentes anchos disponibles (2mm a 12mm). Esenciales para remodelacion osea nasal.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Rinoplastia',
    keywords: [
      'cinceles quirurgicos',
      'osteotomos nasales',
      'cinceles rinoplastia',
      'cinceles quirurgicos Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'ganchos-quirurgicos',
    title: 'Ganchos Quirurgicos',
    description:
      'Ganchos de piel, retractores y ganchos quirurgicos para traccion y exposicion en cirugia plastica.',
    longDescription:
      'Ganchos quirurgicos para retraccion de piel y tejidos. Incluye ganchos de piel simples y dobles, ganchos de Senn-Mueller, Volkmann y retractores de piel. Puntas atraumaticas para minimizar daño tisular. Ideales para lifting facial, blefaroplastia y cirugia reconstructiva.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'ganchos quirurgicos',
      'retractores piel',
      'ganchos cirugia plastica',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'kit-implante-capilar',
    title: 'Kit Implante Capilar',
    description:
      'Kit especializado para trasplante capilar FUE y FUT con instrumental de extraccion y colocacion de foliculos.',
    longDescription:
      'Kit profesional para implante capilar con tecnica FUE y FUT. Incluye punches de extraccion folicular de multiples diametros, pinzas de implantacion, agujas de Choi, separadores de cuero cabelludo y lupas de aumento. Instrumental de precision para resultados naturales en trasplante capilar.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Kit Especializado',
    keywords: [
      'kit implante capilar',
      'instrumental trasplante capilar',
      'kit FUE',
      'instrumentos implante capilar Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'kit-podologia',
    title: 'Kit Podologia',
    description:
      'Kit completo de instrumentos para podologia clinica y quirurgica con herramientas especializadas.',
    longDescription:
      'Kit profesional de podologia que incluye alicates de uñas, gubias, elevadores de uña, curetas, bisturis podologicos y fresas. Instrumental de acero inoxidable para procedimientos podologicos clinicos y quirurgicos. Ideal para consultorios de podologia y clinicas del pie.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Kit Especializado',
    keywords: [
      'kit podologia',
      'instrumentos podologia',
      'alicates podologia',
      'kit podologia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'cables-bipolares',
    title: 'Cables Bipolares',
    description:
      'Cables bipolares y accesorios de electrocauterio compatibles con las principales marcas de generadores.',
    longDescription:
      'Cables bipolares para electrocauterio compatibles con generadores Bovie, Valleylab, Erbe y otras marcas. Incluye cables de conexion, puntas bipolares tipo pinza y bayoneta. Aislamiento de alta calidad para seguridad del paciente. Multiples longitudes y configuraciones disponibles.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Accesorios',
    keywords: [
      'cables bipolares',
      'electrocauterio',
      'accesorios electrocauterio',
      'cables bipolares Colombia',
    ],
    category: 'Accesorios',
  },
  {
    slug: 'puntas-electrocauterio',
    title: 'Puntas de Electrocauterio',
    description:
      'Puntas y electrodos para electrocauterio monopolar y bipolar en diferentes formas y tamaños.',
    longDescription:
      'Puntas de electrocauterio monopolar y bipolar para coagulacion y corte. Disponibles en configuraciones de aguja, bola, asa, hoja y punta fina. Compatible con las principales marcas de generadores electroquirurgicos. Acero inoxidable con aislamiento de alta temperatura.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Accesorios',
    keywords: [
      'puntas electrocauterio',
      'electrodos quirurgicos',
      'puntas monopolar',
      'electrocauterio Colombia',
    ],
    category: 'Accesorios',
  },
  {
    slug: 'mangos-bisturi',
    title: 'Mangos de Bisturi',
    description:
      'Mangos de bisturi #3, #4 y #7 en acero inoxidable, compatibles con hojas estandar.',
    longDescription:
      'Mangos de bisturi quirurgicos en tamaños #3, #4 y #7. Fabricados en acero inoxidable con acabado satinado para agarre seguro. Compatibles con hojas de bisturi estandar. Disponibles en version larga para cavidades profundas. Personalizables con laser.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'mangos bisturi',
      'mango bisturi quirurgico',
      'porta bisturi',
      'mangos bisturi Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'kit-ritidoplastia',
    title: 'Kit Ritidoplastia (Lifting Facial)',
    description:
      'Kit de instrumentos para lifting facial y ritidoplastia con retractores, tijeras y disectores especializados.',
    longDescription:
      'Kit completo para ritidoplastia y lifting facial. Incluye disectores faciales, tijeras de diseccion, retractores de colgajo, ganchos de piel, canulas de liposuccion facial y portaagujas de microcirugia. Instrumental diseñado para tecnicas SMAS y deep plane con acabados de alta precision.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Kit Especializado',
    keywords: [
      'kit ritidoplastia',
      'instrumentos lifting facial',
      'kit lifting',
      'instrumental ritidoplastia Colombia',
    ],
    category: 'Kits Quirurgicos',
  },
  {
    slug: 'raspas-quirurgicas',
    title: 'Raspas Quirurgicas',
    description:
      'Raspas nasales y quirurgicas para rinoplastia y procedimientos de remodelacion osea.',
    longDescription:
      'Raspas quirurgicas para pulido y remodelacion osea en rinoplastia. Disponibles en grano fino, medio y grueso. Raspas rectas y curvas de diferentes longitudes. Fabricadas en acero inoxidable con superficie abrasiva duradera. Esenciales para acabado estetico en cirugia nasal.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Rinoplastia',
    keywords: [
      'raspas quirurgicas',
      'raspas rinoplastia',
      'raspas nasales',
      'lima nasal quirurgica',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'dilatadores-quirurgicos',
    title: 'Dilatadores Quirurgicos',
    description:
      'Dilatadores Hegar y quirurgicos de multiples calibres para procedimientos de dilatacion progresiva.',
    longDescription:
      'Set de dilatadores quirurgicos tipo Hegar en calibres progresivos. Fabricados en acero inoxidable con puntas redondeadas atraumaticas. Ideales para dilatacion cervical y otros procedimientos quirurgicos. Acabado pulido espejo para maxima seguridad del paciente.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Instrumentos',
    keywords: [
      'dilatadores quirurgicos',
      'dilatadores Hegar',
      'set dilatadores',
      'dilatadores Colombia',
    ],
    category: 'Instrumentos',
  },
  {
    slug: 'martillos-quirurgicos',
    title: 'Martillos Quirurgicos',
    description:
      'Martillos quirurgicos para osteotomia nasal y procedimientos ortopedicos de impacto controlado.',
    longDescription:
      'Martillos quirurgicos diseñados para osteotomia nasal en rinoplastia y procedimientos ortopedicos. Cabezas de acero inoxidable con mangos ergonomicos para impacto controlado y preciso. Disponibles en diferentes pesos (150g a 500g) para adaptarse a cada procedimiento.',
    images: ['/images/products/pinzas.jpg'],
    tag: 'Rinoplastia',
    keywords: [
      'martillos quirurgicos',
      'martillo osteotomia',
      'martillo rinoplastia',
      'martillo quirurgico Colombia',
    ],
    category: 'Instrumentos',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
