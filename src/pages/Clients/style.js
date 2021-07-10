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
        font-size: 1.2rem;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #a0be5b;
    p {
      display: flex;
      justify-content: center;
      padding: 0.5rem 0;
      width: 16.66%;
      border-right: 1px solid #a0be5b;
      &:first-child {
        border-left: 1px solid #a0be5b;
      }
      &:last-child {
        border-right: none;
      }
    }
    div {
      display: flex;
      justify-content: space-around;
      padding: 0.5rem 0;
      width: 16.66%;
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
      width: 33.33%;
      padding: 0.5rem;
      input {
        padding: 0.5rem;
      }
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      margin: 0 1rem;
      font-size: 1.3rem;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      background: #a0be5b;
      color: #fff;
      border: 1px solid #a0be5b;
      border-radius: 4px;
      display: flex;
      justify-content: space-around;
      align-items: center;
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
`