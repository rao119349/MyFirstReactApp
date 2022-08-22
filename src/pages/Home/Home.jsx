import Card from "./Card";
import Sdata from "./Sdata";

function Home() {
  return (
    <>
    <h1>Welcome to the HomePage !!nghgfdfdfdfd</h1>
    <p>Here is your Favourite Netflix Series, Click Watch Now to Enjoy.</p>
    <div className="row justify-content-center listings">
    <Card imgsrc={Sdata[0].imagesrc} title={Sdata[0].stitle} cardsummary={Sdata[0].summary} cardlink={Sdata[0].link} />
      <Card imgsrc={Sdata[1].imagesrc} title={Sdata[1].stitle} cardsummary={Sdata[1].summary} cardlink={Sdata[1].link} />
      <Card imgsrc={Sdata[2].imagesrc} title={Sdata[2].stitle} cardsummary={Sdata[2].summary} cardlink={Sdata[2].link} />
      <Card imgsrc={Sdata[3].imagesrc} title={Sdata[3].stitle} cardsummary={Sdata[3].summary} cardlink={Sdata[3].link} />
      <Card imgsrc={Sdata[4].imagesrc} title={Sdata[4].stitle} cardsummary={Sdata[4].summary} cardlink={Sdata[4].link} />
      <Card imgsrc={Sdata[5].imagesrc} title={Sdata[5].stitle} cardsummary={Sdata[5].summary} cardlink={Sdata[5].link} />
      <Card imgsrc={Sdata[6].imagesrc} title={Sdata[6].stitle} cardsummary={Sdata[6].summary} cardlink={Sdata[6].link} />
      <Card imgsrc={Sdata[7].imagesrc} title={Sdata[7].stitle} cardsummary={Sdata[7].summary} cardlink={Sdata[7].link} />
      </div>
    </>
  )
}

export default Home