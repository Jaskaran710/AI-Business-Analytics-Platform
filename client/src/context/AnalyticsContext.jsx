import {
  createContext,
  useState,
  useEffect
} from "react";

export const AnalyticsContext =
  createContext();

export const AnalyticsProvider = ({
  children
}) => {

  const [analytics, setAnalytics] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "analytics"
        );

      return saved
        ? JSON.parse(saved)
        : null;

    });

  useEffect(() => {

    localStorage.setItem(
      "analytics",
      JSON.stringify(analytics)
    );

  }, [analytics]);

  return (

    <AnalyticsContext.Provider
      value={{
        analytics,
        setAnalytics
      }}
    >

      {children}

    </AnalyticsContext.Provider>

  );

};
