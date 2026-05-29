const AnalyticsCards = ({ analytics }) => {

  return (

    <div className="grid grid-cols-2 gap-6 mb-8">

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold mb-4">
          Dataset Information
        </h2>

        <p><strong>Rows:</strong> {analytics.rows}</p>

        <p><strong>Columns:</strong> {analytics.columns}</p>

        <p><strong>Missing Values:</strong> {analytics.missing_values}</p>

      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold mb-4">
          Sales KPIs
        </h2>

        <p>
          <strong>Total Sales:</strong>
          {" "}
          {analytics.total_sales ?? "N/A"}
        </p>

        <p>
          <strong>Average Sales:</strong>
          {" "}
          {analytics.average_sales ?? "N/A"}
        </p>

      </div>

    </div>

  );
};

export default AnalyticsCards;
