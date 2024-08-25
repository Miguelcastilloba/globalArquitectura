import React, { useState } from 'react';

const ThirdSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : '3. Diseño del software utilizando metodologías clásicas.'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño de la capa de dominio</h3>
                        <p className="dropdown-text">
                            El diseño de la capa de dominio es fundamental en el desarrollo de software, ya que define los objetos principales y las reglas de negocio que representan la lógica central del sistema. Esta capa actúa como un puente entre la capa de presentación y la capa de datos, asegurando que el comportamiento de la aplicación sea consistente con los requisitos de negocio.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrones Domain Model y Transaction Script</h3>
                        <p className="dropdown-text">
                            El patrón Domain Model organiza la lógica de negocio en un modelo rico de objetos que representan conceptos y procesos del dominio. El patrón Transaction Script, por otro lado, maneja la lógica de negocio mediante scripts que ejecutan transacciones específicas. Ambos patrones ofrecen enfoques diferentes para estructurar la capa de dominio según las necesidades del sistema.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrones de diseño de la capa de dominio</h3>
                        <p className="dropdown-text">
                            Los patrones de diseño de la capa de dominio incluyen técnicas como el uso de repositorios, fábricas y servicios de dominio para gestionar la creación, manipulación y persistencia de objetos de dominio. Estos patrones ayudan a mantener la lógica de negocio organizada y a reducir la complejidad del sistema.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Uso de servicios software</h3>
                        <p className="dropdown-text">
                            Los servicios de software permiten la integración y comunicación entre diferentes capas y sistemas. En el diseño del software, los servicios pueden abstraer operaciones complejas, facilitando su reutilización y asegurando que las funciones clave estén disponibles para diferentes componentes del sistema.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño de la capa de presentación</h3>
                        <p className="dropdown-text">
                            El diseño de la capa de presentación se centra en cómo los usuarios interactúan con el sistema. Esto incluye la creación de interfaces de usuario intuitivas y accesibles que reflejen la lógica de negocio subyacente y proporcionen una experiencia de usuario fluida. Un buen diseño en esta capa es esencial para la adopción y satisfacción del usuario final.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño externo de un sistema software</h3>
                        <p className="dropdown-text">
                            El diseño externo de un sistema de software abarca la estructura general y la interfaz del sistema, incluyendo cómo se comunica con otros sistemas y servicios. Es crucial para asegurar que el sistema sea compatible con otras aplicaciones y que cumpla con los estándares y requisitos del entorno en el que operará.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño interno de la capa de presentación</h3>
                        <p className="dropdown-text">
                            El diseño interno de la capa de presentación implica la organización del código y los recursos que soportan la interfaz de usuario. Esto incluye la gestión de eventos, el control de estados y la renderización eficiente de componentes. Un diseño interno bien estructurado permite una mayor flexibilidad y facilidad de mantenimiento.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño de la capa de datos</h3>
                        <p className="dropdown-text">
                            El diseño de la capa de datos se enfoca en cómo se almacenan, recuperan y manipulan los datos en un sistema de software. Esto incluye la elección de tecnologías de bases de datos, la normalización de datos y la creación de esquemas que optimicen el rendimiento y la integridad de los datos.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Tecnología de bases de datos relacionales</h3>
                        <p className="dropdown-text">
                            Las bases de datos relacionales organizan la información en tablas y usan SQL para gestionar las relaciones entre los datos. Esta tecnología es ampliamente utilizada debido a su capacidad para manejar grandes volúmenes de datos y su robustez en términos de consistencia, integridad y recuperación de la información.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Estrategias de gestión de la persistencia</h3>
                        <p className="dropdown-text">
                            Las estrategias de gestión de la persistencia definen cómo se almacenan los datos a largo plazo. Incluyen técnicas como el mapeo objeto-relacional (ORM), que facilita la conversión de datos entre sistemas de bases de datos y objetos de programación, asegurando que los cambios en los datos se reflejen adecuadamente en ambos entornos.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Generación automática de la persistencia</h3>
                        <p className="dropdown-text">
                            La generación automática de la persistencia utiliza herramientas y frameworks para crear automáticamente el código necesario para manejar la persistencia de datos. Esto puede acelerar el desarrollo y reducir errores, al asegurar que las operaciones de persistencia sean consistentes y estén alineadas con el diseño del sistema.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño directo de la persistencia</h3>
                        <p className="dropdown-text">
                            El diseño directo de la persistencia implica la escritura manual del código para gestionar cómo los datos se guardan y recuperan de la base de datos. Aunque puede ser más laborioso, este enfoque ofrece un mayor control y optimización, permitiendo que los desarrolladores adapten la persistencia a necesidades específicas del sistema.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThirdSection;
