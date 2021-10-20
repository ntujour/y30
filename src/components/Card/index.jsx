import { Wrapper, Image, Info, Title, Date } from './style';

const Card = ({ title, date, img, link }) => (
  <Wrapper>
    {link === '' ? (
      <Image src={img} alt='' />
    ) : (
      <a href={link} target='_blank' rel='noreferrer'>
        <Image src={img} alt='' />
      </a>
    )}
    <Info>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Info>
  </Wrapper>
);

export default Card;
