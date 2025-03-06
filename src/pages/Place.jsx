import React from 'react'
import { useTranslation } from 'react-i18next';

const Place = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='flex justify-center items-center w-full h-[calc(100vh-422px)] flex-col gap-4'>
            <div className="md:text-2xl text-xl  w-full text-center font-semibold">
             📍 {t('place.address')}
            </div>
            <div className="md:text-2xl text-xl w-full text-center font-semibold">
            📞 {t('place.phone')} +998 93 173 84 27
            </div>
        </div>
    )
}

export default Place