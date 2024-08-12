import {
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
} from './styles';
import cardImage from '../../assets/illustration-article.svg';

function BlogPreviewCard({ content }) {
  return (
    <Article>
      <BlogImage>
        <Img src={cardImage} alt="Blog image" />
      </BlogImage>
      <Content>
        <Category>{content.category}</Category>
        <PublishDate>Published {content.publishDate}</PublishDate>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
      </Content>
      <Autor>
        <UserPic src={content.autor.userPic} alt="avatar" />
        <Name>{content.autor.name}</Name>
      </Autor>
    </Article>
  );
}

export default BlogPreviewCard;
