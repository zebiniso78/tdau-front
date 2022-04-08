import styled from 'styled-components';

export const MyModal = styled.div`

  .pure-modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pure-modal {
      width: 30%;
      max-width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      border-radius: 12px;
      padding: 28px 24px;
      transition: all 0.2s ease-in-out;
      transform: translate(0px, 0px);
      transition: none 0s ease 0s;
      max-height: 95%;

      .pure-modal-backdrop .additional-row,
      .pure-modal-backdrop:not(.scrollable) .additional-row {
        display: grid;
        grid-template-rows: min-content minmax(0, 1fr) min-content min-content;
      }


      .close {
         width: 30%;
         color: #fff;
         text-align: center;
         background: #169622;
border-radius: 4px;
         margin: 0 auto;
         padding: 12px;

      }

  }

  .panel-body {
     display: flex;
     justify-content: center;
     flex-direction: column;
   p {
      font-weight: 700;
   font-size: 24px;
   line-height: 110%;
   text-align: center;
   color: #169622;
   margin-bottom: 32px;
   }

   svg {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      color: #169622;
   margin-bottom: 32px;
   background: #E8F5E9;
border-radius: 50px;
padding: 16px;
   }
  }
`;
