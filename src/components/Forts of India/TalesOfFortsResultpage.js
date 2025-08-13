import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../api";
import "../../App.css";
import SwrilDivider from "../SwrilDivider";

const VideoSkeletonLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        height: "600px",
        position: "relative",
        backgroundColor: "#2a2a2a",
        animation: "pulse 1.5s infinite",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          backgroundColor: "#3a3a3a",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

function TalesOfFortsResultpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setLoading(true);
        if (!location.state?.videoTitle) {
          // If no state is present (e.g., after refresh), redirect to main page
          navigate("/talesofforts");
          return;
        }

        const response = await Api.getTalesOfFortsByTitle(
          location.state.videoTitle
        );
        console.log("Raw API Response:", response);

        if (
          response?.rows?.search_results &&
          response.rows.search_results.length > 0
        ) {
          const videoData = response.rows.search_results.find(
            (video) =>
              video.title.toLowerCase() ===
              location.state.videoTitle.toLowerCase()
          );

          if (videoData?.field_forts_videos_streaming_lin) {
            console.log("Video data:", videoData);
            setVideoUrl(videoData.field_forts_videos_streaming_lin);
            setVideoTitle(videoData.title);
          } else {
            setError("Video URL not found");
          }
        } else {
          setError("No videos found");
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
        console.error("Error details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [location.state, navigate]);

  return (
    <>
      <Container className="archive-header">
        <Row>
          <Col>
            {videoTitle && <h2 className="mt-3">{videoTitle}</h2>}
            <SwrilDivider />
          </Col>
        </Row>
      </Container>

      <Container fluid className="txtile-ali-bg" style={{ padding: "20px 0" }}>
        <Container className="txtile-ali-banner-container">
          {loading ? (
            <VideoSkeletonLoader />
          ) : videoUrl ? (
            <div
              style={{
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto",
                height: "600px",
                position: "relative",
              }}
            >
              <Player
                className="txtile-ali-nissarali-txt-player"
                playsInline
                src={videoUrl}
                fluid={false}
                width="100%"
                height="100%"
              >
                <BigPlayButton position="center" />
                <LoadingSpinner />
                <ControlBar autoHide={false} />
              </Player>
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#fff",
              }}
            >
              {error || "Loading video..."}
            </div>
          )}
        </Container>
      </Container>
    </>
  );
}

export default TalesOfFortsResultpage;
