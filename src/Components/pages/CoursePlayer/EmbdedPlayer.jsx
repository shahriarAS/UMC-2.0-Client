import React from "react";

function EmbdedPlayer(props) {
  const { classTitle, videoLink } = props;
  return (
    <>
      <h2 className="text-xl mb-4 font-bold text-center text-white">
        {classTitle}
      </h2>
      {videoLink && videoLink.includes("facebook") ? (
        <div className="text-white text-center">
<iframe src={`https://www.facebook.com/plugins/video.php?href=${videoLink}&width=500&show_text=false&height=280&appId`} width="100%" height="400" style={{"border":"none", "overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
          <p className="mt-4">
            Original video class will be added very soon. Till then please watch
            from facebook. You have to be logged in, on the same browser to watch the class.
          </p>
          <a className="block mt-4 underline" target="_blank" href={videoLink}>Facebook Video Link</a>
        </div>
      ) : (
        <>
          <div style={{ padding: "66.67% 0 0 0", position: "relative" }}>
            <iframe
              src={`https://player.vimeo.com/video/${videoLink}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=4d8c901d47`}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </>
      )}
    </>
  );
}

export default EmbdedPlayer;
