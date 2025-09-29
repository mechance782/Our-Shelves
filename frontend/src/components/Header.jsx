import React from 'react';
import logo from '../assets/OurShelvesLogo.png';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #e9ecef',
            gap: '20px'
        }}>
            <img
                src={logo}
                alt="Our Shelves"
                style={{
                    height: '60px',
                    width: 'auto'
                }}
            />
            
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                maxWidth: '400px',
                margin: '0 20px'
            }}>
                <input
                    type="text"
                    placeholder="Search books..."
                    style={{
                        width: '100%',
                        padding: '10px 15px',
                        border: '2px solid #ddd',
                        borderRadius: '25px',
                        fontSize: '16px',
                        outline: 'none',
                    }}
                />
            </div>
            
            <div style={{
                display: 'flex',
                gap: '20px',
                flexShrink: 0
            }}>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#004158',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>
                    Home
                </button>
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#D86926',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>
                    Library
                </button>
            </div>
        </header>
    );
};

export default Header;
