import { useParams } from 'react-router-dom';

export function CoursePlayer() {
  const { courseId } = useParams();

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Course Player</h1>
      <p>Playing course with ID: {courseId}</p>
      <p>Playing course with ID: {courseId}</p>
      <p>Playing course with ID: {courseId}</p>
      <p>Playing course with ID: {courseId}</p>
      <p>Playing course with ID: {courseId}</p>
      {/* TODO: Add actual course content and player components */}
    </div>
  );
}
