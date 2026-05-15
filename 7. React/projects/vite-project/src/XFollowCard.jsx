export function XFollowCard({ name, username, isFollowing }) {
  // Para tambien cambiar la imagen del avatar dependiendo de si el usuario es seguido o no, se puede usar una variable para almacenar la URL de la imagen

  const avatarUrl = `https://unaavatar.com/${username}`
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={avatarUrl} alt={`Avatar de ${name}`} />
        <div className="tw-followCard-data">
          <strong className="tw-followCard-name">{name}</strong>
          <span className="tw-followCard-username">@{username}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}
