interface StudentCardProps {
  name: string;
  major: string;
  graduationYear: number;
}

function StudentCard({ name, major, graduationYear }: StudentCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Major: {major}</p>
      <p>Graduation Year: {graduationYear}</p>
    </div>
  );
}

export default StudentCard;
