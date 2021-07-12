import styled from 'styled-components'
import { useCallback, useEffect, useState } from 'react';

export default function Modal({visible, setVisible, title, children}){
    const [handleModal, setHandleModal] = useState(false)

    const changeModal = useCallback((change) => {
        setHandleModal(change)
        if(!change){
            setVisible(change)
        }
    }, [setHandleModal, setVisible])

    useEffect(() => {
        changeModal(visible)
    }, [visible, changeModal])


    if(handleModal) {
        return(
            <StyleModal>
                <div className="backModal" onClick={() => changeModal(false)}></div>
                <section>
                    <div className="modalTitle">
                        <h2>{title}</h2>
                    </div>
                        {children}
                </section>
            </StyleModal>
        )
    } else {
        return(
            <>
            </>
        )
    }

}

const StyleModal = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    .backModal {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba(117, 125, 138, 0.5);
        cursor: not-allowed;
    }
    section {
        z-index: 99;
        color: #008A5D;
        margin: 2rem 0;
        border-radius: 8px;
        background: white;
        padding: 1rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
        overflow-y: auto;
        height: fit-content;
        width: 90%;
        .modalTitle {
            display: flex;
            flex-direction: column;
            align-items: center;
            .icon {
                font-size: 2rem;
                margin-right: 1rem;
            }
        }
        p {
            margin-top: 1rem;
            color: black;
        }
    }
    @media(min-width: 920px){
        section {
            margin: 2rem 3rem;
            height: fit-content;
            max-height: 90%;
            width: auto;
            .modalTitle {
                flex-direction: row;
            }
        }
    }
`