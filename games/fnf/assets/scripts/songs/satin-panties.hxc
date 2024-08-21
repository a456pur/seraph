import flixel.FlxG;
import flixel.FlxSprite;
import flixel.math.FlxBasePoint;
import flixel.tweens.FlxEase;
import flixel.tweens.FlxTween;
import flixel.util.FlxTimer;
import funkin.audio.FunkinSound;
import funkin.Conductor;
import funkin.graphics.adobeanimate.FlxAtlasSprite;
import funkin.graphics.FunkinSprite;
import funkin.modding.base.ScriptedFlxAtlasSprite;
import funkin.Paths;
import funkin.play.cutscene.CutsceneType;
import funkin.play.cutscene.VideoCutscene;
import funkin.play.GameOverSubState;
import funkin.play.PlayState;
import funkin.play.PlayStatePlaylist;
import funkin.play.song.Song;
import funkin.play.stage.StageProp;
import funkin.save.Save;


class SatinPantiesSong extends Song
{
	function new()
	{
		super('satin-panties');
	}

	public override function isSongNew(currentDifficulty:String):Bool{
		if(currentDifficulty == 'erect' || currentDifficulty == 'nightmare'){
		  if(Save.instance.hasBeatenSong(this.id, ['erect', 'nightmare']) == false) return true;
		}else{
			return false;
		}
	}
}
