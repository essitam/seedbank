import React, { Component } from "react";

const thingyList = [
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2F404_glitch2.gif?v=1575674309400",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcompost.gif?v=1575674555450",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcube-6.gif?v=1576263083138",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Forange2.png?v=1576262909483",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbluebowl.png?v=1576262181694",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ftinybluechair.gif?v=1575674399069",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpingpong.gif?v=1575674576527",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcube-0.gif?v=1575525366325",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ftape-1.gif?v=1575674580797",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fsponges.png?v=1576262906759",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fsponge-4.gif?v=1576262911080",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Ffold.gif?v=1576263090670",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbubble.gif?v=1576450998619",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fcoral.gif?v=1576451020104",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbrush.gif?v=1576451033127",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Forange-patch.gif?v=1576451066974",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpillow-chair.gif?v=1576451094677",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Frainbowplank-stone.gif?v=1576451133263",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fhanging-sponge.gif?v=1576451264087",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fblueblinds.gif?v=1576451253142",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fhangingbowl.gif?v=1576451332866",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpatch-quick.gif?v=1576451408966",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Frock-pile.gif?v=1576451567035",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fpinata-fingers.gif?v=1576451591679",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fchairupside.gif?v=1576451967179",
  "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fplob-1.gif?v=1576452116034"
];

//const boundImages = ["https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-1.gif?v=1576614642137", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-2.gif?v=1576614644341", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-3.gif?v=1576614647485", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-4.gif?v=1576614650930", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-5.gif?v=1576614655396", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-6.gif?v=1576614657211", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-7.gif?v=1576614661548", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-8.gif?v=1576614664942", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-9.gif?v=1576614668971", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-10.gif?v=1576614672614", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-11.gif?v=1576614675914", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-12.gif?v=1576614684834", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-13.gif?v=1576614686762", "https://cdn.glitch.com/bc831c14-9a50-45a0-88b2-b8e94aa5b4f0%2Fbound-14.gif?v=1576614690245"]

var linkList = [
  "ecologyofvidz.html",
  "mondayfiles.html",
  "oz-glob.html",
  "pink.html",
  "spincycle.html",
  "swerve.html"
];

//this is currently being used in the PATCH component and grabbing states from app

export class ArraySources extends Component {
  componentDidMount() {
    this.props.updateArray(linkList);
    switch (this.props.arraytype) {
      case "links":
        //console.log("link hit");
        this.props.updateArray(linkList);
        break;
      case "thingies":
        //console.log("thingy hit");
        this.props.updateArray(thingyList);
        break;
      default:
        //console.log(props);
        this.props.updateArray("no value");
        break;
    }
  }

  render() {
    console.log(this.props.arraytype);

    return <div></div>;
  }
}

export default ArraySources;

///return to later. refactoring for functional component

// export default function ArraySources(props) {
//   //   const checking = arraytype => {
//   //     switch (arraytype) {
//   //       case "links":
//   //         //console.log("link hit");
//   //         props.updateArray(linkList);
//   //         break;
//   //       case "thingies":
//   //         //console.log("thingy hit");
//   //         props.updateArray(thingyList);
//   //         break;
//   //       default:
//   //         //console.log(props);
//   //         props.updateArray("no value");
//   //         break;
//   //     }
//   //   };

//   return <div></div>;
// }