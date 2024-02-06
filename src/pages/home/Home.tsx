import BarchartBox from '../../components/barchartBox/BarchartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'
import Chartbox from '../../components/chartbox/Chartbox'
import PiechartBox from '../../components/piechartBox/PiechartBox'
import TopBox from '../../components/topBox/TopBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"><TopBox /></div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box4"><PiechartBox/></div>
      <div className="box box5"><Chartbox {...chartBoxConversion} /></div>
      <div className="box box6"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarchartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarchartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home