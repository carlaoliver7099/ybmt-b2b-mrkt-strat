/* ============================================================================
   CoSai CFO Design Brief — Interactive Dashboard (Module 7)
   Chart.js illustrative target model — NOT actual performance data.
   ============================================================================ */

(function () {
  if (typeof Chart === 'undefined') {
    console.warn('[dashboard] Chart.js not loaded — skipping dashboard render.')
    return
  }

  // ---- Brand palette (must match CSS custom properties) ----
  const C = {
    navy: '#1B3A5C',
    navyDeep: '#0F2138',
    timber: '#B8743D',
    timberLight: '#D29563',
    aqua: '#4DB6C7',
    aquaLight: '#8FD3DD',
    cream: '#F5F1EA',
    creamDeep: '#E8DFCF',
    green: '#3F8E5C',
    red: '#C0463A',
    amber: '#E0A050',
    charcoal: '#2A2A2A',
    grey: '#7A7A7A',
  }

  // ---- Global Chart.js defaults ----
  Chart.defaults.font.family = "'Inter', -apple-system, system-ui, sans-serif"
  Chart.defaults.font.size = 12
  Chart.defaults.color = C.charcoal
  Chart.defaults.plugins.legend.labels.boxWidth = 12
  Chart.defaults.plugins.legend.labels.padding = 14
  Chart.defaults.plugins.legend.labels.usePointStyle = true
  Chart.defaults.plugins.tooltip.backgroundColor = C.navyDeep
  Chart.defaults.plugins.tooltip.titleColor = C.cream
  Chart.defaults.plugins.tooltip.bodyColor = C.cream
  Chart.defaults.plugins.tooltip.padding = 10
  Chart.defaults.plugins.tooltip.cornerRadius = 4
  Chart.defaults.plugins.tooltip.titleFont = { weight: '600', size: 12 }

  const monthLabels = [
    // Y1: Jun 2026 → May 2027
    'Jun-26', 'Jul-26', 'Aug-26', 'Sep-26', 'Oct-26', 'Nov-26',
    'Dec-26', 'Jan-27', 'Feb-27', 'Mar-27', 'Apr-27', 'May-27',
    // Y2: Jun 2027 → May 2028
    'Jun-27', 'Jul-27', 'Aug-27', 'Sep-27', 'Oct-27', 'Nov-27',
    'Dec-27', 'Jan-28', 'Feb-28', 'Mar-28', 'Apr-28', 'May-28',
  ]

  // ============================================================
  // Chart 1 — Revenue ramp 24-month target
  // ============================================================
  // Baseline $3.5M/12 ≈ $292K/mo; Y1 target $6.5M ($542K/mo avg); Y2 target $10M ($833K/mo avg)
  // S-curve respecting pipeline lag in Q1-Q2, then compounding
  const revenueMonthly = [
    // Y1 — ramping from baseline; pipeline filling
    310, 325, 345, 380, 425, 470,
    510, 555, 595, 640, 685, 720,
    // Y2 — compound effect of 18+ partners
    760, 790, 815, 840, 855, 865,
    875, 880, 880, 870, 855, 840,
  ]
  const revenueTargetCumY1 = 6500   // $6.5M
  const revenueTargetCumY2 = 10000  // $10M cumulative? No — Y2 standalone

  const ctxRevenue = document.getElementById('chart-revenue')
  if (ctxRevenue) {
    new Chart(ctxRevenue, {
      type: 'bar',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: 'Monthly revenue ($K)',
            data: revenueMonthly,
            backgroundColor: monthLabels.map((_, i) =>
              i < 12 ? C.aqua : C.timber
            ),
            borderRadius: 2,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `$${ctx.parsed.y}K monthly target`,
              afterLabel: (ctx) => ctx.dataIndex < 12 ? 'Year 1 (build)' : 'Year 2 (scale)',
            },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 60, minRotation: 60 } },
          y: {
            beginAtZero: true,
            grid: { color: C.creamDeep },
            ticks: { callback: (v) => '$' + v + 'K' },
            title: { display: true, text: 'Revenue ($K / month)', font: { size: 11, weight: '600' }, color: C.grey },
          },
        },
      },
    })
  }

  // ============================================================
  // Chart 2 — Partner pipeline funnel waterfall (24-month cumulative)
  // ============================================================
  const ctxFunnel = document.getElementById('chart-funnel')
  if (ctxFunnel) {
    new Chart(ctxFunnel, {
      type: 'bar',
      data: {
        labels: [
          'Prospects contacted',
          'First conversations',
          'Discovery meetings',
          'Trial offers',
          'Trials completed',
          'Active partners',
        ],
        datasets: [
          {
            label: 'Funnel volume',
            data: [480, 192, 96, 58, 43, 30],
            backgroundColor: [
              C.aquaLight,
              C.aqua,
              C.navy,
              C.timberLight,
              C.timber,
              C.green,
            ],
            borderRadius: 3,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.parsed.x} prospects/partners (24-mo cumulative)`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: { color: C.creamDeep },
            ticks: { font: { size: 11 } },
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '600' }, color: C.navyDeep },
          },
        },
      },
    })
  }

  // ============================================================
  // Chart 3 — Cumulative active partners over time
  // ============================================================
  // 18 by end of Y1 (12 months), 30 by end of Y2 (24 months) — concentration strategy
  // Y1 values mirror Module 2 monthly ramp table for cross-document consistency
  const partnersCumulative = [
    // Y1 — Module 2 ramp: Jun26 1, Jul26 3, Aug26 5, Sep26 7, Oct26 9, Nov26 10,
    //                     Dec26 11, Jan27 12, Feb27 14, Mar27 15, Apr27 17, May27 18
    1, 3, 5, 7, 9, 10,
    11, 12, 14, 15, 17, 18,
    // Y2 — slower add (focus shifts to depth per partner), 12 new partners in 12 months
    19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30,
  ]

  const ctxPartners = document.getElementById('chart-partners')
  if (ctxPartners) {
    new Chart(ctxPartners, {
      type: 'line',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: 'Active partners (cumulative)',
            data: partnersCumulative,
            borderColor: C.timber,
            backgroundColor: 'rgba(184, 116, 61, 0.12)',
            borderWidth: 3,
            fill: true,
            tension: 0.32,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: C.timber,
            pointHoverBorderColor: C.cream,
            pointHoverBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.parsed.y} active partners`,
            },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 60, minRotation: 60 } },
          y: {
            beginAtZero: true,
            grid: { color: C.creamDeep },
            ticks: { stepSize: 5, font: { size: 11 } },
            title: { display: true, text: 'Active partners', font: { size: 11, weight: '600' }, color: C.grey },
          },
        },
      },
    })
  }

  // ============================================================
  // Chart 4 — GPM blended + by product line over time
  // ============================================================
  // Blended GPM: 25% → 32% → 34%
  // Termite: 35% → 38% (margin engine)
  // Pool decks: 28% → 32% (volume base)
  // Unit renos: 18% → 22% (filler)
  const gpmBlended = [25, 25.5, 26, 26.5, 27, 28, 29, 30, 30.5, 31, 31.5, 32, 32.2, 32.4, 32.7, 33.0, 33.2, 33.4, 33.5, 33.6, 33.7, 33.8, 33.9, 34.0]
  const gpmTermite = [35, 35.2, 35.5, 35.7, 36, 36.2, 36.5, 36.7, 37, 37.2, 37.5, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38]
  const gpmPool = [28, 28.3, 28.6, 29, 29.3, 29.6, 30, 30.3, 30.6, 31, 31.3, 31.6, 31.8, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32]
  const gpmUnits = [18, 18.2, 18.5, 18.8, 19, 19.3, 19.6, 20, 20.2, 20.5, 20.8, 21, 21.2, 21.4, 21.6, 21.8, 22, 22, 22, 22, 22, 22, 22, 22]

  const ctxGpm = document.getElementById('chart-gpm')
  if (ctxGpm) {
    new Chart(ctxGpm, {
      type: 'line',
      data: {
        labels: monthLabels,
        datasets: [
          {
            label: 'Termite Repair',
            data: gpmTermite,
            borderColor: C.timber,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
          },
          {
            label: 'Pool Decks',
            data: gpmPool,
            borderColor: C.aqua,
            backgroundColor: 'transparent',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
          },
          {
            label: 'Unit Renovations',
            data: gpmUnits,
            borderColor: C.amber,
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderDash: [5, 4],
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 5,
          },
          {
            label: 'Blended (target)',
            data: gpmBlended,
            borderColor: C.navyDeep,
            backgroundColor: 'rgba(15, 33, 56, 0.06)',
            borderWidth: 3,
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: { boxWidth: 10, font: { size: 11 } },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)}%`,
            },
          },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 }, maxRotation: 60, minRotation: 60 } },
          y: {
            min: 15,
            max: 42,
            grid: { color: C.creamDeep },
            ticks: { callback: (v) => v + '%', font: { size: 11 } },
            title: { display: true, text: 'Gross Profit Margin', font: { size: 11, weight: '600' }, color: C.grey },
          },
        },
      },
    })
  }

  // ============================================================
  // Chart 5 — Y2 mix (product line + region) — combined doughnut
  // ============================================================
  const ctxMix = document.getElementById('chart-mix')
  if (ctxMix) {
    new Chart(ctxMix, {
      type: 'doughnut',
      data: {
        labels: [
          'Termite Repair — Brisbane',
          'Termite Repair — Gold Coast',
          'Termite Repair — Sunshine Coast',
          'Pool Decks — Brisbane',
          'Pool Decks — Gold Coast',
          'Pool Decks — Sunshine Coast',
          'Unit Renos — Brisbane',
          'Unit Renos — Gold Coast',
          'Unit Renos — Sunshine Coast',
        ],
        datasets: [
          {
            // 3×3 product × region matrix, sourced directly from Module 2 regional table.
            // Values are % of $10M total Y2 booked revenue (NOT a uniform regional weighting —
            // each product line has its own demand-driven regional concentration).
            //   Termite ($5.5M):  Brisbane $2.75M (27.5%) · GC $1.10M (11.0%) · SC $1.65M (16.5%)
            //   Pool   ($3.0M):  Brisbane $0.90M  (9.0%) · GC $1.20M (12.0%) · SC $0.90M  (9.0%)
            //   Renos  ($1.5M):  Brisbane $0.75M  (7.5%) · GC $0.45M  (4.5%) · SC $0.30M  (3.0%)
            data: [27.5, 11.0, 16.5, 9.0, 12.0, 9.0, 7.5, 4.5, 3.0],
            backgroundColor: [
              C.timber, C.timberLight, '#E5B189',
              C.navy, '#2D5A85', '#5C84AC',
              C.aqua, C.aquaLight, '#B8E2E8',
            ],
            borderColor: C.cream,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '52%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 12,
              padding: 8,
              font: { size: 11 },
              generateLabels: (chart) => {
                const data = chart.data
                return data.labels.map((label, i) => ({
                  text: `${label} — ${data.datasets[0].data[i].toFixed(1)}%`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].backgroundColor[i],
                  pointStyle: 'rect',
                  hidden: false,
                  index: i,
                }))
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.label}: ${ctx.parsed.toFixed(1)}% of $10M ($${(ctx.parsed * 100).toFixed(0)}K)`,
            },
          },
        },
      },
    })
  }

  console.log('[dashboard] CoSai CFO design brief — 5 illustrative charts rendered.')
})()
