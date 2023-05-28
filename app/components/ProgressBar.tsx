type Progress = {
  progress: number;
};

export default function ProgressBar({ progress }: Progress) {
  const progressBar = {
    width: progress.toString() + '%',
  };
  return (
    <div className="h-[9px] w-full rounded-theme bg-progressbackground">
      <div
        className={`z-10 h-[9px] rounded-theme bg-primary`}
        style={progressBar}
      />
    </div>
  );
}
