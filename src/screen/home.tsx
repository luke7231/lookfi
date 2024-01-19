import styled from "styled-components";
import Img1 from "../imgs/1.webp";
import Img2 from "../imgs/2.webp";
import Img3 from "../imgs/3.webp";
import Img4 from "../imgs/4.webp";
import Img5 from "../imgs/5.webp";
import Img10 from "../imgs/10.webp";
import Img11 from "../imgs/11.webp";
import Img12 from "../imgs/12.webp";
import Img13 from "../imgs/13.webp";

const Con = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    margin-top: 20px;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 800;
`;
const GridWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 20px;
    grid-gap: 12px;

    @media (min-width: 767px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 26px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;
const Image = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 14px;
`;
const ListWrap = styled.div`
    overflow: scroll;
    width: 100%;
    margin-top: 56px;
`;
const List = styled.div`
    display: flex;
    padding-left: 2rem;
    overflow-x: scroll;
    padding-top: 20px;
`;
const ListItem = styled.div`
    margin-right: 18px;
`;
const ListImage = styled.img`
    width: 100%;
    width: 280px;
    heigth: 100%;
    aspect-ratio: 1 / 1.2;
    object-fit: cover;
    border-radius: 14px;
`;
const people = [
    {
        h: 167,
        w: 48,
        img: Img1,
    },
    {
        h: 169,
        w: 49,
        img: Img2,
    },
    {
        h: 165,
        w: 45,
        img: Img3,
    },
    {
        h: 171,
        w: 51,
        img: Img4,
    },
    {
        h: 167,
        w: 50,
        img: Img5,
    },
];
const men = [
    {
        h: 180,
        w: 70,
        img: Img10,
    },
    {
        h: 178,
        w: 71,
        img: Img11,
    },
    {
        h: 183,
        w: 75,
        img: Img12,
    },
    {
        h: 175,
        w: 69,
        img: Img13,
    },
];
const Home = () => {
    return (
        <Con>
            <Title>좋아요 누른 사람</Title>
            <GridWrap>
                {people.map((p) => {
                    return (
                        <Item>
                            <Image src={p.img} />
                        </Item>
                    );
                })}
            </GridWrap>
            <ListWrap>
                <Title>오늘의 룩</Title>
                <List>
                    {men.map((m) => {
                        return (
                            <ListItem>
                                <ListImage src={m.img} />
                            </ListItem>
                        );
                    })}
                </List>
            </ListWrap>
        </Con>
    );
};
export default Home;
