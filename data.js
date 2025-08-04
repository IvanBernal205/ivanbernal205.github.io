const SUBJECT_NAMES = {
    // Materias base
    "cali": "Cálculo Integral",
    "ipro": "Introducción a la Programación",
    "lymd": "Lógica y Matemáticas Discretas",
    "fis2": "Física General 2",
    "fis2_lab": "Laboratori Fisica 2",
    "fupr": "Fundamentos de Proyectos",
    "fuec": "Fundamentos Económicos",
    "cipp": "Colombia: Realidad, Instituciones Políticas y Paz",
    "tmdn": "Termodinámica",
    "cirb": "Circuitos Eléctricos Básicos",
    "tmdn_lab": "Termodinámica Lab",
    "cirb_lab": "Circuitos Lab",


    // Materias electivas
    "rolego": "LEGO",
    "artt": "Arte, Ciencia y Tecnología",
    "clys": "Cine, Literatura y Sociedad",
    "codi": "Comunicación y Divulgación del Conocimiento",
    "ecys": "Ecología, Cultura y Sociedad",
    "egi3": "Inglés 3",
    "egi4": "Inglés 4",
    "enna": "Entramado de Narrativas",
    "escu": "Estética y Cultura",
    "ftec": "Filosofía de la Técnica y la Tecnología",
    "goci": "Gobernanza y Ciudadanía Global",
    "grap": "Grandes Problemas de la Historia",
    "hspc": "Habilidades Sociales para el Cambio",
    "itsw": "Ideas that shape the world",
    "psoc": "Psicología Social",
    "hemu": "Historia Económica del Mundo",
    "gpin": "Gestión de portafolios de inversión",
    "mafi": "Matemática Financiera",
    "fuce": "Fundamentos de Ciencias del Espacio",
    "sdic": "Sistemas dinámicos, complejidad y caos",

    // Materias de camilo 
    "cald": "Cálculo Diferencial",
    "alli": "Álgebra Lineal",
    "hgcl": "Historia y Geografía de Colombia",
    "mpin": "Matemáticas para Informática"
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
  ['cali', 'VICTOR MANUEL SERRANO RIAÑO', '1603', [1, 5], [2, 5], [3, 5], [4, 5], 3],
  ['cali', 'VICTOR MANUEL SERRANO RIAÑO', '1607', [0, 6], [1, 6], [2, 6], [3, 6], 2],
  ['cali', 'FEDERICO MANUEL ISAAC ZEVALLOS PEÑA', '1604', [0, 1], [1, 1], [2, 1], [3, 1], 2.5],
  ['cali', 'FEDERICO MANUEL ISAAC ZEVALLOS PEÑA', '1598', [1, 2], [2, 2], [3, 2], [4, 2], 2.5],
  ['cali', 'ANDRES DIEGO CASTAÑEDA GARCIA', '1605', [0, 6], [2, 6], [3, 6], [4, 6], 2],
  ['cali', 'ANDRES FELIPE MALDONADO GUINEA', '1609', [0, 0], [1, 0], [3, 0], [4, 0], 3],
  ['cali', 'ANDRES FELIPE MALDONADO GUINEA', '1602', [1, 1], [2, 1], [3, 1], [4, 1], 4.5],
  ['cali', 'MARGARITA MONICA REY PERDOMO', '1601', [0, 0], [1, 0], [2, 0], [4, 0], 2.5],
  ['cali', 'MARGARITA MONICA REY PERDOMO', '1599', [1, 2], [2, 2], [3, 2], [4, 2], 3.2],
  ['cali', 'JORGE AUGUSTO PEREZ ALCAZAR', '2715', [0, 1], [1, 1], [3, 1], [4, 1], 4.3],
  ['cali', 'DIEGO APARICIO PARADA LANDAZABAL', '1600', [1, 3], [2, 3], [3, 3], [4, 3], 4.5],
  ['cali', 'DIEGO APARICIO PARADA LANDAZABAL', '1608', [0, 2], [1, 2], [2, 2], [4, 2], 3.8],
  ['cali', 'JUVITSA MILENA CAMPOS PALOMINO', '1606', [0, 6], [1, 6], [3, 6], [4, 6], 2]
],

[
  ['ipro', 'PATRICIA SALAZAR PERDOMO', '1397', [3, 0], [4, 0], [4, 1], 3.6],
  ['ipro', 'LILIANA DEL CARMEN PEDRAZA VEGA', '1406', [0, 2], [3, 2], [3, 3], 4.4],
  ['ipro', 'LILIANA DEL CARMEN PEDRAZA VEGA', '1405', [1, 1], [2, 2], [2, 3], 4.4],
  ['ipro', 'MARTHA CECILIA PIMIENTA GIRALDO', '1404', [0, 0], [2, 0], [2, 1], 3],
  ['ipro', 'MARTHA CECILIA PIMIENTA GIRALDO', '1408', [0, 1], [3, 0], [3, 1], 4.4],
  ['ipro', 'JUAN PABLO GARZON RUIZ', '1402', [0, 5], [4, 2], [4, 3], 3.5],
  ['ipro', 'JUAN PABLO GARZON RUIZ', '2467', [0, 4], [3, 1], [3, 2], 3.5],
  ['ipro', 'LINA MARIA BUITRAGO ESPINDOLA', '1396', [1, 0], [5, 0], [5, 1], 2],
  ['ipro', 'LINA MARIA BUITRAGO ESPINDOLA', '1409', [3, 0], [5, 2], [5, 3], 2.8],
  ['ipro', 'DIEGO NICOLAS CHACON WILCHES', '1398', [2, 0], [5, 0], [5, 1], 0.5],
  ['ipro', 'WENDY SOFIA RODRIGUEZ REY', '2468', [2, 0], [5, 0], [5, 1], 1],
  ['ipro', 'RICARDO ANDRES GARZON RUIZ', '1400', [0, 6], [3, 5], [3, 6], 3],
  ['ipro', 'RICARDO ANDRES GARZON RUIZ', '1407', [0, 5], [1, 5], [1, 6], 2.5],
  ['ipro', 'RICARDO ANDRES GARZON RUIZ', '1401', [0, 2], [2, 5], [2, 6], 3.5],
  ['ipro', 'RICARDO ANDRES GARZON RUIZ', '1399', [0, 1], [1, 2], [1, 3], 0.5],
  ['ipro', 'COMODIN------------', '1403', [3, 0], [5, 0], [5, 1], 1],
  ['ipro', 'COMODIN------------', '2923', [1, 0], [5, 1], [5, 2], 1],
  ['ipro', 'CLAUDIA PATRICIA CASTAÑEDA BERMUDEZ', '3036', [0, 5], [3, 4], [3, 5], 1],
  ['ipro', 'WENDY SOFIA RODRIGUEZ REY', '3038', [1, 0], [5, 2], [5, 3], 1],
  ['ipro', 'CLAUDIA PATRICIA CASTAÑEDA BERMUDEZ', '3040', [0, 2], [4, 2], [4, 3], 1],
  ['ipro', 'CLAUDIA PATRICIA CASTAÑEDA BERMUDEZ', '3042', [0, 1], [1, 1], [1, 2], 1],
  ['ipro', 'LILIANA DEL CARMEN PEDRAZA VEGA', '3044', [0, 1], [1, 2], [1, 3], 1],
  ['ipro', 'GUSTAVO ADOLFO LOZANO MONTOYA', '3046', [0, 0], [1, 0], [1, 1], 1],
  ['ipro', 'LILIANA DEL CARMEN PEDRAZA VEGA', '3048', [0, 0], [2, 5], [2, 6], 1],
  ['ipro', 'ZULY VALENTINA VARGAS RAMIREZ', '3052', [1, 0], [5, 0], [5, 1], 1],
  ['ipro', 'CAROLINA VARGAS MALAGON', '3054', [1, 2], [4, 1], [4, 2], 1],
  ['ipro', 'DIANA LUCIA SANCHEZ MORALES', '3056', [1, 1], [5, 2], [5, 3], 1],
  ['ipro', 'DIANA LUCIA SANCHEZ MORALES', '3058', [1, 3], [5, 0], [5, 1], 1],
  ['ipro', 'CAROLINA VARGAS MALAGON', '3060', [1, 1], [4, 3], [4, 4], 1]
],

[
  ['lymd', 'JUAN ESTEBAN CORTES GARZON', '2736', [2, 0], [3, 0], [4, 1], 4],
  ['lymd', 'GERARDO OSPINA HERNANDEZ', '1712', [1, 1], [3, 2], [4, 3], 4],
  ['lymd', 'DANIELA ANDREA PEREZ VELASCO', '1711', [1, 0], [2, 0], [4, 2], 4.5],
  ['lymd', 'DANIELA ANDREA PEREZ VELASCO', '2932', [0, 0], [1, 1], [4, 1], 4.5],
  ['lymd', 'DANIELA ANDREA PEREZ VELASCO', '2933', [0, 2], [2, 1], [3, 0], 4.5],
  ['lymd', 'JUAN MANUEL GACHARNA GONZALEZ', '2934', [0, 2], [1, 2], [3, 2], 3]
],

[
  ['fis2', 'LUIS ALEJANDRO LADINO GASPAR', '1645', [1, 3], [2, 3], [3, 3], 3.3],
  ['fis2', 'ANDRES FELIPE LONDOÑO SIERRA', '2809', [0, 5], [2, 5], [3, 5], 3.8],
  ['fis2', 'SANDRA YANETH MOTTA GARCIA', '2813', [1, 1], [2, 1], [3, 1], 4.1],
  ['fis2', 'TAMARA JOHANA LEON ZABALA', '2814', [1, 1], [2, 1], [3, 1], 2],
  ['fis2', 'CARLOS ANDRES COLLAZOS MORALES', '2815', [0, 2], [2, 2], [3, 2], 4],
  ['fis2', 'GUILLERMO ALFONSO ROJAS SANCHEZ', '2816', [1, 1], [2, 1], [3, 1], 3.2],
  ['fis2', 'ELISEO PEREZ MEDINA', '2999', [0, 4], [2, 4], [3, 4], 3.3]
],

[
  ['fis2_lab', 'TAMARA JOHANA LEON ZABALA', '1643', [2, 5], 2],
  ['fis2_lab', 'TAMARA JOHANA LEON ZABALA', '1644', [1, 6], 2],
  ['fis2_lab', 'GUILLERMO ALFONSO ROJAS SANCHEZ', '2807', [2, 5], 3],
  ['fis2_lab', 'RAUL ALBERTO RUIZ FANDIÑO', '2808', [1, 6], 4.3],
  ['fis2_lab', 'TAMARA JOHANA LEON ZABALA', '3000', [4, 1], 2],
  ['fis2_lab', 'DANIEL ALEJANDRO MOLANO MORENO', '3001', [1, 2], 4],
  ['fis2_lab', 'DANIEL ALEJANDRO MOLANO MORENO', '3002', [1, 3], 4],
  ['fis2_lab', 'DANIEL ALEJANDRO MOLANO MORENO', '3003', [5, 1], 4],
  ['fis2_lab', 'DANIEL ALEJANDRO MOLANO MORENO', '3004', [5, 3], 4]
],

[
  ['fupr', 'MARTHA EDITH ROLON RAMIREZ', '2650', [0, 5], [4, 5], 0],
  ['fupr', 'MARTHA EDITH ROLON RAMIREZ', '2651', [0, 2], [4, 3], 0],
  ['fupr', 'RICARDO ARTURO BENAVIDES BOLAÑOS', '2830', [1, 3], [3, 3], 0],
  ['fupr', 'ERIKA SOFIA OLAYA ESCOBAR', '2831', [1, 4], [3, 4], 0],
  ['fupr', 'RICARDO ARTURO BENAVIDES BOLAÑOS', '2832', [0, 4], [2, 4], 0],
  ['fupr', 'FREDY OSWALDO CARREÑO SANCHEZ', '2833', [0, 5], [4, 5], 0],
  ['fupr', 'FREDY OSWALDO CARREÑO SANCHEZ', '2834', [3, 3], [4, 2], 0],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '2835', [1, 3], [2, 3], 0],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '2836', [1, 2], [3, 2], 0],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '2837', [0, 4], [3, 3], 0],
  ['fupr', 'ERIKA SOFIA OLAYA ESCOBAR', '2838', [1, 5], [3, 5], 0],
  ['fupr', 'JOSE ARTURO RODRIGUEZ', '2839', [1, 5], [3, 5], 0],
  ['fupr', 'RICARDO ARTURO BENAVIDES BOLAÑOS', '2840', [0, 2], [2, 2], 0],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '2841', [0, 1], [2, 1], 0],
  ['fupr', 'CESAR AUGUSTO LEAL CORONADO', '2842', [0, 2], [2, 2], 0],
  ['fupr', 'MARTHA EDITH ROLON RAMIREZ', '2902', [1, 1], [3, 1], 0],
  ['fupr', 'RICARDO ARTURO BENAVIDES BOLAÑOS', '2902', [1, 1], [3, 1], 0],
  ['fupr', 'ERIKA SOFIA OLAYA ESCOBAR', '2903', [0, 1], [2, 1], 0],
  ['fupr', 'DANIEL SALAZAR FERRO', '2904', [2, 4], [4, 4], 0]
],

[
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '1461', [1, 2], [2, 3], 4.5],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '1462', [1, 3], [3, 3], 4],
  ['fuec', 'LUIS FELIPE CAMACHO CARVAJAL', '1460', [3, 0], [4, 0], 0.5],
  ['fuec', 'DAVID FELIPE HOLGUIN LOZANO', '1458', [1, 4], [2, 3], 0.5],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '1459', [1, 1], [3, 1], 4],
  ['fuec', 'LUZ ANGELA TRIVIÑO RODRIGUEZ', '1463', [1, 5], [2, 5], 3.9],
  ['fuec', 'JOHN JAIRO GOMEZ RIOS', '1464', [1, 2], [3, 2], 4],
  ['fuec', 'SEBASTIAN AREVALO AVELLANEDA', '1465', [2, 2], [4, 2], 4],
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '2943', [2, 2], [4, 2], 4.5],
  ['fuec', 'JOSE FERNANDO CARDENAS GARCIA', '2944', [1, 3], [3, 3], 4.5],
  ['fuec', 'MARIA HELENA RAMIREZ TOLOSA', '2945', [1, 1], [3, 1], 2],
  ['fuec', 'MARIA HELENA RAMIREZ TOLOSA', '2946', [1, 2], [3, 2], 2],
  ['fuec', 'JULIAN ALBERTO GUTIERREZ LOPEZ', '2947', [1, 4], [2, 3], 3],
  ['fuec', 'SEBASTIAN AREVALO AVELLANEDA', '2948', [1, 5], [2, 5], 3.8]
],

[
  ['tmdn', 'LUIS MAURICIO DAVILA GARCIA', '2336', [0, 1], [2, 1], 4.3],
  ['tmdn', 'LUIS MAURICIO DAVILA GARCIA', '2338', [0, 2], [2, 2], 4.3],
  ['tmdn', 'JAIR LEOPOLDO LOAIZA BERNAL', '2337', [1, 7], [3, 7], 3]
],

[
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2340', [1, 6], 3],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2343', [4, 4], 3],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2344', [5, 4], 3],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2339', [2, 5], 3],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2341', [3, 5], 3],
  ['tmdn_lab', 'JAIR LEOPOLDO LOAIZA BERNAL', '2342', [4, 6], 3]
],

[
  ['cirb', 'PAULA XIMENA RIOS REYES', '1693', [2, 5], [3, 2], 4],
  ['cirb', 'IVAN CAMILO DURAN TOVAR', '1692', [0, 4], [1, 5], 4.5],
  ['cirb', 'EDWARD ALEJANDRO ORTIZ GOMEZ', '2859', [1, 5], [4, 5], 3]
],

[
  ['cirb_lab', 'PAULA XIMENA RIOS REYES', '1689', [4, 2], 4],
  ['cirb_lab', 'PAULA XIMENA RIOS REYES', '1690', [4, 2], 4],
  ['cirb_lab', 'IVAN CAMILO DURAN TOVAR', '1688', [2, 3], 4.5],
  ['cirb_lab', 'IVAN CAMILO DURAN TOVAR', '1691', [2, 3], 4.5],
  ['cirb_lab', 'EDWARD ALEJANDRO ORTIZ GOMEZ', '2860', [4, 4], 3],
  ['cirb_lab', 'EDWARD ALEJANDRO ORTIZ GOMEZ', '2861', [4, 4], 3]
],

[
  ['egi3', 'MILENA MOSQUERA MEJIA', '1519', [0, 6], [1, 6], [2, 6], 0],
  ['egi3', 'LUIS JAVIER RAMIREZ ALFORD', '2721', [1, 0], [3, 0], [4, 0], 0],
  ['egi3', 'SERGIO ENCISO MARIN', '1517', [0, 6], [3, 6], [4, 6], 0],
  ['egi3', 'ANA MARIA RONDEROS RAMIREZ', '1513', [1, 5], [2, 4], [3, 5], 0],
  ['egi3', 'NICOLAS RICO ROJAS', '1520', [2, 1], [3, 1], [4, 1], 0],
  ['egi3', 'NAYIBE ESLAIT TORRES', '1514', [1, 0], [3, 0], [4, 0], 0],
  ['egi3', 'JOSE CAMILO VASQUEZ CARO', '1515', [1, 2], [2, 2], [3, 2], 0],
  ['egi3', 'KINGA ESLAVA BULLA', '1518', [0, 1], [2, 1], [3, 1], 0],
  ['egi3', 'LUIS JAVIER RAMIREZ ALFORD', '1521', [0, 1], [2, 1], [4, 1], 0],
  ['egi3', 'NICOLAS RICO ROJAS', '1516', [2, 3], [3, 3], [4, 3], 0]
],

[
  ['egi4', 'JOSE CAMILO VASQUEZ CARO', '1527', [0, 4], [2, 5], [3, 5], 3.5],
  ['egi4', 'MILENA MOSQUERA MEJIA', '2722', [0, 2], [2, 2], [3, 2], 3.4],
  ['egi4', 'ANA MARIA RONDEROS RAMIREZ', '1525', [1, 4], [3, 4], [4, 4], 4.2],
  ['egi4', 'SERGIO ENCISO MARIN', '1522', [0, 4], [2, 4], [3, 4], 4],
  ['egi4', 'ANA MARIA RONDEROS RAMIREZ', '1529', [1, 6], [2, 6], [3, 6], 4.3],
  ['egi4', 'NAYIBE ESLAIT TORRES', '2723', [0, 1], [3, 1], [4, 1], 3.5],
  ['egi4', 'NAYIBE ESLAIT TORRES', '1524', [0, 4], [3, 3], [4, 3], 3.5],
  ['egi4', 'MAURICIO ANDRES RIVERA JIMENEZ', '1526', [0, 7], [3, 7], [5, 3], 4],
  ['egi4', 'SERGIO ENCISO MARIN', '1530', [2, 3], [3, 3], [4, 3], 4],
  ['egi4', 'MAURICIO ANDRES RIVERA JIMENEZ', '1523', [1, 1], [2, 0], [3, 1], 4],
  ['egi4', 'JOSE CAMILO VASQUEZ CARO', '1528', [1, 4], [2, 4], [4, 4], 3.5]
],

[
  ['cald', 'SANDRA ISABEL GUTIERREZ OTALORA', '2394', [1, 2], [2, 2], [3, 2], [4, 2], 0],
  ['cald', 'SANDRA ISABEL GUTIERREZ OTALORA', '2382', [0, 1], [1, 1], [2, 1], [3, 1], 0],
  ['cald', 'EDITH ZORAIDA PINZON ROSAS', '2397', [1, 6], [2, 6], [3, 6], [4, 6], 0],
  ['cald', 'EDITH ZORAIDA PINZON ROSAS', '2393', [1, 5], [2, 5], [3, 5], [4, 5], 0],
  ['cald', 'CAROLINA PUERTA GONZALEZ', '2390', [0, 1], [1, 1], [3, 1], [4, 1], 0],
  ['cald', 'MARTHA ISABEL ESCOBAR RODRIGUEZ', '2396', [0, 6], [1, 6], [2, 6], [3, 6], 0],
  ['cald', 'MARTHA ISABEL ESCOBAR RODRIGUEZ', '2383', [0, 5], [2, 5], [3, 5], [4, 5], 0],
  ['cald', 'LUISA FERNANDA BUITRAGO MORENO', '2388', [1, 2], [2, 2], [3, 2], [4, 2], 0],
  ['cald', 'LUISA FERNANDA BUITRAGO MORENO', '2384', [0, 4], [1, 4], [2, 4], [4, 4], 0],
  ['cald', 'MARTHA EUGENIA ORDOÑEZ CLAVIJO', '2385', [1, 3], [2, 3], [3, 3], [4, 3], 0],
  ['cald', 'OSCAR DARIO ZARATE MURILLO', '2392', [0, 2], [1, 2], [2, 2], [3, 2], 0],
  ['cald', 'OSCAR DARIO ZARATE MURILLO', '2387', [0, 4], [1, 4], [2, 4], [3, 4], 0],
  ['cald', 'MARIA CLAUDIA CASTRO LOPEZ', '2395', [1, 2], [2, 2], [3, 2], [4, 2], 0],
  ['cald', 'MARIA CLAUDIA CASTRO LOPEZ', '2386', [0, 1], [1, 1], [2, 1], [3, 1], 0],
  ['cald', 'ANA ALICIA GUZMAN CASTRO', '2391', [0, 4], [1, 4], [2, 4], [3, 4], 0],
  ['cald', 'ANA ALICIA GUZMAN CASTRO', '2389', [0, 2], [1, 2], [2, 2], [3, 2], 0]
],

[
  ['alli', 'SONIA MILENA GIL SUAREZ', '2580', [1, 1], [2, 1], [4, 1], 0],
  ['alli', 'JOSE ISRAEL MERCHAN HERRERA', '2593', [1, 3], [3, 3], [4, 3], 0],
  ['alli', 'JOSE ISRAEL MERCHAN HERRERA', '2582', [1, 0], [3, 0], [4, 0], 0],
  ['alli', 'OSCAR ANTONIO PULIDO CARDOZO', '2589', [0, 1], [1, 1], [4, 1], 0],
  ['alli', 'ANGELICA CHAPPE CHAPPE', '2587', [0, 5], [3, 5], [4, 5], 0],
  ['alli', 'CAROLINA PUERTA GONZALEZ', '2592', [1, 2], [3, 2], [4, 2], 0],
  ['alli', 'CARLOS ALBERTO CAÑON RINCON', '2595', [0, 1], [3, 1], [4, 1], 0],
  ['alli', 'ANDRES DIEGO CASTAÑEDA GARCIA', '2578', [1, 4], [2, 4], [4, 4], 0],
  ['alli', 'MARTHA EUGENIA ORDOÑEZ CLAVIJO', '2585', [0, 6], [1, 6], [3, 6], 0],
  ['alli', 'MARTHA EUGENIA ORDOÑEZ CLAVIJO', '2586', [0, 2], [1, 2], [3, 2], 0],
  ['alli', 'JOHAN SMITH SUAREZ ESPINOSA', '2584', [0, 1], [2, 1], [3, 1], 0],
  ['alli', 'LILIAN DANIELA SUAREZ RIVEROS', '2594', [1, 0], [2, 0], [4, 0], 0],
  ['alli', 'OSCAR ANTONIO PULIDO CARDOZO', '2590', [1, 3], [3, 3], [4, 3], 0],
  ['alli', 'JULIAN FELIPE CAMACHO RICO', '2583', [0, 0], [3, 0], [5, 0], 0],
  ['alli', 'RICARDO MANCIPE OLIVARES', '2588', [0, 5], [2, 5], [3, 5], 0],
  ['alli', 'OSCAR ANDRES GALINDO RIVERA', '2579', [0, 5], [2, 5], [3, 5], 0],
  ['alli', 'JUAN ESTEBAN CORTES GARZON', '2591', [0, 2], [1, 2], [3, 2], 0],
  ['alli', 'JUAN ESTEBAN CORTES GARZON', '2581', [0, 1], [1, 1], [3, 1], 0]
],

[
  ['hgcl', 'MIGUEL ANGEL RINCON CORREDOR', '2663', [0, 4], [2, 4], 0],
  ['hgcl', 'JUAN MANUEL LUNA GORDILLO', '2661', [0, 0], [2, 0], 0],
  ['hgcl', 'FRANCISCO MONCADA PEÑA', '2730', [1, 2], [2, 2], 0],
  ['hgcl', 'FRANCISCO MONCADA PEÑA', '2668', [1, 3], [4, 3], 0],
  ['hgcl', 'ENRIQUE LAZARO DELGADO ESCRUCERIA', '2666', [2, 2], [4, 2], 0],
  ['hgcl', 'JOSE JAVIER HERNANDEZ CRUZ', '2660', [0, 7], [2, 7], 0],
  ['hgcl', 'EDISON ALBERTO ACEVEDO ORTIZ', '2731', [0, 5], [4, 5], 0],
  ['hgcl', 'JOSE JAVIER HERNANDEZ CRUZ', '2653', [0, 6], [2, 6], 0],
  ['hgcl', 'ENRIQUE LAZARO DELGADO ESCRUCERIA', '2665', [2, 1], [4, 1], 0],
  ['hgcl', 'SEBASTIAN DIAZ ANGEL', '2732', [1, 6], [3, 6], 0],
  ['hgcl', 'MIGUEL ANGEL RINCON CORREDOR', '2664', [1, 4], [3, 4], 0],
  ['hgcl', 'ENRIQUE LAZARO DELGADO ESCRUCERIA', '2654', [2, 3], [4, 3], 0],
  ['hgcl', 'EDISON ALBERTO ACEVEDO ORTIZ', '2658', [1, 5], [3, 5], 0],
  ['hgcl', 'MIGUEL ANGEL RINCON CORREDOR', '2652', [1, 3], [3, 3], 0],
  ['hgcl', 'FRANCISCO MONCADA PEÑA', '2656', [2, 4], [4, 4], 0],
  ['hgcl', 'EDISON ALBERTO ACEVEDO ORTIZ', '2657', [1, 1], [3, 1], 0],
  ['hgcl', 'JUAN MANUEL LUNA GORDILLO', '2662', [0, 2], [3, 2], 0],
  ['hgcl', 'SEBASTIAN DIAZ ANGEL', '2659', [0, 6], [2, 5], 0]
],

[
  ['mpin', 'CARLOS SNEYDER OTALORA ALDANA', '1477', [2, 1], [3, 1], 0],
  ['mpin', 'JUAN ANDRES CAVIEDES NUÑEZ', '1476', [2, 5], [3, 5], 0],
  ['mpin', 'JUAN ANDRES CAVIEDES NUÑEZ', '1475', [1, 6], [3, 6], 0],
  ['mpin', 'JULIAN FELIPE CAMACHO RICO', '1478', [1, 0], [2, 0], 0],
  ['mpin', 'CARLOS SNEYDER OTALORA ALDANA', '1562', [3, 0], 0],
  ['mpin', 'JUAN ANDRES CAVIEDES NUÑEZ', '1561', [0, 5], 0],
  ['mpin', 'JUAN ANDRES CAVIEDES NUÑEZ', '1567', [0, 6], 0],
  ['mpin', 'JULIAN FELIPE CAMACHO RICO', '1565', [0, 7], 0]
],



[
  ['rolego', 'IVAN DARIO MELO LAGOS', '2986', [1, 6], [5, 0], [5, 1], 0]
],

[
  ['artt', 'FELIPE RODRIGUEZ GOMEZ', '2713', [1, 5], [1, 6], 0],
  ['artt', 'JUAN PABLO CARDONA CAMARGO', '1962', [0, 4], [0, 5], 0],
  ['artt', 'BERNARDO MONTOYA CHAUX', '1963', [4, 2], [4, 3], 0]
],

[
  ['clys', 'ROBERTO PALOMINO ARIAS', '1488', [3, 1], [3, 2], 0],
  ['clys', 'MARIA HELENA RAMIREZ TOLOSA', '1489', [2, 5], [2, 6], 0],
  ['clys', 'AUGUSTO CARO RAMIREZ', '1490', [1, 2], [1, 3], 0],
  ['clys', 'ROBERTO PALOMINO ARIAS', '1491', [1, 1], [1, 2], 0]
],

[
  ['codi', 'ISABEL CRISTINA SALAZAR PERDOMO', '1492', [0, 0], [3, 0], 0]
],

[
  ['ecys', 'ROBERTO PALOMINO ARIAS', '1501', [0, 2], [2, 2], 0],
  ['ecys', 'ROBERTO PALOMINO ARIAS', '1502', [1, 5], [3, 5], 0]
],

[
  ['enna', 'MILENA MOSQUERA MEJIA', '2671', [0, 5], [2, 5], 0]
],

[
  // ['escu', 'JUAN PABLO CARDONA CAMARGO', '1531', [1, 4], [3, 4], 0]
],

[
  ['ftec', 'JAVIER MORENO MORENO', '2670', [0, 5], [2, 5], 0],
  ['ftec', 'JAVIER MORENO MORENO', '2669', [0, 4], [2, 4], 0]
],

[
  ['goci', 'EDISON ALBERTO ACEVEDO ORTIZ', '2729', [2, 5], [4, 6], 0]
],

[
  ['grap', 'ROBERTO PALOMINO ARIAS', '1550', [1, 4], [3, 4], 0],
  ['grap', 'JOSE CAMILO VASQUEZ CARO', '1551', [1, 6], [3, 6], 0]
],

[
  ['hspc', 'JUAN CARLOS LOPERA TELLEZ', '2682', [0, 5], [0, 6], 0]
],

[
  ['gpin', 'MARIA CONSTANZA TORRES TAMAYO', '1549', [1, 4], [3, 4], 0]
],

[
  ["hemu", "HECTOR JAIME MARTINEZ COVALEDA", "1615", [1, 4], [3, 4], 0]
]
];