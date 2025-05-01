const dataStore = {
    // Hero Section
    hero: {
        title: "Power Your Future with <span class='text-[#00f5d4]'>Cascadex</span>",
        description: "Cascadex delivers cutting-edge AI agents and automation tools to revolutionize workflows, enhance productivity, and ignite innovation."
    },

    // Features Section
    features: [
        {
            title: "AI-Powered Agents",
            description: "Intelligent agents that evolve to optimize your processes.",
            details: [
                "Self-learning algorithms",
                "Real-time optimization",
                "Customizable workflows"
            ]
        },
        {
            title: "Seamless Integration",
            description: "Sync effortlessly with your existing tech stack.",
            details: [
                "Supports REST & GraphQL",
                "One-click app connectors",
                "Webhook & API support"
            ]
        },
        {
            title: "Real-Time Analytics",
            description: "Actionable insights with live data tracking.",
            details: [
                "Live dashboard updates",
                "Anomaly detection",
                "Predictive trend modeling"
            ]
        }
    ],

    // Features Comparison Section
    comparison: [
        {
            feature: "Self-Learning AI Agents",
            cascadex: "check",
            chatgpt: "partial",
            zapier: "cross"
        },
        {
            feature: "Customizable Workflows",
            cascadex: "check",
            chatgpt: "cross",
            zapier: "check"
        },
        {
            feature: "Multimodal Capabilities",
            cascadex: "partial",
            chatgpt: "check",
            zapier: "cross"
        },
        {
            feature: "Seamless Integrations",
            cascadex: "check",
            chatgpt: "partial",
            zapier: "check"
        },
        {
            feature: "Real-Time Analytics",
            cascadex: "check",
            chatgpt: "cross",
            zapier: "partial"
        },
        {
            feature: "24/7 Support",
            cascadex: "check",
            chatgpt: "partial",
            zapier: "check"
        }
    ],

    // Logo Carousel
    logos: [
        {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/512px-OpenAI_Logo.svg.png",
            alt: "OpenAI"
        },
        {
            id: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
            alt: "Google Cloud"
        },
        {
            id: 3,
            url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            alt: "Amazon Web Services"
        },
        {
            id: 4,
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
            alt: "Microsoft Azure"
        },
        {
            id: 5,
            url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            alt: "IBM Cloud"
        }
    ],

    // Lottie Animation
    lottie: {
        heroAnimation: "https://lottie.host/768897f0-c0bb-4685-a1d8-ca81a0583eb0/cr01V4mBY2.lottie"
    },

    // SVG Icons
    icons: {
        globalReach: `
            <svg class="w-12 h-12 mx-auto mb-4 text-[#00f5d4]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"></path>
            </svg>`,
        communityHub: `
            <svg class="w-12 h-12 mx-auto mb-4 text-[#00f5d4]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
            </svg>`,
        customWorkflows: `
            <svg class="w-12 h-12 mx-auto mb-4 text-[#00f5d4]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"></path>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
            </svg>`,
        eliteSupport: `
            <svg class="w-12 h-12 mx-auto mb-4 text-[#00f5d4]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 0 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </svg>`,
        testimonialQuote: `
            <svg class="w-12 h-12 mb-4 text-[#00f5d4]" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
            </svg>`
    }
};

// Export data for use in other scripts
export default dataStore;