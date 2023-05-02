import { useState, useEffect } from "react";
import { setCookie, getCookie } from "../lib/cookies";

export default function YoutubeEmbed({ videoId }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(getCookie("youtube-consent") === "true");
  }, []);

  const getThumbnail = (id) => {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const activateVideo = () => {
    setMounted(true);
    setCookie("youtube-consent", "true", 365);
  };

  return (
    <div
      className="video"
      style={{ backgroundImage: `url(${getThumbnail(videoId)})` }}
    >
      {mounted && (
        <iframe
          className="responsive-iframe"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        />
      )}
      {!mounted && (
        <form className="video__notice">
          <p className="text-gray-700">
            We've embedded content from YouTube here. As YouTube may collect
            personal data and track your viewing behaviour, we'll only load the
            video after you consent to their use of cookies and similar
            technologies as described in their{" "}
            <a href="https://www.youtube.com/t/privacy" className="underline">
              privacy policy
            </a>
            .
          </p>
          <button
            className="m-2 rounded-lg bg-gray-700 p-2 text-white"
            onClick={activateVideo}
          >
            Allow content from YouTube
          </button>
        </form>
      )}
    </div>
  );
}
