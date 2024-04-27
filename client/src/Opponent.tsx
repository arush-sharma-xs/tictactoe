function Opponent({ id, name }) {
  return (
    <div id={id} className="flex flex-col items-center justify-center gap-4">
      <img
        src="/avatar.png"
        width="100"
        height="100"
        alt="OpponentImage"
        className="rounded-full "
      />
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3>( Opponent )</h3>
    </div>
  );
}

export default Opponent;
