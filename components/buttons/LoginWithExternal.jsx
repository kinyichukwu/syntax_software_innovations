export const LoginWithExternal = ({ img = "", text = "" }) => {
  return (
    <div className="w-full h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex cursor-pointer">
      <img src={img} alt="" className="w-6 h-6 " />
      <div className="text-stone-900 text-sm font-normal  leading-none">{text}</div>
    </div>
  );
};
