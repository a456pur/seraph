import funkin.play.character.SparrowCharacter;
import funkin.play.character.CharacterType;
import funkin.play.PlayState;

class TankmanCharacter extends SparrowCharacter {
	function new() {
		super('tankman');
	}

	function onNoteHit(event:HitNoteScriptEvent)
	{
		super.onNoteHit(event);

		if (!event.note.noteData.getMustHitNote() && characterType == CharacterType.DAD) {
			// Override the hit note animation.
			switch(event.note.kind) {
				case "ugh":
					holdTimer = 0;
					this.playAnimation('ugh', true, true);
					return;
				case "hehPrettyGood":
					holdTimer = 0;
					this.playAnimation('hehPrettyGood', true, true);
					return;
			}
		}
	}
}
