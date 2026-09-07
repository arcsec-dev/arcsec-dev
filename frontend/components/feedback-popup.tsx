"use client";

import { useState } from "react";

export function FeedbackPopup() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const activeRating = hoverRating || rating;

  const getStarColor = () => {
    switch (activeRating) {
      case 1:
        return "#ef4444"; // RED
      case 2:
        return "#f97316"; // ORANGE
      case 3:
        return "#f59e0b"; // AMBER
      case 4:
        return "#eab308"; // YELLOW
      case 5:
        return "#facc15"; // BRIGHT YELLOW
      default:
        return "#525252"; // UNSELECTED
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-[360px] max-w-full border border-line-mute bg-surface-container hard-shadow-ink">
          <div className="px-5 py-5 text-center">
            <h3 className="font-technical-sm text-sm font-bold uppercase tracking-wider text-on-surface">
              Thank You
            </h3>

            <p className="mt-2 font-body-md text-xs text-on-surface-variant">
              Your feedback helps us improve ArcSec.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="w-[360px] max-w-full border border-line-mute bg-surface-container hard-shadow-ink">

        {/* Header */}
        <div className="border-b border-line-mute px-5 py-4 text-center">
          <h3 className="font-technical-sm text-sm font-bold uppercase tracking-wider text-on-surface">
            Rate Your Experience
          </h3>

          <p className="mt-1 font-body-md text-xs text-on-surface-variant">
            How was your ArcSec experience?
          </p>
        </div>

        {/* Content */}
        <div className="px-5 py-5">

          {/* Stars */}
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => {
              const isSelected = star <= activeRating;

              return (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-4xl leading-none transition-transform duration-150 hover:scale-125"
                  style={{
                    color: isSelected
                      ? getStarColor()
                      : "#525252",
                    transform: isSelected
                      ? "scale(1.1)"
                      : "scale(1)",
                  }}
                  aria-label={`${star} star${star > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              );
            })}
          </div>

          {/* Rating label */}
          <div className="mt-3 text-center">
            {activeRating === 0 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant">
                Select a rating
              </span>
            )}

            {activeRating === 1 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-red-500">
                Very poor
              </span>
            )}

            {activeRating === 2 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-orange-500">
                Poor
              </span>
            )}

            {activeRating === 3 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-500">
                Average
              </span>
            )}

            {activeRating === 4 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-yellow-400">
                Good
              </span>
            )}

            {activeRating === 5 && (
              <span className="font-mono text-[11px] uppercase tracking-wider text-yellow-300">
                Excellent
              </span>
            )}
          </div>

          {/* Review */}
          <div className="mt-5">
            <label
              htmlFor="feedback-review"
              className="mb-2 block font-technical-sm text-xs font-semibold uppercase tracking-wider text-on-surface"
            >
              Tell us more
              <span className="ml-1 font-normal text-on-surface-variant">
                (optional)
              </span>
            </label>

            <textarea
              id="feedback-review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="What did you think about ArcSec?"
              rows={3}
              className="w-full resize-none border border-line-mute bg-surface-container-low px-3 py-2 font-body-md text-xs text-on-surface outline-none placeholder:text-on-surface-variant focus:border-signal"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            disabled={rating === 0}
            onClick={() => {
              if (rating === 0) return;

              console.log({
                rating,
                review,
              });

              setSubmitted(true);
            }}
            className="mt-4 w-full bg-signal px-4 py-3 font-technical-sm text-xs font-bold uppercase tracking-wider text-paper transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}