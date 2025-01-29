import React, { useState } from 'react';
import FlechaNavigate from '../FlechaNavigate/FlechaNavigate';
import { Button, Form, Select } from 'antd';
import fotoalmacen from "../../assets/iconos/IconoAlmacenA.png";
import "./AnadirUbicacion.scss";

const AnadirUbicacion = () => {
    const [formData, setFormData] = useState({
        congelador: "",
        armario: "",
        restauracion: "",
        album: "",
        fotosenmarcadas: "",
        negativos: "",
        conjuntofotografico: "",
        otros: "",
    });

    const [showForm, setShowForm] = useState(false); // Estado para mostrar u ocultar el formulario

    // Maneja el cambio en los radio buttons
    const handleRadioChange = (e) => {
        const { name, value } = e.target;

        // Actualiza el estado según el valor del radio button
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));

        // Si el valor es "congelador" o "armario", mostramos el formulario
        if (value === "congelador" || value === "armario") {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    };

    // Maneja los cambios en los inputs numéricos y de texto
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Actualiza el estado de los inputs en formData
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función que maneja el envío del formulario
    const onSubmit = () => {
        if (!formData.album && !formData.fotosenmarcadas && !formData.negativos && !formData.conjuntofotografico && !formData.otros) {
            alert("Por favor, complete al menos un campo del formulario.");
            return;
        }

        // Simular envío de datos
        console.log("Datos enviados:", formData);

        alert("Formulario enviado con éxito.");
    };

    const {
        album,
        fotosenmarcadas,
        negativos,
        conjuntofotografico,
        otros,
    } = formData;

    return (
        <div className='container-almacen-anadir'>
            <div className='zona-1'>
                <div className='flecha-navigate'>
                    <FlechaNavigate />
                </div>
                <div className='logo-anadir'>
                    <div className='titulo-anadir-almacen'>
                        <img src={fotoalmacen} alt="Foto Almacén" />
                        <p className='titulo-almacen-estilo'>Almacén</p>
                    </div>
                    <div className='lote-contenido'>
                        <h1 className='lote-anadir'>
                            0012-FT
                        </h1>
                        <p className='contenido-clase'>Contenido</p>
                    </div>
                </div>
            </div>

            <div className='zona-2'>
                <div className='titulo-anadir-ubicacion'>Añadir ubicación</div>

                {/* Radio Button para Congelador */}
                <div className='congelador-inforegistro'>
                    <div className='container-checkbox'>
                        <input
                            type='radio'
                            className='checkbox'
                            name='ubicacion'
                            value="congelador"
                            onChange={handleRadioChange}
                        />
                    </div>
                    <div className='dropdown-congelador'>
                        <Form.Item>
                            <Select className='input-congelador' placeholder="Congelador">
                                <Select.Option value="congelador1">Congelador 1</Select.Option>
                                <Select.Option value="congelador2">Congelador 2</Select.Option>
                                <Select.Option value="congelador3">Congelador 3</Select.Option>
                                <Select.Option value="congelador4">Congelador 4</Select.Option>
                                <Select.Option value="congelador5">Congelador 5</Select.Option>
                                <Select.Option value="congelador6">Congelador 6</Select.Option>
                                <Select.Option value="congelador7">Congelador 7</Select.Option>
                                <Select.Option value="nevera1">Nevera 1</Select.Option>
                                <Select.Option value="nevera2">Nevera 2</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                {/* Radio Button para Armario */}
                <div className='anadir-checkbox-1'>
                    <div className='container-checkbox'>
                        <input
                            type='radio'
                            className='checkbox'
                            name='ubicacion'
                            value="armario"
                            onChange={handleRadioChange}
                        />
                    </div>
                    <div className='dropdown-armario'>
                        <Form.Item>
                            <Select className='input-armario' placeholder="Armario">
                                <Select.Option value="armario1">Armario 1</Select.Option>
                                <Select.Option value="armario2">Armario 2</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                {/* Radio Button para Restauración */}
                <div className='restauracion-checkbox'>
                    <div>
                        <input
                            type='radio'
                            className='checkbox'
                            name='ubicacion'
                            value="restauracion"
                            onChange={handleRadioChange}
                        />
                    </div>
                    <label className='texto-chbox-restauracion'>Pasa directamente a restauración</label>
                </div>
            </div>

            {/* Formulario que se muestra solo si se ha seleccionado Congelador o Armario */}
            {showForm && (
                <div className='sector-3-anadir'>
                    <h2 className='queserecoge'>¿Qué es lo que se recoge?</h2>
                    <div className='inputs-numericos'>
                        <div className='album'>
                            <input
                                className='input-recoge'
                                type="number"
                                name="album"
                                value={album}
                                onChange={handleInputChange}
                            />
                            <label className='album-propietario'>Album(es)</label>
                        </div>
                        <div className='album'>
                            <input
                                className='input-recoge'
                                type="number"
                                name="fotosenmarcadas"
                                value={fotosenmarcadas}
                                onChange={handleInputChange}
                            />
                            <label className='album-propietario'>Fotos enmarcadas</label>
                        </div>
                        <div className='album'>
                            <input
                                className='input-recoge'
                                type="number"
                                name="negativos"
                                value={negativos}
                                onChange={handleInputChange}
                            />
                            <label className='album-propietario'>Negativos</label>
                        </div>
                        <div className='album'>
                            <input
                                className='input-recoge'
                                type="number"
                                name="conjuntofotografico"
                                value={conjuntofotografico}
                                onChange={handleInputChange}
                            />
                            <label className='album-propietario'>Conjunto fotográfico</label>
                        </div>
                    </div>
                    <div className='otros'>
                        <label className="recoge-otros">Otros</label>
                        <input
                            className='input-otros'
                            type="text"
                            name="otros"
                            value={otros}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            )}
            <div className='btn-anadir-algo'>
                <Button className='btn' type="primary" shape="round" onClick={onSubmit}>
                    <p className='login'>Validar</p>
                </Button>
            </div>
        </div>
    );
};

export default AnadirUbicacion;



