import ComponentWrapper from '../wrapper/ComponentWrapper';
import BlogPreviewCard from '../blog-preview-card/BlogPreviewCard';
import previewCards from '../../mocks/preview-cards';
import GlobalStyle from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <ComponentWrapper>
          <BlogPreviewCard content={previewCards[0]} />
        </ComponentWrapper>
      </main>
    </>
  );
}

export default App;
