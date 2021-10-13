import React from 'react'

function EmbdedPlayer(props) {
    const { classTitle, videoLink } = props
    return (
        <>
            <h2 className="text-xl mb-4 font-bold text-center text-white">{classTitle}</h2>
            <div style={{ "padding": "56.25% 0 0 0", "position": "relative" }}>
                <iframe src={videoLink} style={{ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen>
                    </iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js">

                </script>
        </>
    )
}

export default EmbdedPlayer
