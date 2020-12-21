import React, { useState } from 'react'
import { Layout, Container, BoxUpload, ImagePreview } from './style';
import FolderIcon from './assets/folder_icon_transparent.png'
import CloseIcon from './assets/CloseIcon.svg'

function App() {
  const [image, setImage] = useState('')
  const [isUploaded, setIsUploaded] = useState(false)

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()


      reader.onload = function (e) {
        setImage(e.target.result)
        setIsUploaded(true)
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }

  return (
    <Layout>
      <Container>
        <h2>Upload your image</h2>
        <p>Upload with preview 😁</p>

        <BoxUpload>
          <div className="image-upload">
            {
              !isUploaded ? (
                <>
                  <label htmlFor="upload-input">
                    <img src={FolderIcon} draggable={'false'} alt="placeholder" style={{ width: 100, height: 100 }} />
                    <p style={{ color: '#444' }}>
                      Click to upload image
                    </p>
                  </label>

                  <input
                    id="upload-input"
                    type="file"
                    accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                    onChange={handleImageChange}
                  />
                </>
              ) : (
                  <ImagePreview>
                    <img
                      className="close-icon"
                      src={CloseIcon}
                      alt="CloseIcon"
                      onClick={() => {
                        setIsUploaded(false)
                        setImage(null)
                      }}
                    />
                    <img
                      id="uploaded-image"
                      src={image}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  </ImagePreview>
                )
            }
          </div>
        </BoxUpload>

        <h3>
          Source Code:
        </h3>
        <a href="https://github.com/kingaspx/ImagePreview-React" target={'_blank'} style={{marginTop: -10}}>
            Available on <b>Github</b>
        </a>

        <h3>
          By Kingaspx
        </h3>
      </Container>
    </Layout>
  );
}

export default App;
