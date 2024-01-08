import {uploadProductsImages} from '../../config/Firebase'

const UpdateImages = () => {
  return (
    <div>
      <input type="file" onChange={e => uploadProductsImages(e.target.files[0])} />
    </div>
  )
}

export default UpdateImages