import styled from "styled-components";
export  const StyleHeader = styled.header`
  width: 100%;
  min-height: 60px;
  padding: 0 80px 0 80px;
  background: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 584px){
    padding: 20px;
    flex-direction: column;
    gap: 15px;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  img{
    width: 257px;
    height: 48px;
    
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    @media(max-width: 584px){
      width: 100%;
      justify-content: space-evenly;
  }
    a{
      :hover{color:#22C55E}
    }
   
  }
  .btnLogin{
    background-color: #22C55E;
    color: #F9FAFB;
    padding: 10px 20px;
    border-radius: 8px;


    :hover{
       background-color:  #86EFAC;
       color: black;
    }
  }

`
export const StyledRegisterPage = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

 



    @media(max-width: 865px){
      justify-content: center;
        
  }

  .divText{
    max-width: 700px;
    @media(max-width: 865px){
        display: none;
  }
    

    h3{
      font-weight: 700;
      font-size: 128px;
      line-height: 155px;
 
      strong{
        color: #22C55E;
      }
      @media(max-width: 1140px){
        font-size: 100px;
  }
  @media(max-width: 974px){
        font-size: 80px;
  }
  @media(max-width: 862px){
        font-size: 60px;
  }
  @media(max-width: 750px){
        font-size: 50px;
        line-height: 200%;
  }
  @media(max-width: 652px){
        font-size: 40px;
        line-height: 200%;
  }
    }
    p{
      font-weight: 700;
      font-size: 64px;
      line-height: 150%;
      @media(max-width: 1140px){
        font-size: 50px;
  }
  @media(max-width: 974px){
        font-size: 40px;
  }
  @media(max-width: 862px){
        font-size: 30px;
  }
  @media(max-width: 652px){
        font-size: 25px;
  }
    }
  }
  

  
`;
export  const StyleFormRegister=styled.form`    
        width: 100%;
        max-width: 420px;

        display: flex;
        flex-direction: column;
        gap: 35px;

        padding: 20px 40px;
        
        background-color: white;
    
        
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    

    .divheader{

        display: flex;
        align-items: center;
        justify-content: center;
        h2{
            font-weight: 700;
            font-size: 38px;
            line-height: 58px;
            color: #1F2937;
        }
        button{
            background-color: #22C55E;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;

            :hover{
                color: #22C55E ;
                background-color: #E5E7EB;
            }
        }

    }

    form{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

 .btnRegister{
    height: 71px;
    background: #22C55E;
    border-radius: 8px;
    color: white;

    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    :hover{
                color: #22C55E ;
                background-color: #E5E7EB;
            }
 }
  a{
              color: #22C55E;
              text-decoration: underline;
            }

            h5{
              font-weight: 700;
              font-size: 18px;
              line-height: 150%;
              color: #1F2937;

              text-align: center;
            }
`