import React, { useState } from 'react';

const SeventhSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-title" onClick={toggleDropdown}>
                {isOpen ? 'Cerrar' : 'Bibliografia'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <h3 className="dropdown-subtitle">Bibliografía</h3>
                        <p className="dropdown-text">
                            1. Beck, K. (2000). *Extreme Programming Explained: Embrace Change*. Addison-Wesley.
                        </p>
                        <p className="dropdown-text">
                            2. Fowler, M. (2004). *Patterns of Enterprise Application Architecture*. Addison-Wesley.
                        </p>
                        <p className="dropdown-text">
                            3. Martin, R. C. (2009). *Clean Code: A Handbook of Agile Software Craftsmanship*. Prentice Hall.
                        </p>
                        <p className="dropdown-text">
                            4. Sommerville, I. (2016). *Software Engineering* (10th ed.). Pearson.
                        </p>
                        <p className="dropdown-text">
                            5. DigitalOcean. (n.d.). *Deploying React Applications on DigitalOcean App Platform*. Retrieved from https://www.digitalocean.com/docs/app-platform/
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeventhSection;
