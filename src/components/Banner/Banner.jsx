import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation();
  const prueba= window.location.pathname === '/' 
  console.log(prueba)
  return (
    <>
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block h-80 bg-gray-300 bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
            <div className="h-80 md:h-auto bg-blue-700 text-white flex flex-col justify-center p-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('banner.title')}</h1>
                <p className="text-lg md:text-xl lg:text-2xl">{t('banner.subtitle')}</p>
                <a href="/" className="mt-6 bg-white text-blue-700 hover:bg-blue-700 hover:text-white py-2 px-6 rounded-lg transition-colors duration-300">{t('banner.message')}</a>
            </div>            
        </div>
    </div>
    </>
  )
}
