import MatchItem from "../MatchItem/MatchItem";

function MatchHistory({ result }) {
   // console.log(result.matchIDs);
   return (
      <div className="matchHistory">
         {result.matchIDs ? (
            <div>
               {result.matchIDs.map((match, index) => {
                  return <MatchItem key={index} matchID={match}></MatchItem>;
               })}
            </div>
         ) : null}
      </div>
   );
}

export default MatchHistory;
