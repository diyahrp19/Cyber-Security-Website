// an array of services
const PricingData = [
    {
        id: 1,
        plan_name: "Basic Plan",
        plan_details: "Essential security individuals.",
        price: "3,999",
        time: "MONTHLY",
        link: "",
        features: [
            "Real-time threat detection",
            "Basic firewall protection",
            "Automated security updates",
            "Standard email support",
            "Security reports access"
        ]
    },
    {
        id: 2,
        plan_name: "Standard Plan",
        plan_details: "Enhanced security for growing businesses.",
        price: "7,999",
        time: "MONTHLY",
        link: "",
        features: [
            "All Basic features included",
            "Advanced firewall & detection",
            "AI-powered malware scanning",
            "Priority email & chat support",
            "Cloud backup integration"
        ]
    },
    {
        id: 3,
        plan_name: "Premium Plan",
        plan_details: "Complete protection for large enterprises.",
        price: "14,999",
        time: "MONTHLY",
        link: "",
        features: [
            "All Standard features included",
            "Dedicated security expert",
            "24/7 chat, phone, and email",
            "Custom security setup",
            "Incident response support"
        ]
    }
];

const container = document.getElementById('pricing-container');
PricingData.forEach(({ id, features, link, plan_details, plan_name, price, time }) => {
    // for each card div is created
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 mb-4';
    // S{} js to html
    // convert to li
    card.innerHTML = `
        <div class="single-pricing-card">
            <h3>${plan_name}</h3>
            <p>${plan_details}</p>
            <h1>₹${price} <sub>/ ${time}</sub></h1>
            <ul>
                ${features.map(feature => `
                    <li>
                        <i class="ri-check-double-fill"></i> ${feature}         
                    </li>`).join('')}
            </ul>
            <a class="demo text-decoration-none" href="${link}">
                <i class="ri-arrow-right-line"></i> Get Started Today
            </a>
        </div>
    `;
    // pricing container into div 
    container.appendChild(card);
});
