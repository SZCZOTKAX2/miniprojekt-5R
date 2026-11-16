function Card({ build }) {
  return (
    <article className="card">
      <h3>{build.title}</h3>
      <p>{build.description}</p>
      <p>
        <strong>Atrybuty:</strong> {build.attributes}
      </p>
      <p>
        <strong>Cyberware:</strong> {build.cyberware}
      </p>
      <p>
        <strong>Broń:</strong> {build.weapons}
      </p>
    </article>
  );
}

export default Card;
