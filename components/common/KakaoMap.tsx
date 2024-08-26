"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { Spinner } from "./Loading";

const KakaoMap = () => {
  const [loading] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY!,
  });

  if (loading)
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );

  return (
    <Map
      center={{ lat: 37.360131, lng: 126.931029 }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: 37.360131, lng: 126.931029 }} />
    </Map>
  );
};

export default KakaoMap;
