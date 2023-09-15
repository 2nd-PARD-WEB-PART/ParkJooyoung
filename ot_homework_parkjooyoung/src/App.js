import logo from './logo.svg';
import me from './assets/jyp.jpg';
import background from './assets/paper.jpg';
import './App.css';

function App() {

  // 인트로 문구
  let intro = "Allo!"

  return (
    // 전체 통합 블럭
    <div className="App">

      {/* 인트로 블럭*/}
      <div className='introBlock'>
        <p className="intro">
          <span className='letter1'>{intro[0]}</span>
          <span className='letter2'>{intro[1]}</span>
          <span className='letter3'>{intro[2]}</span>
          <span className='letter4'>{intro[3]}</span>
          <span className='letter5'>{intro[4]}</span>
        </p>
      </div>

      {/* 격자선 블럭*/}
      <div className='blackRec'>
      </div>
      <div className='blackRec2'>
      </div>
      <div className='blackRec3'>
      </div>
      <div className='blackRec4'>
      </div>

      {/* 환영 문구 블럭*/}
      <div className='greetingBlock'>
        <p className='greeting'>만나서 반가워요!</p>
      </div>
      <div className='greetingBlock2'>
        <p className='greeting2'>만나서 반가워요!</p>
      </div>

      {/* 사진 블럭*/}
      <div className='imgBlock'>
        <img src={me} className="profile" />
      </div>

      {/* 텍스트 블럭*/}
      <div className='textBlock'>
        <p className='name'> 안녕하세요! 저는 박주영이라고 해요.</p>
        <p className='like'> 저는 노는 것, 만드는 것, 그리고 고기 먹는걸 좋아해요.</p>
        <p className='goal'> 이번 학기 목표는 전공에 대한 자신감을 갖게 되는 거에요.</p>
        <p className='ntmy'> 잘 부탁해요!</p>
      </div>

    </div>
  );
}

export default App;
