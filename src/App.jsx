import Card from './components/Card';

import ConferenceImg from './images/conference.png';
import Img_01 from './images/bg-01.png';
import Img_02 from './images/bg-02.png';
import Img_03 from './images/bg-03.png';

import App from './style';

import './App.css';

const Root = () => {
  return (
    <App className='App'>
      <div className='banner' />
      <div className='container'>
        <Card
          title='台大新聞所三十週年研討會'
          date='11/12（五）'
          link='https://ntujour.github.io/forum30/'
          img={ConferenceImg}
        ></Card>
        <section>
          <div className='left'>
            <Card title='' date='' link='' img={Img_01}></Card>
          </div>
          <div className='right'>
            <Card title='' date='' link='' img={Img_02}></Card>
            <Card title='' date='' link='' img={Img_03}></Card>
          </div>
        </section>
      </div>
    </App>
  );
};

export default Root;
