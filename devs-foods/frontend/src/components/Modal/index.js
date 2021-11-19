import React from "react";
import { Container, ModalBody } from "./styled";

export default ({ children, setStatus, status }) => {
    const handleModalClick = (e) => {
        if(e.target.classList.contains('modalBg')) {
            setStatus(false);
        }
    }

    return (
        <Container 
            className="modalBg"
            status={status} 
            onClick={handleModalClick}
            >
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}