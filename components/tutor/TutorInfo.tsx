import React from "react";
import InfoLabel from "../common/InfoLabel";

const TutorInfo = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4 mt-5 md:mt-0">
      <InfoLabel title="강사 소개" />
      <div className="my-16 px-8">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold tracking-wider">최성수</h3>
          <a
            href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=14363698&qvt=0&query=%EC%B5%9C%EC%84%B1%EC%88%98%20%EB%93%9C%EB%9F%BC%EC%97%B0%EC%A3%BC%EC%9E%90"
            target="_blank"
            className="flex"
          >
            <span className="text-lightgray relative font-semibold">
              프로필 자세히보기
              <img
                src="/img/profile_arrow.png"
                alt="arrow-right"
                className="absolute right-[-24px] top-1 h-3"
              />
            </span>
          </a>
        </div>
        <div className="my-8 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="relative aspect-[4/5] md:w-[400px]">
            <img
              src="/img/tutor_img.jpeg"
              alt="tutor_profile_img"
              className="rounded object-cover w-full h-full"
              sizes="(max-width: 768px) 240px 300px, 400px 500px"
            />
          </div>
          <ol className="text-lg list-disc space-y-1">
            <li>서울예술대학교 실용음악과 드럼전공</li>
            <li>현)수 드럼학원 원장</li>
            <li>전) SOO's Drum Village 대표</li>
            <li>전) Soulmix studio 대표</li>
            <li>2002년 스틱과의 첫만남</li>
            <li>2006년 충청남도 음악경연대회 대상</li>
            <li>2008년 충청남도 음악경연대회 대상</li>
            <li>2012년 인순이, 김장훈, SG워너비 등등 전국투어 콘서트 세션</li>
            <li>2014년 1군사령부 군악대전역</li>
            <li>2015년 악기 실기교육자격증획득</li>
            <li>2017년 SOO's Drum Village 운영</li>
            <li>2020년 30일 완성 나도드럼친다 초보편 교재출간</li>
            <li>2021년 30일 완성 나도드럼친다 중급-마스터편 총 4편 교재출간</li>
            <li>2022년 드럼초보자라면 꼭 해야만 하는연습 교재 출간</li>
            <li>2023년 세계여행</li>
            <li>2024년 수 드럼학원 오픈</li>
          </ol>
        </div>
      </div>
      <p className="md:text-center text-lg md:text-xl font-semibold px-8 break-keep leading-loose">
        인순이, 김장훈, SG워너비, 박혜영, 박화요비 등등 다수 가수 세션 및 콘서트
        연주 참여 <br className="block md:hidden" />
        <br className="hidden md:block" /> 천년동안도, 빵, 올댓재즈, 에반스 등등
        다수 클럽연주 및 뮤지컬 연주 참여
      </p>
    </section>
  );
};

export default TutorInfo;
