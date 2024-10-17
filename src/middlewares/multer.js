// middlewares/multer.js
import multer from "multer";
import path from "path";

// Configuración de almacenamiento de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Archivo recibido para almacenamiento:", file.originalname); // Log adicional
    cb(null, "D:\\Equipo-25\\back\\test\\data\\"); // Carpeta donde se guarda el archivo
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Usamos el nombre original del archivo PDF
  },
});

// Filtro para asegurar que solo se suban archivos PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true); // Solo permitir archivos PDF
  } else {
    cb(new Error("Solo se permiten archivos PDF"), false);
  }
};

// Inicializar Multer con la configuración de almacenamiento y el filtro de archivos
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
