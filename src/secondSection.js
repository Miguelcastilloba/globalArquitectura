import React, { useState } from 'react';

const SecondSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : '2. Arquitectura en capas y orientada a objetos'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrón arquitectónico en capas</h3>
                        <p className="dropdown-text">
                            El patrón arquitectónico en capas organiza un sistema de software en diferentes niveles o capas, cada una con responsabilidades específicas. Este enfoque facilita la separación de preocupaciones, permitiendo que los desarrolladores trabajen en diferentes capas sin interferir en otras partes del sistema. Las capas típicas incluyen la presentación, lógica de negocio, y acceso a datos.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Aplicación del patrón arquitectónico en capas a los sistemas y servicios software</h3>
                        <p className="dropdown-text">
                            La aplicación del patrón arquitectónico en capas es común en sistemas y servicios de software que requieren escalabilidad y mantenibilidad. Al dividir el sistema en capas, se facilita la actualización y mejora de componentes individuales sin afectar al resto del sistema, lo que es especialmente útil en entornos de desarrollo ágil y en servicios distribuidos.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Principios de diseño de la arquitectura en capas</h3>
                        <p className="dropdown-text">
                            Los principios de diseño de la arquitectura en capas incluyen la independencia de cada capa, la encapsulación de responsabilidades, y la minimización de las dependencias entre capas. Un buen diseño en capas asegura que cada capa pueda ser desarrollada, modificada y probada de manera independiente, lo que mejora la calidad y la eficiencia del desarrollo de software.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Patrón arquitectónico orientado a objetos</h3>
                        <p className="dropdown-text">
                            El patrón arquitectónico orientado a objetos se basa en la organización del software en objetos, que son instancias de clases que encapsulan tanto datos como comportamientos. Este enfoque facilita la reutilización de código, la modularidad, y la creación de sistemas que son fáciles de entender, mantener y expandir.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Aplicación del patrón arquitectónico orientado a objetos a los sistemas software</h3>
                        <p className="dropdown-text">
                            La aplicación del patrón arquitectónico orientado a objetos en sistemas de software permite la creación de sistemas flexibles y escalables. A través de la herencia, el polimorfismo y la encapsulación, los desarrolladores pueden crear sistemas que se adaptan fácilmente a los cambios y que pueden ser extendidos sin modificar el código existente de manera significativa.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Principios de diseño de la arquitectura orientada a objetos</h3>
                        <p className="dropdown-text">
                            Los principios de diseño de la arquitectura orientada a objetos incluyen el uso de abstracción, encapsulación, modularidad y jerarquía. Estos principios ayudan a crear sistemas de software que son robustos, fáciles de mantener y que promueven la reutilización del código. Un buen diseño orientado a objetos facilita la evolución del software con el tiempo.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SecondSection;
