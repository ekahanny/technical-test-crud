/* eslint-disable react/prop-types */
export const ShowData = (props) => {
  const { contactName, phoneNumber, contactEmail } = props;
  return (
    <div>
      <div className="flex flex-row">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
          className="w-12 lg:w-20 h-12 lg:h-20 mr-3 rounded-full mt-5 lg:mt-8"
          alt="icon"
        />

        <div className="flex flex-col flex-wrap lg:space-y-3 space-x-0 ml-1.5 lg:ml-5 mt-4">
          <p className="font-semibold lg:text-2xl text-white">
            {contactName}
          </p>
          <p className="text-sm lg:text-xl text-white -ml-10">{phoneNumber}</p>
          <p className="text-sm lg:text-xl text-white">{contactEmail}</p>
        </div>
      </div>
    </div>
  );
};
