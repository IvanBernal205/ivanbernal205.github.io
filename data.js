const SUBJECT_NAMES = {
    // Materias base
    "calv": "Cálculo vectorial",
    "fupr": "Fundamentos de Proyectos",
    "prye": "Probabilidad y Estadística",
    "ddya": "Diseño de Datos y Algoritmos",
    "tpyc": "Teoría de la Programación y la Computación",
    
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
  ['yeex', 'HECTOR JACKSON OCAMPO ARIZA', '4213', [0, 6], [3, 6], 2.3]
],

[
  ['mafi', 'MARIA CONSTANZA TORRES TAMAYO', '4391', [1, 5], [3, 5], 0]
]
];