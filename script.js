document.addEventListener('DOMContentLoaded', () => {
    // --- Selección de Elementos del DOM ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const subjectCheckboxesContainer = document.getElementById('subjectCheckboxes');
    const professorOptionsContainer = document.getElementById('professorOptionsContainer');
    const generateBtn = document.getElementById('generate-btn');
    const generatedSchedulesOutput = document.getElementById('generatedSchedulesOutput');
    const favoritesOutput = document.getElementById('favoritesOutput');
    const loadingIndicator = document.getElementById('loading-indicator');
    const clearSubjectSelectionBtn = document.getElementById('clear-subject-selection');
    const clearProfessorSelectionBtn = document.getElementById('clear-professor-selection');
    const diabloModeSwitch = document.getElementById('diablo-mode-switch-nav');

    // Selectores para el modal de favoritos
    const nameFavoriteModal = document.getElementById('nameFavoriteModal');
    const modalTitleEl = document.getElementById('modalTitle');
    const modalScheduleNameInput = document.getElementById('modalScheduleNameInput');
    const modalSaveBtn = document.getElementById('modalSaveBtn');
    const modalCancelBtn = document.getElementById('modalCancelBtn');

    // INICIO: Selectores para el nuevo Modal de Códigos de Clase
    const classCodesModal = document.getElementById('classCodesModal');
    const classCodesModalTitleEl = document.getElementById('classCodesModalTitle');
    const classCodesModalBodyEl = document.getElementById('classCodesModalBody');
    const classCodesModalCloseBtn = document.getElementById('classCodesModalCloseBtn');
    // FIN: Selectores para el nuevo Modal de Códigos de Clase

    // --- Variables de Estado Global ---
    let horariosValidosGlobal = [];
    let favoritos = JSON.parse(localStorage.getItem('horarioMakerFavoritos')) || [];
    let currentModalSaveCallback = null;
    let currentModalCancelCallback = null;
    let currentClassCodesModalCloseCallback = null; // Para el nuevo modal

    // --- Constantes para Horarios y Días (Normal y Diablo) ---
    const HORARIOS_LABELS_NORMAL_ORIGINAL = [
        "7:00-8:30", "8:30-10:00", "10:00-11:30", "11:30-1:00",
        "1:00-2:30", "2:30-4:00", "4:00-5:30"
    ];
    const DIAS_LABELS_NORMAL_ORIGINAL = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    const HORARIOS_LABELS_DIABLO = [...HORARIOS_LABELS_NORMAL_ORIGINAL, "5:30-7:00"];
    const DIAS_LABELS_DIABLO = [...DIAS_LABELS_NORMAL_ORIGINAL, "Sábado"];

    function getActiveHorariosLabels() {
        const baseHorarios = typeof HORARIOS_LABELS !== 'undefined' ? HORARIOS_LABELS : HORARIOS_LABELS_NORMAL_ORIGINAL;
        return diabloModeSwitch && diabloModeSwitch.checked ? [...baseHorarios, "5:30-7:00"] : [...baseHorarios];
    }

    function getActiveDiasLabels() {
        const baseDias = typeof DIAS_LABELS !== 'undefined' ? DIAS_LABELS : DIAS_LABELS_NORMAL_ORIGINAL;
        return diabloModeSwitch && diabloModeSwitch.checked ? [...baseDias, "Sábado"] : [...baseDias];
    }

    // --- Navegación entre Secciones ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            pageSections.forEach(section => section.classList.remove('active'));
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            if (targetId === 'favorites-section') renderFavorites();
        });
    });

    // --- Selección de Materias ---
    function populateSubjectSelector() {
        const uniqueSubjects = {};
        if (typeof lista === 'undefined' || typeof SUBJECT_NAMES === 'undefined') {
            console.error("Error: 'lista' o 'SUBJECT_NAMES' no están definidos. Asegúrate que data.js se carga correctamente.");
            subjectCheckboxesContainer.innerHTML = "<p>Error al cargar datos de materias.</p>";
            return;
        }
        lista.forEach(subjectGroup => {
            if (subjectGroup && subjectGroup.length > 0 && subjectGroup[0] && subjectGroup[0][0]) {
                const subjectCode = subjectGroup[0][0];
                uniqueSubjects[subjectCode] = SUBJECT_NAMES[subjectCode] || subjectCode.toUpperCase();
            }
        });

        const mainAccordionCodes = new Set(["cira","tmdn","tmdn_lab","dapc","fuec","elan"]);
        const additionalAccordionCodes = new Set(["yeex","mafi","gean","egi4","egi3"
        ]);

        const normalSubjectsFragment = document.createDocumentFragment();
        let mainAccordionItem = null;
        let mainAccordionContentFragment = document.createDocumentFragment();
        let additionalAccordionItem = null;
        let additionalAccordionContentFragment = document.createDocumentFragment();

        function createAccordionStructure(id, titleText) {
            const item = document.createElement('div');
            item.classList.add('accordion-item');
            item.id = id;
            const header = document.createElement('div');
            header.classList.add('accordion-header');
            header.innerHTML = `<span>${titleText}</span><span class="accordion-icon">v</span>`;
            const contentDiv = document.createElement('div');
            contentDiv.classList.add('accordion-content');
            contentDiv.style.display = 'none';
            header.addEventListener('click', () => {
                const isOpen = contentDiv.style.display === 'block';
                contentDiv.style.display = isOpen ? 'none' : 'block';
                header.classList.toggle('open', !isOpen);
                header.querySelector('.accordion-icon').textContent = isOpen ? 'v' : '^';
            });
            item.appendChild(header);
            item.appendChild(contentDiv);
            return item;
        }

        const hasMainMaterias = Object.keys(uniqueSubjects).some(code => mainAccordionCodes.has(code));
        if (hasMainMaterias) {
            mainAccordionItem = createAccordionStructure('mainSubjectsAccordion', 'Shofia');
        }
        const hasAdditionalMaterias = Object.keys(uniqueSubjects).some(code => additionalAccordionCodes.has(code));
        if (hasAdditionalMaterias) {
            additionalAccordionItem = createAccordionStructure('additionalSubjectsAccordion', 'Otras Materias');
        }

        for (const code in uniqueSubjects) {
            const div = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `subject-${code}`;
            checkbox.value = code;
            checkbox.name = 'subject';
            const label = document.createElement('label');
            label.htmlFor = `subject-${code}`;
            label.textContent = uniqueSubjects[code];
            div.appendChild(checkbox);
            div.appendChild(label);
            checkbox.addEventListener('change', handleSubjectSelectionChange);

            if (mainAccordionCodes.has(code) && mainAccordionItem) {
                mainAccordionContentFragment.appendChild(div);
            } else if (additionalAccordionCodes.has(code) && additionalAccordionItem) {
                additionalAccordionContentFragment.appendChild(div);
            } else {
                normalSubjectsFragment.appendChild(div);
            }
        }
        subjectCheckboxesContainer.innerHTML = '';
        if (normalSubjectsFragment.childNodes.length > 0) {
            subjectCheckboxesContainer.appendChild(normalSubjectsFragment);
        }
        if (mainAccordionItem) {
            const contentDiv = mainAccordionItem.querySelector('.accordion-content');
            if (contentDiv) contentDiv.appendChild(mainAccordionContentFragment);
            subjectCheckboxesContainer.appendChild(mainAccordionItem);
        }
        if (additionalAccordionItem) {
            const contentDiv = additionalAccordionItem.querySelector('.accordion-content');
            if (contentDiv) contentDiv.appendChild(additionalAccordionContentFragment);
            subjectCheckboxesContainer.appendChild(additionalAccordionItem);
        }
    }

    clearSubjectSelectionBtn.addEventListener('click', () => {
        document.querySelectorAll('#subjectCheckboxes input[name="subject"]:checked').forEach(cb => cb.checked = false);
        handleSubjectSelectionChange();
    });
    clearProfessorSelectionBtn.addEventListener('click', () => {
        document.querySelectorAll('#professorOptionsContainer input[type="checkbox"]:checked').forEach(cb => cb.checked = false);
    });

    let profesorSelectionsState = {};
    function handleSubjectSelectionChange() {
        if (professorOptionsContainer.querySelector('.accordion-item')) {
            document.querySelectorAll('#professorOptionsContainer .accordion-item').forEach(accordion => {
                const subjectCode = accordion.dataset.subjectCode;
                if (!subjectCode) return;
                profesorSelectionsState[subjectCode] = [];
                accordion.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
                    profesorSelectionsState[subjectCode].push(cb.id);
                });
            });
        }

        const currentlySelectedSubjectCheckboxes = document.querySelectorAll('#subjectCheckboxes input[name="subject"]:checked');
        const currentSubjectCodes = new Set();
        currentlySelectedSubjectCheckboxes.forEach(cb => currentSubjectCodes.add(cb.value));

        if (currentSubjectCodes.size === 0) {
            professorOptionsContainer.innerHTML = '<p class="placeholder-text">Selecciona materias para ver opciones de profesores y horarios.</p>';
            clearProfessorSelectionBtn.style.display = 'none';
            profesorSelectionsState = {};
            return;
        }
        clearProfessorSelectionBtn.style.display = 'block';

        const existingAccordionCodes = new Set();
        professorOptionsContainer.querySelectorAll('.accordion-item').forEach(acc => {
            if (acc.dataset.subjectCode) existingAccordionCodes.add(acc.dataset.subjectCode);
        });

        existingAccordionCodes.forEach(code => {
            if (!currentSubjectCodes.has(code)) {
                const accordionToRemove = professorOptionsContainer.querySelector(`.accordion-item[data-subject-code="${code}"]`);
                if (accordionToRemove) accordionToRemove.remove();
                delete profesorSelectionsState[code];
            }
        });
        
        if (professorOptionsContainer.querySelectorAll('.accordion-item').length === 0 && currentSubjectCodes.size === 0 && !professorOptionsContainer.querySelector('.placeholder-text')){
             professorOptionsContainer.innerHTML = '<p class="placeholder-text">Selecciona materias para ver opciones de profesores y horarios.</p>';
        }

        currentSubjectCodes.forEach(subjectCode => {
            let accordionItem = professorOptionsContainer.querySelector(`.accordion-item[data-subject-code="${subjectCode}"]`);
            if (!accordionItem) {
                const subjectOptionsFromData = lista.find(group => group.length > 0 && group[0] && group[0][0] === subjectCode);
                if (subjectOptionsFromData) {
                    accordionItem = document.createElement('div');
                    accordionItem.classList.add('accordion-item');
                    accordionItem.dataset.subjectCode = subjectCode;
                    const accordionHeader = document.createElement('div');
                    accordionHeader.classList.add('accordion-header');
                    accordionHeader.innerHTML = `<span>${SUBJECT_NAMES[subjectCode] || subjectCode.toUpperCase()}</span><span class="accordion-icon">v</span>`;
                    const accordionContent = document.createElement('div');
                    accordionContent.classList.add('accordion-content');
                    accordionContent.style.display = 'none';

                    const displayDiasLabels = getActiveDiasLabels();
                    const displayHorariosLabels = getActiveHorariosLabels();

                    subjectOptionsFromData.forEach((option, index) => {
                        const professor = option[1];
                        const classNumber = option[2]; // NUEVO: N° de clase
                        let scheduleString = "";
                        // Los horarios ahora empiezan en el índice 3
                        for (let i = 3; i < option.length - 1; i++) { 
                            const dayIndex = option[i][0];
                            const hourIndex = option[i][1];
                            if (dayIndex < displayDiasLabels.length && hourIndex < displayHorariosLabels.length &&
                                displayDiasLabels[dayIndex] && displayHorariosLabels[hourIndex]) {
                                scheduleString += `${displayDiasLabels[dayIndex].substring(0,3)} ${displayHorariosLabels[hourIndex]}; `;
                            } else {
                                const normalDias = typeof DIAS_LABELS !== 'undefined' ? DIAS_LABELS : DIAS_LABELS_NORMAL_ORIGINAL;
                                const normalHorarios = typeof HORARIOS_LABELS !== 'undefined' ? HORARIOS_LABELS : HORARIOS_LABELS_NORMAL_ORIGINAL;
                                if (dayIndex < normalDias.length && hourIndex < normalHorarios.length) {
                                     scheduleString += `${normalDias[dayIndex].substring(0,3)} ${normalHorarios[hourIndex]}; `;
                                } else if (dayIndex < DIAS_LABELS_DIABLO.length && hourIndex < HORARIOS_LABELS_DIABLO.length) {
                                     scheduleString += `${DIAS_LABELS_DIABLO[dayIndex].substring(0,3)} ${HORARIOS_LABELS_DIABLO[hourIndex]}; `;
                                } else {
                                   scheduleString += `Índice Inválido; `;
                                }
                            }
                        }
                        const optionDiv = document.createElement('div');
                        const optionCheckbox = document.createElement('input');
                        optionCheckbox.type = 'checkbox';
                        optionCheckbox.id = `option-${subjectCode}-${index}`;
                        optionCheckbox.value = JSON.stringify(option);
                        optionCheckbox.dataset.subjectCode = subjectCode;
                        const optionLabel = document.createElement('label');
                        optionLabel.htmlFor = `option-${subjectCode}-${index}`;
                        // MODIFICADO: Mostrar N° de clase
                        optionLabel.textContent = `${professor} - (${scheduleString.slice(0, -2)})`; 
                        optionDiv.appendChild(optionCheckbox);
                        optionDiv.appendChild(optionLabel);
                        accordionContent.appendChild(optionDiv);
                    });
                    accordionHeader.addEventListener('click', () => {
                        const isOpen = accordionContent.style.display === 'block';
                        accordionContent.style.display = isOpen ? 'none' : 'block';
                        accordionHeader.classList.toggle('open', !isOpen);
                        accordionHeader.querySelector('.accordion-icon').textContent = isOpen ? 'v' : '^';
                    });
                    accordionItem.appendChild(accordionHeader);
                    accordionItem.appendChild(accordionContent);
                    const placeholder = professorOptionsContainer.querySelector('.placeholder-text');
                    if (placeholder) placeholder.remove();
                    professorOptionsContainer.appendChild(accordionItem);
                }
            }
            if (accordionItem && profesorSelectionsState[subjectCode]) {
                accordionItem.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                    cb.checked = profesorSelectionsState[subjectCode].includes(cb.id);
                });
            } else if (accordionItem) {
                accordionItem.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            }
        });

        if (currentSubjectCodes.size > 0 && professorOptionsContainer.querySelectorAll('.accordion-item').length === 0 && !professorOptionsContainer.querySelector('.placeholder-text')) {
            const placeholder = document.createElement('p');
            placeholder.classList.add('placeholder-text');
            placeholder.textContent = 'No hay opciones de profesor para las materias seleccionadas o un error ocurrió.';
            const clearButton = professorOptionsContainer.querySelector('#clear-professor-selection');
            if(clearButton) {
                professorOptionsContainer.insertBefore(placeholder, clearButton);
            } else {
                professorOptionsContainer.appendChild(placeholder);
            }
        }
    }

    function deepCopy(arr) { return JSON.parse(JSON.stringify(arr)); }

    function asignarMaterias(listaMateriasPorAsignar, horarioActual, indexMateria, horariosValidosTemp, currentSelections) {
        const activeDias = getActiveDiasLabels();
        const activeHorarios = getActiveHorariosLabels();
        const isDiabloMode = diabloModeSwitch.checked;
        const maxClasesDiarias = isDiabloMode ? 7 : 6;

        if (indexMateria === listaMateriasPorAsignar.length) {
            for (let diaIdx = 0; diaIdx < activeDias.length; diaIdx++) {
                let clasesEnDia = 0;
                for (let horaIdx = 0; horaIdx < activeHorarios.length; horaIdx++) {
                    if (horarioActual[horaIdx][diaIdx] && horarioActual[horaIdx][diaIdx].length > 0) {
                        clasesEnDia++;
                    }
                }
                if (clasesEnDia > maxClasesDiarias) return;
            }

            let totalScore = 0;
            let numScoredProfessors = 0;
            const coursesInSchedule = currentSelections.map(sel => {
                const subjectCode = sel[0];
                const professor = sel[1];
                const classNumber = sel[2]; // NUEVO: N° de clase
                const profScore = sel[sel.length - 1]; // Calificación ahora es el último elemento
                const scoreToAdd = (typeof profScore === 'number' && !isNaN(profScore)) ? profScore : 0;
                if (scoreToAdd > 0) {
                    totalScore += scoreToAdd;
                    numScoredProfessors++;
                }
                let timeSlotsStr = "";
                // Los horarios ahora empiezan en el índice 3
                for (let k = 3; k < sel.length - 1; k++) { 
                    if (sel[k][0] < activeDias.length && sel[k][1] < activeHorarios.length &&
                        activeDias[sel[k][0]] && activeHorarios[sel[k][1]]) {
                       timeSlotsStr += `${activeDias[sel[k][0]].substring(0,3)} ${activeHorarios[sel[k][1]]}; `;
                    } else {
                        timeSlotsStr += `Slot Inválido; `;
                    }
                }
                return {
                    subjectCode: subjectCode,
                    subjectName: SUBJECT_NAMES[subjectCode] || subjectCode.toUpperCase(),
                    professor: professor,
                    classNumber: classNumber, // NUEVO: Almacenar N° de clase
                    profScore: scoreToAdd,
                    timeSlots: timeSlotsStr.slice(0, -2)
                };
            });
            const averageScore = numScoredProfessors > 0 ? (totalScore / numScoredProfessors) : 0;
            horariosValidosTemp.push({
                schedule: deepCopy(horarioActual),
                score: parseFloat(averageScore.toFixed(2)),
                courses: coursesInSchedule, // Ya incluye classNumber
                isDiabloGenerated: isDiabloMode
            });
            return;
        }

        if (!listaMateriasPorAsignar[indexMateria] || listaMateriasPorAsignar[indexMateria].length === 0) return;

        for (const horaProfesor of listaMateriasPorAsignar[indexMateria]) {
            let horarioTemp = deepCopy(horarioActual);
            let posibleAsignar = true;
            let bloquesAsignadosEnEstaOpcion = [];

            // Los horarios ahora empiezan en el índice 3
            for (let i = 3; i < horaProfesor.length - 1; i++) { 
                const diaIndex = horaProfesor[i][0];
                const horaIndex = horaProfesor[i][1];
                if (diaIndex < 0 || diaIndex >= horarioTemp[0].length ||
                    horaIndex < 0 || horaIndex >= horarioTemp.length) {
                    posibleAsignar = false; break;
                }
                if (horarioTemp[horaIndex][diaIndex].length === 0) {
                    bloquesAsignadosEnEstaOpcion.push({h: horaIndex, d: diaIndex});
                } else {
                    posibleAsignar = false; break;
                }
            }

            if (posibleAsignar) {
                for (const bloque of bloquesAsignadosEnEstaOpcion) {
                    horarioTemp[bloque.h][bloque.d].push(`${horaProfesor[1]}--${horaProfesor[0].toUpperCase()}`);
                }
                currentSelections.push(horaProfesor);
                asignarMaterias(listaMateriasPorAsignar, horarioTemp, indexMateria + 1, horariosValidosTemp, currentSelections);
                currentSelections.pop();
            }
        }
    }

    generateBtn.addEventListener('click', () => {
        const selectedOptionsBySubject = {};
        const selectedProfessorOptionsCheckboxes = document.querySelectorAll('#professorOptionsContainer input[type="checkbox"]:checked');
        selectedProfessorOptionsCheckboxes.forEach(cb => {
            const subjectCode = cb.dataset.subjectCode;
            if (!selectedOptionsBySubject[subjectCode]) selectedOptionsBySubject[subjectCode] = [];
            selectedOptionsBySubject[subjectCode].push(JSON.parse(cb.value));
        });

        const listaParaGenerador = [];
        const selectedSubjectCheckboxes = document.querySelectorAll('#subjectCheckboxes input[name="subject"]:checked');
        let allSelectedSubjectsHaveOptions = true;

        if (selectedSubjectCheckboxes.length === 0) {
            generatedSchedulesOutput.innerHTML = "<p>Por favor, selecciona al menos una materia.</p>";
            return;
        }

        selectedSubjectCheckboxes.forEach(sb => {
            if (!selectedOptionsBySubject[sb.value] || selectedOptionsBySubject[sb.value].length === 0) {
                allSelectedSubjectsHaveOptions = false;
            } else {
                listaParaGenerador.push(selectedOptionsBySubject[sb.value]);
            }
        });

        if (!allSelectedSubjectsHaveOptions) {
            generatedSchedulesOutput.innerHTML = "<p>Asegúrate de seleccionar al menos una opción de profesor/horario para cada materia marcada.</p>";
            return;
        }

        loadingIndicator.style.display = 'block';
        generatedSchedulesOutput.innerHTML = '';
        
        setTimeout(() => {
            const activeHorarios = getActiveHorariosLabels();
            const activeDias = getActiveDiasLabels();
            const horarioBase = Array(activeHorarios.length).fill(null).map(() => Array(activeDias.length).fill(null).map(() => []));
            const tempHorarios = [];
            asignarMaterias(listaParaGenerador, horarioBase, 0, tempHorarios, []);
            horariosValidosGlobal = tempHorarios.sort((a, b) => (b.score || 0) - (a.score || 0));
            horariosValidosGlobal.forEach((h, index) => {
                h.name = `Horario Válido ${index + 1}` + (h.isDiabloGenerated ? " 🔥" : "");
            });
            renderGeneratedSchedules();
            loadingIndicator.style.display = 'none';
        }, 50);
    });

    function renderGeneratedSchedules() {
        generatedSchedulesOutput.innerHTML = '';
        if (horariosValidosGlobal.length === 0) {
            generatedSchedulesOutput.innerHTML = "<p>No se encontraron horarios válidos con las selecciones actuales.</p>";
            return;
        }
        horariosValidosGlobal.forEach((scheduleData) => {
            const card = createScheduleCard(scheduleData, false);
            generatedSchedulesOutput.appendChild(card);
        });
    }

    function renderFavorites() {
        favoritesOutput.innerHTML = '';
        const sanitizedFavoritos = favoritos.map(fav => ({
            ...fav,
            score: typeof fav.score === 'number' ? fav.score : 0,
            courses: fav.courses || [],
            isDiabloGenerated: fav.isDiabloGenerated || false
        }));
        const sortedFavoritos = [...sanitizedFavoritos].sort((a, b) => b.score - a.score);
        if (sortedFavoritos.length === 0) {
            favoritesOutput.innerHTML = "<p>No tienes horarios guardados como favoritos.</p>";
            return;
        }
        sortedFavoritos.forEach((favDataFromSortedList) => {
            const card = createScheduleCard(favDataFromSortedList, true);
            favoritesOutput.appendChild(card);
        });
    }
    
    function createScheduleCard(scheduleData, isFavoriteCard) {
        const card = document.createElement('div');
        card.classList.add('schedule-card');
        const header = document.createElement('div');
        header.classList.add('schedule-header');
        const title = document.createElement('h3');
        title.textContent = scheduleData.name + (scheduleData.isDiabloGenerated && !scheduleData.name.includes("🔥") ? " 🔥" : "");
        header.appendChild(title);

        const scoreDisplay = document.createElement('span');
        scoreDisplay.classList.add('schedule-score');
        const displayScore = typeof scheduleData.score === 'number' ? scheduleData.score.toFixed(2) : "N/A";
        scoreDisplay.innerHTML = `<i class="fas fa-star"></i> ${displayScore}`;
        header.appendChild(scoreDisplay);
        
        const table = createHtmlTableForSchedule(scheduleData.schedule, scheduleData.isDiabloGenerated);
        
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('schedule-actions');

        const exportImgBtn = document.createElement('button');
        exportImgBtn.innerHTML = '<i class="fas fa-image"></i> Exportar Imagen';
        exportImgBtn.classList.add('export-img-btn');
        exportImgBtn.addEventListener('click', () => exportScheduleAsImage(table, scheduleData.name));
        actionsDiv.appendChild(exportImgBtn);

        const showCodesBtn = document.createElement('button');
        showCodesBtn.innerHTML = '<i class="fas fa-barcode"></i> Ver Códigos';
        showCodesBtn.classList.add('show-codes-btn'); 
        showCodesBtn.addEventListener('click', () => showClassCodesModal(scheduleData.courses, scheduleData.name));
        actionsDiv.appendChild(showCodesBtn);

        if (isFavoriteCard) {
            const favDataObjectForActions = scheduleData;
            const renameBtn = document.createElement('button');
            renameBtn.innerHTML = '<i class="fas fa-edit"></i> Renombrar';
            renameBtn.classList.add('rename-btn');
            renameBtn.addEventListener('click', () => renameFavorite(favDataObjectForActions));
            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i> Quitar';
            removeBtn.classList.add('remove-favorite-btn');
            removeBtn.addEventListener('click', () => removeFromFavorites(favDataObjectForActions));
            actionsDiv.appendChild(renameBtn);
            actionsDiv.appendChild(removeBtn);
        } else {
            const favBtn = document.createElement('span');
            favBtn.classList.add('favorite-btn');
            const isFav = isScheduleFavorited(scheduleData);
            favBtn.innerHTML = isFav ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            favBtn.classList.toggle('favorited', isFav);
            favBtn.title = "Marcar como favorito";
            favBtn.addEventListener('click', () => toggleFavorite(scheduleData, favBtn));
            header.appendChild(favBtn);
        }
        card.appendChild(header);
        card.appendChild(table);
        card.appendChild(actionsDiv);
        return card;
    }

    function createHtmlTableForSchedule(scheduleGrid, isDiabloSchedule) {
        const table = document.createElement('table');
        const thead = table.createTHead();
        const tbody = table.createTBody();
        let headerRow = thead.insertRow();
        headerRow.insertCell().textContent = "Horario";

        let currentDiasLabels, currentHorariosLabels;

        if (isDiabloSchedule === undefined) { 
            currentDiasLabels = scheduleGrid[0].length === DIAS_LABELS_DIABLO.length ? DIAS_LABELS_DIABLO : (typeof DIAS_LABELS !== 'undefined' ? DIAS_LABELS : DIAS_LABELS_NORMAL_ORIGINAL);
            currentHorariosLabels = scheduleGrid.length === HORARIOS_LABELS_DIABLO.length ? HORARIOS_LABELS_DIABLO : (typeof HORARIOS_LABELS !== 'undefined' ? HORARIOS_LABELS : HORARIOS_LABELS_NORMAL_ORIGINAL);
        } else {
            currentDiasLabels = isDiabloSchedule ? DIAS_LABELS_DIABLO : (typeof DIAS_LABELS !== 'undefined' ? DIAS_LABELS : DIAS_LABELS_NORMAL_ORIGINAL);
            currentHorariosLabels = isDiabloSchedule ? HORARIOS_LABELS_DIABLO : (typeof HORARIOS_LABELS !== 'undefined' ? HORARIOS_LABELS : HORARIOS_LABELS_NORMAL_ORIGINAL);
        }
        
        currentDiasLabels.forEach(dia => headerRow.insertCell().textContent = dia);

        for (let i = 0; i < currentHorariosLabels.length; i++) {
            let row = tbody.insertRow();
            row.insertCell().textContent = currentHorariosLabels[i];
            for (let j = 0; j < currentDiasLabels.length; j++) {
                let cell = row.insertCell();
                if (scheduleGrid && scheduleGrid[i] && scheduleGrid[i][j] !== undefined) {
                    cell.textContent = scheduleGrid[i][j].join(', ');
                    if (scheduleGrid[i][j].length > 0) {
                        cell.classList.add('occupied');
                    }
                } else {
                    cell.textContent = ''; 
                }
            }
        }
        return table;
    }

    function exportScheduleAsImage(tableElement, scheduleName) {
        const currentBgColor = document.body.classList.contains('dark-mode') ? '#2c2c2c' : '#ffffff';
        html2canvas(tableElement, {
            scale: 2,
            backgroundColor: currentBgColor
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            const fileName = scheduleName.replace(/[^a-z0-9_🔥]+/gi, '_').toLowerCase();
            link.download = `horario_${fileName}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Horario exportado como imagen!");
        }).catch(err => {
            console.error("Error al exportar como imagen:", err);
            showToast("Error al exportar imagen.", true);
        });
    }
    
    function showCustomNamePrompt(title, currentValue, saveCallback, cancelCallback = null) {
        currentModalSaveCallback = saveCallback;
        currentModalCancelCallback = cancelCallback;
        modalTitleEl.textContent = title;
        modalScheduleNameInput.value = currentValue;
        nameFavoriteModal.classList.add('visible');
        modalScheduleNameInput.focus();
        modalScheduleNameInput.select();
    }

    function hideCustomNamePrompt() {
        nameFavoriteModal.classList.remove('visible');
        modalScheduleNameInput.value = '';
        currentModalSaveCallback = null;
        currentModalCancelCallback = null;
    }

    modalSaveBtn.addEventListener('click', () => {
        const newName = modalScheduleNameInput.value.trim();
        if (newName === "") {
            showToast("El nombre no puede estar vacío.", true);
            modalScheduleNameInput.focus();
            return;
        }
        if (currentModalSaveCallback) {
            currentModalSaveCallback(newName);
        }
        hideCustomNamePrompt();
    });

    modalCancelBtn.addEventListener('click', () => {
        if (currentModalCancelCallback) {
            currentModalCancelCallback();
        }
        hideCustomNamePrompt();
    });

    // Modal de Códigos de Clase
    function showClassCodesModal(courses, scheduleName) {
        classCodesModalTitleEl.textContent = `Códigos para:"${scheduleName}"`;
        classCodesModalBodyEl.innerHTML = ''; 

        if (courses && courses.length > 0) {
            courses.forEach(course => {
                const p = document.createElement('p');
                p.innerHTML = `<strong> ${course.subjectCode.toUpperCase()}:</strong> N° ${course.classNumber}`;
                classCodesModalBodyEl.appendChild(p);
            });
        } else {
            classCodesModalBodyEl.innerHTML = '<p>No hay información de cursos para este horario.</p>';
        }
        classCodesModal.classList.add('visible');
        currentClassCodesModalCloseCallback = hideClassCodesModal;
    }

    function hideClassCodesModal() {
        classCodesModal.classList.remove('visible');
        if (currentClassCodesModalCloseCallback) {
            currentClassCodesModalCloseCallback = null;
        }
    }

    if(classCodesModalCloseBtn) { // Asegurarse que el botón existe
        classCodesModalCloseBtn.addEventListener('click', hideClassCodesModal);
    }
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (nameFavoriteModal.classList.contains('visible')) {
                if (currentModalCancelCallback) currentModalCancelCallback();
                hideCustomNamePrompt();
            }
            if (classCodesModal.classList.contains('visible')) {
                hideClassCodesModal();
            }
        }
    });
    
    modalScheduleNameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && nameFavoriteModal.classList.contains('visible')) {
            event.preventDefault();
            modalSaveBtn.click();
        }
    });

    function isScheduleFavorited(scheduleDataToCompare) {
        const scheduleStringToCompare = JSON.stringify(scheduleDataToCompare.schedule);
        return favoritos.some(fav => JSON.stringify(fav.schedule) === scheduleStringToCompare && fav.isDiabloGenerated === scheduleDataToCompare.isDiabloGenerated);
    }

    function toggleFavorite(scheduleDataFromGenerator, favBtnElement) {
        const scheduleString = JSON.stringify(scheduleDataFromGenerator.schedule);
        const favIndex = favoritos.findIndex(fav => JSON.stringify(fav.schedule) === scheduleString && fav.isDiabloGenerated === scheduleDataFromGenerator.isDiabloGenerated);
        
        if (favIndex > -1) {
            favoritos.splice(favIndex, 1);
            favBtnElement.innerHTML = '<i class="far fa-heart"></i>';
            favBtnElement.classList.remove('favorited');
            localStorage.setItem('horarioMakerFavoritos', JSON.stringify(favoritos));
            showToast("Horario quitado de favoritos.");
            if (document.getElementById('favorites-section').classList.contains('active')) {
                renderFavorites();
            }
        } else {
            showCustomNamePrompt(
                "Guardar Horario Favorito",
                scheduleDataFromGenerator.name,
                (newFavName) => {
                    const newFavorite = {
                        schedule: scheduleDataFromGenerator.schedule,
                        name: newFavName,
                        score: typeof scheduleDataFromGenerator.score === 'number' ? scheduleDataFromGenerator.score : 0,
                        courses: scheduleDataFromGenerator.courses.map(c => ({ ...c })), 
                        isDiabloGenerated: scheduleDataFromGenerator.isDiabloGenerated
                    };
                    favoritos.push(newFavorite);
                    favBtnElement.innerHTML = '<i class="fas fa-heart"></i>';
                    favBtnElement.classList.add('favorited');
                    localStorage.setItem('horarioMakerFavoritos', JSON.stringify(favoritos));
                    showToast("Horario añadido a favoritos!");
                    if (document.getElementById('favorites-section').classList.contains('active')) {
                        renderFavorites();
                    }
                }
            );
        }
    }

    function removeFromFavorites(favDataObjectToRemove) {
    console.log("Intentando eliminar:", JSON.stringify(favDataObjectToRemove, null, 2)); // Log del objeto a eliminar
    console.log("Array de favoritos actual:", JSON.stringify(favoritos, null, 2)); // Log de todo el array

    const indexInFavoritesArray = favoritos.findIndex(fav => {
        const scheduleMatch = JSON.stringify(fav.schedule) === JSON.stringify(favDataObjectToRemove.schedule);
        const nameMatch = fav.name === favDataObjectToRemove.name;
        // Normalizar undefined a false para isDiabloGenerated para comparaciones más robustas
        const diabloMatch = (fav.isDiabloGenerated || false) === (favDataObjectToRemove.isDiabloGenerated || false);

        // Log para cada comparación dentro de findIndex
        // console.log(`Comparando con favorito: ${fav.name}, ScheduleMatch: ${scheduleMatch}, NameMatch: ${nameMatch}, DiabloMatch: ${diabloMatch}`);

        return scheduleMatch && nameMatch && diabloMatch;
    });

    if (indexInFavoritesArray === -1) {
        console.error("Objeto favorito NO encontrado para eliminar con nombre y modo:", favDataObjectToRemove.name);
        const fallbackIndex = favoritos.findIndex(fav =>
            JSON.stringify(fav.schedule) === JSON.stringify(favDataObjectToRemove.schedule) &&
            (fav.isDiabloGenerated || false) === (favDataObjectToRemove.isDiabloGenerated || false)
        );

        if (fallbackIndex !== -1) {
            console.log("Encontrado por fallback (schedule y modo). Eliminando índice:", fallbackIndex);
            favoritos.splice(fallbackIndex, 1);
        } else {
            showToast("Error: No se pudo encontrar el horario para quitar de favoritos.", true);
            console.error("Fallo total al encontrar el favorito para eliminar:", favDataObjectToRemove);
            return; // Salir si no se encuentra nada
        }
    } else {
        console.log("Encontrado por coincidencia completa. Eliminando índice:", indexInFavoritesArray);
        favoritos.splice(indexInFavoritesArray, 1);
    }

    localStorage.setItem('horarioMakerFavoritos', JSON.stringify(favoritos));
    renderFavorites();
    if (document.getElementById('generator-section').classList.contains('active')) {
        // Actualizar el estado del corazón en los horarios generados
        renderGeneratedSchedules(); 
    }
    showToast("Horario eliminado de favoritos.");
}

    function renameFavorite(favDataObjectToRename) {
        const indexInFavoritesArray = favoritos.findIndex(fav =>
            JSON.stringify(fav.schedule) === JSON.stringify(favDataObjectToRename.schedule) &&
            fav.name === favDataObjectToRename.name &&
            fav.isDiabloGenerated === favDataObjectToRename.isDiabloGenerated
        );
        if (indexInFavoritesArray === -1) {
            const fallbackIndex = favoritos.findIndex(fav => JSON.stringify(fav.schedule) === JSON.stringify(favDataObjectToRename.schedule) && fav.isDiabloGenerated === favDataObjectToRename.isDiabloGenerated);
            if (fallbackIndex !== -1) {
                const currentName = favoritos[fallbackIndex].name;
                 showCustomNamePrompt(
                    "Renombrar Horario Favorito",
                    currentName,
                    (newName) => {
                        if (newName !== currentName) {
                            favoritos[fallbackIndex].name = newName;
                            localStorage.setItem('horarioMakerFavoritos', JSON.stringify(favoritos));
                            renderFavorites();
                            showToast("Horario renombrado con éxito.");
                        } else {
                            showToast("El nombre no ha cambiado.", false);
                        }
                    }
                );
            } else {
                showToast("Error al renombrar el horario favorito.", true);
            }
            return;
        }
        const currentName = favoritos[indexInFavoritesArray].name;
        showCustomNamePrompt(
            "Renombrar Horario Favorito",
            currentName,
            (newName) => {
                if (newName !== currentName) {
                    favoritos[indexInFavoritesArray].name = newName;
                    localStorage.setItem('horarioMakerFavoritos', JSON.stringify(favoritos));
                    renderFavorites();
                    showToast("Horario renombrado con éxito.");
                } else {
                    showToast("El nombre no ha cambiado.", false);
                }
            }
        );
    }

    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.classList.add('toast-notification');
        if (isError) toast.classList.add('error');
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
             toast.classList.add('show');
        });
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 500);
        }, 3000);
    }

    // --- Inicialización ---
    if (diabloModeSwitch) { 
        populateSubjectSelector();
    } else {
        console.error("El interruptor 'diablo-mode-switch-nav' no fue encontrado. Algunas funciones pueden fallar.");
        populateSubjectSelector(); 
    }
    document.querySelector('.nav-link[data-target="home"]').click();
});