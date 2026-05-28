const KpiCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className={`text-3xl font-bold mt-4 ${color}`}>
        {value}
      </p>

    </div>
  );
};

export default KpiCard;
