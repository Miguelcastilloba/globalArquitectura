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
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando metodologías ágiles</h3>
                        <p className="dropdown-text">
                            Al diseñar un sitio web en React utilizando metodologías ágiles, como Scrum o Kanban, el enfoque es incremental y altamente flexible, permitiendo ajustes continuos basados en la retroalimentación y el progreso del proyecto.
                        </p>
                        <h4 className="dropdown-subheading">1. Planificación del Sprint</h4>
                        <p className="dropdown-text">
                            El proceso comienza con la planificación de sprints, donde se definen objetivos específicos para un período corto de tiempo, típicamente de 2 a 4 semanas. Para este proyecto, un sprint podría enfocarse en desarrollar una funcionalidad clave del sitio web, como un sistema de autenticación de usuarios. El equipo de desarrollo se reúne para descomponer esta tarea en subtareas manejables, asignando responsabilidades y estableciendo un backlog claro de lo que se necesita completar en el sprint.
                        </p>
                        <h4 className="dropdown-subheading">2. Desarrollo y Revisión Continua</h4>
                        <p className="dropdown-text">
                            Durante el sprint, los desarrolladores trabajan en el código mientras realizan revisiones continuas. Los componentes de React se construyen, prueban e integran en el sistema de manera iterativa. Por ejemplo, el desarrollo de un formulario de registro se realizaría en un sprint, incluyendo el diseño, la codificación, y las pruebas unitarias. Cada cambio se revisa en reuniones diarias de stand-up para asegurarse de que todos los miembros del equipo están alineados y pueden colaborar para superar cualquier obstáculo.
                        </p>
                        <h4 className="dropdown-subheading">3. Revisión y Demo del Sprint</h4>
                        <p className="dropdown-text">
                            Al final de cada sprint, se realiza una revisión en la que el equipo demuestra las funcionalidades completadas a los stakeholders. Para este proyecto, esto podría significar mostrar una funcionalidad completa, como la autenticación de usuarios o la integración con una API de terceros. Los stakeholders proporcionan retroalimentación inmediata, lo que permite al equipo ajustar el plan para el siguiente sprint según sea necesario.
                        </p>
                        <h4 className="dropdown-subheading">4. Retrospectiva y Mejora Continua</h4>
                        <p className="dropdown-text">
                            Después de cada sprint, el equipo realiza una retrospectiva para discutir lo que funcionó bien y lo que podría mejorar. Esto es crucial para la mejora continua en metodologías ágiles. Se identifican áreas de mejora en la colaboración del equipo, la eficiencia del proceso de desarrollo, y la calidad del código. Esta información se utiliza para refinar las prácticas en el próximo sprint, asegurando que el equipo se vuelva más eficiente y productivo con cada iteración.
                        </p>
                        <h4 className="dropdown-subheading">5. Despliegue Incremental</h4>
                        <p className="dropdown-text">
                            A medida que se completan las funcionalidades, estas se despliegan en Digital Ocean App Platform de manera incremental. Esto permite que el sitio web esté disponible y operativo con características básicas mientras se continúan agregando nuevas funcionalidades. El despliegue continuo es una práctica clave en metodologías ágiles, facilitando que el sitio web evolucione constantemente en respuesta a las necesidades del usuario y los cambios del mercado.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando arquitecturas en capas y orientada a objetos</h3>
                        <p className="dropdown-text">
                            El diseño del sistema en capas y orientado a objetos para un sitio web hecho en React, desplegado en Digital Ocean App Platform, se desarrolla en varias fases clave para garantizar una arquitectura robusta y escalable.
                        </p>
                        <h4 className="dropdown-subheading">1. Análisis de Requisitos</h4>
                        <p className="dropdown-text">
                            El primer paso en el proceso de diseño es entender completamente los requisitos funcionales y no funcionales del sistema. Esto incluye identificar las necesidades del usuario, las características del sistema, los requisitos de rendimiento, seguridad y escalabilidad. Con base en estos requisitos, se definirá cómo se estructurarán las capas y los objetos dentro del sistema.
                        </p>
                        <h4 className="dropdown-subheading">2. Diseño de la Capa de Presentación</h4>
                        <p className="dropdown-text">
                            La capa de presentación es responsable de la interacción con el usuario final. En un sitio web hecho en React, esta capa incluye todos los componentes de la interfaz de usuario (UI), como formularios, botones, y otros elementos visuales. Estos componentes son diseñados utilizando principios de orientación a objetos, donde cada componente React es visto como un objeto que encapsula tanto el estado como el comportamiento. La reutilización de componentes es clave, y se organiza la UI en una jerarquía de componentes que facilita el mantenimiento y la escalabilidad.
                        </p>
                        <h4 className="dropdown-subheading">3. Diseño de la Capa de Lógica de Negocio</h4>
                        <p className="dropdown-text">
                            La capa de lógica de negocio maneja las reglas del negocio y la lógica que define cómo se procesan los datos. En un sistema orientado a objetos, esta capa se organiza en clases y objetos que representan las entidades y operaciones del dominio del negocio. Por ejemplo, si el sitio web incluye una funcionalidad de gestión de usuarios, la capa de lógica de negocio incluirá clases que representen al usuario, sus roles y permisos, así como métodos para validar, crear, y gestionar usuarios. Esta capa también se encarga de la comunicación con la API, garantizando que los datos se manejen de manera consistente y segura.
                        </p>
                        <h4 className="dropdown-subheading">4. Diseño de la Capa de Acceso a Datos</h4>
                        <p className="dropdown-text">
                            La capa de acceso a datos es responsable de la interacción con la base de datos y otros servicios backend. Esta capa abstrae la lógica de persistencia de datos, utilizando patrones como el repositorio para acceder y manipular los datos. En un sistema orientado a objetos, esta capa se organiza en clases que representan los repositorios y servicios de datos, permitiendo que la lógica de negocio permanezca independiente de la implementación de la base de datos. Esto es especialmente importante para mantener la escalabilidad y flexibilidad del sistema, ya que permite cambiar la tecnología de base de datos o los servicios backend sin afectar el resto del sistema.
                        </p>
                        <h4 className="dropdown-subheading">5. Integración y Despliegue</h4>
                        <p className="dropdown-text">
                            Una vez diseñadas las capas, el siguiente paso es la integración de todos los componentes en un sistema cohesivo. En este punto, se configura el entorno de despliegue en Digital Ocean App Platform, asegurando que la aplicación React esté optimizada para el rendimiento y la seguridad en un entorno de producción. Las herramientas de CI/CD (Integración Continua/Despliegue Continuo) son esenciales para automatizar el despliegue y garantizar que cada cambio en el código se integre y despliegue de manera eficiente.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Planteamiento y diseño del software utilizando metodologías clásicas</h3>
                        <p className="dropdown-text">
                            Cuando se utiliza una metodología clásica como el modelo en cascada para diseñar un sitio web en React lanzado en Digital Ocean App Platform, el proceso es secuencial y bien estructurado, lo que asegura que cada fase del desarrollo se complete antes de pasar a la siguiente.
                        </p>
                        <h4 className="dropdown-subheading">1. Fase de Análisis</h4>
                        <p className="dropdown-text">
                            En la fase de análisis, se recogen todos los requisitos del sistema. Para este proyecto, esto incluye definir las funcionalidades específicas del sitio web, como la gestión de usuarios, la interacción con APIs externas, y la estructura de la base de datos. Se documenta todo en un documento de requisitos detallado, que servirá como base para el resto del proyecto.
                        </p>
                        <h4 className="dropdown-subheading">2. Diseño del Sistema</h4>
                        <p className="dropdown-text">
                            Durante la fase de diseño, se crea una representación detallada del sistema. Esto incluye diagramas de flujo de datos, esquemas de la base de datos y el diseño de la arquitectura de los componentes React. Por ejemplo, se diseñarían diagramas UML para definir las relaciones entre los componentes del frontend y cómo interactúan con la lógica de negocio y la capa de datos. También se definirían las interfaces de usuario, asegurando que la experiencia sea intuitiva y alineada con los objetivos del negocio.
                        </p>
                        <h4 className="dropdown-subheading">3. Desarrollo</h4>
                        <p className="dropdown-text">
                            En la fase de desarrollo, los programadores comienzan a codificar siguiendo estrictamente los diseños y especificaciones definidos anteriormente. Cada componente de React se desarrolla conforme a los diagramas de diseño, y las pruebas unitarias se realizan de manera paralela para asegurar que cada pieza de código funciona correctamente. La metodología en cascada garantiza que no se avance al siguiente módulo hasta que el anterior haya sido completado y aprobado.
                        </p>
                        <h4 className="dropdown-subheading">4. Pruebas</h4>
                        <p className="dropdown-text">
                            Una vez que el desarrollo ha concluido, el sistema completo se somete a una fase de pruebas exhaustiva. Esto incluye pruebas de integración para verificar que todos los componentes de React interactúan correctamente entre sí y con la API y la base de datos. Las pruebas de rendimiento y de seguridad también se llevan a cabo para asegurar que el sistema puede manejar la carga de usuarios esperada y está protegido contra vulnerabilidades comunes.
                        </p>
                        <h4 className="dropdown-subheading">5. Despliegue</h4>
                        <p className="dropdown-text">
                            El despliegue se realiza una vez que el sistema ha pasado todas las pruebas. En esta etapa, la aplicación React se implementa en Digital Ocean App Platform. Se asegura que la infraestructura esté configurada correctamente, incluyendo balanceadores de carga y entornos de producción que soporten la escalabilidad del sistema. La metodología en cascada ofrece una estructura robusta, pero la falta de flexibilidad puede ser una desventaja si se identifican cambios necesarios en etapas posteriores.
                        </p>
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default SixthSection;
