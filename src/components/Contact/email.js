import React from 'react';

const Email = () => {
  const handleEmailClick = () => {
    const mailtoLink = 'mailto:arifhakimasri@gmail.com?subject=Hello';
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="email d-flex align-items-center justify-content-center py-5" id="email">
      <div className="container">
        <div className="text-center display-4 p-4">
          <button className="btn btn-primary" onClick={handleEmailClick}>
            Let's get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Email;
