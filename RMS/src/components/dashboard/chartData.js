// --- Chart Data & Configs ---
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 1. Monthly Income Chart Config
export const monthlyIncomeConfig = {
    type: 'line',
    data: {
        labels: monthLabels,
        datasets: [{
            label: 'Monthly Income ($)',
            data: [12000, 15500, 14000, 18000, 20500, 16000, 17000, 19000, 21000, 22000, 18500, 23000],
            borderColor: '#10b981', // Your accent-color
            backgroundColor: '#10b98140', // 25% opacity
            tension: 0.4,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } }
        }
    }
};

// 2. New Tenant Registrations Chart Config
export const newTenantConfig = {
    type: 'bar',
    data: {
        labels: monthLabels,
        datasets: [{ 
            label: 'New Tenants', 
            data: [2, 3, 1, 4, 5, 3, 4, 2, 3, 6, 4, 5], 
            backgroundColor: '#3b82f6', // Your primary-light color
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } }
        }
    }
};

// 3. Property Availability Chart Config
export const propertyAvailabilityConfig = {
    type: 'doughnut',
    data: {
        labels: ['Available', 'Rented', 'Maintenance'],
        datasets: [{ 
            data: [5, 20, 3], // Example Data
            backgroundColor: ['#10b981', '#1e3a8a', '#f59e0b'], // accent, primary-dark, warning
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: true, text: 'Property Status Breakdown', font: { size: 14 } },
            legend: { position: 'bottom' }
        }
    }
};

// 4. Occupancy Rate Chart Config
export const occupancyRateConfig = {
    type: 'bar',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Occupancy Rate (%)',
            data: [85, 92, 95, 90], 
            backgroundColor: [
                '#3b82f6',
                '#10b981',
                '#1e3a8a',
                '#f59e0b'
            ],
            borderRadius: 8,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true, max: 100, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { grid: { display: false } }
        }
    }
};