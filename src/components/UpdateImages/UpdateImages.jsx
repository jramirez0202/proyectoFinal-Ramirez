import { uploadProductsImages } from "../../config/Firebase";
import "../UpdateImages/UpdateImages.css";
import { useTranslation } from "react-i18next";

const UpdateImages = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="containerAdm">
      <div className="center-content">
        <h1>{t("admPanel.updateFile")}</h1>
        <input
          type="file"
          onChange={(e) => uploadProductsImages(e.target.files[0])}
        />
      </div>
    </div>
    </>



  );
};

export default UpdateImages;
