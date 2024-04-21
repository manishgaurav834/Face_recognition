import streamlit as st
import pandas as pd
import pickle
import numpy as np
from skimage.transform import resize
from skimage.feature import hog
from PIL import Image
from skimage.io import imread
 
model=pickle.load(open("model(1).pkl","rb"))
st.header(" Face Recognition on LFW Dataset")

file= st.file_uploader("Upload Image here")

if(file):
    def compute_hog(img):
  #resizing image
         resized_img = resize(img, (128*4, 64*4))
  #creating hog features
         fd, hog_image = hog(resized_img, orientations=9, pixels_per_cell=(8, 8),
                    cells_per_block=(2, 2), visualize=True, channel_axis=-1)
         return fd


    X_in=[]
    image = Image.open(file)
    st.image(image)
    
    
 

    if(st.button("Predict")):
    
         image = imread(file)
         hog_feature = compute_hog(image)
         hog_feature = hog_feature.flatten()
         X_in.append(hog_feature)
         X_in=np.array(X_in)

         prediction = model.predict(X_in)

         st.success(prediction[0])
         
else:
    st.markdown(" ## No file uploaded")