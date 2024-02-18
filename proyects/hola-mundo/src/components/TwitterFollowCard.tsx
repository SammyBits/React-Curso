import "../css/card.css";
import { useState } from "react";

interface TwitterFollowCardProps {
  children: React.ReactNode;
  Username?: string;
  IsFollowing?: boolean;
}

export const TwitterFollowCard = (props: TwitterFollowCardProps) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(props.IsFollowing || false);

  const username: string = props.Username || "unknown";
  const imageSrc: string = `https://unavatar.io/github/${username}`;
  const text: string = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName: string = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <article className="tw-followCard">
      <header className="ts-followCard-header">
        <img
          src={imageSrc}
          alt="Avatar de Sammy"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{props.children}</strong>
          <span className="tw-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Deja de seguir</span>
        </button>
      </aside>
    </article>
  );
};
