import {
  Database,
  DollarSign,
  Activity,
  CheckCircle
} from "lucide-react";

const AnalyticsCards = ({ analytics }) => {

  const cards = [

    {
      title: "Dataset Records",
      value: analytics.rows,
      subtitle: `${analytics.columns} Columns`,
      icon: Database,
      gradient: "from-blue-600 to-cyan-500"
    },

    {
      title: "Total Sales",
      value:
        analytics.total_sales
          ? analytics.total_sales.toLocaleString()
          : "N/A",
      subtitle:
        analytics.average_sales
          ? `Avg ${analytics.average_sales.toFixed(2)}`
          : "No Sales Data",
      icon: DollarSign,
      gradient: "from-emerald-600 to-green-500"
    },

    {
      title: "Missing Values",
      value: analytics.missing_values,
      subtitle: "Data Quality Check",
      icon: Activity,
      gradient: "from-orange-500 to-amber-500"
    },

    {
      title: "Analytics Status",
      value: "Ready",
      subtitle: "AI Insights Available",
      icon: CheckCircle,
      gradient: "from-violet-600 to-purple-500"
    }

  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">

      {

        cards.map((card, index) => {

          const Icon = card.icon;

          return (

            <div
              key={index}
              className={`
                bg-gradient-to-br
                ${card.gradient}
                text-white
                rounded-3xl
                shadow-xl
                p-5
                sm:p-7
                hover:scale-[1.02]
                transition-all
                duration-300
              `}
            >

              <div className="flex justify-between items-start mb-4 sm:mb-6">

                <div className="min-w-0">

                  <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wider">

                    {card.title}

                  </p>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 break-words">

                    {card.value}

                  </h2>

                </div>

                <div className="bg-white/20 p-2 sm:p-3 rounded-2xl flex-shrink-0">

                  <Icon size={24} />

                </div>

              </div>

              <p className="text-white/90 text-sm sm:text-base font-medium">

                {card.subtitle}

              </p>

            </div>

          );

        })

      }

    </div>

  );

};

export default AnalyticsCards;