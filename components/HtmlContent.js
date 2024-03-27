function HtmlContent({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default HtmlContent;
