import React, { useState } from 'react';


const FirstSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : '1. Introducción a la arquitectura y diseño del software'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Metodologías de desarrollo de software</h3>
                        <p className="dropdown-text">
                            Las metodologías de desarrollo de software son enfoques estructurados que guían la organización, planificación y ejecución de un proyecto de software. Estas metodologías incluyen enfoques clásicos como el modelo en cascada, así como metodologías ágiles como Scrum y Kanban, que permiten una mayor flexibilidad y adaptabilidad durante el ciclo de desarrollo.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Arquitectura y diseño de software</h3>
                        <p className="dropdown-text">
                            La arquitectura y el diseño de software son procesos clave en el desarrollo de un sistema de software. Mientras que la arquitectura define la estructura y los componentes principales del sistema, el diseño se centra en cómo estos componentes interactúan y se implementan. Un buen diseño es crucial para garantizar la escalabilidad, mantenibilidad y eficiencia del software.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Arquitectura lógica y física de un sistema software</h3>
                        <p className="dropdown-text">
                            La arquitectura lógica de un sistema de software se refiere a la organización y la interacción de los componentes del sistema a nivel conceptual. Por otro lado, la arquitectura física se refiere a la distribución real de estos componentes en hardware y redes. Ambos aspectos son críticos para garantizar que el sistema funcione de manera eficiente y segura.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Rol de los patrones de diseño en el diseño del software</h3>
                        <p className="dropdown-text">
                            Los patrones de diseño son soluciones reutilizables para problemas comunes en el diseño de software. Ayudan a los desarrolladores a crear sistemas más robustos y flexibles, facilitando la comunicación y la comprensión del diseño entre los equipos de desarrollo. Algunos ejemplos comunes son Singleton, Factory y Observer.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Arquitectura y diseño del software en metodologías clásicas y ágiles</h3>
                        <p className="dropdown-text">
                            La arquitectura y el diseño de software varían dependiendo de la metodología de desarrollo utilizada. En metodologías clásicas, como el modelo en cascada, la arquitectura y el diseño se definen detalladamente al inicio del proyecto. En metodologías ágiles, el diseño es más iterativo y evoluciona a medida que se desarrollan y se prueban nuevas funcionalidades, permitiendo una mayor adaptabilidad a los cambios.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FirstSection;
