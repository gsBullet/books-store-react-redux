import { Vortex } from "react-loader-spinner";

const Error = ({ message }) => {
  return (
    <div className="w-full  h-50 max-w-7xl mx-auto p-2 text-red-700  col-span-12">
      <div className="text-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
      <h6 className="text-center text-xl border">{message} </h6>
    </div>
  );
};

export default Error;
