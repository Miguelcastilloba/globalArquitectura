import React, { useState } from 'react';

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
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando metodologías ágiles (utilizada en este proyecto)</h3>
                        <p className="dropdown-text">
                            Al diseñar un sitio web en React utilizando metodologías ágiles, como Scrum, el enfoque es incremental y altamente flexible, permitiendo ajustes continuos basados en la retroalimentación y el progreso del proyecto, sumado a la posibilidad que ofrece una plataforma de deploy e integración continua como lo es App Platform, lo cual permite realizar cambios y ajustes a una velocidad descomunal respecto a otras alternativas.
                        </p>
                        <h4 className="dropdown-subheading">1. Planificación del Sprint</h4>
                        <p className="dropdown-text">
                            El proceso comienza con la planificación de sprints, donde se definen objetivos específicos para un período corto de tiempo, típicamente de 2 a 4 semanas (en este caso 30 mins). Para este proyecto, un sprint podría enfocarse en desarrollar una funcionalidad clave del sitio web, como lo es el header, la plantilla de los dropdowns o el rediseño visual del sitio. El equipo de desarrollo (yo) se reúne para descomponer esta tarea en subtareas manejables, asignando responsabilidades y estableciendo un backlog claro de lo que se necesita completar en el sprint.
                        </p>
                        <h4 className="dropdown-subheading">2. Desarrollo y Revisión Continua</h4>
                        <p className="dropdown-text">
                            Durante el sprint, los desarrolladores trabajan en el código mientras realizan revisiones continuas. Los componentes de React se construyen, prueban e integran en el sistema de manera iterativa. Por ejemplo, el desarrollo de cada dropdown se realizaría en un sprint, incluyendo el diseño, la codificación, y las pruebas unitarias. Cada cambio se revisa en reuniones diarias de stand-up (las cuales en este proyecto no existen al ser individual) para asegurarse de que todos los miembros del equipo están alineados y pueden colaborar para superar cualquier obstáculo.
                        </p>
                        <h4 className="dropdown-subheading">3. Revisión y Demo del Sprint</h4>
                        <p className="dropdown-text">
                            Al final de cada sprint, se realiza una revisión en la que el equipo (yo) demuestra las funcionalidades completadas a los stakeholders (igualmente yo, en dado caso pudiera ser usted). Para este proyecto, esto podría significar mostrar una funcionalidad completa, como la bibliografía o una sección del sitio. Los stakeholders proporcionan retroalimentación inmediata, lo que permite al equipo ajustar el plan para el siguiente sprint según sea necesario.
                        </p>
                        <h4 className="dropdown-subheading">4. Retrospectiva y Mejora Continua</h4>
                        <p className="dropdown-text">
                            Después de cada sprint, el equipo realiza una retrospectiva para discutir lo que funcionó bien y lo que podría mejorar. Esto es crucial para la mejora continua en metodologías ágiles. Se identifican áreas de mejora en la colaboración del equipo, la eficiencia del proceso de desarrollo, y la calidad del código. Esta información se utiliza para refinar las prácticas en el próximo sprint, asegurando que el equipo se vuelva más eficiente y productivo con cada iteración.
                        </p>
                        <h4 className="dropdown-subheading">5. Despliegue Incremental</h4>
                        <p className="dropdown-text">
                            A medida que se completan las funcionalidades, estas se despliegan en Digital Ocean App Platform de manera incremental (lo cual está automatizado pues se realiza el deploy en automático cada que se realiza un push a main). Esto permite que el sitio web esté disponible y operativo con características básicas mientras se continúan agregando nuevas funcionalidades. El despliegue continuo es una práctica clave en metodologías ágiles, facilitando que el sitio web evolucione constantemente sin tener que interrumpir el servicio en respuesta a las necesidades del usuario y los cambios del mercado.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando arquitecturas en capas y orientada a objetos</h3>
                        <p className="dropdown-text">
                            Para este proyecto específico, el diseño del sistema en capas y orientado a objetos se adapta al enfoque ágil empleado, asegurando que cada capa del sistema pueda desarrollarse e integrarse de manera incremental y flexible. 
                        </p>
                        <h4 className="dropdown-subheading">1. Análisis de Requisitos</h4>
                        <p className="dropdown-text">
                            Como parte del enfoque ágil, el análisis de requisitos se realiza de forma iterativa, ajustándose a las necesidades identificadas en cada sprint. En este proyecto, los requisitos funcionales y no funcionales se desglosan en tareas pequeñas y manejables, lo que permite realizar ajustes rápidos según la retroalimentación recibida al final de cada sprint. Esta flexibilidad es crucial para mantener la alineación con los objetivos del proyecto, especialmente en un entorno donde el equipo de desarrollo es pequeño (en este caso, un solo desarrollador).
                        </p>
                        <h4 className="dropdown-subheading">2. Diseño de la Capa de Presentación</h4>
                        <p className="dropdown-text">
                            La capa de presentación se desarrolla de manera iterativa, alineada con el enfoque ágil del proyecto. Cada componente de la UI en React se construye como parte de un sprint específico, permitiendo revisiones y mejoras continuas. La orientación a objetos facilita la modularidad, permitiendo que los componentes se reutilicen y ajusten fácilmente a medida que se identifican nuevas necesidades o se recibe retroalimentación. Por ejemplo, el diseño de un dropdown o del header se implementa y ajusta en sprints cortos, asegurando que cada elemento de la UI esté alineado con los estándares visuales y funcionales del proyecto.
                        </p>
                        <h4 className="dropdown-subheading">3. Diseño de la Capa de Lógica de Negocio</h4>
                        <p className="dropdown-text">
                            En un entorno ágil, la capa de lógica de negocio también se desarrolla de forma incremental. Las clases y objetos que representan las reglas del negocio se crean y ajustan en sprints sucesivos. Por ejemplo, permitiendo pruebas y ajustes inmediatos según sea necesario. La orientación a objetos permite encapsular la lógica de manera que sea fácilmente adaptable y mantenible, en este proyecto al ser un sitio estatico el cual no recibe ni manipula información, esta capa es practicamente inexistente.
                        </p>
                        <h4 className="dropdown-subheading">4. Diseño de la Capa de Acceso a Datos</h4>
                        <p className="dropdown-text">
                            La capa de acceso a datos se implementa y ajusta conforme se avanza en cada sprint. Utilizando patrones como el repositorio, esta capa se estructura de forma que cualquier cambio en la persistencia de datos se pueda manejar sin afectar otras capas del sistema. lo que es esencial para un ciclo de desarrollo ágil, de igual forma dadas las caracteristicas de este proyecto, dicha capa es practicamente inexistente.
                        </p>
                        <h4 className="dropdown-subheading">5. Integración y Despliegue</h4>
                        <p className="dropdown-text">
                            En línea con el enfoque ágil, la integración y el despliegue se realizan de forma continua. Cada push a la rama principal desencadena un despliegue automatizado en Digital Ocean App Platform, lo que permite que las nuevas funcionalidades estén disponibles casi de inmediato. Esto asegura que el proyecto se mantenga en un estado siempre desplegable, reduciendo el riesgo de problemas mayores en el despliegue final y permitiendo una retroalimentación rápida y efectiva.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando metodologías clásicas</h3>
                        <p className="dropdown-text">
                            Cuando se utiliza una metodología clásica como el modelo en cascada para diseñar un sitio web en React lanzado en Digital Ocean App Platform, el proceso es secuencial y bien estructurado, lo que asegura que cada fase del desarrollo se complete antes de pasar a la siguiente. Sin embargo, en este proyecto, el enfoque clásico se ajusta para aprovechar las ventajas del despliegue y la integración continua.
                        </p>
                        <h4 className="dropdown-subheading">1. Fase de Análisis</h4>
                        <p className="dropdown-text">
                            En la fase de análisis, se recogen todos los requisitos del sistema de manera detallada antes de comenzar el desarrollo. Aunque el proceso sigue siendo secuencial, se incorpora una retroalimentación constante en cada fase para asegurar que los requisitos se mantengan actualizados. Esto es especialmente importante en un entorno donde el despliegue y las pruebas continuas permiten identificar y ajustar los requisitos de manera más rápida que en un proceso clásico puro.
                        </p>
                        <h4 className="dropdown-subheading">2. Diseño del Sistema</h4>
                        <p className="dropdown-text">
                            Durante la fase de diseño, se crea una representación detallada del sistema, para este caso se compone del diseño de la arquitectura de los componentes React. A diferencia de un enfoque clásico rígido, en este proyecto, el diseño se considera un documento vivo que se ajusta conforme se avanza en el desarrollo. Esto permite que el sistema se mantenga alineado con las necesidades reales y las mejoras identificadas durante el desarrollo ágil.
                        </p>
                        <h4 className="dropdown-subheading">3. Desarrollo</h4>
                        <p className="dropdown-text">
                            En la fase de desarrollo, el código se implementa siguiendo las especificaciones detalladas. Sin embargo, a diferencia de un modelo clásico estricto, en este proyecto se permite cierta flexibilidad para incorporar mejoras continuas. Esto es posible gracias a la integración continua, que permite probar y desplegar cambios de manera frecuente, lo que facilita un enfoque híbrido que aprovecha la robustez del modelo en cascada mientras se adapta a la necesidad de cambios rápidos y frecuentes.
                        </p>
                        <h4 className="dropdown-subheading">4. Pruebas</h4>
                        <p className="dropdown-text">
                            Aunque las pruebas se realizan de manera exhaustiva al final del desarrollo, se integran pruebas unitarias y de integración desde las primeras fases del desarrollo. Esto permite identificar y corregir errores de manera temprana, mejorando la calidad del producto final. Las pruebas continuas, junto con los despliegues incrementales, aseguran que el sistema sea probado en un entorno realista y que los resultados se utilicen para mejorar el desarrollo en curso.
                        </p>
                        <h4 className="dropdown-subheading">5. Despliegue</h4>
                        <p className="dropdown-text">
                            El despliegue final se realiza una vez que el sistema ha pasado todas las pruebas. Sin embargo, a diferencia de un enfoque clásico donde el despliegue es un evento único, en este proyecto el despliegue es continuo, permitiendo que las nuevas funcionalidades y correcciones se integren de manera rápida y sin interrupciones en el servicio. Esto maximiza la eficiencia y asegura que el producto esté siempre alineado con las necesidades del usuario final.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SixthSection;
