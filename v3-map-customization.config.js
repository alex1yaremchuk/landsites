// Yandex Maps API v3 base map customization for v3.html
// Goal: make toponyms less prominent and roads more prominent.
window.v3MapCustomization = [
    // Global desaturation/dim for all map geometry.
    // This is more stable for v3 vector rendering than CSS filters/overlays.
    {
        elements: "geometry",
        stylers: [
            { saturation: -1 },
            { lightness: -0.08 },
            { opacity: 0.9 }
        ]
    },

    // Toponyms/labels: reduce contrast and prominence.
    {
        elements: "label.text.fill",
        stylers: [
            { color: "#6f7785" },
            { opacity: 0.55 },
            { saturation: -0.35 },
            { lightness: 0.1 }
        ]
    },
    {
        elements: "label.text.outline",
        stylers: [
            { color: "#ffffff" },
            { opacity: 0.2 }
        ]
    },
    {
        elements: "label.icon",
        stylers: [
            { opacity: 0.55 }
        ]
    },
    // Hide all road labels (street names and road shields).
    // This suppresses labels like "Луговая ул." even when they are in higher road classes.
    {
        tags: { any: ["road"] },
        elements: "label.text",
        stylers: [
            { visibility: "off" }
        ]
    },
    {
        tags: { any: ["road"] },
        elements: "label.icon",
        stylers: [
            { visibility: "off" }
        ]
    },

    // Roads: stronger contrast and higher visibility.
    {
        tags: { any: ["road"] },
        elements: "geometry",
        stylers: [
            { color: "#d1d5db" },
            { saturation: -1 },
            { lightness: 0.02 },
            { opacity: 0.95 }
        ]
    },
    {
        tags: { any: ["road"] },
        elements: "geometry.outline",
        stylers: [
            { color: "#8b95a5" },
            { opacity: 0.85 }
        ]
    },

    // Major roads: subtle highlight.
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "geometry",
        stylers: [
            { color: "#b9c0cc" },
            { saturation: -1 },
            { lightness: 0.04 }
        ]
    },
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "geometry.outline",
        stylers: [
            { color: "#6b7280" },
            { opacity: 0.9 }
        ]
    }
];
