import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const Homepage = () => {
  // const { loading, error, data } = useQuery(REVIEWS);

  // fetching all of the reviews we stored on strapi
  const { loading, error, data } = useFetch(
    'http://localhost:1337/api/reviews'
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error ☹</p>;
  }
  console.log(data);

  return (
    <div>
      {data.data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>
          <small>${review.attributes.price}</small>
          <img
            src={review.attributes.imageUrl}
            className="images"
            alt="games"
          />
          <p>{review.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
