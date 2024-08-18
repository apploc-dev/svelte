import { writable } from 'svelte/store';

export type LocalizationData = {
    [code: string]: {
        [key: string]: string;
    };
};

export const localizations = writable<LocalizationData>({ "EN": {} });

export function loadLocalizations(data: LocalizationData) {
    localizations.set(data);
}

export const currentLocalization = writable<string>('EN');

export function setLocalization(code: string) {
    currentLocalization.set(code);
}