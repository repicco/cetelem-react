import styled from 'styled-components'

export const StyleHeader = styled.header`
    background-color: #fff;
    padding-top: 0.5rem;
    .container {
      width: 86%;
      margin-left: 7%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 60px;
      padding: 0 1rem;
    }
    img {
      max-width: 100px;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }
    nav {
      display: flex;
      font-size: 11px;
      display: flex;
      align-items: flex-end;
      margin-right: 1rem;
      div {
        border-bottom: 2px solid transparent;
        max-height: 25px;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
        min-width: fit-content;
        a {
          border-right: 1px solid rgba(0, 0, 0, 0.3);
          padding: 0.5rem;
          margin-bottom: 0.5rem;
        }
        &.active {
          border-bottom: 2px solid #a0be5b;
        }
        &:hover {
          border-bottom: 2px solid #a0be5b;
        }
        &:last-child a {
          border-right: none;
          margin-right: 1rem;
        }
      }
    }
    .search {
      margin-bottom: 0.5rem;
      margin-right: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0.5rem;
      border-radius: 4px;
      display: flex;
      input {
        border: none;
        width: 100%;
      }
      span {
        color: rgba(0, 0, 0, 0.3);
      }
    }
    .clientArea {
      margin-bottom: 0.2rem;
      margin-top: 0.5rem;
      background-color: #a0be5b;
      display: flex;
      padding: 0.3rem;
      height: 100%;
      border-radius: 4px;
      label {
        display: flex;
        flex-direction: column;
        color: #fff;
        font-size: 11px;
        input {
          border-radius: 4px;
          border: none;
          padding: 0.5rem;
          margin-top: 0.3rem;
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
        &:hover {
          background-color: #fff;
          color: #a0be5b;
        }
      }
    }
`