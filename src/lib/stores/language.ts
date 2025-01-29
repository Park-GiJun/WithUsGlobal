import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Language } from '$lib/i18n/types';
import ko from '$lib/i18n/ko';
import en from '$lib/i18n/en';

const translations = { ko, en };

const getInitialLanguage = (): Language => {
    if (!browser) return 'ko';

    const stored = localStorage.getItem('language') as Language;
    if (stored && (stored === 'ko' || stored === 'en')) return stored;

    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'ko' ? 'ko' : 'en';
};

const { subscribe, set, update } = writable<Language>(getInitialLanguage());

const languageStore = {
    subscribe,

    setLanguage: (newLang: Language) => {
        if (browser) {
            localStorage.setItem('language', newLang);
        }
        set(newLang);
    },

    toggle: () => {
        update(currentLang => {
            const newLang = currentLang === 'ko' ? 'en' : 'ko';
            if (browser) {
                localStorage.setItem('language', newLang);
            }
            return newLang;
        });
    }
};

export const t = (key: string, lang: Language = 'ko'): string => {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) || key;
};

export default languageStore;