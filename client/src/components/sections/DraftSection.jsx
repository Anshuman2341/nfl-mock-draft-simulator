import DraftHeader from "../DraftHeader";
import PlayerList from "../PlayerList";
import DraftHistory from "../DraftHistory";
import EndDraft from "../EndDraft";
import "./DraftSection.css"

export default function DraftSection({
  state,
  userTeamId,
  aiPicks,
  onPick,
  onReset,
  onFullReset
}) {

  const currentTeam = state.teams[state.pick - 1];

  return (
    <section className="draft-section" id="draft-section">

      <DraftHeader
        round={state.round}
        pick={state.pick}
        team={currentTeam.name}
        needs={currentTeam.needs}
        onReset={onReset}
        onSelectTeam={onFullReset}
        aiPicks={aiPicks}
      />

      {state.draftOver ? (

        <EndDraft />

      ) : (

        <PlayerList
          players={state.availablePlayers}
          onPick={onPick}
          disabled={currentTeam.id !== userTeamId}
        />

      )}

      <DraftHistory history={state.history} />

    </section>
  );
}
