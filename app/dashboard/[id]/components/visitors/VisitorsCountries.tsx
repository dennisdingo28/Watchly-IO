import ReactCountryFlag from "react-country-flag";

export const VisitorsCountries = () => {
  return (
    <div className="border-r-2 border-b-2 border-purple p-1 rounded-br-sm h-full">
      <div className="flex items-center gap-2.5 py-2.5">
        <ReactCountryFlag className="text-2xl" svg countryCode={"RO"} />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <ReactCountryFlag className="text-2xl" svg countryCode={"US"} />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <ReactCountryFlag className="text-2xl" svg countryCode={"AE"} />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <ReactCountryFlag className="text-2xl" svg countryCode={"BG"} />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
      <div className="flex items-center gap-2.5 py-2.5">
        <ReactCountryFlag className="text-2xl" svg countryCode={"FR"} />
        <span className="text-xs text-darkGray">230 visitors avg.</span>
      </div>
    </div>
  );
};
