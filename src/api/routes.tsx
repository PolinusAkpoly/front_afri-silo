export const routes = [
    {
        path: "/home",
        name: "Accueil"
    },
    {
        path: "/about-us",
        name: "A Propos"
    },
    {
        path: "/services",
        name: "Nos Services"
    },
    // {
    //     path: "/products",
    //     name: "Nos Products"
    // },
    {
        path: "/contact",
        name: "Contact"
    },
]
export const footerRoutes = [
    // {
    //     path: "/plan-vol",
    //     name: "Plan de Vols"
    // },
    // {
    //     path: "/inssurance",
    //     name: "Nos assurances"
    // },
    // {
    //     path: "/about-us",
    //     name: "A Propos"
    // },
    // {
    //     path: "/conditions-generales-de-vente",
    //     name: "Conditions générales de ventes"
    // },
    {
        target: null,
        path: "/mentions-legales",
        name: "Mentions légales"
    },
    {
        target: "_blank",
        path: "https://pay-pro.monetico.fr/afctoursvoyage/paiement",
        name: "Paiement"
    },
    {
        target: "_blank",
        path: "https://www.google.com/search?q=afc-tours&rlz=1C1CHBF_frFR855FR861&oq=afc-tours&aqs=chrome..69i57j69i60l4.6278j0j9&sourceid=chrome&ie=UTF-8#lrd=0x47e8a3d907259b8f:0x745bb31360d10189,3,,,",
        name: "Avis clients"
    },
    {
        target: "_blank",
        path: "https://g.page/afc-tours/review",
        name: "Laissez un avis"
    },
    // {
    //     path: "/politique-de-confidentialite",
    //     name: "Politique de confidentialité"
    // },
]