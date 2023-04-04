import PomodoroTimer from "../timer";
import workspace from '../../public/workspace copy 2.png';

export default function Index() {
  return (
    <div style={{ background: '#FFFDF6',overflowY: "hidden", fontFamily: 'PlantinMTLightItalic', lineHeight: "1.4" }}>
      <img style={{ marginLeft: 150, maxWidth: 800, width: 800, height: '100%'}} src={workspace} alt={'work-space'} ></img>
      <PomodoroTimer />
    </div>
  );
}
