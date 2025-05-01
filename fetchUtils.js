import dataStore from './dataStore.js';

const fetchUtils = {
    // Simulate fetching data from dataStore (mimicking an API call)
    async fetchContent(section) {
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 100));
            return dataStore[section] || null;
        } catch (error) {
            console.error(`Error fetching ${section}:`, error);
            return null;
        }
    },

    // Update DOM with content
    updateDOM(selector, content) {
        const element = document.querySelector(selector);
        if (element && content) {
            element.innerHTML = content;
        }
    },

    // Load and render logo carousel
    async loadLogoCarousel() {
        const logos = await this.fetchContent('logos');
        const carouselTrack = document.querySelector('.carousel-track');
        
        if (carouselTrack && logos?.length) {
            carouselTrack.innerHTML = '';
            const logoHTML = logos.map(logo => `
                <img src="${logo.url}" alt="${logo.alt}" 
                     class="h-12 grayscale hover:grayscale-0 transition duration-300" />
            `).join('');
            // Repeat logos 3 times for seamless scrolling
            carouselTrack.innerHTML = logoHTML.repeat(3);
        }
    },

    // Load and render Lottie animation
    async loadLottieAnimation() {
        const lottieData = await this.fetchContent('lottie');
        const lottiePlayer = document.querySelector('dotlottie-player');
        
        if (lottiePlayer && lottieData?.heroAnimation) {
            lottiePlayer.setAttribute('src', lottieData.heroAnimation);
        }
    },

    // Load and render SVG icons
    async loadIcons() {
        const icons = await this.fetchContent('icons');
        if (icons) {
            // Hero section cards
            this.updateDOM('#global-reach-icon', icons.globalReach);
            this.updateDOM('#community-hub-icon', icons.communityHub);
            this.updateDOM('#custom-workflows-icon', icons.customWorkflows);
            this.updateDOM('#elite-support-icon', icons.eliteSupport);
            
            // Testimonials
            document.querySelectorAll('.testimonial-icon').forEach(element => {
                element.innerHTML = icons.testimonialQuote;
            });
        }
    },

    // Load and render comparison table
    async loadComparisonTable() {
        const comparisonData = await this.fetchContent('comparison');
        const tableBody = document.querySelector('#comparison-table-body');
        
        if (tableBody && comparisonData?.length) {
            tableBody.innerHTML = comparisonData.map(row => `
                <tr>
                    <td class="p-4 feature">${row.feature}</td>
                    <td class="p-4 ${row.cascadex}"></td>
                    <td class="p-4 ${row.chatgpt}"></td>
                    <td class="p-4 ${row.zapier}"></td>
                </tr>
            `).join('');
        }
    },

    // Initialize content loading
    async init() {
        // Hero section
        const hero = await this.fetchContent('hero');
        if (hero) {
            this.updateDOM('.section-title', hero.title);
            this.updateDOM('.hero-description', hero.description);
        }

        // Features section
        const features = await this.fetchContent('features');
        if (features) {
            features.forEach((feature, index) => {
                const card = document.querySelector(`.feature-card-${index}`);
                if (card) {
                    this.updateDOM(`.feature-card-${index} .title`, feature.title);
                    this.updateDOM(`.feature-card-${index} .description`, feature.description);
                    if (feature.details) {
                        const ul = card.querySelector('ul');
                        if (ul) {
                            ul.innerHTML = feature.details.map(item => `<li class="flex items-center"><span class="w-2 h-2 bg-[#00f5d4] rounded-full mr-2"></span>${item}</li>`).join('');
                        }
                    }
                    if (feature.moreText) {
                        this.updateDOM(`.feature-card-${index} #more-text`, feature.moreText);
                    }
                }
            });
        }

        // Load logos, Lottie, icons, and comparison table
        await Promise.all([
            this.loadLogoCarousel(),
            this.loadLottieAnimation(),
            this.loadIcons(),
            this.loadComparisonTable()
        ]);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => fetchUtils.init());