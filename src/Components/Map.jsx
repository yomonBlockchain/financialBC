import { useEffect, useRef, useState } from "react";
import startImg from "../assets/images/placeholder.png";
import endImg from "../assets/images/checkered-flag.png";
import policeIcon from "../assets/images/police-badge.png";
import "../css/map.css";

const Map = (props) => {
  /* Router */
  /* State */
  var overlays = [];
  // const { search, choiceInfo } = props;
  const { search, pointList, sectorList, choiceInfo } = props;
  const ref = useRef(null);
  const { kakao } = window;
  const [coordinate, setCoordinate] = useState({ lat: 0, lon: 0 });
  console.log(coordinate);
  /* Hooks */
  /* Functions */
  const overlayRender = (map) => {
    const { points, group_name, end_point, start_point } = choiceInfo;
    var content = `
    <div class="overlaybox">
      <div class="group-name">그룹명: <h3>${group_name}</h3></div>
      <div class="start-point">
        <div class="start-icon">
          <span
            class="material-symbols-outlined color"
          >
            flag
          </span>
        </div>
        <h3>${start_point}</h3>
      </div>
      <div class="end-point">
        <div class="end-icon">
          <span
            class="material-symbols-outlined end-color"
            style={{ color: "#5932EA" }}
          >
            location_on
          </span>
        </div>
        <h3>${end_point}</h3>
      </div>
    </div>`;

    // 커스텀 오버레이가 표시될 위치입니다
    var position = new kakao.maps.LatLng(points[3].y, points[3].x);

    // 커스텀 오버레이를 생성합니다
    var customOverlay = new kakao.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0.3,
      yAnchor: 0.91,
    });

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
  };
  /**
   * 이동 경로 렌더링
   * @param points
   * @param map
   * @param options
   */
  function drawPolyline(points, map, options) {
    var len = points.length,
      i = 0;

    for (; i < len; i++) {
      var path = pointsToPath(points);
      var style = options;
      var polyline = new kakao.maps.Polyline({
        map: map,
        path: path,
        strokeColor: style.strokeColor,
        strokeOpacity: style.strokeOpacity,
        strokeStyle: style.strokeStyle,
        strokeWeight: style.strokeWeight,
      });

      overlays.push(polyline);
    }
  }
  function pointsToPath(points) {
    var len = points.length,
      path = [],
      i = 0;

    for (; i < len; i++) {
      var latlng = new kakao.maps.LatLng(points[i].y, points[i].x);
      path.push(latlng);
    }

    return path;
  }

  /**
   * 순찰그륩 출발지 마커
   * @param map
   */
  const startPointView = (map) => {
    const { start_lat, start_lon } = choiceInfo;
    var startSrc = startImg, // 출발 마커이미지의 주소입니다
      startSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
      startOption = {
        offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
      };
    var startImage = new kakao.maps.MarkerImage(
      startSrc,
      startSize,
      startOption
    );
    var startPosition = new kakao.maps.LatLng(start_lat, start_lon);
    var marker = new kakao.maps.Marker({
      map: map, // 출발 마커가 지도 위에 표시되도록 설정합니다
      position: startPosition,
      draggable: false, // 출발 마커가 드래그 가능하도록 설정합니다
      image: startImage, // 출발 마커이미지를 설정합니다
    });
    marker.setMap(map);
  };
  /**
   * 순찰경로 도착지 마커
   * @param map
   */
  const endPointView = (map) => {
    const { end_lat, end_lon } = choiceInfo;
    var endSrc = endImg, // 출발 마커이미지의 주소입니다
      endSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
      endOption = {
        offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
      };
    var endImage = new kakao.maps.MarkerImage(endSrc, endSize, endOption);
    var endPosition = new kakao.maps.LatLng(end_lat, end_lon);
    var marker = new kakao.maps.Marker({
      map: map, // 출발 마커가 지도 위에 표시되도록 설정합니다
      position: endPosition,
      draggable: false, // 출발 마커가 드래그 가능하도록 설정합니다
      image: endImage, // 출발 마커이미지를 설정합니다
    });
    marker.setMap(map);
  };
  /**
   * 마커 포인트 렌더링
   * @param map
   */
  const markerListView = (map) => {
    pointList.data.map((item) => {
      const { point_lat, point_lon, point_type } = item;
      // 경찰서, 지구대 마커
      if (point_type === "POLICE") {
        var policeSrc = policeIcon, // 출발 마커이미지의 주소입니다
          policeSize = new kakao.maps.Size(50, 45), // 출발 마커이미지의 크기입니다
          policeOption = {
            offset: new kakao.maps.Point(15, 43), // 출발 마커이미지에서 마커의 좌표에 일치시킬 좌표를 설정합니다 (기본값은 이미지의 가운데 아래입니다)
          };

        // 출발 마커 이미지를 생성합니다
        var startImage = new kakao.maps.MarkerImage(
          policeSrc,
          policeSize,
          policeOption
        );
        var policePosition = new kakao.maps.LatLng(point_lat, point_lon);
        var policeMarker = new kakao.maps.Marker({
          map: map, // 출발 마커가 지도 위에 표시되도록 설정합니다
          position: policePosition,
          draggable: true, // 출발 마커가 드래그 가능하도록 설정합니다
          image: startImage, // 출발 마커이미지를 설정합니다
        });
        policeMarker.setMap(map);
      } else {
        // 일반 마커 생성
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(point_lat, point_lon),
        });
        marker.setMap(map);
      }

      return 0;
    });
  };
  const circleInfo = (map, data) => {
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(data.sector_lat, data.sector_lon), // 원의 중심좌표
      radius: data.sector_boundary, // 미터 단위의 원의 반지름
      strokeWeight: 2, // 선의 두께
      strokeColor:
        data.sector_grade === 3
          ? "#F00"
          : data.sector_grade === 2
          ? "#FB944A"
          : "#FFEA2F", // 선의 색깔
      strokeOpacity: 1, // 선의 불투명도
      strokeStyle: "dashed", // 선의 스타일
      fillColor:
        data.sector_grade === 3
          ? "#F00"
          : data.sector_grade === 2
          ? "#FB944A"
          : "#FFEA2F", // 채우기 색깔
      fillOpacity: 0.4, // 채우기 불투명도
    });
    circle.setMap(map);
  };
  const sectorListView = (map) => {
    sectorList.data.map((item) => {
      circleInfo(map, item);
      return 0;
    });
  };
  /* Render */
  useEffect(() => {
    const container = ref.current;
    const options = {
      center: new kakao.maps.LatLng(35.23087270514219, 129.08219052502676),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    /**
     * 마우스 클릭 좌표 가져오기
     */
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;
      let latitude = latlng.getLat();
      let longitude = latlng.getLng();
      setCoordinate({ lat: latitude, lon: longitude });

      var markerPosition = new kakao.maps.LatLng(latitude, longitude);
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
      marker.setDraggable(true);
    });
    var ps = new kakao.maps.services.Places();

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 키워드로 장소를 검색합니다
    ps.keywordSearch(search, placesSearchCB);

    /**
     * 키워드 검색 완료시 호출
     * 검색된 장소가 위치면 위치 기준 범위 설정
     * 검색결과 마커 표기
     * 검색된 장소가 위치가 아니면 주소로 검색
     * @param data
     * @param status
     * @param pagination
     */
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();
        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      } else {
        // 주소로 좌표를 검색
        geocoder.addressSearch(search, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(result);
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });
            marker.setMap(map);
            map.setCenter(coords);
          }
        });
      }
    }
    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
      marker.setMap(map);
    }

    if (pointList && sectorList) {
      markerListView(map);
      sectorListView(map);
    }
    if (choiceInfo) {
      startPointView(map);
      endPointView(map);
      drawPolyline(choiceInfo.points, map, choiceInfo.options);
      overlayRender(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, choiceInfo]);

  return <div id="map" ref={ref} style={{ width: "100%", height: "100%" }} />;
};

export default Map;
