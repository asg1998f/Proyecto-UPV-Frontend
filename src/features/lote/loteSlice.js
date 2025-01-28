import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loteService from "./loteService";

const initialState = {
  lotes: [],
};

export const getAllLotes = createAsyncThunk("lotes/getAll", async () => {
  try {
    return await loteService.getAllLotes();
  } catch (error) {
    console.error(error);
  }
});
export const getAllSubcarpetas = createAsyncThunk(
  "subcarpetas/getAll",
  async () => {
    try {
      return await loteService.getAllSubcarpetas();
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllSubcarpetasInternas = createAsyncThunk(
    "subcarpetasInternas/getAll",
    async () => {
        try {
            return await loteService.getAllSubcarpetasInternas();
        } catch (error) {
            console.error(error);
        }
    }
);
export const getAllFotos = createAsyncThunk(
  "fotos/getAll",
  async () => {
    try {
      return await loteService.getAllFotos();
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllHistoriales = createAsyncThunk(
  "historiales/getAll",
  async () => {
    try {
      return await loteService.getAllHistoriales();
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllFases = createAsyncThunk(
  "fases/getAll",
  async () => {
    try {
      return await loteService.getAllFases();
    } catch (error) {
      console.error(error);
    }
  }
);
export const getAllTipos = createAsyncThunk(
  "tipos/getAll",
  async () => {
    try {
      return await loteService.getAllTipos();
    } catch (error) {
      console.error(error);
    }
  }
);

export const getLoteById = createAsyncThunk("lotes/getById", async (id) => {
  try {
    return await loteService.getLoteById(id);
  } catch (error) {
    console.error(error);
  }
});
export const getSubcarpetaById = createAsyncThunk(
  "subcarpetas/getById",
  async (id) => {
    try {
      return await loteService.getSubcarpetaById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getSubcarpetaInternaById = createAsyncThunk(
  "subcarpetasInternas/getById",
  async (id) => {
    try {
      return await loteService.getSubcarpetaInternaById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getFotoById = createAsyncThunk(
  "fotos/getById",
  async (id) => {
    try {
      return await loteService.getFotoById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getFaseById = createAsyncThunk(
  "fases/getById",
  async (id) => {
    try {
      return await loteService.getFaseById(id);
    } catch (error) {
      console.error(error);
    }
  }
);
export const getTipoById = createAsyncThunk(
  "tipos/getById",
  async (id) => {
    try {
      return await loteService.getTipoById(id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const getLast = createAsyncThunk("lotes/getLast", async () => {
  try {
    return await loteService.getLast();
  } catch (error) {
    console.error(error);
  }
});

export const getByNregistro = createAsyncThunk(
  "lotes/getByNregistro",
  async (nRegistro) => {
    try {
      return await loteService.getByNregistro(nRegistro);
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateLote = createAsyncThunk("lotes/update", async (id, lote) => {
  try {
    return await loteService.updateLote(id, lote);
  } catch (error) {
    console.error(error);
  }
});

export const createSubcarpeta = createAsyncThunk("subcarpetas/create", async (subcarpeta) => {
  try {
    return await loteService.createSubcarpeta(subcarpeta);
  } catch (error) {
    console.error(error);
  }
});
export const createSubcarpetaInterna = createAsyncThunk("subcarpetasInternas/create", async (subcarpetaInterna) => {
  try {
    return await loteService.createSubcarpetaInterna(subcarpetaInterna);
  } catch (error) {
    console.error(error);
  }
});
export const createFoto = createAsyncThunk("fotos/create", async (foto) => {
  try {
    return await loteService.createFoto(foto);
  } catch (error) {
    console.error(error);
  }
});
export const createHistorial = createAsyncThunk("historiales/create", async (historial) => {
  try {
    return await loteService.createHistorial(historial);
  } catch (error) {
    console.error(error);
  }
});
export const createFase = createAsyncThunk("fases/create", async (fase) => {
  try {
    return await loteService.createFase(fase);
  } catch (error) {
    console.error(error);
  }
});
export const createTipo = createAsyncThunk("tipos/create", async (tipo) => {
  try {
    return await loteService.createTipo(tipo);
  } catch (error) {
    console.error(error);
  }
});

export const loteSlice = createSlice({
  name: "lotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLotes.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllSubcarpetas.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllSubcarpetasInternas.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllFotos.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllHistoriales.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllFases.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getAllTipos.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getLoteById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getSubcarpetaById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getSubcarpetaInternaById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getFotoById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getFaseById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getTipoById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getByNregistro.fulfilled, (state, action) => {
      state.lotes = action.payload;
    });
    builder.addCase(getLast.fulfilled, (state, action) => {
        state.ultimoLote = action.payload.lotes;
      });
    builder.addCase(updateLote.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createSubcarpeta.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createSubcarpetaInterna.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createFoto.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createHistorial.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createFase.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
    builder.addCase(createTipo.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.lotes = [...state.lotes, action.payload.lote];
    });
  },
});

export const { reset } = loteSlice.actions;
export default loteSlice.reducer;