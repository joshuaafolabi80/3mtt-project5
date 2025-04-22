import React from "react";
import { useState } from "react";

const ClickCounterApp = () => {
    const [count, setCount] = useState(0);
    const maxLimit = 10;

    const handleIncrement = () =>{
        if (count < maxLimit) {
            setCount(count +1);
        }
    };

    const handleDecrement = () =>{
        if (count > 0) {
            setCount(count -1);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Click Counter App</h1>
            <p style={styles.count}>Count: {count}</p>

            {count === maxLimit && (<p style={{color: "red"}}>🎉 You've reached the limit!</p>)}
            <div>
                <button onClick={handleIncrement} style={styles.button}>Increase</button>
                <button onClick={handleDecrement} style={styles.button}>Decrease</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
    },
    heading: {
        fontSize: "28px",
        marginBottom: "20px",
    },
    count: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    button: {
        margin: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "1px solid #444",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
    },
};
export default ClickCounterApp;