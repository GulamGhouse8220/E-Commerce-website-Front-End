import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletters from "../components/Newsletters";
import Footer from "../components/Footer";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import { mobile } from "../responsives";

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 50px;
 display: flex;
 ${mobile({ padding: "10px", flexDirection: "column" })}

`;

const ImgContainer = styled.div`
 display: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}

`;

const InfoContainer = styled.div`
 display: 1;
 padding: 0px 50px;
 ${mobile({ padding: "10px" })}

`;

const Title = styled.h1`
 font-weight: 200;
`;

const Desc = styled.p`
 margin: 20px 0px;
`;

const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
 align-self: flex-start;
 
`;

const FilterContainer = styled.div`
 width: 50%;
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
 ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
 display: flex;
 align-items: center;
`;

const FilterTitle = styled.span`
 font-size: 25px;
 font-weight: 200;
`;

const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${props => props.color};
 margin: 0px 5px;
 cursor: pointer;
`;

const FilterSize = styled.select`
 margin-left: 10px;
 padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
 width: 50%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700;
`;

const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius: 10px;
 border: 1px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 5px;

`;

const Button = styled.button`
 padding: 15px;
 border: 1px solid teal;
 background-color: white;
 cursor: pointer;
 font-weight: 500;

 &:hover{
    background-color: #00ff00;
 }
`;


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://imagescdn.planetfashion.in/resources/img/planet_fashion/PF_D_S2_aboutUs.jpg?auto=format" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores quam dicta minima, doloribus mollitia itaque, animi facere accusantium numquam consequatur? Repellendus dignissimos accusantium amet, excepturi voluptatibus nesciunt maxime recusandae?</Desc>
                    <Price>₹ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkBlue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletters />
            <Footer />
        </Container>
    )
}

export default Product;