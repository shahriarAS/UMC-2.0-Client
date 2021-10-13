import React from 'react'

function EmbdedPlayer(props) {
    const { classTitle, videoLink } = props
    return (
        <>
            <h2 className="text-xl mb-4 font-bold text-center text-white">{classTitle}</h2>
            <div style={{ "padding": "66.67% 0 0 0", "position": "relative" }}>
                <iframe src={`https://player.vimeo.com/video/${videoLink}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=4d8c901d47`} style={{ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" }} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>

                </iframe>
            </div><script src="https://player.vimeo.com/api/player.js"></script>
        </>
    )
}

export default EmbdedPlayer
