import styled from "styled-components";


function MainPage() {

    return (
        <Wrapper>
            <ImgBox>
                <img src={'https://i.pinimg.com/control/564x/24/37/bb/2437bbd6e6330d20dac79146add7e8f7.jpg'}/>
            </ImgBox>
            <ItemBox>
            </ItemBox>
            <ItemBox>
                <h1>메인 페이지입니다~!</h1>
            </ItemBox>
        </Wrapper>

    );
}

export default MainPage;
const Wrapper = styled.div`
`;

const Btn =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 30px;
    background: cadetblue;
    border-radius: 20px;
    margin: 10px;
    font-size: 10px;
    font-weight: bold;
    color: white;
    &:hover{
        border: 2px solid cadetblue;
        background: white;
        color: black;
    }

`
const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 20px;
    border: 2px solid cadetblue;
    padding-left: 16px;
    margin-top: 10px;
`

const ImgBox = styled.div`
   img{
       border-radius: 20px;   
   }
`


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`