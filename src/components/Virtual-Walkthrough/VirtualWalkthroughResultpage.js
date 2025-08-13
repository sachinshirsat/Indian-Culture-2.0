import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Player, BigPlayButton, LoadingSpinner, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import Arcicon from "../../image/glimpsimg.png";
import Api from "../api";

function VirtualWalkthroughResultpage() {
  const location = useLocation();
  const itemData = location.state?.item;

  const [details, setDetails] = useState({
    title: itemData?.title || "Loading...",
    videoUrl: null,
  });

  useEffect(() => {
    if (itemData?.title) {
      console.log("Searching for title:", itemData.title);
      
      // First get all virtual walkthroughs to see what's available
      Api.getVirtualWalkthrough()
        .then((allData) => {
          console.log("All Virtual Walkthroughs:", allData);
          // If we have data, try to find the matching record
          if (allData && allData.rows?.search_results?.length > 0) {
            const record = allData.rows.search_results.find(
              (item) => item.title === itemData.title
            );
            if (record) {
              console.log("Found record in all walkthroughs:", record);
              setDetails({
                title: record.title || "Title not available",
                videoUrl: record.field_ic_video_streaming_url || null,
              });
            } else {
              // If no exact match, try searching
              console.log("No exact match found, trying search...");
              Api.searchVirtualWalkthrough(itemData.title)
                .then((searchData) => {
                  console.log("Search API Response:", searchData);
                  if (searchData && searchData.rows?.search_results?.length > 0) {
                    const record = searchData.rows.search_results[0];
                    console.log("Found record from search:", record);
                    if (record) {
                      setDetails({
                        title: record.title || "Title not available",
                        videoUrl: record.field_ic_video_streaming_url || null,
                      });
                    }
                  } else {
                    console.log("No results found in search");
                  }
                })
                .catch((error) => {
                  console.error("Error searching virtual walkthrough:", error);
                });
            }
          }
        })
        .catch((error) => {
          console.error("Error fetching virtual walkthroughs:", error);
        });
    }
  }, [itemData]);

  if (!itemData?.title) {
    return <p>No data available for this record.</p>;
  }

  const customStyles = {
    playerWrapper: {
      width: "100%",
      maxWidth: "800px",
      height: "auto",
      margin: "0 auto",
      padding: "0 15px",
    },
    videoBackground: {
      background: "#000000",
      minHeight: "auto",
      padding: "20px 0",
    },
    videoContainer: {
      width: "100%",
      position: "relative",
      paddingTop: "56.25%", // 16:9 Aspect Ratio
    },
    videoPlayer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    titleContainer: {
      marginTop: "20px",
      padding: "0 15px",
      marginBottom: "20px",
    },
    titleText: {
      fontSize: "clamp(1.2rem, 4vw, 2rem)",
      wordBreak: "break-word",
      marginBottom: "20px",
    },
    icon: {
      width: "clamp(30px, 5vw, 50px)",
      height: "auto",
      marginRight: "10px",
    }
  };

  return (
    <>
      <Container fluid>
        <Row style={customStyles.titleContainer}>
          <Col xs={12} className="txtile-weav-result-title arcreicon">
            <img
              src={Arcicon}
              className="txtile-weav-result-icon"
              alt="Archive Icon"
              style={customStyles.icon}
            />
            <div className="txtile-weav-result-vertical"></div>
            <span style={customStyles.titleText}>{details.title}</span>
          </Col>
        </Row>
      </Container>

      <Container fluid style={customStyles.videoBackground} className="txtile-ali-bg">
        <Container className="txtile-ali-banner-container">
          <div style={customStyles.playerWrapper}>
            {details.videoUrl ? (
              <div style={customStyles.videoContainer}>
                <div style={customStyles.videoPlayer}>
                  <Player
                    className="txtile-ali-nissarali-txt-player"
                    playsInline
                    src={details.videoUrl}
                    fluid={true}
                    aspectRatio="16:9"
                  >
                    <BigPlayButton position="center" />
                    <LoadingSpinner />
                    <ControlBar autoHide={true} className="my-class" />
                  </Player>
                </div>
              </div>
            ) : (
              <p>No video file available for this record.</p>
            )}
          </div>
        </Container>
      </Container>
    </>
  );
}

export default VirtualWalkthroughResultpage;
