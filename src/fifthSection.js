import React, { useState } from 'react';

const FifthSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : 'Arquitectura en capas y objetos'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">¿Qué es la arquitectura en capas y orientada a objetos?</h3>
                        <p className="dropdown-text">
                            La arquitectura en capas es un enfoque de diseño de software que organiza un sistema en capas distintas, cada una con responsabilidades específicas, como la presentación, la lógica de negocio, y el acceso a datos. La arquitectura orientada a objetos, por su parte, organiza el software en objetos que representan entidades del mundo real y se relacionan entre sí mediante la herencia, el polimorfismo y la encapsulación.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">¿Qué es el diseño del software (metodologías clásicas y ágiles)?</h3>
                        <p className="dropdown-text">
                            El diseño del software es el proceso de definir la arquitectura, componentes, interfaces y otros aspectos de un sistema para cumplir con los requisitos funcionales y no funcionales. Las metodologías clásicas, como el modelo en cascada, implican un diseño detallado al inicio del proyecto. Las metodologías ágiles, como Scrum y XP, favorecen un diseño incremental que evoluciona durante el desarrollo.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Metodologías de diseño del software más usadas</h3>
                        <p className="dropdown-text">
                            Entre las metodologías más usadas se encuentran Scrum, que divide el desarrollo en sprints cortos y permite iteraciones rápidas, y XP (Extreme Programming), que enfatiza la calidad del código mediante prácticas como TDD y Pair Programming. Ambas metodologías fomentan la colaboración y la adaptación rápida a los cambios.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrón arquitectónico en capas y orientado a objetos, aplicación y diseño</h3>
                        <p className="dropdown-text">
                            El patrón arquitectónico en capas divide el sistema en diferentes niveles, como presentación, lógica de negocio y acceso a datos, facilitando la separación de responsabilidades. La arquitectura orientada a objetos aplica principios como la encapsulación y la herencia, permitiendo un diseño modular y reutilizable. Ambos enfoques se aplican en la construcción de sistemas flexibles y escalables.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño de la capa de dominio, presentación y datos</h3>
                        <p className="dropdown-text">
                            La capa de dominio gestiona la lógica de negocio y las reglas del sistema, la capa de presentación maneja la interacción con el usuario, y la capa de datos se encarga del almacenamiento y recuperación de la información. Un diseño efectivo de estas capas asegura la coherencia del sistema y facilita su mantenimiento y escalabilidad.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrones de diseño y bases de datos relacionales</h3>
                        <p className="dropdown-text">
                            Los patrones de diseño, como el modelo de dominio y el repositorio, ayudan a estructurar la lógica de negocio y la persistencia de datos de manera eficiente. Las bases de datos relacionales, que organizan la información en tablas interrelacionadas, son una tecnología comúnmente utilizada para almacenar datos de forma estructurada y segura.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Estrategias de gestión de la persistencia y generación automática de la persistencia</h3>
                        <p className="dropdown-text">
                            Las estrategias de gestión de la persistencia incluyen el uso de ORM (Object-Relational Mapping) para simplificar la interacción entre los objetos de dominio y la base de datos. La generación automática de la persistencia se refiere a la creación automatizada de código que maneja la persistencia de datos, lo que ahorra tiempo y reduce errores.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño externo de un sistema de software</h3>
                        <p className="dropdown-text">
                            El diseño externo se enfoca en cómo el sistema se comunica con otros sistemas y servicios, definiendo interfaces, protocolos y APIs. Un diseño externo bien pensado garantiza la interoperabilidad y facilita la integración con otros sistemas, así como la expansión futura del software.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Diseño del software utilizando metodologías clásicas y ágiles</h3>
                        <p className="dropdown-text">
                            En metodologías clásicas, el diseño del software es detallado y se realiza antes de comenzar el desarrollo. En metodologías ágiles, el diseño es iterativo e incremental, permitiendo ajustes continuos a medida que se desarrollan y prueban nuevas funcionalidades. Ambos enfoques tienen sus ventajas, dependiendo de la naturaleza del proyecto y los requisitos del cliente.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FifthSection;
