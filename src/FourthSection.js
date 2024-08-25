import React, { useState } from 'react';

const FourthSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : '4. Diseño de software utilizando metodologías ágiles.'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Extreme Programming (XP)</h3>
                        <p className="dropdown-text">
                            Extreme Programming (XP) es una metodología ágil que se enfoca en mejorar la calidad del software y la capacidad de respuesta ante cambios de los requisitos del cliente. XP promueve prácticas como la programación en parejas, la revisión constante del código, y la integración continua, permitiendo que el software evolucione rápidamente mientras se mantienen altos estándares de calidad.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Test-Driven Development (TDD)</h3>
                        <p className="dropdown-text">
                            Test-Driven Development (TDD) es una práctica de desarrollo ágil donde las pruebas se escriben antes de que se escriba el código funcional. Este enfoque garantiza que el código cumple con los requisitos desde el principio, fomentando un diseño más robusto y menos propenso a errores. Además, facilita la refactorización continua del código.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Tests en TDD</h3>
                        <p className="dropdown-text">
                            En TDD, los tests se utilizan para definir el comportamiento esperado del software antes de escribir el código. Estos tests guían el desarrollo y aseguran que cualquier cambio en el código no rompa la funcionalidad existente. Los tests deben ser simples, rápidos de ejecutar y capaces de cubrir todas las posibles condiciones y casos de borde.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Coding en TDD</h3>
                        <p className="dropdown-text">
                            El proceso de coding en TDD se centra en escribir solo el código necesario para pasar los tests previamente definidos. Este enfoque evita la sobreingeniería y promueve la simplicidad en el diseño. Una vez que el código pasa las pruebas, se puede refactorizar para mejorar la estructura o el rendimiento sin alterar su funcionalidad.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Pair Programming</h3>
                        <p className="dropdown-text">
                            Pair Programming es una práctica en la que dos desarrolladores trabajan juntos en una sola estación de trabajo. Mientras uno escribe el código, el otro lo revisa en tiempo real. Este enfoque mejora la calidad del código y la colaboración en el equipo, al mismo tiempo que facilita la transferencia de conocimientos entre los desarrolladores.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Simple Design and Incremental Design and Architecture</h3>
                        <p className="dropdown-text">
                            El diseño simple y el diseño incremental son principios clave en las metodologías ágiles. El diseño simple busca implementar solo lo necesario para cumplir con los requisitos actuales, mientras que el diseño incremental permite que la arquitectura y el diseño del software evolucionen con el tiempo, adaptándose a nuevos requisitos sin necesidad de reescribir el sistema desde cero.
                        </p>
                    </div>
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Code Smells and Refactorings</h3>
                        <p className="dropdown-text">
                            Los "code smells" son indicios de problemas en el código que pueden afectar su mantenibilidad y flexibilidad. La refactorización es el proceso de mejorar el código sin cambiar su comportamiento externo, eliminando estos "olores" y mejorando la estructura y legibilidad del código. Es una práctica esencial para mantener un código limpio y sostenible a largo plazo.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FourthSection;
