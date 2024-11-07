interface PropsLike {
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonsBar({ like, setLike }: PropsLike) {
  return (
    <div className="links-bar">
      <button type="button">Précédent</button>
      <button type="button">Suivant</button>
      <button type="button" onClick={() => setLike(!like)}>
        {like ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default ButtonsBar;
