const SUBJECT_NAMES = {
    // Materias base
    "calv": "Cálculo vectorial",
    "fupr": "Fundamentos de Proyectos",
    "prye": "Probabilidad y Estadística",
    "ddya": "Diseño de Datos y Algoritmos",
    "tpyc": "Teoría de la Programación y la Computación",
    "fis2": "Física General 2",
    "labfis2": "Laboratorio de física",

    // ELECTIVAS
    "yeex": "Y... ¿Eso lo puede hacer Excel?",
    "gean": "Geometría analítica",
    "mafi": "Matemáticas Financieras",
    "egi4": "Inglés 4",


    //sofia 
    "cira": "Circuitos Eléctricos Avanzados",
    "tmdn": "Termodinámica",
    "tmdn_lab": "Termo lab",
    "dapc": "Dibujo Asistido Por Computador",
    "fuec": "Fundamentos Económicos",
    "elan": "Electrónica Analógica"
};

const HORARIOS_LABELS = [
    "7:00-8:30",
    "8:30-10:00",
    "10:00-11:30",
    "11:30-1:00",
    "1:00-2:30",
    "2:30-4:00",
    "4:00-5:30"
];

const DIAS_LABELS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const lista = [
[
  ['calv', 'ANGELICA CHAPPE CHAPPE', '4618', [0, 5], [2, 5], [3, 5], [4, 5], 3.7],
  ['calv', 'BORIS MAURICIO PULIDO PIRAQUIVE', '4621', [1, 2], [2, 2], [3, 2], [4, 2], 3.5],      
  ['calv', 'JUVITSA MILENA CAMPOS PALOMINO', '4619', [0, 1], [1, 1], [3, 1], [4, 1], 3.9],       
  ['calv', 'JOSE ISRAEL MERCHAN HERRERA', '4617', [1, 2], [2, 2], [3, 2], [4, 2], 4.3],
  ['calv', 'CARLOS ALBERTO CAÑON RINCON', '4620', [1, 0], [2, 0], [3, 0], [4, 0], 4.4],
  ['calv', 'CARLOS ALBERTO CAÑON RINCON', '4293', [0, 1], [2, 1], [3, 1], [4, 1], 4.4],
  ['calv', 'OSCAR ANTONIO PULIDO CARDOZO', '4616', [0, 5], [2, 5], [3, 5], [4, 5], 3.5],
  ['calv', 'CARLOS SNEYDER OTALORA ALDANA', '4313', [1, 3], [2, 3], [3, 3], [4, 3], 3.3]
],

[
  ['fupr', 'LINA MARIA GOMEZ MONTENEGRO', '4825', [1, 3], [3, 3], 1],
  ['fupr', 'LINA MARIA GOMEZ MONTENEGRO', '4104', [0, 4], [2, 4], 1],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '4942', [1, 3], [2, 3], 4.3],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '4943', [1, 2], [3, 2], 4.3],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '4765', [0, 4], [3, 3], 4.3],
  ['fupr', 'ERIKA SOFIA OLAYA ESCOBAR', '4827', [1, 5], [3, 5], 4],
  ['fupr', 'JOSE ARTURO RODRIGUEZ', '4307', [1, 5], [3, 5], 3.8],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '4828', [0, 1], [2, 1], 4.3],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '4817', [0, 2], [2, 2], 4.3],
  ['fupr', 'LINA MARIA GOMEZ MONTENEGRO', '4280', [1, 1], [3, 1], 1],
  ['fupr', 'ERIKA SOFIA OLAYA ESCOBAR', '4849', [0, 1], [2, 1], 4],
  ['fupr', 'LAURA CATALINA HERRERA CORREA', '4072', [2, 0], [3, 0], 3.5],
  ['fupr', 'JOSE LUIS LOPEZ CANO', '4041', [5, 0], [5, 1], 1],
  ['fupr', 'JOSE ARTURO RODRIGUEZ', '5983', [0, 4], [2, 4], 3.8],
  ['fupr', 'JOSE ARTURO RODRIGUEZ', '5985', [1, 1], [3, 1], 3.8]
],

[
  ['prye', 'CAMILA REYES BAQUERO', '4610', [0, 6], [2, 6], [3, 6], [4, 6], 1],
  ['prye', 'NICOLAS MARCIALES PARRA', '4615', [0, 5], [2, 5], [3, 5], [4, 5], 4],
  ['prye', 'CAMILA REYES BAQUERO', '4614', [0, 4], [1, 4], [2, 4], [3, 4], 1],
  ['prye', 'GUSTAVO SANTOS VARGAS', '4613', [1, 2], [2, 2], [3, 2], [4, 2], 3.8],
  ['prye', 'OSCAR JAVIER PACHECO PEREZ', '4609', [0, 5], [2, 5], [3, 5], [4, 5], 3.8],
  ['prye', 'NICOLAS MARCIALES PARRA', '4263', [0, 4], [1, 4], [3, 4], [4, 4], 4]
],

[
  ['ddya', 'MARIA ANGELICA ALFARO FANDIÑO', '4466', [3, 0],[4, 0], [4, 1], 1],
  ['ddya', 'JUAN CAMILO ROJAS ORTIZ', '4468', [1, 1],[2, 2], [2, 3], 1],
  ['ddya', 'JAVIER ALBERTO APONTE BARRIOS', '4471', [2, 6],[3, 6], [3, 7], 1],
  ['ddya', 'DAVID ARTURO RUBIANO RUIZ', '4472', [1, 6],[5, 0], [5, 1], 1],
  ['ddya', 'YARIT YAJANNY VILLALOBOS JIMENEZ', '4467', [1, 0],[2, 0], [2, 1], 1],
  ['ddya', 'JUAN SEBASTIAN GOMEZ LOPEZ', '4470', [5, 0],[5, 1], [5, 2], 1],
  ['ddya', 'RICHARD SANTIAGO URREA GARCIA', '4245', [1, 0],[2, 0], [2, 1], 1],
  ['ddya', 'JUAN CARLOS GARCIA GARZON', '4873', [1, 6],[2, 6], [2, 7], 1],
  ['ddya', 'JOSE LUIS GOMEZ CAMACHO', '4853', [2, 0],[3, 0], [3, 1], 1],

  // ['ddya', 'MARIA ANGELICA ALFARO FANDIÑO', '4473', [4, 0], [4, 1], 0],
  // ['ddya', 'JUAN CAMILO ROJAS ORTIZ', '4475', [2, 2], [2, 3], 0],
  // ['ddya', 'JAVIER ALBERTO APONTE BARRIOS', '4476', [3, 6], [3, 7], 0],
  // ['ddya', 'DAVID ARTURO RUBIANO RUIZ', '4474', [5, 0], [5, 1], 0],
  // ['ddya', 'YARIT YAJANNY VILLALOBOS JIMENEZ', '4479', [2, 0], [2, 1], 0],
  // ['ddya', 'JUAN SEBASTIAN GOMEZ LOPEZ', '4477', [5, 1], [5, 2], 0],
  // ['ddya', 'RICHARD SANTIAGO URREA GARCIA', '4246', [2, 0], [2, 1], 0],
  // ['ddya', 'JUAN CARLOS GARCIA GARZON', '4816', [2, 6], [2, 7], 0],
  // ['ddya', 'JOSE LUIS GOMEZ CAMACHO', '4854', [3, 0], [3, 1], 0]
],

[
  ['tpyc', 'RAUL ALFREDO CHAPARRO AGUILAR', '5551', [2, 5], [3, 6], [4, 6], 4],
  ['tpyc', 'DANIELA ANDREA PEREZ VELASCO', '5249', [2, 2], [3, 1], [4, 0], 4.3],
  // ['tpyc', 'RAUL ALFREDO CHAPARRO AGUILAR', '5247', [4, 6], 0],
  // ['tpyc', 'DANIELA ANDREA PEREZ VELASCO', '5248', [4, 0], 0]
],

[
  ['fis2', 'SANDRA YANETH MOTTA GARCIA', '4645', [1, 3], [2, 3], [3, 3], 4],
  ['fis2', 'ANDRES FELIPE LONDOÑO SIERRA', '4257', [0, 5], [2, 5], [3, 5], 3.8],
  ['fis2', 'JUAN DAVID BETANCUR RIOS', '4886', [1, 1], [2, 1], [3, 1], 0],
  ['fis2', 'TAMARA JOHANA LEON ZABALA', '4349', [1, 1], [2, 1], [3, 1], 2],
  ['fis2', 'CARLOS ANDRES COLLAZOS MORALES', '4774', [0, 2], [2, 2], [4, 2], 4],
  ['fis2', 'GUILLERMO ALFONSO ROJAS SANCHEZ', '4868', [1, 1], [2, 1], [3, 1], 3.2],
  ['fis2', 'ELISEO PEREZ MEDINA', '4857', [0, 4], [2, 4], [3, 4], 3],
  ['fis2', 'LUIS ALEJANDRO LADINO GASPAR', '4906', [0, 4], [1, 4], [3, 4], 4.1],
  ['fis2', 'LUIS ALEJANDRO LADINO GASPAR', '4354', [0, 2], [1, 2], [3, 2], 4.1],
  ['fis2', 'TAMARA JOHANA LEON ZABALA', '4869', [1, 3], [2, 3], [3, 3], 2],
  ['fis2', 'LUIS ALEJANDRO LADINO GASPAR', '4355', [1, 1], [2, 1], [3, 1], 4.1],
  ['fis2', 'ANDRES FELIPE LONDOÑO SIERRA', '4194', [0, 4], [2, 4], [3, 4], 3.8],
  ['fis2', 'HEINDEL RICARDO OTERO AREVALO', '4935', [0, 2], [2, 2], [3, 2], 0],
  ['fis2', 'JORGE ENRIQUE CLAVIJO RAMIREZ', '6294', [0, 5], [2, 5], [3, 5], 4]
],

[
  ['labfis2', 'RAFAEL GUZMAN ESCANDON', '4226', [3, 7], 0],
  ['labfis2', 'CECILIO SILVEIRA CABRERA', '4291', [4, 1], 0],
  ['labfis2', 'HEINDEL RICARDO OTERO AREVALO', '4229', [2, 3], 0],
  ['labfis2', 'ELISEO PEREZ MEDINA', '4940', [4, 3], 3],
  ['labfis2', 'ELISEO PEREZ MEDINA', '4772', [1, 1], 3],
  ['labfis2', 'GUILLERMO ALFONSO ROJAS SANCHEZ', '4274', [4, 4], 3.2],
  ['labfis2', 'RAUL ALBERTO RUIZ FANDIÑO', '4254', [3, 5], 5],
  ['labfis2', 'RAUL ALBERTO RUIZ FANDIÑO', '4643', [2, 5], 5],
  ['labfis2', 'RAUL ALBERTO RUIZ FANDIÑO', '4644', [1, 6], 5],
  ['labfis2', 'WILLIAM ALEXANDER ALMONACID GUERRERO', '4823', [2, 5], 4],
  ['labfis2', 'RAFAEL GUZMAN ESCANDON', '4278', [1, 6], 0],
  ['labfis2', 'TAMARA JOHANA LEON ZABALA', '4040', [4, 1], 2],
  ['labfis2', 'HEINDEL RICARDO OTERO AREVALO', '4881', [1, 2], 0],
  ['labfis2', 'GUILLERMO ALFONSO ROJAS SANCHEZ', '4067', [1, 3], 3.2],
  ['labfis2', 'DANIEL ALEJANDRO MOLANO MORENO', '4322', [5, 1], 4],
  ['labfis2', 'DANIEL ALEJANDRO MOLANO MORENO', '4338', [5, 3], 4]
],

[
  ['yeex', 'HECTOR JACKSON OCAMPO ARIZA', '4213', [0, 6], [3, 6], 2.3]
],

[
  ['mafi', 'MARIA CONSTANZA TORRES TAMAYO', '4391', [2, 5], [3, 5], 0]
],

[
  ['gean', 'HELENA DULCEY HERNANDEZ', '5230', [2, 3], [4, 3], 0]
],



[
  ['egi4', 'JOSE CAMILO VASQUEZ CARO', '5213', [0, 4], [2, 5], [3, 5], 3.5],
  ['egi4', 'MILENA MOSQUERA MEJIA', '4221', [0, 2], [2, 2], [3, 2], 3.4],
  ['egi4', 'ANA MARIA RONDEROS RAMIREZ', '5179', [1, 4], [3, 4], [4, 4], 4.2],
  ['egi4', 'SERGIO ENCISO MARIN', '5176', [0, 4], [2, 4], [3, 4], 4],
  ['egi4', 'ANA MARIA RONDEROS RAMIREZ', '5215', [1, 6], [2, 6], [3, 6], 4.2],
  ['egi4', 'NAYIBE ESLAIT TORRES', '4294', [0, 1], [3, 1], [4, 1], 3.5],
  ['egi4', 'NAYIBE ESLAIT TORRES', '5178', [0, 4], [3, 3], [4, 3], 3.5],
  ['egi4', 'MAURICIO ANDRES RIVERA JIMENEZ', '5180', [0, 7], [2, 7], [3, 7], 4],
  ['egi4', 'SERGIO ENCISO MARIN', '5216', [2, 2], [3, 2], [4, 2], 4.1],
  ['egi4', 'KINGA ESLAVA BULLA', '5177', [1, 1], [2, 0], [3, 1], 3],
  ['egi4', 'KINGA ESLAVA BULLA', '5214', [1, 4], [2, 4], [4, 4], 3]
],

[
  ['cira', 'LUIS FRANCISCO REYES GONZALEZ', '4755', [1, 0], [1, 1], [1, 2], 0],
  // ['cira', 'LUIS FRANCISCO REYES GONZALEZ', '4754', [1, 2], 0]
],

[
  ['tmdn', 'HENDRICK VLADIMIR LOPEZ CHAVEZ', '5051', [0, 1], [2, 1], 0],
  ['tmdn', 'LUIS MAURICIO DAVILA GARCIA', '5053', [0, 2], [2, 3], 0],
  ['tmdn', 'JAIR LEOPOLDO LOAIZA BERNAL', '5052', [1, 7], [3, 7], 0],
  ['tmdn', 'HENDRICK VLADIMIR LOPEZ CHAVEZ', '4033', [0, 2], [2, 3], 0]
],

[
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5055', [1, 6], 0],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5058', [4, 4], 0],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5059', [4, 5], 0],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5054', [2, 5], 0],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5056', [3, 5], 0],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '5057', [4, 6], 0],
  ['tmdn_lab', 'HENDRICK VLADIMIR LOPEZ CHAVEZ', '4286', [1, 0], 0],
  ['tmdn_lab', 'HENDRICK VLADIMIR LOPEZ CHAVEZ', '4867', [0, 0], 0],
  ['tmdn_lab', 'HENDRICK VLADIMIR LOPEZ CHAVEZ', '4197', [3, 0], 0]
],

[
  ['dapc', 'WILLIAM RICARDO AGUILAR PIÑA', '4098', [0, 5], [1, 5], [1, 4], 0],
  // ['dapc', 'WILLIAM RICARDO AGUILAR PIÑA', '4099', , 0]
],

[
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '5070', [1, 2], [2, 3], 0],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '5071', [1, 3], [3, 3], 0],
  ['fuec', 'LUIS FELIPE CAMACHO CARVAJAL', '5069', [3, 0], [4, 0], 0],
  ['fuec', 'DAVID FELIPE HOLGUIN LOZANO', '5067', [1, 4], [2, 3], 0],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '5068', [1, 1], [3, 1], 0],
  ['fuec', 'LUZ ANGELA TRIVIÑO RODRIGUEZ', '5072', [1, 5], [2, 5], 0],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '5073', [1, 2], [3, 2], 0],
  ['fuec', 'SEBASTIAN AREVALO AVELLANEDA', '5074', [2, 2], [4, 2], 0],
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '4150', [2, 2], [4, 2], 0],
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '4324', [1, 3], [3, 3], 0],
  ['fuec', 'MARIA HELENA RAMIREZ TOLOSA', '4325', [1, 1], [3, 1], 0],
  ['fuec', 'MARIA HELENA RAMIREZ TOLOSA', '4822', [1, 2], [3, 2], 0],
  ['fuec', 'JULIAN ALBERTO GUTIERREZ LOPEZ', '4266', [1, 4], [2, 3], 0],
  ['fuec', 'SEBASTIAN AREVALO AVELLANEDA', '4326', [1, 5], [2, 5], 0]
],

[
  ['elan', 'JESUS FIDERNAN BARRERA COBOS', '4747', [0, 0], [3, 0], [4, 0], 0],
  ['elan', 'HERNAN PAZ PENAGOS', '4748', [1, 0], [3, 1], [4, 0], 0],
  // ['elan', 'JESUS FIDERNAN BARRERA COBOS', '4750', [4, 0], 0],
  // ['elan', 'HERNAN PAZ PENAGOS', '4749', [4, 0], 0]
]

];