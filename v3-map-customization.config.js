// Yandex Maps API v3 base map customization for v3.html
// Goal: strong grayscale dim for base scheme while keeping custom parcel features vivid.
window.v3MapCustomization = [
    // Global dim/desaturate baseline.
    {
        elements: "geometry",
        stylers: [
            { saturation: -1 },
            { lightness: -0.45 },
            { opacity: 0.88 }
        ]
    },

    // Ground/land/transit tone.
    {
        tags: { any: ["landscape", "admin", "land", "transit"] },
        elements: "geometry",
        stylers: [
            { color: "#525a63" },
            { saturation: -1 },
            { lightness: -0.22 },
            { opacity: 0.9 }
        ]
    },

    // Buildings.
    {
        tags: { any: ["building"] },
        elements: "geometry",
        stylers: [
            { color: "#666f79" },
            { saturation: -1 },
            { lightness: -0.16 },
            { opacity: 0.86 }
        ]
    },

    // Water.
    {
        tags: { any: ["water"] },
        elements: "geometry",
        stylers: [
            { color: "#4b5563" },
            { saturation: -1 },
            { lightness: -0.2 },
            { opacity: 0.9 }
        ]
    },

    // Roads: visible but still dim.
    {
        tags: { any: ["road"] },
        elements: "geometry",
        stylers: [
            { color: "#8b95a3" },
            { saturation: -1 },
            { lightness: -0.12 },
            { opacity: 0.86 }
        ]
    },
    {
        tags: { any: ["road"] },
        elements: "geometry.outline",
        stylers: [
            { color: "#5b6470" },
            { opacity: 0.8 }
        ]
    },

    // Major roads: slightly more contrast than local roads.
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "geometry",
        stylers: [
            { color: "#9ea8b5" },
            { saturation: -1 },
            { lightness: -0.06 },
            { opacity: 0.9 }
        ]
    },
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "geometry.outline",
        stylers: [
            { color: "#687280" },
            { opacity: 0.84 }
        ]
    },

    // Labels/icons muted to keep parcels dominant.
    {
        elements: "label.text.fill",
        stylers: [
            { color: "#c7d0dc" },
            { opacity: 0.34 }
        ]
    },
    {
        elements: "label.text.outline",
        stylers: [
            { opacity: 0.08 }
        ]
    },
    {
        elements: "label.icon",
        stylers: [
            { opacity: 0.25 }
        ]
    },

    // Hide most local road labels (street names and shields).
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

    // Keep labels for major roads/highways (e.g., A-107).
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "label.text",
        stylers: [
            { visibility: "on" },
            { opacity: 0.62 },
            { color: "#d7dee8" }
        ]
    },
    {
        tags: { any: ["road_1", "road_2", "road_3"] },
        elements: "label.icon",
        stylers: [
            { visibility: "on" },
            { opacity: 0.62 }
        ]
    },

    // Force-enable labels specifically for road_2.
    {
        tags: { any: ["road_2"] },
        elements: "label.text",
        stylers: [
            { visibility: "on" },
            { opacity: 1 }
        ]
    },
    {
        tags: { any: ["road_2"] },
        elements: "label.text.fill",
        stylers: [
            { visibility: "on" },
            { opacity: 0.95 },
            { color: "#eef2f7" }
        ]
    },
    {
        tags: { any: ["road_2"] },
        elements: "label.text.outline",
        stylers: [
            { visibility: "on" },
            { opacity: 0.3 }
        ]
    },
    {
        tags: { any: ["road_2"] },
        elements: "label.icon",
        stylers: [
            { visibility: "on" },
            { opacity: 0.95 }
        ]
    }
];
