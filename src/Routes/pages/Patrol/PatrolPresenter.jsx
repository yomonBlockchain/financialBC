import { useState } from "react";
import PatrolList from "../../../Components/PatrolList";
import Map from "../../../Components/Map";
import "../../../css/patrol.css";

const PatrolPresenter = (props) => {
  const { patrolList, hide, setHide } = props;
  // const { patrolList, hide, setHide, pointList, sectorList } = props;
  const [search, setSearch] = useState("");
  const [choiceGuard, setChoiceGuard] = useState();
  const [choiceInfo, setChoiceInfo] = useState();
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  const handleGuardChoice = (e) => {
    setChoiceGuard(e.currentTarget.id);
    let info = patrolList.filter(
      (item) => item.id.toString() === e.currentTarget.id
    );
    setChoiceInfo(info[0]);
  };
  /* Render */
  return (
    <div className="patrol-container">
      <PatrolList
        patrolList={patrolList}
        hide={hide}
        setHide={setHide}
        search={search}
        setSearch={setSearch}
        handleGuardChoice={handleGuardChoice}
        choiceGuard={choiceGuard}
      />
      <Map search={search} choiceInfo={choiceInfo} />
    </div>
  );
};

export default PatrolPresenter;

PatrolPresenter.defaultProps = {
  patrolList: [
    {
      id: 1,
      group_name: "지구방위대",
      member_num: 4,
      token: 10,
      start_point: "부산대학교 운죽정",
      start_lat: "35.231250702861075",
      start_lon: "129.08169497523016",
      end_point: "부산대역 1호선 3번출구",
      end_lat: "35.23030178773131 ",
      end_lon: "129.08917193402638",
      keeper_name: "Oh KyeongWoo",
      belong: "금정구 경찰서",
      phone: "01029149302",
      points: [
        {
          x: "129.08180160831003",
          y: "35.23123309810749",
        },
        {
          x: "129.08187724266267",
          y: "35.231506646994326",
        },
        {
          x: "129.0828938654728",
          y: "35.231212047192045",
        },
        {
          x: "129.08417237150505 ",
          y: "35.231602306403936",
        },
        {
          x: "129.0865018163121 ",
          y: "35.231215216456924",
        },
        {
          x: "129.0865442469537 ",
          y: "35.23072786507965 ",
        },
        {
          x: "129.08915254950273 ",
          y: "35.230295363829825  ",
        },
      ],
      options: {
        strokeColor: "#5932EA",
        strokeOpacity: 1,
        strokeStyle: "",
        strokeWeight: 3,
      },
    },
    {
      id: 2,
      group_name: "ISGuard",
      member_num: 4,
      token: 10,
      start_point: "톤쇼우",
      start_lat: "35.23041325047265",
      start_lon: "129.08427648716608",
      end_point: "금정산 한신아파트",
      end_lat: "35.22787570866251",
      end_lon: "129.07960993109413",
      keeper_name: "Oh Simon",
      belong: "금정구 경찰서",
      phone: "01029149302",
      points: [
        {
          x: "129.08428934527942",
          y: "35.230379235925696",
        },
        {
          x: "129.08407423898092",
          y: "35.23034238952515",
        },
        {
          x: "129.08377855211032",
          y: "35.229302150252046",
        },
        {
          x: "129.08308917976464",
          y: "35.22961590516629",
        },
        {
          x: "129.0825126915583",
          y: "35.229405047269445",
        },
        {
          x: "129.0813246268471",
          y: "35.22975891454402",
        },
        {
          x: "129.08093969331287",
          y: "35.22887790376959",
        },
        {
          x: "129.08106725055745",
          y: "35.22849722742376",
        },
        {
          x: "129.08081174003675",
          y: "35.2281681965832",
        },
        {
          x: "129.08007833903324",
          y: "35.22847818581056",
        },
        {
          x: "129.07975064290235",
          y: "35.227902577528525",
        },
        {
          x: "129.07951593166456",
          y: "35.22785028970788",
        },
      ],
      options: {
        strokeColor: "#5932EA",
        strokeOpacity: 1,
        strokeStyle: "",
        strokeWeight: 3,
      },
    },
    {
      id: 3,
      group_name: "ISLAB",
      member_num: 4,
      token: 10,
      start_point: "장전역 GS25",
      start_lat: "35.238113356086394 ",
      start_lon: "129.087293633757",
      end_point: "부산대역 1호선 1번출구",
      end_lat: "35.22921852039054",
      end_lon: "129.08928143463288",
      keeper_name: "Kim YoHan",
      belong: "금정구 경찰서",
      phone: "01029149302",
      points: [
        {
          x: "129.087293633757",
          y: "35.238113356086394",
        },
        {
          x: "129.08710394879353",
          y: "35.2366049550836",
        },
        {
          x: "129.08651259728651",
          y: "35.23667372944166",
        },
        {
          x: "129.08479904688542",
          y: "35.23023302958828",
        },
        {
          x: "129.08675531873234 ",
          y: "35.22985687043929",
        },
        {
          x: "129.08648211295807",
          y: "35.22926682445788",
        },
        {
          x: "129.08846346096695",
          y: "35.22869195328958",
        },
        {
          x: "129.08858718640033",
          y: "35.22891285167148",
        },
        {
          x: "129.08868872996084",
          y: "35.22891109884501",
        },
        {
          x: "129.0887418555035",
          y: "35.22894848053101",
        },
        {
          x: "129.08883845370332",
          y: "35.229289248934144",
        },
        {
          x: "129.08926800125278",
          y: "35.229230016687175",
        },
      ],
      options: {
        strokeColor: "#5932EA",
        strokeOpacity: 1,
        strokeStyle: "",
        strokeWeight: 3,
      },
    },
    {
      id: 4,
      group_name: "지구방위대",
      member_num: 4,
      token: 10,
      start_point: "부산대학교-운죽정",
      start_lat: "위도",
      start_lon: "경도",
      end_point: "부산대역1호선",
      end_lat: "위도",
      end_lon: "경도",
      keeper_name: "Kim YoHan",
      belong: "금정구 경찰서",
      phone: "01029149302",
      points: [
        {
          x: "129.08180160831003",
          y: "35.23123309810749",
        },
        {
          x: "129.08187724266267",
          y: "35.231506646994326",
        },
        {
          x: "129.0828938654728",
          y: "35.231212047192045",
        },
        {
          x: "129.08417237150505 ",
          y: "35.231602306403936",
        },
        {
          x: "129.0865018163121 ",
          y: "35.231215216456924",
        },
        {
          x: "129.0865442469537 ",
          y: "35.23072786507965 ",
        },
        {
          x: "129.08915254950273 ",
          y: "35.230295363829825  ",
        },
      ],
      options: {
        strokeColor: "#5932EA",
        strokeOpacity: 1,
        strokeStyle: "",
        strokeWeight: 3,
      },
    },
  ],
};
