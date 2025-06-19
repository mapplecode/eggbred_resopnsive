let isAdminMode = true;
let currentEditingId = null;
let currentYear = null;
let newsletters = {};
document.addEventListener('DOMContentLoaded', function() {
    loadNewsletters();
    const btn = document.querySelector('.admin-btn');
    if (btn) {
        btn.textContent = 'Exit Admin';
        btn.style.background = 'rgba(220, 53, 69, 0.8)';
    }
});
function initializeDefaultYears() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 4; i++) {
        const year = (currentYear + i).toString();
        if (!newsletters[year]) {
            newsletters[year] = [];
        }
    }
}

async function loadNewsletters() {
    try {
        const response = await fetch('/api/newsletters');
        newsletters = await response.json();
        initializeDefaultYears(); // <-- Ensure default years exist
        renderNewsletters();
    } catch (error) {
        console.error('Error loading newsletters:', error);
        initializeDefaultYears(); // <-- Even in fallback
        renderNewsletters();
    }
}

// Initialize with sample data
function initializeSampleData() {
    newsletters = {
        '2025': [
            { id: 1, month: 'January', day: 15, url: 'https://example.com/jan2025.pdf' },
            { id: 2, month: 'February', day: 14, url: 'https://example.com/feb2025.pdf' },
            { id: 3, month: 'March', day: 10, url: 'https://example.com/mar2025.pdf' }
        ],
    };
}
// Render newsletters
function renderNewsletters() {
    const grid = document.getElementById('newsletterGrid');
    grid.innerHTML = '';
    const years = Object.keys(newsletters).sort((a, b) => a - b); // ✅ ascending order
    years.forEach(year => {
        const yearColumn = createYearColumn(year, newsletters[year]);
        grid.appendChild(yearColumn);
    });
}
// Create year column
function createYearColumn(year, yearNewsletters) {
    const column = document.createElement('div');
    column.className = 'year-column';

    const header = document.createElement('div');
    header.className = 'year-header';
    header.textContent = year;
    // header.onclick = () => toggleYear(year);

    const list = document.createElement('div');
    list.className = 'newsletter-list';
    list.id = `year-${year}`;

    // ✅ ADD THIS LINE to make it visible by default
    list.classList.add('active');

    yearNewsletters.forEach(newsletter => {
        const item = createNewsletterItem(newsletter, year);
        list.appendChild(item);
    });


    column.appendChild(header);
    column.appendChild(list);
    return column;
}

// Create newsletter item
function createNewsletterItem(newsletter, year) {
    const item = document.createElement('div');
    item.className = 'newsletter-item';
    const link = document.createElement('span');
    link.className = 'newsletter-link';
    link.textContent = `${newsletter.month} ${newsletter.day}`;
    link.onclick = () => window.open(newsletter.url, '_blank')
    item.appendChild(link);
    return item;
}
