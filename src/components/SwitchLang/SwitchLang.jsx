import { useTranslation } from 'react-i18next';
import usaFlag from '../../assets/images/navbarLogo/flag.svg'
import spainFlag from '../../assets/images/navbarLogo/spain.svg'

export const SwitchLang = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const getIcon = () => {
    const iconEs = (
    <img className='h-3.5 w-3.5 rounded-full me-2' src={usaFlag} alt="us-flag" />
    );

    const iconEn = (
      <img className='h-3.5 w-3.5 rounded-full me-2' src={spainFlag} alt="sp-flag" />
    );
    return i18n.language === 'en' ? iconEn : iconEs;
  };

  return (
<div className="text font-bold">
  <button type="button" onClick={toggleLanguage} className="flex items-center">
    {getIcon()}
    <span className="ml-2">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
  </button>
</div>

  );
};

export default SwitchLang;

