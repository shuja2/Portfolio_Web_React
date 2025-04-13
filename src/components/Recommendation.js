import React, { useState, useEffect } from "react";
import RecommendationForm from "./RecommendationForm";

const Recommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  const hardcodedRecommendations = [
    {
      id: "hardcoded-1",
      recommendation:
        "Shuja is a highly motivated and results-oriented developer. His ability to quickly grasp complex technical challenges is impressive. He is a valuable asset to any team.",
      name: "Lorem Ipsum",
    },
    {
      id: "hardcoded-2",
      recommendation:
        "I was thoroughly impressed by Shuja's problem-solving skills and attention to detail. His contributions were instrumental to the project's success. He is a rising star in the field.",
      name: "Lorem Ipsum",
    },
    {
      id: "hardcoded-3",
      recommendation:
        "Shuja's enthusiasm for web development is contagious. He brings a fresh perspective to every project and is always willing to go the extra mile. I would not hesitate to recommend him.",
      name: "Lorem Ipsum",
    },
  ];

  useEffect(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem("recommendations") || "[]"
      );
      setRecommendations([...hardcodedRecommendations, ...stored]);
    } catch (err) {
      console.error("Error loading recommendations:", err);
      setRecommendations(hardcodedRecommendations);
    }
  }, []);

  const addRecommendation = (newRecommendation) => {
    setRecommendations((prev) => [newRecommendation, ...prev]);
  };

  const deleteRecommendation = (id) => {
    if (id.toString().startsWith("hardcoded")) return;
    const updated = recommendations.filter((rec) => rec.id !== id);
    setRecommendations(updated);
    localStorage.setItem(
      "recommendations",
      JSON.stringify(
        updated.filter((rec) => !rec.id.toString().startsWith("hardcoded"))
      )
    );
  };

  return (
    <div id="recommendations">
      <style jsx>{`
        #recommendations {
          margin: 0 20px;
          padding: 20px 0;
        }

        #recommendations h2 {
          color: #7600bc;
          font-size: 36px;
          margin-bottom: 20px;
          text-align: center;
        }

        .recommendations-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .recommendation {
          position: relative;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 30px;
          font-size: 16px;
          line-height: 1.5;
          text-align: justify;
          min-height: 120px;
          transition: transform 0.2s, box-shadow 0.2s;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-style: italic;
          {/* flex-grow: 1;
          flex-shrink: 1;
          max-width: 300px; */}
        }

        .recommendation:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        }

        .quote {
          color: #7600bc;
          font-size: 24px;
          font-weight: bold;
        }

        .recommender-name {
          color: #333;
          font-weight: 600;
          margin-top: 10px;
          font-size: 14px;
        }

        .delete-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff4d4d;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          cursor: pointer;
          font-size: 14px;
          line-height: 24px;
          text-align: center;
          display: none;
        }

        .recommendation:hover .delete-btn {
          display: block;
        }

        .recommendation.hardcoded:hover .delete-btn {
          display: none;
        }

        @media (max-width: 600px) {
          .recommendations-list {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 600px) {
            #recommendations h2 {
                font-size: calc(1rem + 3vw);

            }
        }
      `}</style>

      <h2>Recommendations</h2>
      <div className="recommendations-list" id="recommendations-list">
        {recommendations.length === 0 ? (
          <p>No recommendations yet. Be the first to add one!</p>
        ) : (
          recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`recommendation ${
                rec.id.toString().startsWith("hardcoded") ? "hardcoded" : ""
              }`}
            >
              <span className="quote">“</span>
              {rec.recommendation}
              <span className="quote">”</span>
              {rec.name && <p className="recommender-name">- {rec.name}</p>}
              {!rec.id.toString().startsWith("hardcoded") && (
                <button
                  className="delete-btn"
                  onClick={() => deleteRecommendation(rec.id)}
                  title="Delete recommendation"
                  aria-label="Delete recommendation"
                >
                  ×
                </button>
              )}
            </div>
          ))
        )}
      </div>
      <RecommendationForm addRecommendation={addRecommendation} />
    </div>
  );
};

export default Recommendation;
