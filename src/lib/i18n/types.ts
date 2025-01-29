// src/lib/i18n/types.ts
export type Language = 'ko' | 'en';

export type Translations = {
    header: {
        home: string;
        about: string;
        jobs: string;
        seekers: string;
        study: string;
        investment: string;
        contact: {
            tel: string;
            email: string;
        };
    };
    footer: {
        company: string;
        address: string;
        copyright: string;
        sections: {
            company: string;
            services: string;
            contact: string;
        };
        links: {
            privacy: string;
            terms: string;
        };
    };
};