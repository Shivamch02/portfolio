export const TagButton = ({ language }: { language: string }) => {
  return (
    <div>
      <button
        type="button"
        className="px-1.5 py-0.5 text-xs text-center text-white bg-slate-700 rounded-md hover:bg-slate-600 font-bold"
      >
        {language}
      </button>
    </div>
  );
};
