import React from 'react';

function EdgeShadows() {
    return (
        <>
        <span style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow: "inset -10px -10px 0px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "transparent",
            zIndex: 1,
            pointerEvents: "none",
        }}>
                </span>
            <span style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                boxShadow: "inset -15px -15px 0px 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "transparent",
                zIndex: 1,
                pointerEvents: "none",
            }}>
            </span>
        </>
    );
}

export default EdgeShadows;
