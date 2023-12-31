import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import { Item, Wrapper, Section } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <Section>
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <Wrapper  key={id}>
              <Item>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>"{content}"</p>
              </Item>
            </Wrapper>
          ))}
      </>
    )}
    {!reviews.length && <p>There are no reviews for this film.</p>}
  </Section>
  );
};

export default Reviews;