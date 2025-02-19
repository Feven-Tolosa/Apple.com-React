import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function AppleYoutube() {
  const [YoutubeVideo, setYoutubeVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCOJtUBpP79qzrkIDW3wXd7JZY8u6XjXmk"
    )
      .then((respons) => {
        return respons.json();
      })
      .then((data) => {
        const YoutubeVideosData = data.items;
        setYoutubeVideo(YoutubeVideosData);
      });
  }, []);
  console.log(YoutubeVideo);
  return (
    <div className="abebe">
      <div className="abebe">
        <div className="abebe">
          <div className="abebe">
            <div className="abebe">
              <h1>YOUTUBE VIDEO!</h1>
              <div className="abebe">
                {YoutubeVideo?.map((singleVideo) => {
                  let vidId = singleVideo.id.videoId;
                  let vidLink = `https//www.youtube.com/watch?v=${vidId}`;
                  let videoWrapper = (
                    <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                      <div>
                        <a href={vidLink} targat="_blank">
                          <img src={singleVideo.snippet.thumbnails.high.url} />
                        </a>
                      </div>
                      <div className="vidTittle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="vidDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  );
                  return videoWrapper;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppleYoutube;
