import multer from 'multer'
import React from 'react'

const upload = multer({storage: multer.diskStorage({})})

export default upload;
