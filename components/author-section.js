import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faSnapchatGhost,
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FormattedIcon = (icon, link, title) => {
  return (
    <div className="mr-6">
      <a href={link} title={title}>
        <FontAwesomeIcon icon={icon} className="w-5 h-5 inline" />
      </a>
    </div>
  );
};

export default function AuthorSection({
  contributor,
  contributor_site,
  contributor_snapchat,
  contributor_instagram,
  contributor_twitter,
  contributor_youtube,
  contributor_facebook,
  contributor_linkedin,
}) {
  return (
    <div className="max-w-2xl mx-auto text-gray-600 flex sm:flex-row flex-col">
      {contributor && contributor_site ? (
        <div className="my-2 mr-6">
          <a
            className="underline"
            href={contributor_site}
            title={`Link to ${contributor}'s website`}
          >
            {`Contributed by ${contributor}`}{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 inline" />
          </a>
        </div>
      ) : (
        <div>{`Contributed by ${contributor}`}</div>
      )}
      <div className="flex flex-row my-2 mb-4">
        {contributor_snapchat
          ? FormattedIcon(
              faSnapchatGhost,
              contributor_snapchat,
              `Link to ${contributor}'s Snapchat`
            )
          : null}
        {contributor_instagram
          ? FormattedIcon(
              faInstagram,
              contributor_instagram,
              `Link to ${contributor}'s Instagram`
            )
          : null}
        {contributor_facebook
          ? FormattedIcon(
              faFacebookF,
              contributor_facebook,
              `Link to ${contributor}'s Facebook`
            )
          : null}
        {contributor_twitter
          ? FormattedIcon(
              faTwitter,
              contributor_twitter,
              `Link to ${contributor}'s Twitter`
            )
          : null}
        {contributor_youtube
          ? FormattedIcon(
              faYoutube,
              contributor_youtube,
              `Link to ${contributor}'s YouTube`
            )
          : null}
        {contributor_linkedin
          ? FormattedIcon(
              faLinkedin,
              contributor_linkedin,
              `Link to ${contributor}'s LinkedIn`
            )
          : null}
      </div>
    </div>
  );
}
