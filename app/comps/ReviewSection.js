import { StarIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export function ReviewSection() {
  const [reviews, setReviews] = useState([
    { text: 'Great product! Highly recommend.', rating: 5 },
    { text: 'Good value for the money.', rating: 4 },
    { text: 'Satisfied with the purchase.', rating: 4 },
    { text: 'Decent quality, but could be better.', rating: 3 },
  ]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddReview = () => {
    if (newReview.trim() && rating > 0) {
      setReviews([...reviews, { text: newReview, rating }]);
      setNewReview('');
      setRating(0);
    }
  };

  return (
    <div className="p-6 w-2/3 mx-auto  my-5 glass rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg shadow-md flex flex-col items-start"
            >
              <div className="flex items-center mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>

      <div className="my-6">
        <h3 className="text-2xl font-bold mb-4 p-5">
          Make A Review If you Are Client
        </h3>
        <textarea
          className="textarea textarea-bordered w-full mb-2"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
        ></textarea>

        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`h-6 w-6 cursor-pointer ${
                index < rating ? 'text-yellow-500' : 'text-gray-400'
              }`}
              onClick={() => setRating(index + 1)}
            />
          ))}
        </div>

        <button className="btn btn-primary mt-4" onClick={handleAddReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
}
