import React from 'react';

interface CustomButtonProps {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, style }) => {
    return (
        <button onClick={onClick} style={style} className="custom-button">
            {text}
        </button>
    );
};

export default CustomButton;