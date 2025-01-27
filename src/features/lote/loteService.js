import axios from "axios";

const API_LOTES = "http://localhost:8080/lotes";
const API_SUBCARPETAS = "http://localhost:8080/subcarpetas";
const API_SUBCARPETASINTERNAS = "http://localhost:8080/subcarpetainternas";
const API_FOTOS = "http://localhost:8080/fotos";
const API_HISTORIAL = "http://localhost:8080/historiales";
const API_FASES = "http://localhost:8080/fases";
const API_TIPOS = "http://localhost:8080/tipos";

const getAllLotes = async () => {
  const res = await axios.get(API_LOTES + "/");
  return res.data;
};
const getAllSubcarpetas = async () => {
  const res = await axios.get(API_SUBCARPETAS + "/");
  return res.data;
};
const getAllSubcarpetasInternas = async () => {
  const res = await axios.get(API_SUBCARPETASINTERNAS + "/");
  return res.data;
};
const getAllFotos = async () => {
  const res = await axios.get(API_FOTOS + "/");
  return res.data;
};
const getAllHistoriales = async () => {
  const res = await axios.get(API_HISTORIAL + "/");
  return res.data;
};
const getAllFases = async () => {
  const res = await axios.get(API_FASES + "/");
  return res.data;
};
const getAllTipos = async () => {
  const res = await axios.get(API_TIPOS + "/");
  return res.data;
};

const getLoteById = async (id) => {
  const res = await axios.get(API_LOTES + "/id/" + id);
  return res.data;
};
const getSubcarpetaById = async (id) => {
  const res = await axios.get(API_SUBCARPETAS + "/id/" + id);
  return res.data;
};
const getSubcarpetaInternaById = async (id) => {
  const res = await axios.get(API_SUBCARPETASINTERNAS + "/id/" + id);
  return res.data;
};
const getFotoById = async (id) => {
  const res = await axios.get(API_FOTOS + "/id/" + id);
  return res.data;
};
const getFaseById = async (id) => {
  const res = await axios.get(API_FASES + "/id/" + id);
  return res.data;
};
const getTipoById = async (id) => {
  const res = await axios.get(API_TIPOS + "/id/" + id);
  return res.data;
};

const getLast = async () => {
  const res = await axios.get(API_LOTES + "/getLast");
  return res.data;
};

const getByNregistro = async (nRegistro) => {
  const res = await axios.get(API_LOTES + "/getByNregistro/" + nRegistro);
  return res.data;
};

const createLote = async (lote) => {
  const res = await axios.post(API_LOTES + "/create", lote);
  return res.data; //payload
};
const createSubcarpeta = async (subCarpeta) => {
  const res = await axios.post(API_SUBCARPETAS + "/create", subCarpeta);
  return res.data; //payload
};
const createSubcarpetaInterna = async (subCarpetaInterna) => {
  const res = await axios.post(API_SUBCARPETASINTERNAS + "/create", subCarpetaInterna);
  return res.data; //payload
};
const createFoto = async (foto) => {
  const res = await axios.post(API_FOTOS + "/create", foto);
  return res.data; //payload
};
const createHistorial = async (historial) => {
  const res = await axios.post(API_HISTORIAL + "/create", historial);
  return res.data; //payload
};
const createFase = async (fase) => {
  const res = await axios.post(API_FASES + "/create", fase);
  return res.data; //payload
};
const createTipo = async (fase) => {
  const res = await axios.post(API_TIPOS + "/create", fase);
  return res.data; //payload
};

const loteService = {
  getAllLotes,
  getAllSubcarpetas,
  getAllSubcarpetasInternas,
  getAllFotos,
  getAllHistoriales,
  getAllFases,
  getAllTipos,
  getLoteById,
  getSubcarpetaById,
  getSubcarpetaInternaById,
  getFotoById,
  getFaseById,
  getTipoById,
  getLast,
  getByNregistro,
  createLote,
  createSubcarpeta,
  createSubcarpetaInterna,
  createFoto,
  createHistorial,
  createFase,
  createTipo
};

export default loteService;
