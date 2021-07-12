import styled from 'styled-components'

export const StyleClientsContainer = styled.section`
width: 86%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 2rem 0;
margin-left: 7%;
`

export const StyleMainCard = styled.div`
    width: 100%;
    background: #fff;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 0 1em #a0be5b;
    margin-bottom: 1.5rem;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
            display: flex;
            align-items: center;
            .icon {
                font-size: 1.5rem;
                margin-right: 1rem;
            }
        }
        button {
        height: fit-content;
        align-self: flex-end;
        padding: 0.5rem;
        margin-left: 0.5rem;
        border: 1px solid #fff;
        background-color: #a0be5b;
        color: #fff;
        font-weight: bold;
        border-radius: 4px;
        font-size: clamp(1rem, 2vw, 1.2rem);
        cursor: pointer;
        border: 1px solid #a0be5b;
        &:hover {
          background-color: #ddd;
          color: #a0be5b;
        }
      }
    }
`

export const StyleListContent = styled.div`
  margin-top: 1rem;
  .tableTitle {
    display: none;
  }
  .tableBody {
    display: flex;
    flex-wrap: wrap;
    border-radius: 4px;
    padding: 0.5rem;
    margin-top: 0.5rem;
    background: #ddd;
    p {
      width: 50%;
      font-size: clamp(1rem, 2vw, 1.2rem);
      font-weight: bold;
    }
    div {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
    .icon {
      font-size: 2rem;
      color: #fff;
      background: #a0be5b;
      width: 50%;
      padding: 0.2rem 1rem;
      margin: 0 2px;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid #a0be5b;
      margin-top: 1rem;
      &:hover {
        background: #ddd;
        color: #a0be5b;
      }
      &:last-child {
        &:hover {
          color: red;
          border: 1px solid red;
        }
      }
    }
  }
  .noClient {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      margin: 1rem 0;
      font-size: 2.5rem;
      color: #a0be5b;
    }
  }
  @media(min-width: 992px){
    .tableTitle {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: bold;
      border-radius: 4px;
      p {
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
        background: #a0be5b;
        color: #fff;
        width: 16.66%;
        border-right: 1px solid #fff;
        &:last-child {
          border-right: 1px solid transparent;
        }
      }
    }
    .tableBody {
      justify-content: flex-start;
      align-items: center;
      border:none;
      border-radius: 0;
      border-bottom: 1px solid #a0be5b;
      padding: 0;
      margin-top: 0;
      background: transparent;
      p {
        display: flex;
        justify-content: center;
        padding: 0.5rem 0;
        width: 16.66%;
        border-right: 1px solid #a0be5b;
        font-weight: normal;
        &:first-child {
          border-left: 1px solid #a0be5b;
        }
        &:last-child {
          border-right: none;
        }
      }
      div {
        padding: 0.5rem 0;
        width: 16.66%;
        .icon {
          margin-top: 0;
        }
      }
    }
  }
`

export const StyleRegisterContent = styled.div`
  form {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0.5rem;
      .required {
        color: red;
      }
      .requiredInput {
        border: 1px solid red;
      }
      input {
        padding: 0.5rem;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    button {
      margin: 0 1rem;
      font-size: clamp(1.1rem, 2vw, 1.3rem);
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      background: #a0be5b;
      color: #fff;
      border: 1px solid #a0be5b;
      border-radius: 4px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 0.5rem;
      width: 80%;
      .icon {
        margin-right: 0.5rem;
      }
      &:hover {
        color: #a0be5b;
        background: #ddd;
      }
      &:first-child {
        color: #a0be5b;
        background: #fff;
        
        &:hover {
          background: #ddd;
        }
      }
    }
  }
  #number {
    width: 100px
  }
  @media(min-width: 992px){
    form {
      label {
        width: 33.33%;
      }
    }
    div {
      flex-direction: row;
      button {
        width: fit-content;
      }
    }
  }
`