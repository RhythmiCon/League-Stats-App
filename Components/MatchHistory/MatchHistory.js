import MatchItem from "../MatchItem/MatchItem";

function MatchHistory({ matchIDs }) {
  return (
    <div className="matchHistory">
      {matchIDs ? (
        <div>
          {matchIDs.map((match, index) => {
            return <MatchItem key={index} matchID={match}></MatchItem>;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default MatchHistory;
