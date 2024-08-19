import ConsultationInfo from "@/components/main/ConsultationInfo";
import FacilityInfo from "@/components/main/FacilityInfo";
import LearningMotivation from "@/components/main/LearningMotivation";
import LessonInfo from "@/components/main/LessonInfo";

export default function Home() {
  return (
    <main className="bg-white h-full ">
      <ConsultationInfo />
      <LearningMotivation />
      <LessonInfo />
      <FacilityInfo />
    </main>
  );
}
