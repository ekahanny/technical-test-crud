/* eslint-disable react/prop-types */
export const ShowData = (props) => {
  const { contactName, phoneNumber, contactEmail } = props;
  return (
    <div>
      <div className="flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          className="w-10 h-10 mr-3 rounded-full"
          alt="icon"
        />
        <p className="font-semibold ml-1 text-white">{contactName}</p>
      </div>
      <div className="flex flex-wrap items-center space-x-1 ml-14 -mt-4">
        <p className="text-sm text-white">{phoneNumber}</p>
        <p className="text-white mt-1">•</p>
        <p className="text-sm text-white">{contactEmail}</p>
      </div>
    </div>
  );
};
