import React from 'react'
import CardContentVideo from '../cardContentVideo/CardContentVideo';
import CardContentPodcast from '../cardContentPodcast/CardContentPodcast';
import CardContentDocumnts from '../cardContentDocuments/CardContentDocuments';

const renderCard = (post) => {

  console.log(post);

  switch (post.contentType) {
    case 'video':
      return <CardContentVideo image={post.image} title={post.title} content={post.content} />;
    case 'podcast':
      return <CardContentPodcast image={post.image} title={post.title} content={post.content} />;
    case 'documento':
      return <CardContentDocumnts image={post.image} title={post.title} content={post.content} />;
    default:
      return null;
  }
};

const CardsByContent = ({ posts }) => {

  return (
    <div>{posts.map(renderCard)}</div>
  )
}

export default CardsByContent