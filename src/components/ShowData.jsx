/* eslint-disable react/prop-types */
export const ShowData = (props) => {
  const { nama, nim, prodi, fakultas, universitas } = props;
  return (
    <div>
      <div className="w-full bg-slate-200 p-5 rounded-md border border-cyan-950 mt-5">
        <div className="flex flex-row">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
            className="w-10 h-10 mr-3 rounded-full"
            alt="icon"
          />
          <p className="font-semibold">{nama}</p>
        </div>
        <div className="flex flex-row items-center space-x-1 ml-12 -mt-4">
          <p className="text-sm">{nim}</p>
          <p>•</p>
          <p className="text-sm">{prodi}</p>
          <p className="text-sm">{fakultas}</p>
          <p className="text-sm">{universitas}</p>
        </div>
      </div>
    </div>
  );
};
