import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-bottom: 24px;

  @media screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  margin: 0 auto;
  display: inline-block;
  box-shadow: 8px 10px 30px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 425px) {
    width: 180px;
    height: 180px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  text-align: left;
  margin: 15px 0;

`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-right: 20px;
  line-height: 32px;
`;

export const Date = styled.div`
  font-size: 24px;
  line-height: 32px;
`;