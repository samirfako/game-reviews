import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ReviewDetails = () => {
  // we called it id because we named it in App component path="/details/:id"
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/reviews/' + id
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error 🛑☹🛑</p>;
  }

  console.log(data);

  return (
    <div className="review-card">
      <div className="rating">{data.data.attributes.rating}</div>
      <h2>{data.data.attributes.title}</h2>
      <small>${data.data.attributes.price}</small>
      <img src={data.data.attributes.imageUrl} alt="games" />
      <p>{data.data.attributes.body}</p>
    </div>
  );
};

export default ReviewDetails;
