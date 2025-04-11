// Función para calcular estado y porcentaje.
// Si "menos es mejor" (meta < precaución) se aplica lógica inversa.
function calcularIndicador(meta, precaucion, peligro, resultado) {
    let estado, textoEstado, porcentaje;
    if (meta < precaucion) {
        // Menor es mejor
        if (resultado <= meta) {
            estado = 'success';
            textoEstado = 'Cumplido';
        } else if (resultado <= precaucion) {
            estado = 'warning';
            textoEstado = 'Precaución';
        } else {
            estado = 'danger';
            textoEstado = 'Peligro';
        }
        porcentaje = Math.max(0, ((peligro - resultado) / (peligro - meta)) * 100);
    } else {
        // Mayor es mejor
        if (resultado >= meta) {
            estado = 'success';
            textoEstado = 'Cumplido';
        } else if (resultado >= precaucion) {
            estado = 'warning';
            textoEstado = 'Precaución';
        } else {
            estado = 'danger';
            textoEstado = 'Peligro';
        }
        porcentaje = Math.max(0, ((resultado - peligro) / (meta - peligro)) * 100);
    }
    return { estado, textoEstado, porcentaje: porcentaje.toFixed(0) + '%' };
}

// Datos cargados.
const periodsData = {
    "1": [
        {
            perspective: 'finanzas',
            indicator: 'Margen de beneficio (%)',
            meta: 30,
            precaucion: 25,
            peligro: 20,
            resultado: 28,
            action: 'Analizar gastos por departamento'
        },
        {
            perspective: 'finanzas',
            indicator: 'Ingresos por soluciones sostenibles ($)',
            meta: 150000,
            precaucion: 120000,
            peligro: 100000,
            resultado: 118000,
            action: 'Incrementar marketing'
        },
        {
            perspective: 'cliente',
            indicator: 'Índice NPS',
            meta: 75,
            precaucion: 65,
            peligro: 55,
            resultado: 68,
            action: 'Capacitar equipo soporte'
        },
        {
            perspective: 'cliente',
            indicator: 'Tasa de renovación contratos (%)',
            meta: 95,
            precaucion: 90,
            peligro: 85,
            resultado: 92,
            action: 'Contactar clientes históricos'
        },
        {
            perspective: 'procesos',
            indicator: 'Tiempo promedio de entrega (días)',
            meta: 14,
            precaucion: 18,
            peligro: 21,
            resultado: 16,
            action: 'Revisión metodología ágil'
        },
        {
            perspective: 'procesos',
            indicator: 'Bugs críticos por release',
            meta: 5,
            precaucion: 8,
            peligro: 12,
            resultado: 7,
            action: 'Reforzar pruebas unitarias'
        },
        {
            perspective: 'procesos',
            indicator: 'Huella de carbono (ton CO2)',
            meta: 50,
            precaucion: 75,
            peligro: 100,
            resultado: 85,
            action: 'Implementar política energética'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Nuevas patentes sostenibles',
            meta: 3,
            precaucion: 2,
            peligro: 1,
            resultado: 2,
            action: 'Asociación con universidad'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Horas formación/empleado',
            meta: 40,
            precaucion: 30,
            peligro: 20,
            resultado: 35,
            action: 'Identificar necesidades'
        },
        {
            perspective: 'crecimiento',
            indicator: '% diversidad en equipos',
            meta: 40,
            precaucion: 30,
            peligro: 25,
            resultado: 32,
            action: 'Revisar políticas contratación'
        }
    ],
    "2": [
        {
            perspective: 'finanzas',
            indicator: 'Margen de beneficio (%)',
            meta: 30,
            precaucion: 25,
            peligro: 20,
            resultado: 32,
            action: 'Mantener estrategia'
        },
        {
            perspective: 'finanzas',
            indicator: 'Ingresos por soluciones sostenibles ($)',
            meta: 150000,
            precaucion: 120000,
            peligro: 100000,
            resultado: 135000,
            action: 'Lanzar beta producto eco'
        },
        {
            perspective: 'cliente',
            indicator: 'Índice NPS',
            meta: 75,
            precaucion: 65,
            peligro: 55,
            resultado: 72,
            action: 'Auditar tickets críticos'
        },
        {
            perspective: 'cliente',
            indicator: 'Tasa de renovación contratos (%)',
            meta: 95,
            precaucion: 90,
            peligro: 85,
            resultado: 93,
            action: 'Mejorar onboarding'
        },
        {
            perspective: 'procesos',
            indicator: 'Tiempo promedio de entrega (días)',
            meta: 14,
            precaucion: 18,
            peligro: 21,
            resultado: 15,
            action: 'Capacitación equipo'
        },
        {
            perspective: 'procesos',
            indicator: 'Bugs críticos por release',
            meta: 5,
            precaucion: 8,
            peligro: 12,
            resultado: 6,
            action: 'Auditoría de código'
        },
        {
            perspective: 'procesos',
            indicator: 'Huella de carbono (ton CO2)',
            meta: 50,
            precaucion: 75,
            peligro: 100,
            resultado: 70,
            action: 'Actualizar infraestructura'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Nuevas patentes sostenibles',
            meta: 3,
            precaucion: 2,
            peligro: 1,
            resultado: 2,
            action: 'Hackathon sostenibilidad'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Horas formación/empleado',
            meta: 40,
            precaucion: 30,
            peligro: 20,
            resultado: 42,
            action: 'Seminarios especializados'
        },
        {
            perspective: 'crecimiento',
            indicator: '% diversidad en equipos',
            meta: 40,
            precaucion: 30,
            peligro: 25,
            resultado: 36,
            action: 'Capacitación sin sesgos'
        }
    ],
    "3": [
        {
            perspective: 'finanzas',
            indicator: 'Margen de beneficio (%)',
            meta: 30,
            precaucion: 25,
            peligro: 20,
            resultado: 29,
            action: 'Revisar precios'
        },
        {
            perspective: 'finanzas',
            indicator: 'Ingresos por soluciones sostenibles ($)',
            meta: 150000,
            precaucion: 120000,
            peligro: 100000,
            resultado: 155000,
            action: 'Ampliar equipo ventas'
        },
        {
            perspective: 'cliente',
            indicator: 'Índice NPS',
            meta: 75,
            precaucion: 65,
            peligro: 55,
            resultado: 78,
            action: 'Implementar chat IA'
        },
        {
            perspective: 'cliente',
            indicator: 'Tasa de renovación contratos (%)',
            meta: 95,
            precaucion: 90,
            peligro: 85,
            resultado: 96,
            action: 'Descuentos por antigüedad'
        },
        {
            perspective: 'procesos',
            indicator: 'Tiempo promedio de entrega (días)',
            meta: 14,
            precaucion: 18,
            peligro: 21,
            resultado: 13,
            action: 'Mejorar pruebas automatizadas'
        },
        {
            perspective: 'procesos',
            indicator: 'Bugs críticos por release',
            meta: 5,
            precaucion: 8,
            peligro: 12,
            resultado: 4,
            action: 'Estandarizar documentación'
        },
        {
            perspective: 'procesos',
            indicator: 'Huella de carbono (ton CO2)',
            meta: 50,
            precaucion: 75,
            peligro: 100,
            resultado: 55,
            action: 'Compensación carbono'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Nuevas patentes sostenibles',
            meta: 3,
            precaucion: 2,
            peligro: 1,
            resultado: 4,
            action: 'Premios a iniciativas'
        },
        {
            perspective: 'crecimiento',
            indicator: 'Horas formación/empleado',
            meta: 40,
            precaucion: 30,
            peligro: 20,
            resultado: 45,
            action: 'Mentorías personalizadas'
        },
        {
            perspective: 'crecimiento',
            indicator: '% diversidad en equipos',
            meta: 40,
            precaucion: 30,
            peligro: 25,
            resultado: 41,
            action: 'Alianzas comunidades'
        }
    ],
    "4": [
        {
            perspective: 'finanzas',
            indicator: 'Margen de beneficio (%)',
            meta: 30,
            precaucion: 25,
            peligro: 20,
            resultado: 33,
            action: ''
        },
        {
            perspective: 'finanzas',
            indicator: 'Ingresos por soluciones sostenibles ($)',
            meta: 150000,
            precaucion: 120000,
            peligro: 100000,
            resultado: 165000,
            action: ''
        },
        {
            perspective: 'cliente',
            indicator: 'Índice NPS',
            meta: 75,
            precaucion: 65,
            peligro: 55,
            resultado: 80,
            action: ''
        },
        {
            perspective: 'cliente',
            indicator: 'Tasa de renovación contratos (%)',
            meta: 95,
            precaucion: 90,
            peligro: 85,
            resultado: 97,
            action: ''
        },
        {
            perspective: 'procesos',
            indicator: 'Tiempo promedio de entrega (días)',
            meta: 14,
            precaucion: 18,
            peligro: 21,
            resultado: 12,
            action: ''
        },
        {
            perspective: 'procesos',
            indicator: 'Bugs críticos por release',
            meta: 5,
            precaucion: 8,
            peligro: 12,
            resultado: 3,
            action: ''
        },
        {
            perspective: 'procesos',
            indicator: 'Huella de carbono (ton CO2)',
            meta: 50,
            precaucion: 75,
            peligro: 100,
            resultado: 45,
            action: ''
        },
        {
            perspective: 'crecimiento',
            indicator: 'Nuevas patentes sostenibles',
            meta: 3,
            precaucion: 2,
            peligro: 1,
            resultado: 5,
            action: ''
        },
        {
            perspective: 'crecimiento',
            indicator: 'Horas formación/empleado',
            meta: 40,
            precaucion: 30,
            peligro: 20,
            resultado: 48,
            action: ''
        },
        {
            perspective: 'crecimiento',
            indicator: '% diversidad en equipos',
            meta: 40,
            precaucion: 30,
            peligro: 25,
            resultado: 45,
            action: ''
        }
    ]
};

// Periodo activo
let activePeriod = "1";

// Función para calcular el estado del indicador
function calcularIndicador(meta, precaucion, peligro, resultado) {
    let estado = "";
    let textoEstado = "";
    let porcentaje = "";
    
    // Si el objetivo es minimizar (como tiempo de entrega)
    if (meta < precaucion && precaucion < peligro) {
        if (resultado <= meta) {
            estado = "success";
            textoEstado = "Meta cumplida";
            porcentaje = "100%";
        } else if (resultado <= precaucion) {
            estado = "warning";
            textoEstado = "Precaución";
            const percent = (precaucion - resultado) / (precaucion - meta) * 100;
            porcentaje = Math.max(0, Math.min(100, percent)).toFixed(1) + "%";
        } else {
            estado = "danger";
            textoEstado = "Peligro";
            porcentaje = "0%";
        }
    }
    // Si el objetivo es maximizar (como margen de beneficio)
    else {
        if (resultado >= meta) {
            estado = "success";
            textoEstado = "Meta cumplida";
            porcentaje = "100%";
        } else if (resultado >= precaucion) {
            estado = "warning";
            textoEstado = "Precaución";
            const percent = (resultado - peligro) / (meta - peligro) * 100;
            porcentaje = Math.max(0, Math.min(100, percent)).toFixed(1) + "%";
        } else {
            estado = "danger";
            textoEstado = "Peligro";
            porcentaje = "0%";
        }
    }
    
    return { estado, textoEstado, porcentaje };
}

// Actualiza los summary cards (Indicadores en meta, Margen de beneficio, Índice NPS, Tiempo entrega)
function updateSummaryCards() {
    const indicadores = periodsData[activePeriod] || [];
    const enMeta = indicadores.filter(item => {
        // Recalcula el indicador para asegurar que tenga estado y porcentaje
        const calc = calcularIndicador(item.meta, item.precaucion, item.peligro, item.resultado);
        item.estado = calc.estado;
        item.textoEstado = calc.textoEstado;
        item.porcentaje = calc.porcentaje;
        return item.estado === 'success';
    }).length;
    document.getElementById('indicadores-meta').textContent = `${enMeta}/${indicadores.length}`;

    const margen = indicadores.find(item => item.indicator.toLowerCase().includes("margen de beneficio"));
    const nps = indicadores.find(item => item.indicator.toLowerCase().includes("índice nps"));
    const entrega = indicadores.find(item => item.indicator.toLowerCase().includes("tiempo promedio de entrega"));

    document.getElementById('margen-beneficio').textContent = margen ? margen.resultado + (margen.indicator.includes('%') ? '%' : '') : '-';
    document.getElementById('indice-nps').textContent = nps ? nps.resultado : '-';
    document.getElementById('tiempo-entrega').textContent = entrega ? entrega.resultado + ' días' : '-';
}

// Renderiza la tabla del periodo activo.
// Se recorre cada indicador y se vuelve a calcular su estado y porcentaje.
function renderTable() {
    const tbody = document.getElementById('indicatorTableBody');
    tbody.innerHTML = "";
    const indicadores = periodsData[activePeriod] || [];

    indicadores.forEach((item, index) => {
        // Recalcular siempre para mostrar los datos correctos al cargar
        const calc = calcularIndicador(item.meta, item.precaucion, item.peligro, item.resultado);
        item.estado = calc.estado;
        item.textoEstado = calc.textoEstado;
        item.porcentaje = calc.porcentaje;

        const row = document.createElement('tr');
        row.innerHTML = `
      <td class="perspective">${item.perspective}</td>
      <td>${item.indicator}</td>
      <td>${item.meta}${item.indicator.includes('%') ? '%' : ''}</td>
      <td class="result-cell">
        <span class="metric-value">${item.resultado}${item.indicator.includes('%') ? '%' : ''}</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${item.porcentaje}; background-color: var(--${item.estado});"></div>
        </div>
      </td>
      <td><span class="status status-${item.estado}">${item.textoEstado}</span></td>
      <td>${item.action}</td>
      <td>
        <button class="action-btn edit-btn" data-index="${index}">Editar</button>
        <button class="action-btn delete-btn" data-index="${index}">Eliminar</button>
      </td>
    `;
        tbody.appendChild(row);
    });
    updateSummaryCards();
    // Actualizar también los gráficos
    updateCharts();
}

// Cambia el periodo activo
function switchPeriod(periodId) {
    activePeriod = periodId;
    document.querySelectorAll('.period-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-period') === periodId);
    });
    renderTable();
}

// Funciones para abrir/cerrar modales
function openModal(id) {
    document.getElementById(id).classList.add('active');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', function () {
        closeModal(this.getAttribute('data-close'));
    });
});

// Cambio de periodo
document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        switchPeriod(this.getAttribute('data-period'));
    });
});

// Abrir modal para agregar indicador
document.getElementById('addIndicatorBtn').addEventListener('click', function () {
    document.getElementById('addIndicatorForm').reset();
    openModal('addIndicatorModal');
});

// Envío del formulario de agregar indicador
document.getElementById('addIndicatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const perspectiva = document.getElementById('addPerspective').value;
    const indicador = document.getElementById('addIndicatorName').value;
    const meta = parseFloat(document.getElementById('addMeta').value);
    const precaucion = parseFloat(document.getElementById('addPrecaucion').value);
    const peligro = parseFloat(document.getElementById('addPeligro').value);
    const resultado = parseFloat(document.getElementById('addResultado').value);
    const accion = document.getElementById('addAction').value;

    const calculo = calcularIndicador(meta, precaucion, peligro, resultado);

    const nuevoIndicador = {
        perspective: perspectiva,
        indicator: indicador,
        meta: meta,
        precaucion: precaucion,
        peligro: peligro,
        resultado: resultado,
        action: accion,
        estado: calculo.estado,
        textoEstado: calculo.textoEstado,
        porcentaje: calculo.porcentaje
    };
    if (!periodsData[activePeriod]) periodsData[activePeriod] = [];
    periodsData[activePeriod].push(nuevoIndicador);
    renderTable();
    closeModal('addIndicatorModal');
}); 

// Delegar eventos para editar y eliminar
document.getElementById('indicatorTableBody').addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-btn')) {
        const idx = e.target.getAttribute('data-index');
        const item = periodsData[activePeriod][idx];
        document.getElementById('editIndex').value = idx;
        document.getElementById('editPerspective').value = item.perspective.toLowerCase();
        document.getElementById('editIndicatorName').value = item.indicator;
        document.getElementById('editMeta').value = item.meta;
        document.getElementById('editPrecaucion').value = item.precaucion;
        document.getElementById('editPeligro').value = item.peligro;
        document.getElementById('editResultado').value = item.resultado;
        document.getElementById('editAction').value = item.action;
        openModal('editIndicatorModal');
    }
    if (e.target.classList.contains('delete-btn')) {
        const idx = e.target.getAttribute('data-index');
        if (confirm('¿Está seguro de eliminar este indicador?')) {
            periodsData[activePeriod].splice(idx, 1);
            renderTable();
        }
    }
});

// Envío del formulario de editar indicador
document.getElementById('editIndicatorForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const idx = document.getElementById('editIndex').value;
    const perspectiva = document.getElementById('editPerspective').value;
    const indicador = document.getElementById('editIndicatorName').value;
    const meta = parseFloat(document.getElementById('editMeta').value);
    const precaucion = parseFloat(document.getElementById('editPrecaucion').value);
    const peligro = parseFloat(document.getElementById('editPeligro').value);
    const resultado = parseFloat(document.getElementById('editResultado').value);
    const accion = document.getElementById('editAction').value;

    const calculo = calcularIndicador(meta, precaucion, peligro, resultado);

    periodsData[activePeriod][idx] = {
        perspective: perspectiva,
        indicator: indicador,
        meta: meta,
        precaucion: precaucion,
        peligro: peligro,
        resultado: resultado,
        action: accion,
        estado: calculo.estado,
        textoEstado: calculo.textoEstado,
        porcentaje: calculo.porcentaje
    };
    renderTable();
    closeModal('editIndicatorModal');
});

// Agregar nuevo periodo
document.getElementById('addPeriodBtn').addEventListener('click', function () {
    document.getElementById('addPeriodForm').reset();
    openModal('addPeriodModal');
});
document.getElementById('addPeriodForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newPeriodName = document.getElementById('newPeriodName').value;
    const newId = (Object.keys(periodsData).length + 1).toString();
    periodsData[newId] = [];
    const periodSelector = document.querySelector('.period-selector');
    const btn = document.createElement('button');
    btn.className = 'period-btn';
    btn.setAttribute('data-period', newId);
    btn.textContent = newPeriodName;
    btn.addEventListener('click', function () {
        switchPeriod(newId);
    });
    periodSelector.insertBefore(btn, document.getElementById('addPeriodBtn'));
    closeModal('addPeriodModal');
});

// Variables para guardar referencias a los gráficos
let perspectiveBarChart = null;
let trendChart = null;

// Función que actualiza todos los gráficos
function updateCharts() {
    initBarChart();
    updateTrendChart();
}

// Función para el gráfico de barras
function initBarChart() {
    const ctx = document.getElementById('perspectiveBarChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (perspectiveBarChart) {
        perspectiveBarChart.destroy();
    }
    
    // Calcular datos para el gráfico
    const perspectives = ['Finanzas', 'Cliente', 'Procesos', 'Crecimiento'];
    const metasCumplidasPorPerspectiva = [];
    const metasNoCumplidasPorPerspectiva = [];
    
    // Para cada perspectiva, calcular metas cumplidas y no cumplidas
    perspectives.forEach(perspective => {
        const indicadoresDePerspectiva = periodsData[activePeriod] ? 
            periodsData[activePeriod].filter(i => i.perspective.toLowerCase() === perspective.toLowerCase()) : [];
        
        let cumplen = 0;
        let noCumplen = 0;
        
        indicadoresDePerspectiva.forEach(indicator => {
            if (indicator.estado === 'success') {
                cumplen++;
            } else {
                noCumplen++;
            }
        });
        
        metasCumplidasPorPerspectiva.push(cumplen);
        metasNoCumplidasPorPerspectiva.push(noCumplen);
    });
    
    // Crear el gráfico de barras apiladas
    perspectiveBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: perspectives,
            datasets: [
                {
                    label: 'Metas cumplidas',
                    data: metasCumplidasPorPerspectiva,
                    backgroundColor: '#22c55e',
                    borderColor: 'var(--success)',
                    borderWidth: 1
                },
                {
                    label: 'Metas no cumplidas',
                    data: metasNoCumplidasPorPerspectiva,
                    backgroundColor: '#ef4444',
                    borderColor: 'var(--warning)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Función para actualizar el gráfico de tendencias
function updateTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (trendChart) {
        trendChart.destroy();
    }
    
    // Preparar datos para el gráfico
    const periodos = Object.keys(periodsData).sort();
    const labels = periodos.map(id => `Periodo ${id}`);
    
    // Datos para cada indicador clave
    const margenData = [];
    const npsData = [];
    const entregaData = [];
    
    periodos.forEach(periodoId => {
        const indicadores = periodsData[periodoId] || [];
        
        const margen = indicadores.find(item => item.indicator.toLowerCase().includes("margen"));
        margenData.push(margen ? margen.resultado : null);
        
        const nps = indicadores.find(item => item.indicator.toLowerCase().includes("nps"));
        npsData.push(nps ? nps.resultado : null);
        
        const entrega = indicadores.find(item => item.indicator.toLowerCase().includes("entrega"));
        entregaData.push(entrega ? entrega.resultado : null);
    });
    
    // Crear el gráfico de líneas
    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Margen de beneficio',
                    data: margenData,
                    borderColor: '#2563eb',
                    backgroundColor: 'transparent',
                    tension: 0.1
                },
                {
                    label: 'Índice NPS',
                    data: npsData,
                    borderColor: '#22c55e',
                    backgroundColor: 'transparent',
                    tension: 0.1
                },
                {
                    label: 'Tiempo entrega',
                    data: entregaData,
                    borderColor: '#f59e0b',
                    backgroundColor: 'transparent',
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            scales: { y: { beginAtZero: false } }
        }
    });
}

// Inicializar tabla y gráficos al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
    renderTable();
});