import styled from 'styled-components';
import variables from '../../common/variables';

const Article = styled.article`
  min-width: 327px;
  max-width: 384px;
  padding: ${({ theme }) => theme.spacing200};
  line-height: ${({ theme }) => theme.lineHeight};
  color: ${({ theme }) => theme.color.gray950};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray950};
  border-radius: 20px;
  box-shadow: 8px 8px #000000;
`;

const BlogImage = styled.figure`
  display: flex;
  width: 100%;
  height: 200px;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing200};
`;

const Img = styled.img.attrs(({ alt }) => ({
  alt: alt,
}))`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing200};
`;

const Category = styled.span`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing150};
  padding: ${({ theme }) => `${theme.spacing50} ${theme.spacing150}`};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  background-color: ${({ theme }) => theme.color.yellow};

  @media (${variables.desctop}) {
    font-size: ${({ theme }) => theme.fontSize.textPreset3};
  }
`;

const PublishDate = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing150};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (min-width: 384px) {
    font-size: ${({ theme }) => theme.fontSize.textPreset3};
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing150};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};

  @media (${variables.desctop}) {
    font-size: ${({ theme }) => theme.fontSize.textPreset1};
  }

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.color.gray500};

  @media (${variables.desctop}) {
    font-size: ${({ theme }) => theme.fontSize.textPreset2};
  }
`;

const Autor = styled.p`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing150};
  margin: 0;
`;

const UserPic = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textPreset3};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`;

export {
  Article,
  BlogImage,
  Img,
  Content,
  Category,
  PublishDate,
  Title,
  Description,
  Autor,
  UserPic,
  Name,
};
