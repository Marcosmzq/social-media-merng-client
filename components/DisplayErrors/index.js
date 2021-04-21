const DisplayErrors = ({ errors }) => {
  return (
    <div className="my-3 p-2 border border-rose rounded-lg sm:w-3/6">
      <p className="text-center text-2xl text-rose font-bold font-title">
        Some errors have occurred.
      </p>
      <ul className="list-disc list-inside">
        {Object.values(errors).map((value) => (
          <li key={value} className="text-warning font-title font-normal">
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DisplayErrors;
