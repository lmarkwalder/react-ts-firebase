import React from 'react';
import * as S from './Styles';
import {useTranslation} from 'react-i18next';


interface TemplateProps {
    prop?: string,
}

export const Template = ({prop='prop'}: TemplateProps) => {
    const {t, i18n} = useTranslation();
    const changeLanguage = (lng: 'de'|'en') => {
        i18n.changeLanguage(lng);
    };

    const langIsEn = i18n.language === 'en';
    return (
        <S.Template>
            {t('Hello World')}
            {
                langIsEn ?
                    <button onClick={() => changeLanguage('de')}>DE</button> :
                    <button onClick={() => changeLanguage('en')}>EN</button>
            }
        </S.Template>
    );
};
