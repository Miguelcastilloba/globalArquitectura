import React, { useState } from 'react';
import './SixthSection.css';

const SixthSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : 'Resultados de mejores prácticas'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Proceso de Diseño del Sistema utilizando Arquitecturas en Capas y Orientada a Objetos</h3>
                        <p className="dropdown-text">
                            El proceso de diseño de un sistema web en React, utilizando una arquitectura en capas y orientada a objetos, sigue un enfoque estructurado para garantizar que el sistema sea modular, escalable y fácil de mantener. Este diseño se despliega en Digital Ocean App Platform, aprovechando su infraestructura escalable y eficiente.
                        </p>
                        <h4 className="dropdown-subtitle-small">1. Capa de Presentación</h4>
                        <p className="dropdown-text">
                            La capa de presentación es responsable de la interfaz de usuario del sistema, implementada utilizando React. Esta capa gestiona toda la interacción con el usuario y es completamente independiente de las demás capas. En esta capa, cada elemento de la interfaz se diseña como un componente React reutilizable, lo que facilita la modularidad y la mantenibilidad. Se aplican principios de diseño orientado a objetos al estructurar estos componentes como clases que encapsulan tanto la presentación como la lógica asociada, como el manejo de eventos y el estado local.
                        </p>
                        <h4 className="dropdown-subtitle-small">2. Capa de Lógica de Negocio</h4>
                        <p className="dropdown-text">
                            La capa de lógica de negocio actúa como el núcleo del sistema, gestionando las reglas de negocio y las operaciones de la aplicación. Aquí, se implementan servicios y controladores que manejan la lógica de la aplicación. Estos servicios están diseñados utilizando principios de orientación a objetos, creando clases que representan entidades del dominio con métodos que encapsulan las operaciones relacionadas. Esta capa se comunica con la capa de presentación a través de APIs bien definidas, asegurando una clara separación de responsabilidades.
                        </p>
                        <h4 className="dropdown-subtitle-small">3. Capa de Acceso a Datos</h4>
                        <p className="dropdown-text">
                            La capa de acceso a datos es responsable de interactuar con las bases de datos y otros servicios de almacenamiento. En un entorno como Digital Ocean, esto podría incluir conexiones a bases de datos gestionadas, como PostgreSQL o MySQL, y el manejo de almacenamiento de archivos mediante espacios de Digital Ocean. Esta capa abstrae los detalles de la persistencia, proporcionando métodos y clases que permiten acceder y manipular los datos de forma segura y eficiente. Las clases de esta capa se encargan de todas las operaciones CRUD y se aseguran de que las interacciones con la base de datos estén optimizadas para el rendimiento.
                        </p>
                        <h4 className="dropdown-subtitle-small">4. Integración y Despliegue en Digital Ocean</h4>
                        <p className="dropdown-text">
                            Una vez diseñadas las capas, el sistema se integra y despliega en Digital Ocean App Platform. Aquí, cada capa se encapsula como un servicio o conjunto de servicios, lo que facilita la escalabilidad y el manejo de cargas de trabajo fluctuantes. La arquitectura en capas permite que cada servicio se escale independientemente según sea necesario, optimizando los recursos y costos. Además, la orientación a objetos asegura que el código sea modular, lo que facilita las actualizaciones y mejoras sin necesidad de modificar grandes partes del sistema.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SixthSection;
