import { useTranslation } from 'react-i18next';

export const useTranslate = (fileTranslateWithoutExtension) => {

    const [translate, useTranslate] = useTranslation('global');

    const es = () => {
        useTranslate.changeLanguage( 'es' );
    }
    const en = () => {
        useTranslate.changeLanguage('en');
    }

    return {  
        translate,
        es,
        en
    }
}